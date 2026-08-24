import React from 'react';

/**
 * Navbar Component
 * Provides clean header navigation for quick jumping between informative sections.
 */
function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="site-navbar" aria-label="Main Navigation">
      <div className="nav-container">
        <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="brand-icon">💳</span>
          <span className="brand-name">SubTrack <span className="brand-currency">₹</span></span>
        </div>

        <ul className="nav-links">
          <li>
            <button type="button" onClick={() => scrollToSection('about-section')} className="nav-link-btn">
              What Is It?
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('workflow-animation-section')} className="nav-link-btn">
              🎬 Animated Engine
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('tracker-section')} className="nav-link-btn">
              Live Tracker
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('calculator-section')} className="nav-link-btn">
              🧮 Calculator
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('directory-section')} className="nav-link-btn">
              Directory
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('tips-section')} className="nav-link-btn">
              Money Tips
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('faq-section')} className="nav-link-btn">
              FAQ
            </button>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => scrollToSection('tracker-section')}
          className="btn btn-nav-cta"
        >
          Open Tracker ⚡
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
