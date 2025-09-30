import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App
 * A simple, preview-ready single-page marketing layout.
 * Sections:
 * - Header with navigation
 * - Hero
 * - Services
 * - Portfolio
 * - About/Team
 * - Contact (simple form UI only)
 *
 * Theme notes:
 * - Uses existing CSS variables from App.css and applies a playful palette using inline styles.
 * - Provides a light/dark toggle while keeping the UI simple and preview-ready.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to <html> for existing CSS variable scheme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Playful theme colors from the work item style guide
  const colors = {
    primary: '#91bafd',
    secondary: '#ffc87a',
    accent: '#5954a6',
    bg: '#b8dcff',
    surface: '#fffffa',
    text: '#374151',
    gradient: 'linear-gradient(135deg, #ffd6e7 0%, #eadcff 50%, #d3e7ff 100%)',
  };

  // Basic inline styles to complement existing CSS variables for a vibrant, playful look
  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: colors.surface,
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
    },
    nav: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontWeight: 800,
      color: colors.text,
    },
    brandBadge: {
      width: 32,
      height: 32,
      borderRadius: 10,
      background: colors.primary,
      boxShadow: '0 6px 14px rgba(145,186,253,0.6)',
    },
    navList: {
      display: 'flex',
      gap: 18,
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: colors.text,
      textDecoration: 'none',
      fontWeight: 600,
      background: colors.primary,
      padding: '8px 12px',
      borderRadius: 12,
      boxShadow: '0 6px 16px rgba(145,186,253,0.5)',
    },
    hero: {
      background: colors.gradient,
      padding: '80px 20px',
      textAlign: 'center',
      color: colors.text,
    },
    heroInner: {
      maxWidth: 1100,
      margin: '0 auto',
    },
    heroTitle: {
      fontSize: '48px',
      lineHeight: 1.1,
      margin: '0 0 12px',
      color: colors.accent,
      textShadow: '0 3px 0 rgba(255,255,255,0.7)',
    },
    heroSubtitle: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: 24,
    },
    ctaRow: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    btnPrimary: {
      background: colors.accent,
      color: '#ffffff',
      padding: '12px 18px',
      border: 0,
      borderRadius: 14,
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: '0 8px 18px rgba(89,84,166,0.35)',
    },
    btnSecondary: {
      background: colors.secondary,
      color: colors.text,
      padding: '12px 18px',
      border: 0,
      borderRadius: 14,
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: '0 8px 18px rgba(255,200,122,0.35)',
    },
    section: {
      background: colors.surface,
      padding: '60px 20px',
      color: colors.text,
    },
    container: {
      maxWidth: 1100,
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: 32,
      margin: '0 0 24px',
      color: colors.accent,
    },
    cards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 16,
    },
    card: {
      background: '#ffffff',
      borderRadius: 16,
      padding: 20,
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 8px 18px rgba(0,0,0,0.06)',
    },
    portfolioItem: {
      background: '#ffffff',
      borderRadius: 16,
      padding: 16,
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 8px 18px rgba(0,0,0,0.06)',
      height: 140,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      color: colors.accent,
    },
    team: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 16,
    },
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 16,
      background: colors.primary,
      boxShadow: '0 8px 18px rgba(145,186,253,0.6)',
      marginBottom: 10,
    },
    contactForm: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
    },
    input: {
      padding: '12px 14px',
      borderRadius: 12,
      border: '1px solid rgba(0,0,0,0.12)',
      fontSize: 14,
    },
    textarea: {
      gridColumn: '1 / -1',
      padding: '12px 14px',
      borderRadius: 12,
      border: '1px solid rgba(0,0,0,0.12)',
      minHeight: 120,
      fontSize: 14,
    },
    submitRow: {
      gridColumn: '1 / -1',
      display: 'flex',
      justifyContent: 'flex-start',
      gap: 10,
      marginTop: 8,
    },
    footer: {
      background: colors.bg,
      padding: '20px',
      textAlign: 'center',
      color: colors.text,
    },
    themeToggle: {
      backgroundColor: 'var(--button-bg)',
      color: 'var(--button-text)',
      border: 'none',
      borderRadius: 12,
      padding: '8px 14px',
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
    },
  };

  return (
    <div className="App">
      {/* Header + Navigation */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.brand}>
            <span style={styles.brandBadge} aria-hidden="true" />
            <span>BrightWave Marketing</span>
          </div>
          <ul style={styles.navList}>
            <li><a style={styles.navLink} href="#hero">Hero</a></li>
            <li><a style={styles.navLink} href="#services">Services</a></li>
            <li><a style={styles.navLink} href="#portfolio">Portfolio</a></li>
            <li><a style={styles.navLink} href="#about">About</a></li>
            <li><a style={styles.navLink} href="#contact">Contact</a></li>
          </ul>
          <button
            style={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroInner}>
          <h1 style={styles.heroTitle}>Playful Marketing That Pops</h1>
          <p style={styles.heroSubtitle}>
            We craft colorful campaigns, bold brands, and delightful digital experiences.
          </p>
          <div style={styles.ctaRow}>
            <a href="#contact" style={{ ...styles.btnPrimary, textDecoration: 'none' }}>
              Get a Quote
            </a>
            <a href="#portfolio" style={{ ...styles.btnSecondary, textDecoration: 'none' }}>
              See Work
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Services</h2>
          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Branding</h3>
              <p>Logo, color systems, and playful brand identities that stand out.</p>
            </div>
            <div style={styles.card}>
              <h3>Campaigns</h3>
              <p>Social, email, and ads with engaging visuals and vibrant messaging.</p>
            </div>
            <div style={styles.card}>
              <h3>Web Design</h3>
              <p>Responsive, joyful websites that convert visitors to customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" style={{ ...styles.section, background: colors.bg }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Portfolio</h2>
          <div style={styles.cards}>
            <div style={styles.portfolioItem}>Case Study A</div>
            <div style={styles.portfolioItem}>Case Study B</div>
            <div style={styles.portfolioItem}>Case Study C</div>
            <div style={styles.portfolioItem}>Case Study D</div>
          </div>
        </div>
      </section>

      {/* About / Team */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>About / Team</h2>
          <p style={{ marginBottom: 20 }}>
            We’re a small crew of creative strategists and designers who love colorful ideas.
          </p>
          <div style={styles.team}>
            <div style={styles.card}>
              <div style={styles.avatar} aria-hidden="true" />
              <h4>Avery Joy</h4>
              <p>Creative Director</p>
            </div>
            <div style={styles.card}>
              <div style={styles.avatar} aria-hidden="true" />
              <h4>Sam Bright</h4>
              <p>Brand Designer</p>
            </div>
            <div style={styles.card}>
              <div style={styles.avatar} aria-hidden="true" />
              <h4>Riley Wave</h4>
              <p>Marketing Strategist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ ...styles.section, background: colors.bg }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! This is a preview form. Hook up submission later.');
            }}
            style={styles.contactForm}
          >
            <input style={styles.input} type="text" name="name" placeholder="Your Name" required />
            <input style={styles.input} type="email" name="email" placeholder="Email" required />
            <textarea style={styles.textarea} name="message" placeholder="Tell us about your project" />
            <div style={styles.submitRow}>
              <button type="submit" style={styles.btnPrimary}>Send Message</button>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.btnSecondary, textDecoration: 'none' }}
              >
                Learn React
              </a>
            </div>
          </form>
          <p style={{ marginTop: 12, opacity: 0.8 }}>Current theme: <strong>{theme}</strong></p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} BrightWave Marketing — Crafted with color.
      </footer>
    </div>
  );
}

export default App;
