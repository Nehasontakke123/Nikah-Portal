import React from "react";
import "../assets/CSS/PlansPage.css";

const plans = [
  {
    title: "FREE PLAN [Limited Access]",
    features: [
      "First 10 profiles are visible for free",
      "No personal relationship manager",
      "Limited WhatsApp updates",
      "Basic customer support",
      "Access more features by upgrading",
    ],
    prices: {
      "Lifetime": 0,
    },
    tag: "Try Free",
    discount: "Free Access",
    color: "#FF477E", // pink
  },
  {
    title: "SILVER PLAN [NRI Profiles]",
    features: [
      "You can directly call us from the contact section for NRI profiles",
      "Personal relationship manager",
      "WhatsApp updates",
      "Regular follow-ups",
      "Customer Support: 10AM–8PM",
    ],
    prices: {
      "6 Months": 7000,
      "12 Months": 10000,
    },
    tag: "Super Popular",
    discount: "15% Savings",
    color: "#FF9550",
  },
  {
    title: "GOLD PLAN [High Status Profiles]",
    features: [
      "High-status and premium profiles",
      "Personal relationship manager",
      "WhatsApp updates",
      "Match follow-ups",
      "Customer Support: 10AM–8PM",
    ],
    prices: {
      "6 Months": 10000,
      "12 Months": 15000,
    },
    tag: "Top Choice",
    discount: "15% Savings",
    color: "#FFCD38",
  },
  {
    title: "VIP PLAN [VIP Profiles]",
    features: [
      "Exclusive VIP profiles",
      "Personal relationship manager",
      "WhatsApp updates",
      "Follow-up coordination",
      "Dedicated support: 10AM–8PM",
    ],
    prices: {
      "6 Months": 16500,
      "12 Months": 20000,
    },
    tag: "Premium",
    discount: "15% Savings",
    color: "#8A2BE2",
  },
];

const PlansPage = () => {
  return (
    <div className="plans-page">
      <h1 className="plans-title">Upgrade Your Profile with Nikahnamah's Package Plans</h1>
      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <div className="plan-card" key={idx} style={{ borderTop: `6px solid ${plan.color}` }}>
            <h2>{plan.title}</h2>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <div className="plan-prices">
              {Object.entries(plan.prices).map(([duration, price], i) => (
                <div className="price-block" key={i}>
                  <h4>{duration}</h4>
                  <p>{price === 0 ? "Free" : `₹${price}`}</p>
                </div>
              ))}
            </div>
            <span className="plan-tag">{plan.tag}</span>
            <p className="discount">{plan.discount}</p>
            <p className="terms">* Terms and Conditions</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;
