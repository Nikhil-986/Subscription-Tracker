import React from 'react';

/**
 * PrivacyArchitectureBox Component
 * Illustrates why client-side local storage architecture offers total security
 * compared to third-party bank linking apps.
 */
function PrivacyArchitectureBox() {
  return (
    <section id="privacy-section" className="info-section" aria-labelledby="privacy-heading">
      <div className="section-header-wrap">
        <span className="section-kicker">🛡️ Security & Privacy Architecture</span>
        <h2 id="privacy-heading" className="section-main-title">
          Why Client-Side Local Storage is 100% Private
        </h2>
        <p className="section-main-subtitle">
          Unlike apps that require your net-banking password or scrape your Gmail account for receipts, 
          SubTrack works entirely inside your browser's private sandbox.
        </p>
      </div>

      <div className="privacy-comparison-card">
        <div className="privacy-col traditional-cloud-col">
          <div className="privacy-badge badge-warning">⚠️ Traditional Cloud Trackers</div>
          <h3 className="privacy-col-title">Remote Server & Scraping</h3>
          <ul className="privacy-checklist">
            <li>Requires your email and phone number to sign up.</li>
            <li>Asks for SMS or bank credentials to auto-read transactions.</li>
            <li>Your financial net-worth and payment habits sit on third-party servers.</li>
            <li>Vulnerable to cloud data breaches, email spam, and ad targeting.</li>
          </ul>
        </div>

        <div className="privacy-col-divider">
          <span className="vs-badge">VS</span>
        </div>

        <div className="privacy-col local-vault-col">
          <div className="privacy-badge badge-shield">🔒 SubTrack Architecture</div>
          <h3 className="privacy-col-title">Zero-Server Local Sandbox</h3>
          <ul className="privacy-checklist">
            <li><strong>No Sign-Up:</strong> No email, password, or account needed.</li>
            <li><strong>Zero Network Calls:</strong> No analytics or tracking scripts.</li>
            <li><strong>Device-Bound:</strong> Data lives strictly in <code>window.localStorage</code> on your machine.</li>
            <li><strong>Instant Export/Clear:</strong> You own and control 100% of your data at all times.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PrivacyArchitectureBox;
