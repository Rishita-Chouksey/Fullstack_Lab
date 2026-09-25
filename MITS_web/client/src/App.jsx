import { useEffect, useState } from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";

const API = "http://localhost:5000/api";

const departments = [
  ["Engineering Mathematics & Computing", "Mathematics, computing and data-driven problem solving."],
  ["Computer Science & Engineering", "Software engineering, AI, cloud and modern computing."],
  ["Electronics Engineering", "Embedded systems, communication and electronics."],
  ["Mechanical Engineering", "Design, manufacturing and industrial engineering."],
  ["Civil Engineering", "Infrastructure, structures, environment and construction."],
  ["Electrical Engineering", "Power systems, control and electrical technologies."]
];

function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="brand"><span>M</span><div><b>MITS</b><small>GWALIOR</small></div></Link>
      <nav>
        {[
          ["Home", "/"], ["About", "/about"], ["Academics", "/academics"],
          ["Admissions", "/admissions"], ["Placements", "/placements"], ["Contact", "/contact"]
        ].map(([label, path]) => (
          <NavLink key={path} to={path} className={({isActive}) => isActive ? "active" : ""}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return <footer>
    <div><b>MITS Gwalior</b><p>Modern education, innovation and responsible engineering.</p></div>
    <div><b>Quick Links</b><p>Academics · Admissions · Placements · Contact</p></div>
    <div><b>Contact</b><p>Gwalior, Madhya Pradesh · India</p></div>
    <small>© 2026 MITS Gwalior. Full Stack Development Lab.</small>
  </footer>;
}

function Page({title, subtitle, children}) {
  return <><section className="pageHero"><h1>{title}</h1><p>{subtitle}</p></section><main>{children}</main></>;
}

function Home() {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    fetch(`${API}/notices`).then(r => r.json()).then(setNotices).catch(() => {});
  }, []);
  return <>
    <section className="hero">
      <div><p className="eyebrow">DEEMED UNIVERSITY · GWALIOR</p><h1>Learn. Innovate.<br/><em>Lead the Future.</em></h1>
      <p className="lead">A responsive academic portal presenting institutional information, programmes, admissions, placements and notices.</p>
      <div className="actions"><Link className="btn" to="/admissions">Explore Admissions</Link><Link className="btn ghost" to="/academics">View Academics</Link></div></div>
      <div className="heroCard"><div className="seal">MITS</div><h3>Academic Excellence</h3><p>Engineering · Technology · Innovation</p></div>
    </section>
    <section className="section"><div className="sectionHead"><div><p className="eyebrow">ACADEMICS</p><h2>Academic Departments</h2></div><Link to="/academics">View all →</Link></div>
      <div className="grid3">{departments.slice(0,3).map(([n,d],i)=><article className="card" key={n}><span className="number">0{i+1}</span><h3>{n}</h3><p>{d}</p></article>)}</div>
    </section>
    <section className="section tinted"><div className="sectionHead"><div><p className="eyebrow">LATEST</p><h2>Notices</h2></div></div>
      <div className="noticeList">{notices.length ? notices.map(n=><div className="notice" key={n.id}><b>{n.title}</b><span>{n.date}</span><p>{n.description}</p></div>) : <p>No notices available. Start the Express server to load the API.</p>}</div>
    </section>
  </>;
}

function About() { return <Page title="About MITS" subtitle="An academic institution focused on engineering, technology and innovation."><div className="twoCol"><div><h2>Institutional Overview</h2><p>MITS Gwalior is presented in this lab project as a modern, responsive academic website. The interface organizes information into clear sections so students, faculty and visitors can quickly find relevant content.</p><p>The frontend uses reusable React components, React Router and responsive CSS. The backend uses Node.js and Express.js to expose a notices REST API.</p></div><div className="infoCard"><b>Technology Stack</b><ul><li>React + Vite</li><li>React Router</li><li>CSS3 / Grid / Flexbox</li><li>Node.js + Express</li><li>MongoDB integration</li><li>REST API</li></ul></div></div></Page> }

function Academics() { return <Page title="Academics" subtitle="Programmes and departments for a modern engineering education."><div className="grid3">{departments.map(([n,d],i)=><article className="card" key={n}><span className="number">0{i+1}</span><h3>{n}</h3><p>{d}</p><Link to="/contact">Enquire →</Link></article>)}</div></Page> }

function Admissions() { return <Page title="Admissions" subtitle="Plan your journey from application to enrolment."><div className="steps">{["Explore programmes","Check eligibility","Submit application","Complete admission"].map((x,i)=><div className="step" key={x}><b>{i+1}</b><h3>{x}</h3><p>Follow the official admission process and keep your academic documents ready.</p></div>)}</div></Page> }

function Placements() { return <Page title="Research, Training & Placements" subtitle="Building industry-ready graduates through projects, training and career support."><div className="grid3">{["Research & Innovation","Industry Training","Career & Placements"].map(x=><article className="card" key={x}><h3>{x}</h3><p>Students develop practical skills through projects, training, technical activities and industry-oriented learning.</p></article>)}</div></Page> }

function Contact() { return <Page title="Contact" subtitle="Get in touch with the academic office."><div className="contactGrid"><div className="infoCard"><h3>Campus</h3><p>Gwalior, Madhya Pradesh, India</p><h3>Email</h3><p>info@mitsgwalior.example</p><h3>Office</h3><p>Monday–Friday, 9:00 AM–5:00 PM</p></div><form className="contactForm" onSubmit={e=>{e.preventDefault(); alert("Thank you! Your enquiry has been recorded for the demo.");}}><input required placeholder="Your name"/><input required type="email" placeholder="Email address"/><textarea required placeholder="Message" rows="5"></textarea><button className="btn">Send Enquiry</button></form></div></Page> }

export default function App() {
  return <div className="app"><Navbar/><Routes>
    <Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/>
    <Route path="/academics" element={<Academics/>}/><Route path="/admissions" element={<Admissions/>}/>
    <Route path="/placements" element={<Placements/>}/><Route path="/contact" element={<Contact/>}/>
  </Routes><Footer/></div>;
}
