import React from 'react';

/**
 * Footer Component
 * Provides footer navigation, quick data actions (Reset sample data / Clear all),
 * and privacy notice.
 */
function Footer({ onResetToDefault, onClearAll }) {
  const handleReset = () => {
    if (window.confirm('Reset all subscriptions back to default sample data?')) {
      onResetToDefault();
    }
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear ALL subscriptions? This cannot be undone.')) {
      onClearAll();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-row">
        <div className="footer-brand-col">
          <div className="footer-brand" onClick={scrollToTop}>
            <span className="brand-icon">💳</span>
            <span className="brand-name">SubTrack ₹</span>
          </div>
          <p className="footer-tagline">
            A lightweight, 100% private React tool to track, normalize, and optimize your monthly & yearly subscriptions.
          </p>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-nav">
            <li><a href="#about-section">What Is It?</a></li>
            <li><a href="#how-it-works-section">How It Works</a></li>
            <li><a href="#tracker-section">Live Tracker</a></li>
            <li><a href="#tips-section">Money Saving Tips</a></li>
            <li><a href="#faq-section">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-data-col">
          <h4 className="footer-col-title">Data Management</h4>
          <p className="footer-data-desc">
            All items are stored in your browser's <code>localStorage</code>.
          </p>
          <div className="footer-btn-group">
            <button type="button" onClick={handleReset} className="btn-footer-action">
              🔄 Reset Sample Data
            </button>
            <button type="button" onClick={handleClear} className="btn-footer-action btn-footer-danger">
              🧹 Clear All Data
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom-row">
        <p className="footer-copyright">
          © {new Date().getFullYear()} SubTrack INR • Built with React & Plain CSS • Zero Tracking • 100% Private
        </p>
        <button type="button" onClick={scrollToTop} className="btn-back-to-top">
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
