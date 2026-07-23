"use client";

import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Subject <span className={styles.highlight}>Profile</span>
          </h2>
          <div className={styles.paperClip}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.polaroid}>
            <div className={styles.tape}></div>
            <div className={styles.polaroidInner}>
              <p>ID: M.H. / 2026</p>
              <p>STATUS: ACTIVE</p>
            </div>
          </div>
          
          <div className={styles.textContent}>
            <p>
              <strong>PROFILE SUMMARY:</strong> I am a full-stack developer with proven remote experience delivering production SaaS features for an international team. My specialty lies in creating modular, maintainable web applications — from user-facing interfaces to robust backend systems.
            </p>
            <p>
              <strong>DUAL EXPERTISE:</strong> Beyond development, I serve as a highly capable Virtual Assistant. I bring a strong foundation in managing hardware lifecycles, diagnosing technical failures, and executing systematic QA testing for platforms.
            </p>
            <p>
              <strong>OPERATIONAL APPROACH:</strong> I thrive in remote environments, bringing structure and efficiency to day-to-day operations. I pair clean UI/UX instincts with a relentless focus on performance and reliable, comprehensive administrative support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
