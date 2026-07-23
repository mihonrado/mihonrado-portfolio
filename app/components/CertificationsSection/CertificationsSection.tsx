"use client";

import React from 'react';
import styles from './CertificationsSection.module.css';

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Completion Certificate",
      file: "/certificates/Completion CERT.pdf",
      date: "2026"
    }
  ];

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Official <span className={styles.highlight}>Records</span>
          </h2>
          <div className={styles.paperClip}></div>
        </div>

        <div className={styles.grid}>
          {certifications.map((cert, index) => (
            <a key={index} href={cert.file} target="_blank" rel="noopener noreferrer" className={styles.certCard}>
              <div className={styles.tape}></div>
              <div className={styles.certInner}>
                <div className={styles.certHeader}>
                  <span className={styles.seal}></span>
                  <span className={styles.certDate}>{cert.date}</span>
                </div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.clickText}>CLICK TO EXAMINE DOCUMENT</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
