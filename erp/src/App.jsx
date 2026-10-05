import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Dashboard");

  const students = [
    { id: 1, name: "Gayathri", course: "B.Tech Biotechnology", year: "2nd Year" },
    { id: 2, name: "Keerthana", course: "B.Tech Biotechnology", year: "2nd Year" },
    { id: 3, name: "Vinay Kumar", course: "B.Tech Biotechnology", year: "2nd Year" },
  ];

  const showPage = () => {
    if (page === "Dashboard") {
      return (
        <>
          <h2>Dashboard</h2>

          <div className="cards">
            <div className="card">
              <h3>Students</h3>
              <p>1200</p>
            </div>

            <div className="card">
              <h3>Courses</h3>
              <p>25</p>
            </div>

            <div className="card">
              <h3>Attendance</h3>
              <p>92%</p>
            </div>

            <div className="card">
              <h3>Reports</h3>
              <p>48</p>
            </div>
          </div>
        </>
      );
    }

    if (page === "Students") {
      return (
        <>
          <h2>Student Details</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
      if (page === "Courses") {
  const courses = [
    { id: 1, name: "Biochemistry", faculty: "Dr. Rao", credits: 4 },
    { id: 2, name: "Microbiology", faculty: "Dr. Kumar", credits: 4 },
    { id: 3, name: "AI & Machine Learning", faculty: "Dr. Priya", credits: 3 },
    { id: 4, name: "Full Stack Web Development", faculty: "Dr. Sharma", credits: 3 },
  ];

  return (
    <>
      <h2>Course Details</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course</th>
            <th>Faculty</th>
            <th>Credits</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.faculty}</td>
              <td>{course.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
      if (page === "Attendance") {
  const attendance = [
    { id: 1, name: "Gayathri", percentage: "92%" },
    { id: 2, name: "Keerthana", percentage: "88%" },
    { id: 3, name: "Vinay Kumar", percentage: "95%" },
  ];
  if (page === "Reports") {
  const reports = [
    { id: 1, title: "Student Report", status: "Completed" },
    { id: 2, title: "Attendance Report", status: "Completed" },
    { id: 3, title: "Course Report", status: "Pending" },
    { id: 4, title: "Academic Performance", status: "Completed" },
  ];

  return (
    <>
      <h2>Reports</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Report Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.title}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

  return (
    <>
      <h2>Attendance Details</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Attendance</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
if (page === "Reports") {
  const reports = [
    { id: 1, title: "Student Report", status: "Completed" },
    { id: 2, title: "Attendance Report", status: "Completed" },
    { id: 3, title: "Course Report", status: "Pending" },
    { id: 4, title: "Academic Performance", status: "Completed" },
  ];

  return (
    <>
      <h2>Reports</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Report Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.title}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
    return (
      <div className="page">
        <h2>{page}</h2>
        <p>Welcome to the {page} section.</p>
      </div>
    );
  };

  return (
    <div className="erp">
     <header className="header">
  <h1>KLU ERP Management System</h1>
  <p>Student & Academic Management Portal</p>
  <div className="user-info">
    Welcome, Gayathri | B.Tech Biotechnology | 2nd Year
  </div>
</header>

      <nav className="navbar">
        <button onClick={() => setPage("Dashboard")}>Dashboard</button>
        <button onClick={() => setPage("Students")}>Students</button>
        <button onClick={() => setPage("Courses")}>Courses</button>
        <button onClick={() => setPage("Attendance")}>Attendance</button>
        <button onClick={() => setPage("Reports")}>Reports</button>
      </nav>

      <main className="content">{showPage()}</main>
    </div>
  );
}

export default App;
