const COURSES_DATA = [
  { id: 1, code: "25243108", name: "Full Stack Development Lab Section B", credits: 3, faculty: "Prof. Atul Chauhan", attended: 14, total: 16, percentage: 87.5 },
  { id: 2, code: "25243109", name: "Artificial Intelligence & Machine Learning", credits: 4, faculty: "Dr. Rajni Ranjan Singh Makwana", attended: 11, total: 16, percentage: 68.75, atRisk: true },
  { id: 3, code: "25243105", name: "Database Management Systems", credits: 4, faculty: "Dr. S. K. Sharma", attended: 12, total: 15, percentage: 80.0 },
  { id: 4, code: "25243104", name: "Computer Networks & Security", credits: 3, faculty: "Prof. P. Gupta", attended: 9, total: 14, percentage: 64.2, atRisk: true },
  { id: 5, code: "25243106", name: "Software Engineering & Agile", credits: 3, faculty: "Dr. V. K. Jain", attended: 13, total: 15, percentage: 86.6 },
  { id: 6, code: "25243107", name: "Web Technologies & Cloud", credits: 3, faculty: "Prof. M. Verma", attended: 10, total: 13, percentage: 76.9 },
  { id: 7, code: "25243110", name: "Minor Practical Project", credits: 2, faculty: "Dept. Faculty", attended: 7, total: 10, percentage: 70.0, atRisk: true },
  { id: 8, code: "OE2524", name: "Open Elective - Data Analytics", credits: 3, faculty: "Guest Speaker", attended: 8, total: 10, percentage: 80.0 },
  { id: 9, code: "DA2524", name: "Department Analytics Observation", credits: 2, faculty: "Dr. Rajni Ranjan", attended: 3, total: 4, percentage: 75.0 }
];

function Courses() {
  return (
    <div className="courses-page">
      <div className="page-header">
        <div>
          <h1>My Courses & Academic Records</h1>
          <p className="page-description">Subject-wise attendance, course credits, and faculty details for Current Session (July - Dec 2026).</p>
        </div>
      </div>

      <div className="course-grid">
        {COURSES_DATA.map((course) => (
          <div className="course-card ams-course-card" key={course.id}>
            <div className="course-header-row">
              <span className="course-code">{course.code}</span>
              {course.atRisk ? (
                <span className="badge badge-risk">At Risk (&lt;75%)</span>
              ) : (
                <span className="badge badge-success">Good Standing</span>
              )}
            </div>

            <h2>{course.name}</h2>
            <p className="text-muted font-sm">👨‍🏫 Faculty: <strong>{course.faculty}</strong></p>
            <p className="text-muted font-sm">🎯 Credits: <strong>{course.credits}</strong></p>

            {/* Attendance Progress Bar */}
            <div className="attendance-progress-wrapper">
              <div className="progress-labels font-sm">
                <span>Classes: {course.attended}/{course.total}</span>
                <strong>{course.percentage.toFixed(1)}%</strong>
              </div>
              <div className="progress-bar-bg">
                <div
                  className={`progress-bar-fill ${course.atRisk ? "fill-danger" : "fill-primary"}`}
                  style={{ width: `${course.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;