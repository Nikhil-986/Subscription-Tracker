import React from 'react';
import SubscriptionCard from './SubscriptionCard';

/**
 * SubscriptionList Component
 * Renders the list of subscriptions or an empty state message if list is empty.
 *
 * Props:
 * - subscriptions: array of subscription objects
 * - onDeleteSubscription: callback function to delete a subscription by ID
 */
function SubscriptionList({ subscriptions, onDeleteSubscription }) {
  return (
    <section className="list-container" aria-labelledby="list-heading">
      <div className="list-header">
        <h2 id="list-heading" className="section-title">
          📑 Your Subscriptions
        </h2>
        {subscriptions.length > 0 && (
          <span className="count-badge">
            {subscriptions.length} {subscriptions.length === 1 ? 'item' : 'items'}
          </span>
        )}
      </div>

      {/* Conditional Rendering: Check if there are subscriptions */}
      {subscriptions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <p className="empty-text">No subscriptions yet. Add your first one above.</p>
        </div>
      ) : (
        <div className="subscriptions-grid">
          {subscriptions.map((subscription) => (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
              onDelete={onDeleteSubscription}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SubscriptionList;
