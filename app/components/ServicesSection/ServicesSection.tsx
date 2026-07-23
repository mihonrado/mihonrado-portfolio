"use client";

import React, { useState } from 'react';
import styles from './ServicesSection.module.css';

type PricingTier = {
  name: string;
  price: string;
  pricePhp: string;
  features: string[];
  isPopular?: boolean;
};

type Service = {
  id: string;
  title: string;
  shortDesc: string;
  startingPrice: string;
  startingPricePhp: string;
  icon: React.ReactNode;
  tiers: PricingTier[];
};

const services: Service[] = [
  {
    id: "landing-page",
    title: "Landing Page Design",
    shortDesc: "High-converting landing pages built to turn visitors into qualified leads.",
    startingPrice: "From $150/project",
    startingPricePhp: "₱8,000/project",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5"></path>
        <path d="m5 12 7-7 7 7"></path>
      </svg>
    ),
    tiers: [
      {
        name: "Starter",
        price: "Starting at $150/project",
        pricePhp: "₱8,000/project",
        features: ["Single Landing Page", "Contact Form", "Mobile Responsive"],
      },
      {
        name: "Growth",
        price: "Starting at $800/project",
        pricePhp: "₱45,000/project",
        features: ["Sales Page", "Better Layout", "Lead Capture", "Thank You Page"],
        isPopular: true,
      },
      {
        name: "Premium",
        price: "Starting at $1,200/project",
        pricePhp: "₱67,000/project",
        features: ["Complete Funnel", "Multiple Sections", "Advanced CTA", "Conversion Optimization"],
      }
    ]
  },
  {
    id: "web-design",
    title: "Website Design",
    shortDesc: "Clean, professional websites that reflect your brand and build trust.",
    startingPrice: "From $500/project",
    startingPricePhp: "₱28,000/project",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <line x1="3" x2="21" y1="9" y2="9"></line>
        <line x1="9" x2="9" y1="21" y2="9"></line>
      </svg>
    ),
    tiers: [
      {
        name: "Starter",
        price: "Starting at $500/project",
        pricePhp: "₱28,000/project",
        features: ["Up to 3 Pages", "Contact Form", "Mobile Responsive"],
      },
      {
        name: "Growth",
        price: "Starting at $1,000/project",
        pricePhp: "₱56,000/project",
        features: ["Up to 7 Pages", "Booking Integration", "Blog", "SEO Basics"],
        isPopular: true,
      },
      {
        name: "Premium",
        price: "Starting at $1,500/project",
        pricePhp: "₱84,000/project",
        features: ["Custom Website", "Advanced Integrations", "Premium Design", "Optimization"],
      }
    ]
  },
  {
    id: "web-apps",
    title: "Web Apps Development",
    shortDesc: "Scalable, full-stack web applications tailored to streamline your specific business needs.",
    startingPrice: "From $1,500/project",
    startingPricePhp: "₱84,000/project",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    tiers: [
      {
        name: "MVP",
        price: "Starting at $1,500/project",
        pricePhp: "₱84,000/project",
        features: ["Core Features", "Database Setup", "User Authentication", "Basic Dashboard"],
      },
      {
        name: "Scale",
        price: "Starting at $3,500/project",
        pricePhp: "₱196,000/project",
        features: ["Advanced Logic", "API Integrations", "Payment Gateway", "Admin Panel"],
        isPopular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Pricing",
        pricePhp: "Custom Pricing",
        features: ["Complex Architecture", "Real-time Features", "Multi-tenant", "Ongoing Support"],
      }
    ]
  },
  {
    id: "virtual-assistant",
    title: "General Virtual Assistant",
    shortDesc: "Reliable admin support for everyday tasks that keep your business organized.",
    startingPrice: "From $500/mo",
    startingPricePhp: "₱28,000/mo",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <polyline points="16 11 18 13 22 9"></polyline>
      </svg>
    ),
    tiers: [
      {
        name: "Starter",
        price: "Starting at $500/month",
        pricePhp: "₱28,000/month",
        features: ["Data Entry", "Email Support", "Internet Research", "File Organization"],
      },
      {
        name: "Growth",
        price: "Starting at $800/month",
        pricePhp: "₱45,000/month",
        features: ["Customer Support", "CRM Updates", "Scheduling", "Reporting"],
        isPopular: true,
      },
      {
        name: "Premium",
        price: "Starting at $1,200/month",
        pricePhp: "₱67,000/month",
        features: ["Daily Admin Support", "Business Operations Assistance", "Process Documentation", "Priority Support"],
      }
    ]
  }
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>MY <span className={styles.highlight}>SERVICES</span></h2>
          <p className={styles.sectionSubtitle}>Professional solutions to elevate your business.</p>
        </div>

        <div className={`${styles.grid} ${showAll ? styles.showAllGrid : ''}`}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.shortDesc}</p>
              <div className={styles.cardFooter}>
                <button 
                  className={styles.seePricingBtn}
                  onClick={() => setActiveService(service)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                  See Pricing
                </button>
              </div>
            </div>
          ))}
        </div>

        {services.length > 3 && (
          <div className={styles.seeMoreContainer}>
            <button className={styles.seeMoreBtn} onClick={() => setShowAll(!showAll)}>
              {showAll ? 'SEE LESS' : 'SEE MORE'}
            </button>
          </div>
        )}
      </div>

      {/* Pricing Modal */}
      {activeService && (
        <div className={styles.modalOverlay} onClick={() => setActiveService(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveService(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{activeService.title}</h3>
              <p className={styles.modalSubtitle}>{activeService.shortDesc}</p>
            </div>

            <div className={styles.tiersContainer}>
              {activeService.tiers.map((tier) => (
                <div key={tier.name} className={`${styles.tierCard} ${tier.isPopular ? styles.popularTier : ''}`}>
                  {tier.isPopular && <div className={styles.popularBadge}>MOST POPULAR</div>}
                  
                  <div className={styles.tierHeader}>
                    <h4 className={styles.tierName}>{tier.name}</h4>
                    <p className={styles.tierPrice}>{tier.price}</p>
                    <p className={styles.tierPricePhp}>{tier.pricePhp}</p>
                  </div>
                  
                  <ul className={styles.tierFeatures}>
                    {tier.features.map((feature, index) => (
                      <li key={index}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-quicksand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tierActions}>
                    <a href="#contact" onClick={() => setActiveService(null)} className={tier.isPopular ? styles.primaryActionBtn : styles.secondaryActionBtn}>
                      Book Discovery Call
                    </a>
                    <a href="#contact" onClick={() => setActiveService(null)} className={styles.secondaryActionBtn}>
                      Request Custom Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.modalFooter}>
              <h4>Need something more specific?</h4>
              <p>We also offer custom packages tailored to your business needs.</p>
              <div className={styles.footerActions}>
                <a href="#contact" onClick={() => setActiveService(null)} className={styles.primaryActionBtn}>
                  Book a Free Discovery Call
                </a>
                <a href="#contact" onClick={() => setActiveService(null)} className={styles.secondaryActionBtn}>
                  Request Custom Quote
                </a>
              </div>
            </div>

            <p className={styles.disclaimer}>*All prices shown are starting rates and may vary depending on project scope, complexity, timeline, and business requirements.*</p>
          </div>
        </div>
      )}
    </section>
  );
}
