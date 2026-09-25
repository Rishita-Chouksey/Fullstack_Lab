import { useState, useEffect } from "react";

const QUIZ_DATA = {
  title: "Full Stack Development Lab Section B",
  subject: "Full Stack Development Lab (25243108)",
  timeLimitMinutes: 15,
  totalQuestions: 5,
  totalMarks: 5,
  questions: [
    {
      id: 1,
      question: "Which hook is used to handle side effects in React?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      answer: 1
    },
    {
      id: 2,
      question: "What command is used to start the development server in a Vite project?",
      options: ["npm start", "npm run build", "npm run dev", "vite serve"],
      answer: 2
    },
    {
      id: 3,
      question: "Which component in React Router is used to define route paths?",
      options: ["<Route>", "<Router>", "<Switch>", "<Link>"],
      answer: 0
    },
    {
      id: 4,
      question: "What is the correct HTTP status code for 'Not Found'?",
      options: ["200", "400", "404", "500"],
      answer: 2
    },
    {
      id: 5,
      question: "In React, props are:",
      options: ["Mutable", "Read-only", "Global variables", "Functions only"],
      answer: 1
    }
  ]
};

export default function QuizModal({ isOpen, onClose }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(QUIZ_DATA.timeLimitMinutes * 60);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!isOpen || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, submitted]);

  if (!isOpen) return null;

  const handleOptionSelect = (qId, optionIdx) => {
    if (submitted) return;
    setSelectedAnswers({ ...selectedAnswers, [qId]: optionIdx });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    QUIZ_DATA.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="modal-overlay">
      <div className="quiz-modal">
        {/* Header */}
        <div className="quiz-header">
          <div>
            <span className="badge badge-purple">{QUIZ_DATA.subject}</span>
            <h2>{QUIZ_DATA.title}</h2>
          </div>
          {!submitted && (
            <div className="quiz-timer">
              ⏱️ Time Left: <strong>{formatTime(timeLeft)}</strong>
            </div>
          )}
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        {/* Content */}
        {!submitted ? (
          <div className="quiz-body">
            {QUIZ_DATA.questions.map((q, idx) => (
              <div key={q.id} className="quiz-question-card">
                <h4>Question {idx + 1} of {QUIZ_DATA.totalQuestions}: {q.question}</h4>
                <div className="options-list">
                  {q.options.map((opt, optIdx) => (
                    <label
                      key={optIdx}
                      className={`option-item ${
                        selectedAnswers[q.id] === optIdx ? "selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q_${q.id}`}
                        checked={selectedAnswers[q.id] === optIdx}
                        onChange={() => handleOptionSelect(q.id, optIdx)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="quiz-footer">
              <span className="text-muted">
                {Object.keys(selectedAnswers).length} of {QUIZ_DATA.totalQuestions} answered
              </span>
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length === 0}
              >
                Submit Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-result-card">
            <div className="result-icon">🎉</div>
            <h3>Quiz Submitted Successfully!</h3>
            <p className="score-text">Your Score: <strong>{score} / {QUIZ_DATA.totalMarks}</strong></p>
            <p className="percentage-text">
              Percentage: <strong>{((score / QUIZ_DATA.totalMarks) * 100).toFixed(0)}%</strong>
            </p>
            <div className="result-actions">
              <button className="btn btn-primary" onClick={onClose}>
                Return to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
