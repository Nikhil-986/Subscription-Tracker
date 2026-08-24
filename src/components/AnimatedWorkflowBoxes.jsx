import React, { useState, useEffect } from 'react';

/**
 * AnimatedWorkflowBoxes Component
 * Displays 4 animated interactive simulation boxes illustrating how the tracker works in real-time.
 * Includes interactive tab controls, smooth pure-CSS animated pipelines, and step breakdowns.
 */
function AnimatedWorkflowBoxes() {
  const [activeStep, setActiveStep] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-cycle through the 4 steps every 6 seconds if autoPlay is true
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section id="workflow-animation-section" className="info-section" aria-labelledby="anim-heading">
      <div className="section-header-wrap">
        <span className="section-kicker">🎬 Animated Engine Preview</span>
        <h2 id="anim-heading" className="section-main-title">
          How the Subscription Tracker Works in Real-Time
        </h2>
        <p className="section-main-subtitle">
          Explore the internal mechanics behind normalization, renewal detection, and zero-leak local storage through these animated interactive boxes.
        </p>
      </div>

      {/* Step Selector Tabs */}
      <div className="anim-tab-controls">
        <button
          type="button"
          className={`anim-tab-btn ${activeStep === 1 ? 'tab-active' : ''}`}
          onClick={() => { setActiveStep(1); setAutoPlay(false); }}
        >
          <span className="tab-num">01</span>
          <span className="tab-title">Input & Typing</span>
        </button>

        <button
          type="button"
          className={`anim-tab-btn ${activeStep === 2 ? 'tab-active' : ''}`}
          onClick={() => { setActiveStep(2); setAutoPlay(false); }}
        >
          <span className="tab-num">02</span>
          <span className="tab-title">Math Normalization</span>
        </button>

        <button
          type="button"
          className={`anim-tab-btn ${activeStep === 3 ? 'tab-active' : ''}`}
          onClick={() => { setActiveStep(3); setAutoPlay(false); }}
        >
          <span className="tab-num">03</span>
          <span className="tab-title">Renewal Radar</span>
        </button>

        <button
          type="button"
          className={`anim-tab-btn ${activeStep === 4 ? 'tab-active' : ''}`}
          onClick={() => { setActiveStep(4); setAutoPlay(false); }}
        >
          <span className="tab-num">04</span>
          <span className="tab-title">Local Storage Vault</span>
        </button>
      </div>

      {/* Main Animated Display Container */}
      <div className="anim-stage-card">
        {/* Animated Box 1: Input & Typing Simulation */}
        {activeStep === 1 && (
          <div className="anim-box-content anim-fade-in">
            <div className="anim-box-header">
              <span className="anim-badge badge-blue">Engine Step 1: Input Capture</span>
              <h3 className="anim-box-title">Instant Field Validation & Data Packaging</h3>
            </div>
            <div className="anim-visual-grid">
              <div className="anim-mockup-form">
                <div className="mockup-input-row">
                  <span className="mockup-label">Service:</span>
                  <div className="mockup-input-box">
                    <span className="typing-text">Amazon Prime Video</span>
                    <span className="typing-cursor"></span>
                  </div>
                </div>
                <div className="mockup-input-row">
                  <span className="mockup-label">Price:</span>
                  <div className="mockup-input-box">
                    <span className="typing-price">₹1,499</span>
                    <span className="pill-badge pill-yearly">Yearly</span>
                  </div>
                </div>
                <div className="mockup-input-row">
                  <span className="mockup-label">Renewal Date:</span>
                  <div className="mockup-input-box">
                    <span>📅 15 Nov 2026</span>
                  </div>
                </div>
              </div>

              <div className="anim-explanation-box">
                <div className="flow-arrow-indicator">➡️ Packaging Object:</div>
                <pre className="code-payload-preview">
{`{
  id: "sub_17829384",
  name: "Amazon Prime Video",
  price: 1499,
  billingCycle: "Yearly",
  renewalDate: "2026-11-15"
}`}
                </pre>
                <p className="anim-step-note">
                  ✨ The form performs instant validation ensuring no empty fields and price &gt; ₹0.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Animated Box 2: Math Normalization */}
        {activeStep === 2 && (
          <div className="anim-box-content anim-fade-in">
            <div className="anim-box-header">
              <span className="anim-badge badge-purple">Engine Step 2: Math Normalization</span>
              <h3 className="anim-box-title">Yearly-to-Monthly True Run-Rate Calculation</h3>
            </div>
            <div className="anim-math-visual">
              <div className="math-formula-card">
                <div className="math-equation-row">
                  <div className="equation-part part-yearly">
                    <span className="eq-label">Annual Price</span>
                    <span className="eq-val">₹1,499.00</span>
                  </div>
                  <div className="equation-operator">÷</div>
                  <div className="equation-part part-months">
                    <span className="eq-label">Months in Year</span>
                    <span className="eq-val">12</span>
                  </div>
                  <div className="equation-operator">=</div>
                  <div className="equation-part part-monthly eq-glow">
                    <span className="eq-label">Monthly Run-Rate</span>
                    <span className="eq-val">₹124.92 / mo</span>
                  </div>
                </div>

                <div className="animated-progress-bar-wrap">
                  <div className="progress-label-row">
                    <span>Budget Allocation Impact</span>
                    <span>₹124.92 of Monthly Cap</span>
                  </div>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill animated-bar-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="anim-explanation-box">
                <h4>Why this calculation matters:</h4>
                <p>
                  Comparing a ₹199/mo Netflix plan with a ₹1,499/yr Prime plan is like comparing apples to oranges. 
                  By normalizing Prime to <strong>₹124.92/mo</strong>, you immediately realize it is actually cheaper per month!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Animated Box 3: Renewal Radar */}
        {activeStep === 3 && (
          <div className="anim-box-content anim-fade-in">
            <div className="anim-box-header">
              <span className="anim-badge badge-amber">Engine Step 3: Renewal Detection</span>
              <h3 className="anim-box-title">Chronological Radar & 3-Day Warning Threshold</h3>
            </div>
            <div className="anim-radar-visual">
              <div className="radar-timeline-container">
                <div className="timeline-line"></div>
                <div className="timeline-node node-today">
                  <div className="pulse-circle"></div>
                  <span className="node-icon">📍</span>
                  <span className="node-text">Today</span>
                </div>
                <div className="timeline-node node-warning">
                  <div className="pulse-warning-circle"></div>
                  <span className="node-icon">⚠️</span>
                  <span className="node-text">3 Days Before</span>
                  <span className="node-sub">Cancel Window</span>
                </div>
                <div className="timeline-node node-renewal">
                  <span className="node-icon">💳</span>
                  <span className="node-text">Renewal Date</span>
                  <span className="node-sub">Auto-Debit ₹649</span>
                </div>
              </div>

              <div className="anim-explanation-box">
                <h4>Sorting & Alert Algorithm:</h4>
                <p>
                  1. Filters out past dates.<br />
                  2. Sorts upcoming renewals in ascending order.<br />
                  3. Surfaces the closest renewal (e.g. <em>Netflix renewing in 3 days</em>) to the top of your dashboard.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Animated Box 4: LocalStorage Vault */}
        {activeStep === 4 && (
          <div className="anim-box-content anim-fade-in">
            <div className="anim-box-header">
              <span className="anim-badge badge-green">Engine Step 4: Local Storage Vault</span>
              <h3 className="anim-box-title">Zero Cloud Leakage • 100% Client-Side Sandbox</h3>
            </div>
            <div className="anim-vault-visual">
              <div className="vault-flow-container">
                <div className="vault-app-source">
                  <span className="source-icon">⚛️</span>
                  <span className="source-label">React State</span>
                </div>

                <div className="animated-data-stream">
                  <span className="stream-dot dot-1"></span>
                  <span className="stream-dot dot-2"></span>
                  <span className="stream-dot dot-3"></span>
                  <span className="stream-label">JSON.stringify()</span>
                </div>

                <div className="vault-storage-target">
                  <div className="vault-lock-badge">🔒 Encrypted Sandbox</div>
                  <span className="target-icon">🗄️</span>
                  <span className="target-label">Browser localStorage</span>
                </div>
              </div>

              <div className="anim-explanation-box">
                <h4>Zero Server Architecture:</h4>
                <p>
                  No data packets are ever transmitted over the network. 
                  Your budget is written directly to your local browser storage disk in less than <strong>0.5 milliseconds</strong>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Auto-Play Toggle & Status */}
        <div className="anim-footer-controls">
          <button
            type="button"
            className="btn-toggle-play"
            onClick={() => setAutoPlay(!autoPlay)}
          >
            {autoPlay ? '⏸ Pause Auto-Cycle' : '▶️ Resume Auto-Cycle'}
          </button>
          <span className="anim-step-counter">
            Showing Mechanism {activeStep} of 4
          </span>
        </div>
      </div>
    </section>
  );
}

export default AnimatedWorkflowBoxes;
