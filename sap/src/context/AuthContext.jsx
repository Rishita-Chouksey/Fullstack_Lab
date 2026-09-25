import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const DEMO_STUDENT = {
  name: "RISHITA CHOUKSEY",
  email: "rishita@mitsgwl.ac.in",
  role: "student",
  enrollNo: "0901CS231089",
  branch: "AI & Data Science",
  session: "July Dec 2026",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rishita"
};

const DEMO_FACULTY = {
  name: "Dr. Rajni Ranjan Singh Makwana",
  email: "makwana@mitsgwalior.in",
  role: "faculty",
  designation: "Assoc. Prof. & Dean CAI",
  department: "Computer Science & AI",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajni"
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("ams_user");
    return saved ? JSON.parse(saved) : DEMO_STUDENT; // Default logged in as student for instant preview
  });

  const login = (type = "student") => {
    const selectedUser = type === "faculty" ? DEMO_FACULTY : DEMO_STUDENT;
    setUser(selectedUser);
    localStorage.setItem("ams_user", JSON.stringify(selectedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ams_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        isStudent: user?.role === "student",
        isFaculty: user?.role === "faculty"
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
