import {
  useEffect,
  useState
} from "react";

import {
  Link,
  useParams
} from "react-router-dom";

import {
  getStudent
} from "../services/studentService";

function StudentDetails() {

  const { id } = useParams();

  const [student, setStudent] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchStudent = async () => {

      try {

        const data =
          await getStudent(id);

        setStudent(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchStudent();

  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div>

      <div className="section-header">

        <h1>Student Details</h1>

        <Link
          to={`/students/${id}/edit`}
          className="btn primary"
        >
          Edit Student
        </Link>

      </div>

      <div className="profile-card">

        <img
          src={student.image}
          alt={student.firstName}
          className="profile-image"
        />

        <div className="profile-info">

          <h2>
            {student.firstName}{" "}
            {student.lastName}
          </h2>

          <p>
            Student ID: #{student.id}
          </p>

          <p>
            Email: {student.email}
          </p>

          <p>
            Phone: {student.phone}
          </p>

          <p>
            Age: {student.age}
          </p>

          <p>
            Gender: {student.gender}
          </p>

            <p>
              Username: {student.username}
            </p>

        </div>

      </div>

      <div className="academic-card">

        <h2>
          Academic Information
        </h2>

        <div className="academic-grid">

          <div>
            <span>Course</span>
            <strong>
              B.Tech
            </strong>
          </div>

          <div>
            <span>Semester</span>
            <strong>
              6th
            </strong>
          </div>

          <div>
            <span>Attendance</span>
            <strong>
              85%
            </strong>
          </div>

          <div>
            <span>CGPA</span>
            <strong>
              8.4
            </strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDetails;