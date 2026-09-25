import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const sampleNotices = [
  { id: "n1", category: "Tender", title: "Tender document for the Construction of Academic Block in the MITS-DU Campus", date: "2026-09-24", description: "Sealed tenders are invited for civil construction of modern academic block." },
  { id: "n2", category: "Recruitment", title: "Applications invited for appointment/engagement of Assistant Professor (on purely contract basis)", date: "2026-09-22", description: "Eligible candidates may apply online for teaching positions across various engineering departments." },
  { id: "n3", category: "Tender", title: "Enquiry for Quotation for the purchase of various laboratory items", date: "2026-09-20", description: "Quotations invited for lab equipment procurement for Electronics & Computer Engineering labs." },
  { id: "n4", category: "Events", title: "JRF (Junior Research Fellowship) under MPCST sponsored projects - June 2026", date: "2026-09-18", description: "Applications invited for Junior Research Fellow position under state funded project." },
  { id: "n5", category: "Admission", title: "Post-Doctoral-Fellowship Admission under Vishveshwarya Scheme (Session: 2026-27)", date: "2026-09-15", description: "Applications open for PDF program under Ministry of Electronics & IT." },
  { id: "n6", category: "Admission", title: "Ph.D. admission under Vishveshwarya Scheme (Session: 2026-27)", date: "2026-09-12", description: "Doctoral research admissions in Engineering, Science and Technology disciplines." },
  { id: "n7", category: "Academic", title: "Semester Registration Schedule for B.Tech & M.Tech Students (2026-27)", date: "2026-09-10", description: "All students must complete fee submission and course enrollment before deadline." },
  { id: "n8", category: "Examination", title: "End-Semester Examination Time-Table & Guidelines Announcement", date: "2026-09-08", description: "Admit cards and examination rules published on student portal." }
];

const noticeSchema = new mongoose.Schema({
  title: String,
  category: String,
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
  const { title, category, date, description } = req.body;
  if (!title || !date || !description) return res.status(400).json({ message: "All fields are required." });
  try {
    if (mongoose.connection.readyState === 1) {
      const doc = await Notice.create({ title, category: category || "Academic", date, description });
      return res.status(201).json({...doc.toObject(), id: doc._id.toString()});
    }
  } catch {}
  const notice = { id: Date.now().toString(), category: category || "Academic", title, date, description };
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
