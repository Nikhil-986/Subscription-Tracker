import React from 'react';

/**
 * SavingsGuide Component
 * Provides actionable personal finance advice on saving money with subscriptions,
 * comparing annual vs monthly pricing, and conducting a 30-day subscription audit.
 */
function SavingsGuide() {
  return (
    <section id="tips-section" className="info-section" aria-labelledby="tips-heading">
      <div className="section-header-wrap">
        <span className="section-kicker">💰 Smart Budgeting</span>
        <h2 id="tips-heading" className="section-main-title">
          Smart Subscription Management & Savings Guide
        </h2>
        <p className="section-main-subtitle">
          Small adjustments in how you subscribe can save you ₹5,000 to ₹25,000 every year without losing 
          access to the content and tools you love.
        </p>
      </div>

      <div className="tips-grid">
        {/* Tip 1 */}
        <div className="tip-card">
          <div className="tip-header">
            <span className="tip-tag tag-blue">Strategy 01</span>
            <span className="tip-icon">📅</span>
          </div>
          <h3 className="tip-title">The "20% Annual Rule"</h3>
          <p className="tip-desc">
            Only buy yearly subscriptions if the discount is <strong>greater than 20%</strong> AND you have used the service continuously for at least 3 months. If you are trying a new platform, always start with monthly to avoid locking in upfront money.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="tip-card">
          <div className="tip-header">
            <span className="tip-tag tag-purple">Strategy 02</span>
            <span className="tip-icon">🔄</span>
          </div>
          <h3 className="tip-title">Rotate Your OTT Streaming Platforms</h3>
          <p className="tip-desc">
            Instead of paying for Netflix, Hotstar, Prime, and SonyLIV all at once, rotate them! Keep 1 or 2 active per month, binge the shows you want, cancel, and switch to another the next month.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="tip-card">
          <div className="tip-header">
            <span className="tip-tag tag-green">Strategy 03</span>
            <span className="tip-icon">👥</span>
          </div>
          <h3 className="tip-title">Leverage Family & Duo Plans</h3>
          <p className="tip-desc">
            Services like Spotify, YouTube Premium, and Apple One offer Family/Duo tiers that cut individual costs by <strong>50% to 70%</strong> when shared legally within households.
          </p>
        </div>

        {/* Tip 4 */}
        <div className="tip-card">
          <div className="tip-header">
            <span className="tip-tag tag-amber">Strategy 04</span>
            <span className="tip-icon">⏰</span>
          </div>
          <h3 className="tip-title">Set Renewal Reminders 3 Days Prior</h3>
          <p className="tip-desc">
            Credit cards and UPI e-mandates auto-debit immediately on renewal. Check this tracker weekly to identify subscriptions renewing within the next 3 days so you can cancel without accidental billing.
          </p>
        </div>
      </div>

      {/* 30-Day Subscription Audit Checklist */}
      <div className="audit-checklist-card">
        <h3 className="checklist-title">📋 The 30-Day Subscription Audit Checklist</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <span className="check-bullet">✅</span>
            <div>
              <strong>Frequency Check:</strong> Have I used this service in the last 14 days? If no, pause or cancel it.
            </div>
          </div>
          <div className="checklist-item">
            <span className="check-bullet">✅</span>
            <div>
              <strong>Tier Check:</strong> Am I paying for 4K / Multi-screen when I only watch on a single mobile screen?
            </div>
          </div>
          <div className="checklist-item">
            <span className="check-bullet">✅</span>
            <div>
              <strong>Bundling Check:</strong> Does my broadband, telecom plan, or credit card already offer this service for free?
            </div>
          </div>
          <div className="checklist-item">
            <span className="check-bullet">✅</span>
            <div>
              <strong>Free Trial Watch:</strong> Did I sign up for a 7-day trial? Add it to this tracker with the exact renewal date!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavingsGuide;
