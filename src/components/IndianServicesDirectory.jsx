import React, { useState } from 'react';
import { formatINR } from './DashboardSummary';

/**
 * Benchmark list of popular Indian subscription services
 */
const POPULAR_SERVICES = [
  {
    category: 'OTT & Streaming',
    services: [
      { name: 'Netflix Mobile', price: 149, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '🍿' },
      { name: 'Netflix Premium 4K', price: 649, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '🍿' },
      { name: 'Amazon Prime Video', price: 1499, billingCycle: 'Yearly', defaultCycle: 'Yearly', icon: '📦' },
      { name: 'Disney+ Hotstar Super', price: 899, billingCycle: 'Yearly', defaultCycle: 'Yearly', icon: '✨' },
      { name: 'Sony LIV Premium', price: 999, billingCycle: 'Yearly', defaultCycle: 'Yearly', icon: '📺' },
      { name: 'JioCinema Premium', price: 29, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '🎬' },
    ],
  },
  {
    category: 'Music & Audiobooks',
    services: [
      { name: 'Spotify Individual', price: 119, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '🎵' },
      { name: 'Spotify Duo (2 Accounts)', price: 149, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '🎧' },
      { name: 'YouTube Premium Family', price: 189, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '▶️' },
      { name: 'Apple Music Individual', price: 99, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '🍎' },
      { name: 'Audible Membership', price: 199, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '📚' },
    ],
  },
  {
    category: 'AI & Productivity Tools',
    services: [
      { name: 'ChatGPT Plus (OpenAI)', price: 1999, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '🤖' },
      { name: 'Claude Pro (Anthropic)', price: 1999, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '🧠' },
      { name: 'Google One (100 GB)', price: 130, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '☁️' },
      { name: 'iCloud+ (50 GB)', price: 75, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '☁️' },
      { name: 'Microsoft 365 Personal', price: 4899, billingCycle: 'Yearly', defaultCycle: 'Yearly', icon: '💼' },
    ],
  },
  {
    category: 'Food, Quick Commerce & Delivery',
    services: [
      { name: 'Swiggy One', price: 899, billingCycle: 'Yearly', defaultCycle: 'Yearly', icon: '🍔' },
      { name: 'Zomato Gold', price: 999, billingCycle: 'Yearly', defaultCycle: 'Yearly', icon: '🍕' },
      { name: 'Blinkit Club', price: 199, billingCycle: 'Monthly', defaultCycle: 'Monthly', icon: '⚡' },
    ],
  },
];

/**
 * IndianServicesDirectory Component
 * Shows benchmark pricing of popular Indian digital services and allows users
 * to quickly click "Add to Tracker" to pre-fill their tracker without typing.
 */
function IndianServicesDirectory({ onQuickAdd }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedNotice, setAddedNotice] = useState('');

  const handleQuickAdd = (service) => {
    // Generate a renewal date ~30 days in future for monthly, ~365 days for yearly
    const futureDate = new Date();
    if (service.billingCycle === 'Yearly') {
      futureDate.setFullYear(futureDate.getFullYear() + 1);
    } else {
      futureDate.setDate(futureDate.getDate() + 30);
    }
    const renewalDateStr = futureDate.toISOString().split('T')[0];

    const newSub = {
      id: Date.now().toString(),
      name: service.name,
      price: service.price,
      billingCycle: service.billingCycle,
      renewalDate: renewalDateStr,
    };

    onQuickAdd(newSub);

    setAddedNotice(`Added "${service.name}" to your live tracker!`);
    setTimeout(() => setAddedNotice(''), 3500);
  };

  const categories = ['All', ...POPULAR_SERVICES.map((cat) => cat.category)];

  const displayedCategories =
    selectedCategory === 'All'
      ? POPULAR_SERVICES
      : POPULAR_SERVICES.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="directory-section" className="info-section" aria-labelledby="dir-heading">
      <div className="section-header-wrap">
        <span className="section-kicker">📚 Benchmark Directory</span>
        <h2 id="dir-heading" className="section-main-title">
          Popular Indian Subscriptions Directory
        </h2>
        <p className="section-main-subtitle">
          Browse benchmark pricing for top streaming, AI, music, delivery, and cloud tools in India. 
          Click <strong>"+ Quick Add"</strong> on any service to automatically add it to your live tracker above.
        </p>
      </div>

      {/* Added Notification Toast */}
      {addedNotice && (
        <div className="quick-add-toast" role="status">
          <span>🎉 {addedNotice}</span>
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="category-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`category-pill-btn ${selectedCategory === cat ? 'cat-active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Directory Grid */}
      <div className="directory-sections-stack">
        {displayedCategories.map((group) => (
          <div key={group.category} className="directory-group">
            <h3 className="directory-group-title">{group.category}</h3>
            <div className="directory-cards-grid">
              {group.services.map((serv) => (
                <div key={serv.name} className="benchmark-card">
                  <div className="benchmark-header">
                    <span className="benchmark-icon">{serv.icon}</span>
                    <span className={`benchmark-cycle-pill ${serv.billingCycle === 'Yearly' ? 'pill-yr' : 'pill-mo'}`}>
                      {serv.billingCycle}
                    </span>
                  </div>

                  <h4 className="benchmark-name">{serv.name}</h4>

                  <div className="benchmark-pricing">
                    <span className="benchmark-price">{formatINR(serv.price)}</span>
                    <span className="benchmark-period">
                      /{serv.billingCycle === 'Yearly' ? 'year' : 'month'}
                    </span>
                  </div>

                  {serv.billingCycle === 'Yearly' && (
                    <div className="benchmark-equiv">
                      Eq: <strong>{formatINR(serv.price / 12)}/mo</strong>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => handleQuickAdd(serv)}
                    className="btn-quick-add"
                    title={`Add ${serv.name} to tracker`}
                  >
                    + Quick Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndianServicesDirectory;
