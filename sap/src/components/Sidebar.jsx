import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: "📊" },
    { name: "My Courses", path: "/courses", icon: "📖" },
    { name: "Subject Quizzes", path: "/quizzes", icon: "❓" },
    { name: "Assignments", path: "/assignments", icon: "📝" },
    { name: "Class Timetable", path: "/timetable", icon: "📅" },
    { name: "Student Directory", path: "/students", icon: "👥" },
  ];

  return (
    <aside className="sidebar ams-sidebar">
      <div className="logo">
        <div className="logo-badge-sm">AMS</div>
        <span>MITS Portal</span>
      </div>

      {user && (
        <div className="sidebar-user-card">
          <div className="avatar-circle">{user.name.charAt(0)}</div>
          <div className="user-info font-sm">
            <strong>{user.name}</strong>
            <p className="text-muted">{user.role.toUpperCase()}</p>
          </div>
        </div>
      )}

      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              location.pathname === item.path
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;