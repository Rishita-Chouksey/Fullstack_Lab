import { useEffect, useState } from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";

const API = "http://localhost:5000/api";

const carouselSlides = [
  {
    id: 1,
    image: "https://web.mitsgwalior.in/images/slider2/againnaacR.webp",
    title: "NAAC Accredited A++ Grade Deemed University",
    subtitle: "Madhav Institute of Technology & Science, Gwalior"
  },
  {
    id: 2,
    image: "https://web.mitsgwalior.in/images/slider2/0O2A50681.webp",
    title: "Student Innovation & Campus Life",
    subtitle: "Empowering students through hands-on technical projects"
  },
  {
    id: 3,
    image: "https://web.mitsgwalior.in/images/slider2/gdm1.webp",
    title: "Academic Excellence & Institutional Leadership",
    subtitle: "Fostering research, development and technological advancements"
  },
  {
    id: 4,
    image: "https://web.mitsgwalior.in/images/slider2/imageganesh2.png",
    title: "Cultural Heritage & Institutional Events",
    subtitle: "Celebrating traditions, innovation and togetherness"
  },
  {
    id: 5,
    image: "https://web.mitsgwalior.in/images/slider2/Presentation2.webp",
    title: "Conferences, Seminars & Research Presentations",
    subtitle: "Global exposure and academic interactions"
  },
  {
    id: 6,
    image: "https://web.mitsgwalior.in/images/slider2/BasketballGirls1.webp",
    title: "Sports & Extracurricular Leadership",
    subtitle: "Building team spirit and physical excellence"
  },
  {
    id: 7,
    image: "https://web.mitsgwalior.in/images/slider2/Football1.webp",
    title: "Athletics & Campus Sports Activities",
    subtitle: "State-of-the-art sports facilities and student achievements"
  },
  {
    id: 8,
    image: "https://web.mitsgwalior.in/images/slider2/hack2.webp",
    title: "Hackathons & Technical Competitions",
    subtitle: "Nurturing future engineers, innovators and problem solvers"
  }
];

// SVG Emblem Logos
function MitsEmblem() {
  return (
    <svg className="mits-emblem-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="46" fill="#ffffff" stroke="#0a3871" strokeWidth="4" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#c62828" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M50 15 L60 35 L80 35 L64 47 L70 68 L50 55 L30 68 L36 47 L20 35 L40 35 Z" fill="#0a3871" />
      <text x="50" y="82" textAnchor="middle" fill="#0a3871" fontSize="9" fontWeight="bold">ESTD. 1957</text>
      <text x="50" y="92" textAnchor="middle" fill="#c62828" fontSize="7" fontWeight="bold">WORK IS WORSHIP</text>
    </svg>
  );
}

function DeemedLogo() {
  return (
    <svg className="mits-deemed-logo" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="#0a3871" />
      <path d="M50 20 L80 75 L20 75 Z" fill="#f59e0b" />
      <circle cx="50" cy="48" r="14" fill="#ffffff" />
      <text x="50" y="52" textAnchor="middle" fill="#0a3871" fontSize="12" fontWeight="bold">MITS</text>
      <text x="50" y="88" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">DEEMED UNIV</text>
    </svg>
  );
}

// 1. Top Header Component
function Header() {
  return (
    <header className="mits-top-header">
      <div className="mits-header-logo-left">
        <MitsEmblem />
      </div>
      <div className="mits-header-titles">
        <div className="mits-title-hindi">माधव प्रौद्योगिकी एवं विज्ञान संस्थान, ग्वालियर (म.प्र.), भारत</div>
        <div className="mits-title-english">MADHAV INSTITUTE OF TECHNOLOGY & SCIENCE, GWALIOR (M.P.), INDIA</div>
        <div className="mits-subtitle-deemed">Deemed University</div>
        <div className="mits-subtitle-dept">(Declared under Distinct Category by Ministry of Education, Government of India)</div>
        <div className="mits-naac-badge-text">NAAC ACCREDITED WITH A++ GRADE</div>
      </div>
      <div className="mits-header-logo-right">
        <DeemedLogo />
      </div>
    </header>
  );
}

