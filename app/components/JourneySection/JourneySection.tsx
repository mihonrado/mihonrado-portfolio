"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './JourneySection.module.css';

export default function JourneySection() {
  const journey = [
    {
      year: "2025 - 2026",
      role: "Web Developer",
      company: "AWORK A/S · Denmark (Remote)",
      badge: null,
      description: "5-month remote engagement with a Danish company, contributing to real-world web development projects and sharpening professional skills in a global environment.",
      subRole: "FRONTEND DEVELOPER",
      bullets: [
        "Developed new features and resolved bugs in production web applications",
        "Built a dynamic form builder - lets end-users create custom forms on the fly, no developer intervention needed"
      ]
    },
    {
      year: "2022 - 2026",
      role: "IT Support",
      company: "Hulid Elementary School",
      badge: null,
      description: "4 years of hands-on IT support starting from 1st year college - managing school systems, troubleshooting hardware and software, and keeping the institution's tech running smoothly.",
      subRole: "IT SUPPORT TECHNICIAN",
      bullets: [
        "Upgrade hardware units",
        "Repair hardware & software issues",
        "Reformat machines",
        "Clone drives",
        "Transfer data",
        "Set up workstations"
      ]
    },
    {
      year: "2022 - 2026",
      role: "BS Information Technology",
      company: "STI College Davao",
      badge: null,
      description: "Pursued a 4-year BSIT degree, building a strong foundation in software development, systems design, networking, and database management. Graduated 2026."
    },
    {
      year: "2020 - 2022",
      role: "Senior High School",
      company: "Davao City National High School",
      badge: "STEM",
      description: "Completed Senior High School in Davao City, building academic groundwork and sharpening critical thinking before entering college."
    },
    {
      year: "2016 - 2020",
      role: "Junior High School",
      company: "Cateel National Agricultural High School",
      badge: "ANIMAL PRODUCTION (AGRICULTURE)",
      description: "Completed Junior High School in Cateel, Davao Oriental - the foundational years that sparked curiosity in technology and problem-solving."
    },
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const [svgPath, setSvgPath] = useState('');

  useEffect(() => {
    const updatePath = () => {
      if (!timelineRef.current) return;
      const pins = Array.from(timelineRef.current.querySelectorAll(`.${styles.pin}`)) as HTMLElement[];
      const timelineRect = timelineRef.current.getBoundingClientRect();
      
      const newPath = pins.map((pin, i) => {
        const rect = pin.getBoundingClientRect();
        const x = rect.left - timelineRect.left + rect.width / 2;
        const y = rect.top - timelineRect.top + rect.height / 2;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      }).join(" ");
      
      setSvgPath(newPath);
    };

    // Small timeout to ensure layout is complete before measuring
    setTimeout(updatePath, 100);
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, []);

  return (
    <section id="journey" className={styles.journeySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Subject <span className={styles.highlight}>Timeline</span>
          </h2>
          <div className={styles.tape}></div>
        </div>

        <div className={styles.timeline} ref={timelineRef}>
          <svg className={styles.zigzagSvg}>
            <path d={svgPath} fill="none" stroke="var(--color-sapphire)" strokeWidth="4" strokeDasharray="10 6" />
          </svg>
          
          {journey.map((item, index) => (
            <div key={index} className={`${styles.timelineItem} ${index % 2 !== 0 ? styles.right : styles.left}`}>
              <div className={styles.stickyNote}>
                <div className={styles.pin}></div>
                
                <div className={styles.year}>{item.year}</div>
                <h3 className={styles.role}>{item.role}</h3>
                <h4 className={styles.company}>{item.company}</h4>
                
                {item.badge && (
                  <div className={styles.badge}>{item.badge}</div>
                )}
                
                <hr className={styles.divider} />
                
                <p className={styles.description}>{item.description}</p>
                
                {item.subRole && (
                  <div className={styles.subRoleSection}>
                    <h5 className={styles.subRoleTitle}>{item.subRole}</h5>
                    <ul className={styles.bulletList}>
                      {item.bullets?.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className={styles.decoSquare}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
