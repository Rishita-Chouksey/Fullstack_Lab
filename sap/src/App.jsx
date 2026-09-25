import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import StudentDetails from "./pages/StudentDetails";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <div className="main">

        <Navbar />

        <main className="content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/students"
              element={<Students />}
            />

            <Route
              path="/students/add"
              element={<AddStudent />}
            />

            <Route
              path="/students/:id"
              element={<StudentDetails />}
            />

            <Route
              path="/students/:id/edit"
              element={<EditStudent />}
            />

            <Route
              path="/courses"
              element={<Courses />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>

      </div>

    </div>
  );
}

export default App;