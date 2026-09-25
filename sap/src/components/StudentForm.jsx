import { useState } from "react";

function StudentForm({
  initialData,
  onSubmit,
  buttonText
}) {

  const [formData, setFormData] = useState(
    initialData || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: ""
    }
  );

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);

  };

  return (
    <form
      className="student-form"
      onSubmit={handleSubmit}
    >

      <div className="form-group">

        <label>First Name</label>

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

      </div>

      <div className="form-group">

        <label>Last Name</label>

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

      </div>

      <div className="form-group">

        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

      </div>

      <div className="form-group">

        <label>Phone</label>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

      </div>

      <div className="form-group">

        <label>Age</label>

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

      </div>

      <button
        type="submit"
        className="btn primary"
      >
        {buttonText}
      </button>

    </form>
  );
}

export default StudentForm;