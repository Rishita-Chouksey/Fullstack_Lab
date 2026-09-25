import {
  Link,
  useLocation
} from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/"
    },
    {
      name: "Students",
      path: "/students"
    },
    {
      name: "Courses",
      path: "/courses"
    }
  ];

  return (
    <aside className="sidebar">

      <div className="logo">
        🎓 Student Portal
      </div>

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
            {item.name}
          </Link>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;