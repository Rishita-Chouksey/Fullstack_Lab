import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import QuizModal from "../components/QuizModal";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [showParentModal, setShowParentModal] = useState(false);

  const studentName = user?.name || "RISHITA CHOUKSEY";

  return (
    <div className="dashboard-page">
      {/* 1. Upcoming Quiz Alert Banner */}
      <div className="quiz-alert-card">
        <div className="alert-header">
          <div className="alert-title">
            <span className="icon">❓</span>
            <strong>UPCOMING QUIZ ALERT</strong>
            <span className="badge badge-purple-light">1 quiz in next 3 days</span>
          </div>
          <Link to="/quizzes" className="link-hover">View All (1) &rsaquo;</Link>
        </div>

        <div className="quiz-alert-body">
          <div className="quiz-info-main">
            <div className="quiz-tags">
              <span className="code-tag">25243108</span>
              <span className="course-name-tag">Full Stack Development Lab</span>
              <span className="badge badge-today">Today</span>
            </div>
            <h3 className="quiz-name">Full Stack Development Lab Section B</h3>
            <div className="quiz-time-details">
              <span>📅 Sep 25 - 12:05 PM – 12:20 PM</span>
              <span className="badge badge-amber">Deadline: Sep 25, 12:20 PM</span>
              <span className="text-muted">15 mins · 5 Qs · 5 Marks</span>
            </div>
          </div>

          <div className="quiz-alert-actions">
            <button className="btn btn-secondary-soft" onClick={() => navigate("/quizzes")}>
              Subject Quizzes
            </button>
            <button className="btn btn-primary-gradient" onClick={() => setIsQuizModalOpen(true)}>
              Open Quiz &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* 2. Academic Calendar Widget */}
      <div className="academic-calendar-card">
        <div className="card-header-row">
          <div className="header-title">
            <span className="icon">📅</span>
            <strong>ACADEMIC CALENDAR</strong>
            <span className="badge badge-indigo-light">2 events</span>
          </div>
          <a href="#calendar" className="link-hover" onClick={(e) => { e.preventDefault(); alert("Academic Calendar View"); }}>
            View All &rsaquo;
          </a>
        </div>

        <div className="calendar-events-list">
          <div className="calendar-event-item">
            <span className="badge badge-success">Current</span>
            <div className="event-details">
              <strong>Minor (Practical Courses)</strong>
              <p className="text-muted font-sm">📅 Sep 21 - Sep 25</p>
            </div>
          </div>

          <div className="calendar-event-item">
            <span className="badge badge-info">Upcoming</span>
            <div className="event-details">
              <strong>Notification of Attendance</strong>
              <p className="text-muted font-sm">📅 Oct 1 - Oct 1</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Welcome Banner & Quick Action Buttons */}
      <div className="welcome-banner-section">
        <div className="welcome-text-container">
          <h1 className="welcome-title">Welcome back, {studentName}!</h1>
          <p className="session-text">Current Session: July Dec 2026</p>
        </div>

        <div className="quick-action-buttons">
          <button className="quick-btn btn-purple" onClick={() => navigate("/quizzes")}>
            ❓ Quizzes <span className="btn-count">1</span>
          </button>
          <button className="quick-btn btn-danger" onClick={() => navigate("/timetable")}>
            📅 Class Schedule
          </button>
          <button className="quick-btn btn-info" onClick={() => setShowParentModal(true)}>
            🔗 Parent Access
          </button>
        </div>
      </div>

      {/* 4. Stat Cards Grid */}
      <div className="stats-grid-4">
        {/* Total Courses */}
        <div className="ams-stat-card">
          <div className="stat-icon icon-blue">
            📖
          </div>
          <div className="stat-content">
            <span className="stat-label">Total Courses</span>
            <strong className="stat-value">9</strong>
          </div>
        </div>

        {/* Total Classes */}
        <div className="ams-stat-card">
          <div className="stat-icon icon-purple">
            📋
          </div>
          <div className="stat-content">
            <span className="stat-label">Total Classes</span>
            <strong className="stat-value">121</strong>
          </div>
        </div>

        {/* Classes Attended */}
        <div className="ams-stat-card">
          <div className="stat-icon icon-green">
            ✅
          </div>
          <div className="stat-content">
            <span className="stat-label">Classes Attended</span>
            <strong className="stat-value">87</strong>
          </div>
        </div>

        {/* Overall Percentage */}
        <div className="ams-stat-card stat-card-warning">
          <div className="stat-icon icon-red">
            📉
          </div>
          <div className="stat-content">
            <span className="stat-label">Overall Percentage</span>
            <div className="stat-value-row">
              <strong className="stat-value">71.9%</strong>
              <span className="badge badge-risk">At Risk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Quiz Launcher Modal */}
      <QuizModal isOpen={isQuizModalOpen} onClose={() => setIsQuizModalOpen(false)} />

      {/* Parent Access Modal */}
      {showParentModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>Parent Access Credentials</h3>
              <button className="close-btn" onClick={() => setShowParentModal(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <p>Parents can log in to view real-time academic records and attendance updates using:</p>
              <div className="info-box">
                <p><strong>Parent Login ID:</strong> P_{user?.enrollNo || "0901CS231089"}</p>
                <p><strong>Temporary Passcode:</strong> MITS@2026</p>
                <p><strong>Portal Link:</strong> https://ams.mitsgwalior.in/parent</p>
              </div>
              <div style={{ textAlign: "right", marginTop: "20px" }}>
                <button className="btn btn-primary" onClick={() => setShowParentModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;