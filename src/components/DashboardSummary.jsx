import React from 'react';

/**
 * Helper function to format numbers as Indian Rupee (INR) currency.
 * Example: 1499 -> "₹1,499" or "₹1,499.00"
 */
export const formatINR = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * DashboardSummary Component
 * Displays high-level metrics about user subscriptions:
 * 1. Total Active Subscriptions
 * 2. Total Monthly Spending
 * 3. Estimated Yearly Spending
 * 4. Next Upcoming Renewal
 */
function DashboardSummary({ subscriptions }) {
  // 1. Total active subscriptions count
  const totalCount = subscriptions.length;

  // 2. Calculate Total Monthly Spending
  // If cycle is 'Monthly', add the exact price.
  // If cycle is 'Yearly', add price divided by 12.
  const totalMonthlySpending = subscriptions.reduce((sum, sub) => {
    const monthlyCost =
      sub.billingCycle === 'Yearly' ? sub.price / 12 : sub.price;
    return sum + monthlyCost;
  }, 0);

  // 3. Estimated Yearly Spending is monthly spending multiplied by 12
  const estimatedYearlySpending = totalMonthlySpending * 12;

  // 4. Find the nearest upcoming renewal
  const getUpcomingRenewal = () => {
    if (subscriptions.length === 0) return null;

    // Clone and sort subscriptions by renewal date ascending
    const sorted = [...subscriptions].sort(
      (a, b) => new Date(a.renewalDate) - new Date(b.renewalDate)
    );

    // Try to find the earliest renewal date that is today or in the future
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = sorted.find((sub) => new Date(sub.renewalDate) >= today);

    // If none found in the future (e.g. past dates entered), fallback to the earliest sorted entry
    const nextSub = upcoming || sorted[0];

    // Format the date into a friendly readable string (e.g., "15 Oct 2026")
    const formattedDate = new Date(nextSub.renewalDate).toLocaleDateString(
      'en-IN',
      {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }
    );

    return {
      name: nextSub.name,
      date: formattedDate,
    };
  };

  const upcomingRenewal = getUpcomingRenewal();

  return (
    <section className="dashboard-summary" aria-label="Dashboard Summary">
      {/* Metric 1: Total Active Subscriptions */}
      <div className="summary-card">
        <div className="summary-icon">📋</div>
        <div className="summary-info">
          <span className="summary-label">Active Subscriptions</span>
          <h3 className="summary-value">{totalCount}</h3>
        </div>
      </div>

      {/* Metric 2: Monthly Spending */}
      <div className="summary-card">
        <div className="summary-icon">💳</div>
        <div className="summary-info">
          <span className="summary-label">Monthly Spending</span>
          <h3 className="summary-value">{formatINR(totalMonthlySpending)}</h3>
        </div>
      </div>

      {/* Metric 3: Yearly Spending */}
      <div className="summary-card">
        <div className="summary-icon">📈</div>
        <div className="summary-info">
          <span className="summary-label">Yearly Spending (Est.)</span>
          <h3 className="summary-value">{formatINR(estimatedYearlySpending)}</h3>
        </div>
      </div>

      {/* Metric 4: Upcoming Renewal */}
      <div className="summary-card">
        <div className="summary-icon">🔔</div>
        <div className="summary-info">
          <span className="summary-label">Next Renewal</span>
          {upcomingRenewal ? (
            <div className="summary-renewal">
              <h3 className="summary-value renewal-name">{upcomingRenewal.name}</h3>
              <span className="renewal-date">{upcomingRenewal.date}</span>
            </div>
          ) : (
            <h3 className="summary-value empty-text">None</h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default DashboardSummary;
