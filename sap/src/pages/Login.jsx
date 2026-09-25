import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate("/");
  };

  return (
    <div className="login-page">
      {/* Top Bar */}
      <header className="login-header">
        <div className="login-brand">
          <div className="logo-badge">AMS</div>
          <div>
            <strong>AMS</strong> <span className="text-muted">Madhav Institute of Technology & Science</span>
          </div>
        </div>
        <div className="login-header-right">
          <button onClick={() => handleLogin("student")} className="btn btn-outline btn-sm">
            Quick Student Login
          </button>
        </div>
      </header>

      {/* Main Login Container */}
      <div className="login-container">
        {/* Left Side: AMS Features & Info */}
        <div className="login-info-section">
          <div className="institute-badge-wrapper">
            <div className="institute-seal">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
          
          <h1 className="portal-title">Academics Management System</h1>
          <p className="portal-subtitle">Madhav Institute of Technology & Science, Gwalior</p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <div>
                <h4>Attendance Tracking</h4>
                <p>Comprehensive attendance monitoring and tracking.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <div>
                <h4>Class Management</h4>
                <p>Efficient schedule and class organization.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📑</div>
              <div>
                <h4>Reports Generation</h4>
                <p>Generate detailed analytics and reports.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <div>
                <h4>Observation Reports</h4>
                <p>Weekly observation and tracking insights.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <div>
                <h4>Department Analytics</h4>
                <p>Department-wise attendance statistics.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <div>
                <h4>Student Management</h4>
                <p>Manage student profiles and academic records.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Sign-In Box */}
        <div className="login-box-section">
          <div className="login-box">
            <div className="lock-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>

            <h2>Sign in to your account</h2>
            
            <div className="email-hint-box">
              <p className="hint-title">✉️ Login with Institute email:</p>
              <ul>
                <li><strong>@mitsgwalior.in</strong> (Faculty)</li>
                <li><strong>@mitsgwl.ac.in</strong> (Students)</li>
              </ul>
            </div>

            <button onClick={() => handleLogin("student")} className="google-btn">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Sign In with Google</span>
            </button>

            <div className="demo-logins-divider">
              <span>OR DIRECT DEMO LOGIN</span>
            </div>

            <div className="demo-btn-group">
              <button onClick={() => handleLogin("student")} className="btn btn-primary full-width">
                Login as Student (Rishita)
              </button>
              <button onClick={() => handleLogin("faculty")} className="btn btn-secondary full-width">
                Login as Faculty (Dr. Rajni)
              </button>
            </div>

            {/* Developer Credit Footer */}
            <div className="credits-section">
              <p className="section-label">DEVELOPED BY</p>
              <div className="developer-card">
                <div className="dev-avatar">VS</div>
                <div className="dev-details">
                  <strong>Vaibhav Sharma</strong>
                  <p>AI & Data Science, 2023-2027</p>
                </div>
              </div>

              <p className="section-label" style={{ marginTop: '15px' }}>BUILT UNDER THE GUIDANCE OF</p>
              <div className="guidance-grid">
                <div className="guide-card">
                  <strong>Dr. Rajni Ranjan Singh Makwana</strong>
                  <p>Assoc. Prof. & Dean, CAI</p>
                </div>
                <div className="guide-card">
                  <strong>Mr. Atul Chauhan</strong>
                  <p>Programmer, MITS-DU</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
