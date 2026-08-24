import React, { useState } from 'react';
import { formatINR } from './DashboardSummary';

/**
 * InteractiveCalculator Component
 * Lets users calculate their 1-year, 3-year, and 5-year subscription commitments
 * and reveals how much money they likely waste on unused recurring services.
 */
function InteractiveCalculator() {
  const [subscriptionCount, setSubscriptionCount] = useState(6);
  const [estimatedMonthlySpend, setEstimatedMonthlySpend] = useState(2400);

  // Math Calculations
  const yearlySpend = estimatedMonthlySpend * 12;
  const threeYearSpend = estimatedMonthlySpend * 36;
  const fiveYearSpend = estimatedMonthlySpend * 60;

  // Average industry data shows ~28% of subscription spend is wasted on unused or duplicate services
  const annualWastedAmount = yearlySpend * 0.28;
  const threeYearSavings = threeYearSpend * 0.28;

  return (
    <section id="calculator-section" className="info-section" aria-labelledby="calc-heading">
      <div className="section-header-wrap">
        <span className="section-kicker">🧮 Interactive Finance Tool</span>
        <h2 id="calc-heading" className="section-main-title">
          Subscription Waste & Long-Term Cost Calculator
        </h2>
        <p className="section-main-subtitle">
          Adjust the sliders below to see your cumulative commitment over 1, 3, and 5 years, 
          and uncover how much money you could recover by auditing unused apps.
        </p>
      </div>

      <div className="calculator-box-card">
        {/* Controls Column */}
        <div className="calc-controls-col">
          <div className="calc-input-group">
            <div className="calc-label-row">
              <label htmlFor="sub-count-range">Number of Active Subscriptions</label>
              <span className="calc-badge-val">{subscriptionCount} services</span>
            </div>
            <input
              id="sub-count-range"
              type="range"
              min="1"
              max="25"
              value={subscriptionCount}
              onChange={(e) => setSubscriptionCount(Number(e.target.value))}
              className="calc-slider"
            />
            <div className="slider-limits">
              <span>1 service</span>
              <span>12 (Avg)</span>
              <span>25 services</span>
            </div>
          </div>

          <div className="calc-input-group">
            <div className="calc-label-row">
              <label htmlFor="monthly-spend-range">Estimated Monthly Recurring Spend (₹)</label>
              <span className="calc-badge-val highlight-val">{formatINR(estimatedMonthlySpend)}</span>
            </div>
            <input
              id="monthly-spend-range"
              type="range"
              min="200"
              max="15000"
              step="100"
              value={estimatedMonthlySpend}
              onChange={(e) => setEstimatedMonthlySpend(Number(e.target.value))}
              className="calc-slider"
            />
            <div className="slider-limits">
              <span>₹200</span>
              <span>₹5,000</span>
              <span>₹15,000+</span>
            </div>
          </div>

          <div className="calc-tip-pill">
            💡 <em>Did you know?</em> The average Indian digital consumer underestimates their monthly subscription costs by <strong>35%</strong> due to annual renewals.
          </div>
        </div>

        {/* Results Metrics Column */}
        <div className="calc-results-col">
          <h3 className="results-header-title">📊 Your Cumulative Cost Projections</h3>

          <div className="projection-grid">
            <div className="projection-card">
              <span className="proj-label">1-Year Cost</span>
              <span className="proj-val">{formatINR(yearlySpend)}</span>
            </div>

            <div className="projection-card">
              <span className="proj-label">3-Year Cost</span>
              <span className="proj-val">{formatINR(threeYearSpend)}</span>
            </div>

            <div className="projection-card">
              <span className="proj-label">5-Year Cost</span>
              <span className="proj-val proj-highlight">{formatINR(fiveYearSpend)}</span>
            </div>
          </div>

          {/* Waste & Savings Callout Box */}
          <div className="savings-highlight-box">
            <div className="savings-icon">💸</div>
            <div className="savings-details">
              <h4 className="savings-title">Estimated Annual Waste: {formatINR(annualWastedAmount)}</h4>
              <p className="savings-text">
                By doing a 10-minute monthly audit with this tracker, you can easily save approximately <strong>{formatINR(threeYearSavings)}</strong> over the next 3 years!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveCalculator;
