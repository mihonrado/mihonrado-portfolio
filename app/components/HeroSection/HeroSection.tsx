"use client";

import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.statusDot}></span>
          CLASSIFIED FILE: #001
        </div>
        <h1 className={styles.title}>
          Marlloyd I. Honrado <br />
          <span className={styles.highlight}>Full-stack Developer | VA</span>
        </h1>
        <p className={styles.description}>
          Investigating technical challenges and delivering high-performance SaaS solutions. 
          Expert in modern web technologies, workflow automation, and remote support operations. 
          A dual-threat professional bridging the gap between code and operations.
        </p>
        <div className={styles.actions}>
          <a href="/CV/Marlloyd_Honrado_CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            <span>View CV</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
          <a href="#projects" className={styles.secondaryBtn}>
            <span>View Works</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/me.png" 
            alt="Marlloyd Honrado" 
            width={550} 
            height={550} 
            className={styles.profileImage}
            priority
          />
          <div className={styles.logoBadge}>
            <Image 
              src="/images/logo2.png" 
              alt="Logo" 
              width={130} 
              height={130} 
              className={styles.logoBadgeImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
