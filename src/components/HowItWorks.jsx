import React from 'react';

/**
 * HowItWorks Component
 * Step-by-step breakdown of how the application computes metrics, manages state,
 * and preserves data locally with a rock-solid native visual workflow banner.
 */
function HowItWorks() {
  return (
    <section id="how-it-works-section" className="info-section" aria-labelledby="how-heading">
      <div className="section-header-wrap">
        <span className="section-kicker">⚙️ Behind the Scenes</span>
        <h2 id="how-heading" className="section-main-title">
          How It Works: 4 Simple Steps
        </h2>
        <p className="section-main-subtitle">
          Designed for simplicity, accuracy, and maximum privacy. Here is how our lightweight React engine 
          processes your subscription numbers in real-time.
        </p>
      </div>

      {/* Native Non-Fluctuating Infographic Workflow Banner */}
      <div className="workflow-banner-container">
        <div className="workflow-banner-card">
          <div className="banner-step-item">
            <div className="banner-step-circle circle-blue">1</div>
            <div className="banner-step-text">
              <strong>Add Service</strong>
              <span>Name, ₹ Price & Cycle</span>
            </div>
          </div>

          <div className="banner-connector-arrow">➔</div>

          <div className="banner-step-item">
            <div className="banner-step-circle circle-purple">2</div>
            <div className="banner-step-text">
              <strong>Normalize Cost</strong>
              <span>Yearly ÷ 12 Math</span>
            </div>
          </div>

          <div className="banner-connector-arrow">➔</div>

          <div className="banner-step-item">
            <div className="banner-step-circle circle-amber">3</div>
            <div className="banner-step-text">
              <strong>Renewal Radar</strong>
              <span>Upcoming Date Alert</span>
            </div>
          </div>

          <div className="banner-connector-arrow">➔</div>

          <div className="banner-step-item">
            <div className="banner-step-circle circle-green">4</div>
            <div className="banner-step-text">
              <strong>Local Vault</strong>
              <span>100% Private Storage</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Interactive Detailed Steps */}
      <div className="steps-container">
        {/* Step 1 */}
        <div className="step-card">
          <div className="step-number-badge">Step 01</div>
          <div className="step-content">
            <h3 className="step-title">Enter Your Subscription Details</h3>
            <p className="step-description">
              Provide the service name (e.g., <em>Netflix, Amazon Prime, Spotify</em>), the exact price in <strong>₹ INR</strong>, 
              select whether it's billed <strong>Monthly</strong> or <strong>Yearly</strong>, and choose your next renewal date.
            </p>
            <div className="step-code-hint">
              <code>Validation: Name is required • Price &gt; ₹0 • Date must be picked</code>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step-card">
          <div className="step-number-badge">Step 02</div>
          <div className="step-content">
            <h3 className="step-title">Automatic Normalization & Math</h3>
            <p className="step-description">
              Yearly subscriptions are automatically divided by 12 to calculate the true monthly cost. 
              The dashboard immediately calculates:
            </p>
            <ul className="step-list">
              <li><strong>Total Monthly Spending:</strong> \(\sum (\text{Monthly Subscriptions}) + \sum (\text{Yearly Subscriptions} \div 12)\)</li>
              <li><strong>Estimated Yearly Spending:</strong> \(\text{Total Monthly Spending} \times 12\)</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step-card">
          <div className="step-number-badge">Step 03</div>
          <div className="step-content">
            <h3 className="step-title">Smart Upcoming Renewal Detection</h3>
            <p className="step-description">
              The algorithm evaluates all active subscription dates, sorts them chronologically, and immediately highlights 
              the <strong>next impending payment</strong> so you never get caught off guard.
            </p>
            <div className="step-code-hint">
              <code>Algorithm: Clones list &rarr; Sorts by Date Ascending &rarr; Picks nearest date &ge; Today</code>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="step-card">
          <div className="step-number-badge">Step 04</div>
          <div className="step-content">
            <h3 className="step-title">Instant Browser Persistence</h3>
            <p className="step-description">
              Whenever you add or delete a subscription, React’s <code>useEffect</code> hook automatically serializes the data 
              into JSON and stores it in your browser’s <code>localStorage</code>.
            </p>
            <div className="step-code-hint">
              <code>localStorage.setItem('data', JSON.stringify(subscriptions))</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
