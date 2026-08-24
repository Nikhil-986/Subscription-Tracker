import React, { useState } from 'react';

/**
 * SubscriptionForm Component
 * Allows users to add a new subscription with validation.
 *
 * Props:
 * - onAddSubscription: callback function passed from parent (App.jsx) to add the new subscription
 */
function SubscriptionForm({ onAddSubscription }) {
  // Local state for each form input field
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [billingCycle, setBillingCycle] = useState('Monthly');
  const [renewalDate, setRenewalDate] = useState('');

  // State to hold any validation error messages
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Handle form submission and validation
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validation: Check that name is not empty
    if (!name.trim()) {
      setErrorMessage('Please enter a subscription name.');
      return;
    }

    // 2. Validation: Check that price is entered and greater than 0
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      setErrorMessage('Please enter a valid price greater than ₹0.');
      return;
    }

    // 3. Validation: Check that renewal date is selected
    if (!renewalDate) {
      setErrorMessage('Please select a renewal date.');
      return;
    }

    // Clear any previous error message
    setErrorMessage('');

    // Create a new subscription object with unique ID
    const newSubscription = {
      id: Date.now().toString(), // Simple unique ID using timestamp
      name: name.trim(),
      price: parsedPrice,
      billingCycle: billingCycle,
      renewalDate: renewalDate,
    };

    // Pass the new subscription to parent App component
    onAddSubscription(newSubscription);

    // Reset the form fields back to default values
    setName('');
    setPrice('');
    setBillingCycle('Monthly');
    setRenewalDate('');
  };

  return (
    <section className="form-container" aria-labelledby="form-heading">
      <h2 id="form-heading" className="section-title">
        ➕ Add New Subscription
      </h2>

      {/* Display validation error message if present */}
      {errorMessage && (
        <div className="error-alert" role="alert">
          <span>⚠️ {errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="subscription-form" noValidate>
        {/* Subscription Name */}
        <div className="form-group">
          <label htmlFor="sub-name">Subscription Name</label>
          <input
            id="sub-name"
            type="text"
            placeholder="e.g. Netflix, Spotify, Prime"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>

        {/* Subscription Price */}
        <div className="form-group">
          <label htmlFor="sub-price">Price (₹)</label>
          <div className="price-input-wrapper">
            <span className="currency-prefix">₹</span>
            <input
              id="sub-price"
              type="number"
              min="0.01"
              step="any"
              placeholder="e.g. 499"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-input price-input"
              required
            />
          </div>
        </div>

        {/* Billing Cycle */}
        <div className="form-group">
          <label htmlFor="sub-cycle">Billing Cycle</label>
          <select
            id="sub-cycle"
            value={billingCycle}
            onChange={(e) => setBillingCycle(e.target.value)}
            className="form-input form-select"
          >
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        {/* Renewal Date */}
        <div className="form-group">
          <label htmlFor="sub-date">Renewal Date</label>
          <input
            id="sub-date"
            type="date"
            value={renewalDate}
            onChange={(e) => setRenewalDate(e.target.value)}
            className="form-input"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-group form-button-group">
          <button type="submit" className="btn btn-primary">
            Add Subscription
          </button>
        </div>
      </form>
    </section>
  );
}

export default SubscriptionForm;
