import { useState } from "react";
import QuizModal from "../components/QuizModal";

const QUIZZES_LIST = [
  {
    id: "quiz-1",
    title: "Full Stack Development Lab Section B",
    course: "25243108 - Full Stack Development Lab",
    date: "Sep 25, 2026",
    timing: "12:05 PM - 12:20 PM",
    duration: "15 mins",
    questionsCount: 5,
    marks: 5,
    status: "Active",
    badge: "Today"
  },
  {
    id: "quiz-2",
    title: "Artificial Intelligence Mid-Term Quiz",
    course: "25243109 - AI & Machine Learning",
    date: "Sep 28, 2026",
    timing: "10:00 AM - 10:30 AM",
    duration: "30 mins",
    questionsCount: 15,
    marks: 15,
    status: "Upcoming",
    badge: "In 3 days"
  },
  {
    id: "quiz-3",
    title: "Database Management Systems Quiz 1",
    course: "25243105 - DBMS",
    date: "Sep 15, 2026",
    timing: "02:00 PM - 02:20 PM",
    duration: "20 mins",
    questionsCount: 10,
    marks: 10,
    status: "Completed",
    score: "9/10"
  }
];

export default function Quizzes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="quizzes-page">
      <div className="page-header">
        <div>
          <h1>Subject Quizzes</h1>
          <p className="page-description">View, attempt, and review your academic quizzes.</p>
        </div>
      </div>

      <div className="quizzes-list">
        {QUIZZES_LIST.map((quiz) => (
          <div key={quiz.id} className={`quiz-card ${quiz.status.toLowerCase()}`}>
            <div className="quiz-card-header">
              <div>
                <span className="course-code">{quiz.course}</span>
                {quiz.badge && <span className="badge badge-amber" style={{ marginLeft: '8px' }}>{quiz.badge}</span>}
                <h3>{quiz.title}</h3>
              </div>
              <span className={`status-pill ${quiz.status.toLowerCase()}`}>{quiz.status}</span>
            </div>

            <div className="quiz-meta-grid">
              <div>📅 <strong>Date:</strong> {quiz.date}</div>
              <div>🕒 <strong>Time:</strong> {quiz.timing}</div>
              <div>⏳ <strong>Duration:</strong> {quiz.duration}</div>
              <div>📝 <strong>Questions:</strong> {quiz.questionsCount} Qs ({quiz.marks} Marks)</div>
            </div>

            <div className="quiz-card-footer">
              {quiz.status === "Active" ? (
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  Open Quiz &rarr;
                </button>
              ) : quiz.status === "Completed" ? (
                <div className="completed-info">
                  Score: <strong>{quiz.score}</strong> (Passed)
                </div>
              ) : (
                <button className="btn btn-outline" disabled>
                  Starts Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <QuizModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
