"use client";

import React from 'react';
import styles from './ContactSection.module.css';
import { FaLinkedin, FaGithub, FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Contact <span className={styles.highlight}>Developer</span>
        </h2>
        
        <div className={styles.content}>
          <div className={styles.stamp}>TOP SECRET</div>
          <div className={styles.infoBox}>
            <h3>Ready to collaborate?</h3>
            <p>
              Whether you need a full-stack web application built from the ground up, or a reliable virtual assistant to streamline your operations, I'm here to help. Reach out to coordinate.
            </p>
            
            <div className={styles.emailWrapper}>
              <a href="mailto:honradomarlloyd@gmail.com" className={styles.emailLink}>
                honradomarlloyd@gmail.com
              </a>
            </div>
            
            <div className={styles.socials}>
              <a href="https://wa.me/639081381680" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaWhatsapp className={styles.icon} /> WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/marlloydhonrado" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin className={styles.icon} /> LinkedIn
              </a>
              <a href="https://github.com/mihonrado" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub className={styles.icon} /> GitHub
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584725707398" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaFacebookSquare className={styles.icon} /> Facebook
              </a>
              <a href="https://www.instagram.com/mihonrado/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram className={styles.icon} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
