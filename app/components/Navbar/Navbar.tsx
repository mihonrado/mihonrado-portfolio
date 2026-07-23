"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#hero">
          <Image 
            src="/images/logo2.png" 
            alt="Marlloyd I. Honrado Logo" 
            width={40} 
            height={40} 
            className={styles.logoImage}
            priority
          />
        </a>
      </div>
      
      <div className={styles.navLinks}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#journey">Journey</a>
      </div>

      <div className={styles.navActions}>
        <a href="#contact" className={styles.contactBtn}>
          Get In Touch
          <svg className={styles.btnIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#journey" onClick={toggleMenu}>Journey</a>
          <a href="#contact" className={styles.mobileContactBtn} onClick={toggleMenu}>
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
}
