import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const sampleNotices = [
  { id: "n1", title: "Semester registration notice", date: "2026-09-20", description: "Students should complete the semester registration process within the announced schedule." },
  { id: "n2", title: "Training and placement update", date: "2026-09-15", description: "Placement and training activities are available through the career support cell." },
  { id: "n3", title: "Academic project submission", date: "2026-09-10", description: "Students should submit project work according to department instructions." }
];

const noticeSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String
}, { timestamps: true });

const Notice = mongoose.model("Notice", noticeSchema);

app.get("/api/health", (req, res) => res.json({ ok: true, message: "College API is running" }));

app.get("/api/notices", async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const docs = await Notice.find().sort({ createdAt: -1 }).lean();
      return res.json(docs.length ? docs.map(x => ({...x, id: x._id.toString()})) : sampleNotices);
    }
  } catch {}
  res.json(sampleNotices);
});

app.post("/api/notices", async (req, res) => {
  const { title, date, description } = req.body;
  if (!title || !date || !description) return res.status(400).json({ message: "All fields are required." });
  try {
    if (mongoose.connection.readyState === 1) {
      const doc = await Notice.create({ title, date, description });
      return res.status(201).json({...doc.toObject(), id: doc._id.toString()});
    }
  } catch {}
  const notice = { id: Date.now().toString(), title, date, description };
  sampleNotices.unshift(notice);
  res.status(201).json(notice);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`College API running on http://localhost:${PORT}`);
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected");
    } catch {
      console.log("MongoDB not connected; using sample/in-memory notices.");
    }
  }
});
