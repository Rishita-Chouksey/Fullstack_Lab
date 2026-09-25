function Courses() {

  const courses = [
    {
      id: 1,
      code: "CS301",
      name: "Data Structures",
      credits: 4
    },
    {
      id: 2,
      code: "CS302",
      name: "Database Management System",
      credits: 4
    },
    {
      id: 3,
      code: "CS303",
      name: "Computer Networks",
      credits: 3
    },
    {
      id: 4,
      code: "CS304",
      name: "Operating Systems",
      credits: 4
    },
    {
      id: 5,
      code: "MA301",
      name: "Probability & Statistics",
      credits: 4
    }
  ];

  return (
    <div>

      <h1>Courses</h1>

      <p className="page-description">
        Available academic courses
      </p>

      <div className="course-grid">

        {courses.map(course => (

          <div
            className="course-card"
            key={course.id}
          >

            <span className="course-code">
              {course.code}
            </span>

            <h2>
              {course.name}
            </h2>

            <p>
              Credits: {course.credits}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Courses;