import {
  useNavigate
} from "react-router-dom";

import StudentForm from "../components/StudentForm";

import {
  createStudent
} from "../services/studentService";

function AddStudent() {

  const navigate = useNavigate();

  const handleSubmit = async (data) => {

    try {

      await createStudent(data);

      alert(
        "Student created successfully!"
      );

      navigate("/students");

    } catch (error) {

      alert(
        "Failed to create student"
      );

    }

  };

  return (
    <div>

      <h1>Add Student</h1>

      <p className="page-description">
        Add a new student
      </p>

      <div className="form-container">

        <StudentForm
          onSubmit={handleSubmit}
          buttonText="Create Student"
        />

      </div>

    </div>
  );
}

export default AddStudent;