import React, { useState, useEffect, useRef } from 'react';
// 1. PREMIUM GLOBAL STYLES & INTERACTIVE ANIMATIONS
const PortfolioStyles = () => (
  <style>{`
    :root {
      --bg-dark: #030307;
      --bg-card: rgba(13, 14, 29, 0.45);
      --bg-input: #090a12;
      --text-main: #f3f4f6;
      --text-muted: #9ca3af;
      --accent-purple: #7c4dff;
      --accent-cyan: #00e5ff;
      --border: rgba(255, 255, 255, 0.05);
      --gradient-text: linear-gradient(135deg, #ffffff 0%, #b39ddb 50%, #7c4dff 100%);
      --gradient-cyan-purple: linear-gradient(90deg, #00e5ff, #7c4dff);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    html {
      scroll-behavior: smooth;
      background-color: var(--bg-dark);
      color: var(--text-main);
    }

    body {
      overflow-x: hidden;
    }

    @keyframes textGlow {
      0%, 100% { filter: drop-shadow(0 0 15px rgba(0, 229, 255, 0.4)); }
      50% { filter: drop-shadow(0 0 25px rgba(124, 77, 255, 0.6)); }
    }

    @keyframes pulseSlow {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.05); }
    }

    .reveal-section {
      opacity: 0;
      transform: translateY(50px);
      transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .reveal-section.active {
      opacity: 1;
      transform: translateY(0);
    }

    .glass-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 24px;
      backdrop-filter: blur(20px);
      WebkitBackdropFilter: blur(20px);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .glass-card:hover {
      transform: translateY(-8px);
      border-color: rgba(124, 77, 255, 0.3);
      box-shadow: 0 20px 40px rgba(124, 77, 255, 0.12);
    }

    .btn-premium {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 16px 36px;
      font-size: 0.95rem;
      font-weight: 600;
      border-radius: 14px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .btn-primary {
      background: var(--gradient-cyan-purple);
      color: #000;
      font-weight: 700;
      box-shadow: 0 0 30px rgba(0, 229, 255, 0.25);
    }

    .btn-primary:hover {
      transform: translateY(-4px);
      box-shadow: 0 0 40px rgba(124, 77, 255, 0.5);
      color: #fff;
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.02);
      color: var(--text-main);
      border: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(124, 77, 255, 0.4);
      transform: translateY(-4px);
    }

    .badge-dev {
      display: inline-block;
      padding: 6px 16px;
      background: rgba(0, 225, 255, 0.08);
      border: 1px solid rgba(0, 225, 255, 0.2);
      color: #00e5ff;
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }

    .nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background: rgba(3, 3, 7, 0.7);
      backdrop-filter: blur(20px);
      WebkitBackdropFilter: blur(20px);
      border-bottom: 1px solid var(--border);
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links a {
      color: var(--text-muted);
      text-decoration: none;
      margin-left: 32px;
      font-size: 0.9rem;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: var(--accent-cyan);
    }

    .section-wrapper {
      padding: 140px 24px;
      display: flex;
      justify-content: center;
      position: relative;
    }

    .container {
      max-width: 1140px;
      width: 100%;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px;
    }
  `}</style>
);
// 2. HERO SECTION
const Hero = () => (
  <section id="hero" className="section-wrapper" style={{ paddingTop: '220px', paddingBottom: '140px', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '-10%', left: '25%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,77,255,0.1) 0%, transparent 70%)', zIndex: 0, animation: 'pulseSlow 8s infinite ease-in-out' }} />
    <div className="container" style={{ zIndex: 10, textAlign: 'center' }}>
      <span className="badge-dev">Available for Internships & Full-Time Roles</span>
      <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.6rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '20px' }}>
        Hi, I am <span style={{ background: 'var(--gradient-cyan-purple)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'textGlow 4s infinite' }}>Fares Ahmed</span>
      </h1>
      <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>
        Web Developer & Data Analytics Enthusiast
      </h2>
      <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto 48px auto', lineHeight: 1.7 }}>
        Bridging the gap between robust frontend architectures and deep computational data intelligence. I build responsive React interfaces and high-impact Power BI business solutions.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <a href="#projects" className="btn-premium btn-primary">View Projects</a>
        <a href="#contact" className="btn-premium btn-secondary">Contact Me</a>
      </div>
    </div>
  </section>
);
// 3. ABOUT ME SECTION
const AboutMe = () => (
  <section id="about" className="section-wrapper reveal-section" style={{ background: '#06060d' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
        <div>
          <span className="badge-dev" style={{ color: '#7c4dff', borderColor: 'rgba(124, 77, 255, 0.2)', background: 'rgba(124, 77, 255, 0.05)' }}>My Identity</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '24px', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Architecting Technical Solutions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
            I am a passionate software developer focused on web architectures, business technology, and computational data models. I focus heavily on writing optimized code, creating premium user flows, and turning messy data rows into smart corporate indicators.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            My approach pairs semantic, accessible web components with backend service linkings, giving stakeholders comprehensive tracking tools and modern digital infrastructure.
          </p>
        </div>
        <div className="glass-card" style={{ padding: '40px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '28px', color: '#fff' }}>Core Competency Vector</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['React Framework', 'JavaScript Logic Architecture', 'Git & GitHub Versioning', 'Power BI Dashboarding', 'Responsive UI Layouts', 'Data Statistical Analytics'].map((exp, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>✓</span>
                <span style={{ color: 'var(--text-main)', fontSize: '0.98rem' }}>{exp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
// 4. SKILLS SECTION
const Skills = () => {
  const skillsList = [
    { name: 'HTML5 & Semantic Web', engine: 'Structure' },
    { name: 'CSS3 & Keyframes', engine: 'Styling Architecture' },
    { name: 'JavaScript ES6+', engine: 'Logical Engine' },
    { name: 'React.js Ecosystem', engine: 'Reactive Components' },
    { name: 'Git & GitHub Flow', engine: 'Version Control' },
    { name: 'Power BI Business Intelligence', engine: 'Data Warehousing' },
    { name: 'Data Interactive Visualization', engine: 'Analytics Models' },
    { name: 'Responsive Interface Design', engine: 'Viewport Optimization' }
  ];

  return (
    <section id="skills" className="section-wrapper reveal-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="badge-dev">Stack Capability</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Calibrated Tech Stack</h2>
        </div>
        <div className="grid-container">
          {skillsList.map((skill, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px 28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--gradient-cyan-purple)' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{skill.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{skill.engine}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// 5. PROJECTS SECTION
const Projects = () => {
  const projectHub = [
    {
      title: "Predictive Agency Suite",
      desc: "A premium SaaS web architecture concept tailored for data-driven agencies. Engineered with secure form logic, client rate-limiting protection, background looping, and custom keyframe animations.",
      tech: ["React", "JavaScript", "CSS", "EmailJS Secure Config"],
      demo: "https://developer-portfolio-ruby-pi.vercel.app",
      github: "https://github.com/fares201013/Developer-Portfolio-"
    },
    {
      title: "Real Estate Market Analytics Dashboard",
      desc: "An enterprise-grade Power BI decision matrix analyzing geographical real estate behavior, valuation adjustments, property tracking, and statistical trend predictions.",
      tech: ["Power BI", "Data Analytics", "Data Visualization", "Statistical Analysis"],
      demo: null,
      github: "https://github.com/fares201013/Developer-Portfolio-"
    }
  ];

  return (
    <section id="projects" className="section-wrapper reveal-section" style={{ background: '#06060d' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="badge-dev">Production Hub</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Featured Deployments</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {projectHub.map((proj, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '48px', display: 'flex', flexCombine: 'row', flexWrap: 'wrap', gap: '32px', justifyCombine: 'space-between' }}>
              <div style={{ flex: '1 1 500px' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '28px' }}>{proj.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                  {proj.tech.map((t, i) => (
                    <span key={i} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.85rem', color: '#b39ddb' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer" className="btn-premium btn-primary" style={{ padding: '12px 28px', fontSize: '0.88rem' }}>Live Demo</a>}
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn-premium btn-secondary" style={{ padding: '12px 28px', fontSize: '0.88rem' }}>GitHub Repository</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// 6. CONTACT SECTION
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section-wrapper reveal-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="badge-dev">Gateway Connection</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Initiate Connection Node</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Communication Routing</h3>
            <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ color: 'var(--accent-cyan)' }}>📞</div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PHONE NETWORK</p>
                <a href="tel:01009191695" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>01009191695</a>
              </div>
            </div>
            <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ color: 'var(--accent-purple)' }}>✉️</div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>SECURE EMAIL</p>
                <a href="mailto:faresa.no0r2009@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>faresa.no0r2009@gmail.com</a>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <a href="tel:01009191695" className="btn-premium btn-primary" style={{ flex: 1, padding: '14px', fontSize: '0.9rem' }}>Call Directly</a>
              <a href="mailto:faresa.no0r2009@gmail.com" className="btn-premium btn-secondary" style={{ flex: 1, padding: '14px', fontSize: '0.9rem' }}>Email Node</a>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '28px' }}>Transmission Portal</h3>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: '100%', background: 'var(--bg-input)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: '#fff', outline: 'none' }} required />
                </div>
                <div>
                  <input type="email" placeholder="Your Corporate Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: '100%', background: 'var(--bg-input)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: '#fff', outline: 'none' }} required />
                </div>
                <div>
                  <textarea rows="4" placeholder="Transmission Message Protocol..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ width: '100%', background: 'var(--bg-input)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: '#fff', outline: 'none', resize: 'none' }} required />
                </div>
                <button type="submit" className="btn-premium btn-primary" style={{ width: '100%', padding: '16px' }}>Send Secure Message</button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                ✓ Transmission Successful. Handshake link completed!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
// 7. MAIN APP CORE EXPORT
function App() {
  useEffect(() => {
    document.title = "Fares Ahmed | Professional Developer & Analyst Portfolio";

    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-section');
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add('active');
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <PortfolioStyles />
      
      <nav className="nav-bar">
        <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', background: 'var(--gradient-cyan-purple)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          FARES.DEV
        </div>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', position: 'relative' }}>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        
        <footer style={{ background: '#020205', textAlign: 'center', padding: '44px 20px', color: 'var(--text-muted)', fontSize: '0.88rem', borderTop: '1px solid var(--border)', letterSpacing: '0.02em' }}>
          &copy; 2026 Fares Ahmed. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}

export default App;