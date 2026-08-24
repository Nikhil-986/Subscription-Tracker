import React, { useState } from 'react';

/**
 * FAQ Data items
 */
const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Where is my subscription data stored? Is it secure?',
    answer:
      'All your subscription data is stored exclusively in your local browser’s localStorage on your personal device. There is no remote backend, no third-party database, and no server collection. Your personal financial numbers never leave your machine.',
  },
  {
    id: 'faq-2',
    question: 'How is the monthly equivalent calculated for yearly subscriptions?',
    answer:
      'If you select "Yearly", the monthly equivalent is computed as (Yearly Price ÷ 12). For example, a ₹1,499 yearly subscription is normalized to ₹124.92/month. This allows you to understand your true recurring monthly run-rate alongside regular monthly bills.',
  },
  {
    id: 'faq-3',
    question: 'Will my subscriptions be lost when I refresh or close my browser?',
    answer:
      'No! Because the application uses browser localStorage, your subscriptions remain safely saved even if you refresh the page, close your browser, or restart your computer.',
  },
  {
    id: 'faq-4',
    question: 'Why doesn’t this app ask to link my bank account or credit card?',
    answer:
      'Most financial tracking apps that ask for bank logins or email credentials scrape your data, charge fees, and present privacy risks. This Subscription Tracker is 100% private, lightweight, zero-maintenance, and completely free.',
  },
  {
    id: 'faq-5',
    question: 'Can I use this tracker on my mobile phone or tablet?',
    answer:
      'Yes! The interface is fully responsive and optimized for mobile screens, tablets, laptops, and desktop displays with touch-friendly controls.',
  },
  {
    id: 'faq-6',
    question: 'How do I delete or edit a subscription?',
    answer:
      'You can easily remove any subscription by clicking the "🗑️ Delete" button on its card. A confirmation popup will appear to prevent accidental deletions.',
  },
];

/**
 * FaqSection Component
 * Interactive accordion for common user and beginner developer questions.
 */
function FaqSection() {
  // Store which FAQ items are currently expanded (open by default: first item)
  const [openItems, setOpenItems] = useState({ 'faq-1': true });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq-section" className="info-section" aria-labelledby="faq-heading">
      <div className="section-header-wrap">
        <span className="section-kicker">❓ Got Questions?</span>
        <h2 id="faq-heading" className="section-main-title">
          Frequently Asked Questions
        </h2>
        <p className="section-main-subtitle">
          Everything you need to know about privacy, calculations, and data storage in this application.
        </p>
      </div>

      <div className="faq-accordion">
        {FAQ_ITEMS.map((item) => {
          const isOpen = !!openItems[item.id];
          return (
            <div key={item.id} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-icon-toggle">{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && (
                <div id={`faq-answer-${item.id}`} className="faq-answer-body">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FaqSection;
