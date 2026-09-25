import {
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import {
  getStudents
} from "../services/studentService";

function Dashboard() {

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchStudents = async () => {

      try {

        const data = await getStudents();

        setStudents(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchStudents();

  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <h1>Dashboard</h1>

      <p className="page-description">
        Welcome to your student academic portal.
      </p>

      <div className="stats">

        <div className="stat-card">

          <h3>Total Students</h3>

          <strong>
            {students.length}
          </strong>

        </div>

        <div className="stat-card">

          <h3>Male Students</h3>

          <strong>
            {
              students.filter(
                student => student.gender === "male"
              ).length
            }
          </strong>

        </div>

        <div className="stat-card">

          <h3>Female Students</h3>

          <strong>
            {
              students.filter(
                student => student.gender === "female"
              ).length
            }
          </strong>

        </div>

      </div>

      <div className="section-header">

        <h2>Recent Students</h2>

        <Link
          to="/students"
          className="btn primary"
        >
          View All
        </Link>

      </div>

      <div className="student-grid">

        {students.slice(0, 6).map(student => (

          <div
            className="student-card"
            key={student.id}
          >

            <img
              src={student.image}
              alt={student.firstName}
            />

            <h3>
              {student.firstName}{" "}
              {student.lastName}
            </h3>

            <p>
              {student.email}
            </p>

            <Link
              to={`/students/${student.id}`}
              className="view-link"
            >
              View Details →
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;