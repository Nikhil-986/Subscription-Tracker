import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatIsIt from './components/WhatIsIt';
import HowItWorks from './components/HowItWorks';
import AnimatedWorkflowBoxes from './components/AnimatedWorkflowBoxes';
import DashboardSummary from './components/DashboardSummary';
import SubscriptionForm from './components/SubscriptionForm';
import SubscriptionList from './components/SubscriptionList';
import InteractiveCalculator from './components/InteractiveCalculator';
import IndianServicesDirectory from './components/IndianServicesDirectory';
import PrivacyArchitectureBox from './components/PrivacyArchitectureBox';
import SavingsGuide from './components/SavingsGuide';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import './App.css';

// Key used to store subscription items in browser localStorage
const LOCAL_STORAGE_KEY = 'beginner_subscription_tracker_data';

// Default sample data
const DEFAULT_SUBSCRIPTIONS = [
  {
    id: '1',
    name: 'Netflix Premium 4K',
    price: 649,
    billingCycle: 'Monthly',
    renewalDate: '2026-09-15',
  },
  {
    id: '2',
    name: 'Amazon Prime Video',
    price: 1499,
    billingCycle: 'Yearly',
    renewalDate: '2026-11-20',
  },
  {
    id: '3',
    name: 'Spotify Premium Individual',
    price: 119,
    billingCycle: 'Monthly',
    renewalDate: '2026-09-02',
  },
  {
    id: '4',
    name: 'YouTube Premium Family',
    price: 189,
    billingCycle: 'Monthly',
    renewalDate: '2026-09-25',
  },
  {
    id: '5',
    name: 'Disney+ Hotstar Super',
    price: 899,
    billingCycle: 'Yearly',
    renewalDate: '2026-12-10',
  },
];

/**
 * Main App Component
 * Orchestrates all sections and manages unified subscription state.
 */
function App() {
  /**
   * 1. Initialize State with Lazy Initializer from localStorage
   */
  const [subscriptions, setSubscriptions] = useState(() => {
    try {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedData !== null) {
        return JSON.parse(savedData);
      }
    } catch (error) {
      console.error('Error loading subscriptions from localStorage:', error);
    }
    return DEFAULT_SUBSCRIPTIONS;
  });

  /**
   * 2. Auto-save to localStorage using useEffect
   */
  useEffect(() => {
    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(subscriptions)
      );
    } catch (error) {
      console.error('Error saving subscriptions to localStorage:', error);
    }
  }, [subscriptions]);

  /**
   * Handlers for adding, deleting, and resetting subscriptions
   */
  const handleAddSubscription = (newSub) => {
    setSubscriptions((prevSubs) => [newSub, ...prevSubs]);
  };

  const handleDeleteSubscription = (idToDelete) => {
    setSubscriptions((prevSubs) =>
      prevSubs.filter((sub) => sub.id !== idToDelete)
    );
  };

  const handleResetToDefault = () => {
    setSubscriptions(DEFAULT_SUBSCRIPTIONS);
  };

  const handleClearAll = () => {
    setSubscriptions([]);
  };

  return (
    <div className="page-wrapper">
      {/* 1. Navigation Header */}
      <Navbar />

      <main className="main-content-flow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. What is it & Why Track Subscriptions */}
        <WhatIsIt />

        {/* 4. How it Works (Overview) */}
        <HowItWorks />

        {/* 5. Animated Interactive Boxes: How Tracker Works Engine Simulation */}
        <AnimatedWorkflowBoxes />

        {/* 6. Live Interactive Tracker Dashboard */}
        <section id="tracker-section" className="tracker-app-section" aria-labelledby="tracker-heading">
          <div className="section-header-wrap">
            <span className="section-kicker">⚡ Live Interactive Dashboard</span>
            <h2 id="tracker-heading" className="section-main-title">
              Your Subscription Tracker
            </h2>
            <p className="section-main-subtitle">
              Add your services below to automatically compute your monthly run-rate, estimated yearly budget, 
              and next upcoming renewal dates in Indian Rupees (₹).
            </p>
          </div>

          <div className="app-container">
            <DashboardSummary subscriptions={subscriptions} />
            <SubscriptionForm onAddSubscription={handleAddSubscription} />
            <SubscriptionList
              subscriptions={subscriptions}
              onDeleteSubscription={handleDeleteSubscription}
            />
          </div>
        </section>

        {/* 7. Interactive Long-term Cost & Waste Calculator */}
        <InteractiveCalculator />

        {/* 8. Popular Indian Subscriptions Benchmark Directory with One-Click Add */}
        <IndianServicesDirectory onQuickAdd={handleAddSubscription} />

        {/* 9. Privacy & Local Storage Architecture Breakdown */}
        <PrivacyArchitectureBox />

        {/* 10. Smart Savings & Budgeting Guide */}
        <SavingsGuide />

        {/* 11. Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* 12. Rich Footer */}
      <Footer
        onResetToDefault={handleResetToDefault}
        onClearAll={handleClearAll}
      />
    </div>
  );
}

export default App;
