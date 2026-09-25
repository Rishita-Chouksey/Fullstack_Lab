import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import StudentForm
  from "../components/StudentForm";

import {
  getStudent,
  updateStudent
} from "../services/studentService";

function EditStudent() {

  const { id } = useParams();

  const navigate = useNavigate();

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

        alert(
          "Unable to load student"
        );

      } finally {

        setLoading(false);

      }

    };

    fetchStudent();

  }, [id]);

  const handleSubmit = async (data) => {

    try {

      await updateStudent(
        id,
        data
      );

      alert(
        "Student updated successfully!"
      );

      navigate("/students");

    } catch (error) {

      alert(
        "Failed to update student"
      );

    }

  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div>

      <h1>Edit Student</h1>

      <p className="page-description">
        Update student information
      </p>

      <div className="form-container">

        <StudentForm
          initialData={student}
          onSubmit={handleSubmit}
          buttonText="Update Student"
        />

      </div>

    </div>
  );
}

export default EditStudent;