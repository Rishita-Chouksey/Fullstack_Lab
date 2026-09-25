import {
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import {
  getStudents,
  deleteStudent
} from "../services/studentService";

function Students() {

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchStudents = async () => {

    try {

      setLoading(true);

      const data = await getStudents();

      setStudents(data);

    } catch (error) {

      setError(
        "Unable to load students"
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchStudents();

  }, []);

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this student?"
      );

    if (!confirmDelete) return;

    try {

      await deleteStudent(id);

      setStudents(
        students.filter(
          student => student.id !== id
        )
      );

    } catch (error) {

      alert(
        "Failed to delete student"
      );

    }

  };

  const filteredStudents =
    students.filter(student => {

      const name =
        `${student.firstName} ${student.lastName}`
          .toLowerCase();

      return (
        name.includes(
          search.toLowerCase()
        ) ||
        student.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );

    });

  if (loading) {
    return <h2>Loading students...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>

      <div className="section-header">

        <div>

          <h1>Students</h1>

          <p className="page-description">
            Manage all students
          </p>

        </div>

        <Link
          to="/students/add"
          className="btn primary"
        >
          + Add Student
        </Link>

      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={
            (e) =>
              setSearch(e.target.value)
          }
        />

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Student</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Age</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredStudents.map(
              student => (

                <tr key={student.id}>

                  <td>
                    #{student.id}
                  </td>

                  <td>

                    <div className="student-name">

                      <img
                        src={student.image}
                        alt=""
                      />

                      <span>
                        {student.firstName}{" "}
                        {student.lastName}
                      </span>

                    </div>

                  </td>

                  <td>
                    {student.email}
                  </td>

                  <td>
                    {student.phone}
                  </td>

                  <td>
                    {student.age}
                  </td>

                  <td>

                    <div className="actions">

                      <Link
                        to={`/students/${student.id}`}
                        className="action view"
                      >
                        View
                      </Link>

                      <Link
                        to={`/students/${student.id}/edit`}
                        className="action edit"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            student.id
                          )
                        }
                        className="action delete"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Students;