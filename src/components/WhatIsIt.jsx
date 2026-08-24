import React from 'react';

/**
 * WhatIsIt Component
 * Deep-dive educational section explaining what Subscription Tracker is,
 * the hidden danger of "subscription creep", and the 4 core pillars of the tool.
 */
function WhatIsIt() {
  return (
    <section id="about-section" className="info-section" aria-labelledby="about-heading">
      <div className="section-header-wrap">
        <span className="section-kicker">💡 Financial Clarity</span>
        <h2 id="about-heading" className="section-main-title">
          What is Subscription Tracker & Why Do You Need It?
        </h2>
        <p className="section-main-subtitle">
          The average modern user pays for 6 to 12 subscriptions across streaming, music, cloud storage, 
          fitness, and productivity tools. Individually they look cheap, but together they silently drain thousands of rupees every month.
        </p>
      </div>

      {/* The Dilemma: Subscription Creep Explained */}
      <div className="callout-box">
        <div className="callout-icon">🔍</div>
        <div className="callout-body">
          <h3 className="callout-title">The "Subscription Creep" Problem</h3>
          <p>
            When services bill you on different cycles (some monthly at ₹199, others yearly at ₹1,499), 
            it is almost impossible to know your <strong>actual monthly run-rate</strong>. 
            Before you know it, multiple auto-debit alerts hit your bank account on unexpected days, 
            making budgeting stressful and chaotic.
          </p>
        </div>
      </div>

      {/* Comparison Grid: Without vs With */}
      <div className="comparison-grid">
        <div className="comparison-card card-negative">
          <div className="comparison-badge badge-danger">❌ Without Tracking</div>
          <h3 className="comparison-title">Blind Auto-Debits</h3>
          <ul className="comparison-list">
            <li>Surprise SMS alerts for forgotten yearly renewals.</li>
            <li>No clear picture of true monthly recurring burn.</li>
            <li>Paying for services you haven't opened in months.</li>
            <li>Manual calculations to convert annual plans to monthly costs.</li>
          </ul>
        </div>

        <div className="comparison-card card-positive">
          <div className="comparison-badge badge-success">✨ With Subscription Tracker</div>
          <h3 className="comparison-title">Complete Financial Control</h3>
          <ul className="comparison-list">
            <li>Unified dashboard showing monthly & estimated yearly totals.</li>
            <li>Automatic conversion of yearly fees to monthly equivalent (₹/mo).</li>
            <li>Instant upcoming renewal alerts so you can cancel before you're charged.</li>
            <li>100% private — your personal budget never leaves your browser.</li>
          </ul>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="pillars-grid">
        <div className="pillar-card">
          <div className="pillar-icon">⚖️</div>
          <h3 className="pillar-title">1. Normalized Cost Metrics</h3>
          <p className="pillar-desc">
            A yearly plan of ₹1,499 sounds like a one-off payment, but it’s actually a commitment of ₹124.92/month. 
            We normalize every expense so you can compare services fairly.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">🗓️</div>
          <h3 className="pillar-title">2. Proactive Renewal Calendar</h3>
          <p className="pillar-desc">
            Know exactly which bill is coming up next. You get enough lead time to decide whether to renew, 
            pause, downgrade, or cancel.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">🔒</div>
          <h3 className="pillar-title">3. Absolute Privacy & Safety</h3>
          <p className="pillar-desc">
            No bank linking, no email signup, and no backend tracking. Everything lives exclusively in your browser's 
            encrypted local sandbox.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">💰</div>
          <h3 className="pillar-title">4. Smarter Rupee Savings</h3>
          <p className="pillar-desc">
            Spot redundant subscriptions instantly (e.g. paying for 3 video streaming services when you only watch one).
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIsIt;
