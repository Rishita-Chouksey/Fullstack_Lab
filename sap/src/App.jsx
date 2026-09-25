import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Quizzes from "./pages/Quizzes";
import Assignments from "./pages/Assignments";
import Timetable from "./pages/Timetable";

import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import StudentDetails from "./pages/StudentDetails";
import NotFound from "./pages/NotFound";

function ProtectedAppLayout() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  if (location.pathname === "/login") {
    return <Login />;
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/timetable" element={<Timetable />} />
            
            <Route path="/students" element={<Students />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/students/:id" element={<StudentDetails />} />
            <Route path="/students/:id/edit" element={<EditStudent />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ProtectedAppLayout />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;