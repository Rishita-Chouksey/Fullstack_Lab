const TIMETABLE_SCHEDULE = [
  {
    day: "Monday",
    slots: [
      { time: "09:30 AM - 10:30 AM", subject: "Full Stack Dev Lab", code: "25243108", room: "Lab 3", faculty: "Prof. Atul Chauhan" },
      { time: "10:30 AM - 11:30 AM", subject: "AI & Data Science", code: "25243109", room: "LT-2", faculty: "Dr. Rajni Ranjan" },
      { time: "11:30 AM - 12:30 PM", subject: "Database Systems", code: "25243105", room: "LT-4", faculty: "Dr. S. K. Sharma" },
      { time: "01:30 PM - 03:30 PM", subject: "Minor Practical Project", code: "25243110", room: "AI Lab", faculty: "Dept. Faculty" }
    ]
  },
  {
    day: "Tuesday",
    slots: [
      { time: "09:30 AM - 10:30 AM", subject: "Computer Networks", code: "25243104", room: "LT-1", faculty: "Prof. P. Gupta" },
      { time: "10:30 AM - 11:30 AM", subject: "Full Stack Dev Lab", code: "25243108", room: "Lab 3", faculty: "Prof. Atul Chauhan" },
      { time: "01:30 PM - 03:30 PM", subject: "AI Lab Practical", code: "25243109", room: "AI Lab", faculty: "Dr. Rajni Ranjan" }
    ]
  },
  {
    day: "Wednesday",
    slots: [
      { time: "09:30 AM - 10:30 AM", subject: "Software Engineering", code: "25243106", room: "LT-3", faculty: "Dr. V. K. Jain" },
      { time: "10:30 AM - 11:30 AM", subject: "Database Systems", code: "25243105", room: "LT-4", faculty: "Dr. S. K. Sharma" },
      { time: "11:30 AM - 12:30 PM", subject: "Web Technologies", code: "25243107", room: "Lab 2", faculty: "Prof. M. Verma" }
    ]
  },
  {
    day: "Thursday",
    slots: [
      { time: "09:30 AM - 11:30 AM", subject: "Full Stack Dev Lab", code: "25243108", room: "Lab 3", faculty: "Prof. Atul Chauhan" },
      { time: "11:30 AM - 12:30 PM", subject: "AI & Data Science", code: "25243109", room: "LT-2", faculty: "Dr. Rajni Ranjan" }
    ]
  },
  {
    day: "Friday",
    slots: [
      { time: "09:30 AM - 10:30 AM", subject: "Open Elective", code: "OE2524", room: "Auditorium", faculty: "Guest Speaker" },
      { time: "10:30 AM - 12:30 PM", subject: "Department Analytics Project", code: "DA2524", room: "AI Lab", faculty: "Dr. Rajni Ranjan" }
    ]
  }
];

export default function Timetable() {
  return (
    <div className="timetable-page">
      <div className="page-header">
        <div>
          <h1>Class Schedule & Timetable</h1>
          <p className="page-description">Weekly academic class slots, room numbers, and faculty details.</p>
        </div>
      </div>

      <div className="timetable-days">
        {TIMETABLE_SCHEDULE.map((dayData, idx) => (
          <div key={idx} className="day-schedule-card">
            <div className="day-header">
              <h3>{dayData.day}</h3>
              <span className="badge badge-purple">{dayData.slots.length} Classes</span>
            </div>

            <div className="slots-list">
              {dayData.slots.map((slot, sIdx) => (
                <div key={sIdx} className="slot-item">
                  <div className="slot-time">⏰ {slot.time}</div>
                  <div className="slot-details">
                    <strong>{slot.subject}</strong>
                    <span className="text-muted"> ({slot.code})</span>
                    <div className="slot-meta">
                      📍 <strong>Room:</strong> {slot.room} | 👨‍🏫 <strong>Faculty:</strong> {slot.faculty}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
