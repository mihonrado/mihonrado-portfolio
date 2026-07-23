"use client";

import React, { useState } from 'react';
import styles from './FAQSection.module.css';

const faqs = [
  {
    question: "What is a discovery call?",
    answer: "It is a free, no-obligation 30-minute consultation where we learn about your business, identify tasks or systems to offload, and discuss how we can partner to help you grow."
  },
  {
    question: "How do we get started?",
    answer: "Simply select a time via our contact form, answer a couple of quick questions, and we'll meet via video call. If we are a fit, we'll send a proposal and start onboarding."
  },
  {
    question: "What tools do you specialize in?",
    answer: "I am highly proficient in modern web frameworks (React, Vue, Next.js, Nuxt), PHP/Laravel, Node.js, database management, Figma for design, and various admin toolkits to manage your backend effortlessly."
  },
  {
    question: "Is there a long-term commitment?",
    answer: "My services are flexible! I offer monthly retainer packages and tailored support options designed to grow alongside your business without locking you into long, rigid contracts."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on scope. A landing page typically takes 1–2 weeks, a full website 3–6 weeks, and web applications 2–4 months. We'll provide a detailed timeline during the discovery call."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! Each package includes a set number of revision rounds. I work closely with you throughout the process to make sure the final product matches your vision perfectly."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.sectionTitle}>Answers to your <span className={styles.highlight}>questions</span></h2>
        </div>

        <div className={styles.grid}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqCard} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqHeader}>
                <h3 className={styles.question}>{faq.question}</h3>
                <div className={styles.toggleIcon}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={openIndex === index ? styles.rotated : ''}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className={styles.answerWrapper}>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
