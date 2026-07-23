"use client";

import React, { useState } from 'react';
import styles from './SkillsSection.module.css';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaVuejs, FaReact, FaPhp, FaNodeJs, 
  FaFigma, FaGitAlt, FaGithub, FaTools, FaLaptopMedical, FaNetworkWired, FaBug,
  FaDatabase, FaPenNib, FaCode, FaLayerGroup
} from 'react-icons/fa';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend Operations",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "Nuxt", icon: <FaLayerGroup /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <FaCode /> },
      ]
    },
    {
      category: "Backend Intelligence",
      skills: [
        { name: "PHP", icon: <FaPhp /> },
        { name: "Laravel", icon: <FaCode /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "REST APIs", icon: <FaTools /> },
      ]
    },
    {
      category: "Design & Evidence",
      skills: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Illustrator", icon: <FaPenNib /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ]
    },
    {
      category: "Field Support & QA",
      skills: [
        { name: "Hardware Diagnostics", icon: <FaLaptopMedical /> },
        { name: "System Recovery", icon: <FaTools /> },
        { name: "Network Setup", icon: <FaNetworkWired /> },
        { name: "QA Testing", icon: <FaBug /> },
        { name: "Defect Tracking", icon: <FaBug /> },
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Developer <span className={styles.highlight}>Capabilities</span>
          </h2>
          <div className={styles.tape}></div>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((set, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.pin}></div>
              <h3 className={styles.categoryTitle}>{set.category}</h3>
              <ul className={styles.skillList}>
                {set.skills.map((skill, i) => (
                  <li key={i} className={styles.skillItem}>
                    <span className={styles.icon}>{skill.icon}</span>
                    <span className={styles.name}>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
