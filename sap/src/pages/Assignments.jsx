import { useState } from "react";

const ASSIGNMENTS_DATA = [
  {
    id: 1,
    title: "React Router & State Management Lab Assignment",
    course: "Full Stack Development Lab (25243108)",
    dueDate: "Sep 27, 2026",
    status: "Pending",
    marks: "20 Marks",
    instructions: "Build a single page application with authentication context, protected routes, and interactive components."
  },
  {
    id: 2,
    title: "Convolutional Neural Networks Implementation",
    course: "AI & Machine Learning (25243109)",
    dueDate: "Sep 30, 2026",
    status: "Pending",
    marks: "30 Marks",
    instructions: "Train a CNN model on MNIST dataset using PyTorch/TensorFlow and submit the Jupyter notebook."
  },
  {
    id: 3,
    title: "SQL Query Optimization & Indexing",
    course: "Database Management Systems (25243105)",
    dueDate: "Sep 20, 2026",
    status: "Submitted",
    grade: "18/20 Marks",
    instructions: "Analyze query execution plans and create indexes for sample benchmark database."
  }
];

export default function Assignments() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [submissionText, setSubmissionText] = useState("");
  const [submittedList, setSubmittedList] = useState([]);

  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    if (!selectedAssignment) return;
    setSubmittedList([...submittedList, selectedAssignment.id]);
    setSelectedAssignment(null);
    setSubmissionText("");
    alert("Assignment submitted successfully!");
  };

  return (
    <div className="assignments-page">
      <div className="page-header">
        <div>
          <h1>Academic Assignments</h1>
          <p className="page-description">Track, complete, and submit your course assignments.</p>
        </div>
      </div>

      <div className="assignments-grid">
        {ASSIGNMENTS_DATA.map((asgn) => {
          const isSubmitted = asgn.status === "Submitted" || submittedList.includes(asgn.id);
          return (
            <div key={asgn.id} className="assignment-card">
              <div className="asgn-header">
                <span className="course-code">{asgn.course}</span>
                <span className={`status-pill ${isSubmitted ? "completed" : "pending"}`}>
                  {isSubmitted ? "Submitted" : "Pending"}
                </span>
              </div>

              <h3>{asgn.title}</h3>
              <p className="asgn-instructions">{asgn.instructions}</p>

              <div className="asgn-meta">
                <div>📅 <strong>Due:</strong> {asgn.dueDate}</div>
                <div>🎯 <strong>Weightage:</strong> {asgn.grade || asgn.marks}</div>
              </div>

              <div className="asgn-footer">
                {!isSubmitted ? (
                  <button className="btn btn-primary" onClick={() => setSelectedAssignment(asgn)}>
                    Submit Assignment
                  </button>
                ) : (
                  <span className="submitted-tag">✅ Submitted for Review</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Submission Modal */}
      {selectedAssignment && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>Submit: {selectedAssignment.title}</h3>
              <button className="close-btn" onClick={() => setSelectedAssignment(null)}>&times;</button>
            </div>
            <form onSubmit={handleSubmitAssignment} className="modal-body">
              <p className="text-muted" style={{ marginBottom: '15px' }}>
                Course: <strong>{selectedAssignment.course}</strong>
              </p>
              <div className="form-group">
                <label>Submission Comments / Project Repository URL:</label>
                <textarea
                  rows="5"
                  required
                  placeholder="Paste GitHub link, document link, or submission notes here..."
                  value={submissionText}
                  onChange={(e) => setSubmissionText(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
                <button type="button" className="btn btn-outline" onClick={() => setSelectedAssignment(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirm Submission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
