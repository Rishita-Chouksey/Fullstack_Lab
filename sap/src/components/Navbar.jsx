import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="navbar ams-navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <div className="brand-seal">AMS</div>
          <span className="brand-text">AMS</span>
        </Link>
        <nav className="navbar-quick-links">
          <Link to="/" className="quick-link">🏠 Home</Link>
          <Link to="/courses" className="quick-link">📖 My Courses</Link>
          <Link to="/quizzes" className="quick-link">❓ Quizzes</Link>
          <Link to="/assignments" className="quick-link">📝 Assignments</Link>
          <Link to="/timetable" className="quick-link">📅 Timetable</Link>
        </nav>
      </div>

      <div className="navbar-right">
        {/* Notification Bell */}
        <div className="dropdown-wrapper">
          <button className="icon-btn" onClick={() => setShowNotifMenu(!showNotifMenu)} title="Notifications">
            🔔
            <span className="notif-badge">2</span>
          </button>
          {showNotifMenu && (
            <div className="dropdown-menu notif-dropdown">
              <h4>Notifications</h4>
              <ul>
                <li>
                  <strong>Upcoming Quiz:</strong> Full Stack Dev Lab Section B today at 12:05 PM.
                </li>
                <li>
                  <strong>Attendance Alert:</strong> Overall attendance is 71.9% (Below 75% threshold).
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Avatar & Menu */}
        {user ? (
          <div className="dropdown-wrapper">
            <div
              className="user-profile-btn"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <div className="user-avatar-badge">
                {user.name.charAt(0)}
              </div>
              <div className="user-details-brief">
                <span className="user-name">{user.name}</span>
                <span className="user-role">{user.enrollNo || user.designation}</span>
              </div>
              <span className="dropdown-arrow">▼</span>
            </div>

            {showProfileMenu && (
              <div className="dropdown-menu profile-dropdown">
                <div className="profile-header">
                  <strong>{user.name}</strong>
                  <p className="text-muted">{user.email}</p>
                  <span className="badge badge-indigo">{user.role.toUpperCase()}</span>
                </div>
                <hr />
                <button onClick={handleLogout} className="logout-btn">
                  🚪 Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;