// 2. Navigation Bar with Hover Dropdowns Component
function Navbar() {
  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "About Institute",
      path: "/about",
      dropdown: [
        "About MITS", "Vision & Mission", "Society", "Vice Chancellor's Message",
        "Accreditation", "Approvals & Mandatory Disclosure", "Service Rules",
        "Duties and Responsibilities", "Policies", "Code of Conduct for Stakeholders",
        "Standard Operating Procedure", "UGC Public Self-Disclosure"
      ]
    },
    {
      label: "Administration",
      path: "/administration",
      dropdown: ["Board of Governors", "Academic Council", "Officers", "Deans & HODs", "Committees"]
    },
    {
      label: "Academics",
      path: "/academics",
      dropdown: ["Engineering Math & Computing", "Computer Science & Engineering", "Electronics Engineering", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering"]
    },
    {
      label: "Students Life",
      path: "/students-life",
      dropdown: ["Hostels & Dining", "Sports Complex", "Technical Clubs", "Cultural Societies", "NCC / NSS"]
    },
    {
      label: "Admission",
      path: "/admissions",
      dropdown: ["UG Admissions (B.Tech)", "PG Admissions (M.Tech/MCA)", "Ph.D. Admissions", "Scholarships & Fee Structure"]
    },
    {
      label: "R&D",
      path: "/research",
      dropdown: ["Research Projects", "Patents & Publications", "Centers of Excellence", "Vishveshwarya Scheme"]
    },
    {
      label: "Training & Placements",
      path: "/placements",
      dropdown: [
        "About T&P Cell", "Internship & Placement policy", "Leading Recruiters",
        "Internship & Placement Records", "Prominent Alumni", "Placement Brochure", "Contact Person"
      ]
    },
    { label: "Aviation Training", path: "/aviation" },
    { label: "Conference", path: "/conference" },
    { label: "Gallery", path: "/gallery" }
  ];

  return (
    <nav className="mits-navbar">
      <div className="mits-nav-container">
        <ul className="mits-nav-menu">
          {menuItems.map((item) => (
            <li key={item.label} className="mits-nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => `mits-nav-link ${isActive && item.path === '/' ? 'active' : ''}`}
              >
                {item.label}
                {item.dropdown && <span className="mits-dropdown-arrow">▼</span>}
              </NavLink>

              {item.dropdown && (
                <ul className="mits-dropdown-menu">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem}>
                      <Link to={item.path}>{subItem}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// 3. Hero Carousel Component with Auto-Change & Overlay Badge
function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  return (
    <div className="mits-hero-wrapper">
      <div className="mits-carousel-container">
        {carouselSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`mits-carousel-slide ${idx === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} className="mits-carousel-img" />
          </div>
        ))}

        {/* NAAC Badge Overlay on Top-Right of Slide */}
        <div className="mits-naac-overlay-badge">
          <span className="mits-naac-badge-title">ACCREDITED WITH</span>
          <span className="mits-naac-badge-grade">A++</span>
          <span className="mits-naac-badge-sub">GRADE BY NAAC</span>
        </div>

        {/* Controls */}
        <button className="mits-carousel-arrow prev" onClick={goToPrev} aria-label="Previous Slide">❮</button>
        <button className="mits-carousel-arrow next" onClick={goToNext} aria-label="Next Slide">❯</button>

        {/* Dots */}
        <div className="mits-carousel-dots">
          {carouselSlides.map((_, idx) => (
            <span
              key={idx}
              className={`mits-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 4. Live Notification Ticker Marquee Component
function NotificationTicker({ notices }) {
  const defaultTickerText = [
    "Vice Chancellor of MITS-DU, on the occasion of the 80th Independence Day Celebration",
    "Call for Papers – 8th International Conference on Sustainable and Innovative Solutions",
    "Ph.D. admission under Vishveshwarya Scheme (Session: 2026-27) is now open",
    "Post-Doctoral Fellowship Applications invited under Ministry of Electronics & IT"
  ];

  const marqueeItems = notices.length
    ? notices.map((n) => n.title)
    : defaultTickerText;

  return (
    <div className="mits-ticker-bar">
      <div className="mits-ticker-label">NOTIFICATIONS</div>
      <div className="mits-ticker-content">
        <div className="mits-marquee-track">
          {marqueeItems.concat(marqueeItems).map((text, idx) => (
            <span key={idx} className="mits-marquee-item">
              {text}
              <span className="mits-marquee-separator"> | </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// 5. Vision, Mission & Vice Chancellor Section Component
function VisionMissionSection() {
  return (
    <section className="mits-vision-section">
      <div className="mits-welcome-header">
        <h2>WELCOME TO MITS GWALIOR</h2>
        <p>“Mission to Innovate Technology & Science”</p>
      </div>

      <div className="mits-vm-grid">
        {/* Left: VISION (Red Box) */}
        <div className="mits-vision-card">
          <h3>VISION</h3>
          <div className="mits-quote-mark">“</div>
          <p>
            To create world class quality Engineers and Technocrats capable of providing leadership in all spheres of life and society.
          </p>
        </div>

        {/* Center: Vice Chancellor Card */}
        <div className="mits-vc-card">
          <div className="mits-vc-img-frame">
            <img
              src="https://i.ytimg.com/vi/J1A7CnyqPKE/maxresdefault.jpg"
              alt="Dr. Rajindra Kumar Pandit"
              className="mits-vc-img"
            />
          </div>
          <h4>Dr. Rajindra Kumar Pandit</h4>
          <span>Vice Chancellor</span>
        </div>

        {/* Right: MISSION (Dark Slate Box) */}
        <div className="mits-mission-card">
          <h3>MISSION</h3>
          <ul className="mits-mission-list">
            <li>
              <span className="mits-mission-bullet">❯</span>
              To impart futuristic technical education in technical and allied disciplines.
            </li>
            <li>
              <span className="mits-mission-bullet">❯</span>
              To organize and arrange innovative courses in Engineering and Technology.
            </li>
            <li>
              <span className="mits-mission-bullet">❯</span>
              To arrange vocational courses in upcoming fields to meet global advancement.
            </li>
            <li>
              <span className="mits-mission-bullet">❯</span>
              To promote research in the fields of Technology and Science.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// 6. Highlights Section with Filter Tabs Component
function HighlightsSection({ notices }) {
  const categories = ["All", "Academic", "Examination", "Admission", "Events", "Tender", "Recruitment", "Scholarship"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredNotices = activeTab === "All"
    ? notices
    : notices.filter((n) => (n.category || "").toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="mits-highlights-section">
      <h2 className="mits-section-title">Highlights</h2>

      {/* Category Filter Tabs */}
      <div className="mits-tabs-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`mits-tab-btn ${activeTab === cat ? "active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid: Notice List + Campus Image */}
      <div className="mits-highlights-grid">
        <div className="mits-notice-box">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((n) => (
              <div key={n.id} className="mits-notice-item">
                <span className="mits-notice-arrow">►</span>
                <div className="mits-notice-details">
                  <b>{n.title}</b>
                  <div className="mits-notice-meta">
                    <span className="mits-notice-cat-badge">{n.category || "General"}</span>
                    <span>Date: {n.date}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mits-notice-item">
              <span className="mits-notice-arrow">►</span>
              <div className="mits-notice-details">
                <b>No circulars or notices listed under {activeTab} category.</b>
              </div>
            </div>
          )}
        </div>

        <div className="mits-highlights-image-box">
          <img
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop"
            alt="MITS Campus Academic Block"
          />
        </div>
      </div>
    </section>
  );
}

// 7. Quick Cards Grid Component
function QuickCardsGrid() {
  return (
    <section className="mits-quickcards-section">
      <div className="mits-quickcards-grid">
        <div className="mits-quick-card">
          <h3>Academics</h3>
          <p>Explore undergraduate, postgraduate and doctoral engineering programmes designed for global technological leadership.</p>
        </div>
        <div className="mits-quick-card">
          <h3>Quality Initiatives</h3>
          <p>Internal Quality Assurance Cell (IQAC), NBA accreditations, outcome-based learning and continuous curriculum updates.</p>
        </div>
        <div className="mits-quick-card">
          <h3>Students Grievances & Counselling</h3>
          <p>Dedicated student support cell, anti-ragging committee, mental health counseling and academic mentorship programs.</p>
        </div>
      </div>
    </section>
  );
}

// 8. Floating Social Sidebar Component
function FloatingSidebar() {
  return (
    <>
      <div className="mits-floating-socials">
        <a href="#facebook" className="mits-social-icon fb">f</a>
        <a href="#twitter" className="mits-social-icon tw">X</a>
        <a href="#linkedin" className="mits-social-icon li">in</a>
        <a href="#youtube" className="mits-social-icon yt">▶</a>
        <a href="#instagram" className="mits-social-icon ig">📷</a>
      </div>
      <div className="mits-floating-widget" title="Quick Action Menu">
        ❖
      </div>
    </>
  );
}

// 9. Footer Component
function Footer() {
  return (
    <footer className="mits-footer">
      <div className="mits-footer-grid">
        <div className="mits-footer-col">
          <h4>MITS Gwalior</h4>
          <p>
            Madhav Institute of Technology & Science (Deemed University), Gwalior (M.P.), India. Established in 1957, imparting world-class technical education and innovation.
          </p>
        </div>
        <div className="mits-footer-col">
          <h4>Quick Links</h4>
          <ul className="mits-footer-links">
            <li><Link to="/about">About Institute</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/placements">Training & Placements</Link></li>
          </ul>
        </div>
        <div className="mits-footer-col">
          <h4>Portals</h4>
          <ul className="mits-footer-links">
            <li><a href="#student-portal">Student Portal (AMS)</a></li>
            <li><a href="#faculty-portal">Faculty Portal</a></li>
            <li><a href="#exam-cell">Examination Cell</a></li>
            <li><a href="#alumni">Alumni Network</a></li>
          </ul>
        </div>
        <div className="mits-footer-col">
          <h4>Contact Information</h4>
          <p>
            Race Course Road, Gola ka Mandir, Gwalior, Madhya Pradesh 474005<br /><br />
            Phone: +91-751-2409300<br />
            Email: info@mitsgwalior.in
          </p>
        </div>
      </div>

      <div className="mits-footer-bottom">
        © 2026 Madhav Institute of Technology & Science, Gwalior (M.P.), India. All Rights Reserved.
      </div>
    </footer>
  );
}

// Subpage Views
function PageView({ title, subtitle, children }) {
  return (
    <div className="mits-page-container">
      <div className="mits-page-hero">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

function HomeView({ notices }) {
  return (
    <>
      <HeroCarousel />
      <NotificationTicker notices={notices} />
      <VisionMissionSection />
      <HighlightsSection notices={notices} />
      <QuickCardsGrid />
    </>
  );
}

function AboutView() {
  return (
    <PageView title="About MITS Gwalior" subtitle="Established in 1957 · NAAC Accredited A++ Grade · Deemed University">
      <div style={{ lineHeight: "1.8", color: "#334155" }}>
        <h2>Institutional Legacy</h2>
        <p style={{ marginTop: "10px" }}>
          Madhav Institute of Technology & Science (MITS), Gwalior was established in 1957 by His Highness Late Sir Jiwaji Rao Scindia, Maharaja of the erstwhile State of Gwalior. The Institute has grown into a premier technical institution of central India.
        </p>
        <h3 style={{ marginTop: "20px", color: "#0a3871" }}>Key Highlights</h3>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>NAAC Accredited with A++ Grade</li>
          <li>Declared as Deemed University under Distinct Category by Ministry of Education</li>
          <li>11 Undergraduate Programmes & 8 Postgraduate Programmes</li>
          <li>State-of-the-Art Research Centers & Electric Mobility Laboratories</li>
        </ul>
      </div>
    </PageView>
  );
}

function AcademicsView() {
  const depts = [
    { title: "Engineering Mathematics & Computing", desc: "Advanced mathematical modeling, AI algorithms, data analytics and scientific computing." },
    { title: "Computer Science & Engineering", desc: "Software engineering, cloud computing, artificial intelligence and machine learning." },
    { title: "Electronics Engineering", desc: "VLSI design, embedded systems, IoT and modern telecommunication systems." },
    { title: "Mechanical Engineering", desc: "Robotics, thermal systems, CAD/CAM and industrial automation." },
    { title: "Civil Engineering", desc: "Structural analysis, environmental engineering, GIS and infrastructure planning." },
    { title: "Electrical Engineering", desc: "Power systems, renewable energy systems and smart grid technologies." }
  ];

  return (
    <PageView title="Academic Programmes & Departments" subtitle="Futuristic engineering education with outcome-based learning">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {depts.map((d) => (
          <div key={d.title} style={{ padding: "20px", border: "1px solid #e2e8f0", borderRadius: "8px", background: "#f8fafc" }}>
            <h3 style={{ color: "#0a3871", marginBottom: "8px" }}>{d.title}</h3>
            <p style={{ color: "#64748b", fontSize: "14px" }}>{d.desc}</p>
          </div>
        ))}
      </div>
    </PageView>
  );
}

function AdmissionsView() {
  return (
    <PageView title="Admissions 2026-27" subtitle="Start your technological journey at MITS Gwalior">
      <div style={{ lineHeight: "1.8", color: "#334155" }}>
        <h2>Admission Procedure</h2>
        <p style={{ marginTop: "10px" }}>
          Admissions to B.Tech programmes are conducted through MP DTE Counseling based on JEE Main scores. Ph.D. admissions are conducted under the prestigious Vishveshwarya Scheme.
        </p>
      </div>
    </PageView>
  );
}

function PlacementsView() {
  return (
    <PageView title="Training & Placements Cell" subtitle="Connecting top talent with leading global recruiters">
      <div style={{ lineHeight: "1.8", color: "#334155" }}>
        <h2>Placement Highlights</h2>
        <p style={{ marginTop: "10px" }}>
          The Training & Placement Cell works tirelessly to arrange internships, campus interviews, skill enhancement workshops and industrial visits for all engineering students.
        </p>
      </div>
    </PageView>
  );
}

// Main Application Container
export default function App() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch(`${API}/notices`)
      .then((res) => res.json())
      .then(setNotices)
      .catch(() => {});
  }, []);

  return (
    <div className="mits-app">
      <Header />
      <Navbar />
      <FloatingSidebar />
      <Routes>
        <Route path="/" element={<HomeView notices={notices} />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/academics" element={<AcademicsView />} />
        <Route path="/admissions" element={<AdmissionsView />} />
        <Route path="/placements" element={<PlacementsView />} />
        <Route path="*" element={<HomeView notices={notices} />} />
      </Routes>
      <Footer />
    </div>
  );
}
