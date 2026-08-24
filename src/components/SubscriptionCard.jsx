import React from 'react';
import { formatINR } from './DashboardSummary';

/**
 * SubscriptionCard Component
 * Displays the details of a single subscription.
 *
 * Props:
 * - subscription: object containing { id, name, price, billingCycle, renewalDate }
 * - onDelete: callback function to delete this subscription
 */
function SubscriptionCard({ subscription, onDelete }) {
  const { id, name, price, billingCycle, renewalDate } = subscription;

  // Calculate monthly equivalent cost
  // If yearly, monthly equivalent = price / 12
  const monthlyEquivalent =
    billingCycle === 'Yearly' ? price / 12 : price;

  // Format renewal date nicely (e.g., "12 Nov 2026")
  const formattedDate = new Date(renewalDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  /**
   * Prompt user with confirmation popup before deleting
   */
  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete "${name}" subscription?`
    );
    if (isConfirmed) {
      onDelete(id);
    }
  };

  return (
    <article className="subscription-card" aria-label={`Subscription for ${name}`}>
      {/* Card Header: Name and Billing Cycle Badge */}
      <div className="card-header">
        <div className="card-title-wrap">
          <h3 className="subscription-name">{name}</h3>
          <span
            className={`cycle-badge ${
              billingCycle === 'Yearly' ? 'badge-yearly' : 'badge-monthly'
            }`}
          >
            {billingCycle}
          </span>
        </div>

        {/* Delete Button */}
        <button
          type="button"
          onClick={handleDeleteClick}
          className="btn-delete"
          title={`Delete ${name}`}
          aria-label={`Delete ${name} subscription`}
        >
          🗑️ Delete
        </button>
      </div>

      {/* Card Body: Pricing and Details */}
      <div className="card-body">
        {/* Main Price Display */}
        <div className="price-display">
          <span className="price-amount">{formatINR(price)}</span>
          <span className="price-period">
            /{billingCycle === 'Yearly' ? 'yr' : 'mo'}
          </span>
        </div>

        {/* Breakdown Details Grid */}
        <div className="card-meta">
          <div className="meta-item">
            <span className="meta-label">Monthly Equivalent:</span>
            <span className="meta-value monthly-highlight">
              {formatINR(monthlyEquivalent)}/mo
            </span>
          </div>

          <div className="meta-item">
            <span className="meta-label">Renewal Date:</span>
            <span className="meta-value">{formattedDate}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default SubscriptionCard;
