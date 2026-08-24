import React from 'react';

/**
 * HeroSection Component
 * Introduces the application with a bold value proposition, quick actions,
 * and a rock-solid, non-fluctuating native dashboard UI showcase preview.
 */
function HeroSection() {
  const scrollToTracker = () => {
    const el = document.getElementById('tracker-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('workflow-animation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" aria-label="Introduction">
      <div className="hero-badge">
        <span className="badge-flag">🇮🇳</span> Built for Indian Rupee (₹) • 100% Private & Free
      </div>

      <h1 className="hero-headline">
        Master Your Recurring Expenses & <br className="hide-on-mobile" />
        <span className="hero-highlight">Take Control of Subscriptions</span>
      </h1>

      <p className="hero-subheadline">
        Stop losing money to forgotten auto-debits and scattered recurring bills. 
        Subscription Tracker standardizes monthly and yearly expenses, alerts you before renewal dates, 
        and keeps 100% of your financial data safe in your browser.
      </p>

      <div className="hero-actions">
        <button type="button" onClick={scrollToTracker} className="btn btn-hero-primary">
          Start Tracking Now — It’s Free
        </button>
        <button type="button" onClick={scrollToHowItWorks} className="btn btn-hero-secondary">
          See How It Works 🎬
        </button>
      </div>

      {/* 100% Stable, Non-Fluctuating Native Dashboard UI Showcase */}
      <div className="demo-showcase-container">
        <div className="mockup-window">
          {/* Mockup Top Browser Chrome */}
          <div className="mockup-header">
            <div className="mockup-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="mockup-address-bar">
              🔒 https://app.subscriptiontracker.local/dashboard
            </div>
            <div className="mockup-actions">🇮🇳 ₹ INR Dashboard</div>
          </div>

          {/* Native High-Resolution Showcase UI (Zero Image Loading Fluctuation) */}
          <div className="mockup-dashboard-preview">
            {/* Top Metrics Cards Row */}
            <div className="mini-stats-grid">
              <div className="mini-stat-card">
                <div className="mini-stat-icon">📋</div>
                <div className="mini-stat-info">
                  <span className="mini-stat-label">Active Subscriptions</span>
                  <span className="mini-stat-val">16 Active</span>
                  <span className="mini-stat-sub text-green">● All systems normal</span>
                </div>
              </div>

              <div className="mini-stat-card highlight-card">
                <div className="mini-stat-icon">💳</div>
                <div className="mini-stat-info">
                  <span className="mini-stat-label">Total Monthly Spend</span>
                  <span className="mini-stat-val">₹14,850</span>
                  <span className="mini-stat-sub text-blue">Normalized Run-Rate</span>
                </div>
              </div>

              <div className="mini-stat-card">
                <div className="mini-stat-icon">📈</div>
                <div className="mini-stat-info">
                  <span className="mini-stat-label">Yearly Forecast</span>
                  <span className="mini-stat-val">₹1,78,200</span>
                  <span className="mini-stat-sub text-purple">12-Month Projection</span>
                </div>
              </div>

              <div className="mini-stat-card alert-card">
                <div className="mini-stat-icon">🔔</div>
                <div className="mini-stat-info">
                  <span className="mini-stat-label">Upcoming Renewals</span>
                  <span className="mini-stat-val text-amber">3 Alerts</span>
                  <span className="mini-stat-sub text-amber">Nearest: in 3 Days</span>
                </div>
              </div>
            </div>

            {/* Subscriptions Grid Preview */}
            <div className="mini-subs-grid">
              <div className="mini-sub-card">
                <div className="mini-sub-top">
                  <span className="mini-sub-icon-badge">🍿</span>
                  <span className="mini-sub-badge badge-monthly-pill">Monthly</span>
                </div>
                <h4 className="mini-sub-title">Netflix Premium 4K</h4>
                <div className="mini-sub-pricing">
                  <span className="mini-sub-price">₹649</span>
                  <span className="mini-sub-period">/mo</span>
                </div>
                <div className="mini-sub-renewal">📅 Next: 15 Sep 2026</div>
              </div>

              <div className="mini-sub-card">
                <div className="mini-sub-top">
                  <span className="mini-sub-icon-badge">📦</span>
                  <span className="mini-sub-badge badge-yearly-pill">Yearly</span>
                </div>
                <h4 className="mini-sub-title">Amazon Prime Video</h4>
                <div className="mini-sub-pricing">
                  <span className="mini-sub-price">₹1,499</span>
                  <span className="mini-sub-period">/yr</span>
                </div>
                <div className="mini-sub-equiv">Eq: <strong>₹124.92/mo</strong></div>
                <div className="mini-sub-renewal">📅 Next: 20 Nov 2026</div>
              </div>

              <div className="mini-sub-card">
                <div className="mini-sub-top">
                  <span className="mini-sub-icon-badge">🎵</span>
                  <span className="mini-sub-badge badge-monthly-pill">Monthly</span>
                </div>
                <h4 className="mini-sub-title">Spotify Premium</h4>
                <div className="mini-sub-pricing">
                  <span className="mini-sub-price">₹119</span>
                  <span className="mini-sub-period">/mo</span>
                </div>
                <div className="mini-sub-renewal">📅 Next: 02 Sep 2026</div>
              </div>

              <div className="mini-sub-card">
                <div className="mini-sub-top">
                  <span className="mini-sub-icon-badge">✨</span>
                  <span className="mini-sub-badge badge-yearly-pill">Yearly</span>
                </div>
                <h4 className="mini-sub-title">Disney+ Hotstar</h4>
                <div className="mini-sub-pricing">
                  <span className="mini-sub-price">₹899</span>
                  <span className="mini-sub-period">/yr</span>
                </div>
                <div className="mini-sub-equiv">Eq: <strong>₹74.92/mo</strong></div>
                <div className="mini-sub-renewal">📅 Next: 10 Dec 2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights beneath demo */}
        <div className="hero-pill-grid">
          <div className="hero-pill">
            <span className="pill-icon">⚡</span>
            <span><strong>Instant Normalization:</strong> Yearly plans divided by 12 for true run-rate</span>
          </div>
          <div className="hero-pill">
            <span className="pill-icon">🛡️</span>
            <span><strong>Zero Cloud Tracking:</strong> 100% offline browser localStorage storage</span>
          </div>
          <div className="hero-pill">
            <span className="pill-icon">🔔</span>
            <span><strong>Renewal Radar:</strong> Earliest upcoming payment date highlighted</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
