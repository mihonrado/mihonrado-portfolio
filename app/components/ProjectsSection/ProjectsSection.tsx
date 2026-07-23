"use client";

import React, { useState } from 'react';
import styles from './ProjectsSection.module.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsSection() {
  const projects = [
    {
      id: "CASE-001",
      title: "CitizenOne",
      category: "SaaS / System",
      image: "/images/citizenone.png",
      description: "A modern journal system and planning tool designed to make everyday life easier for social, care, and health care industries. Provides a comprehensive digital solution for documentation, journalization, planning, and reporting in one platform.",
      status: "PRODUCTION",
      link: "https://citizenone.dk/",
      tags: ["Nuxt", "Vue", "System Design"]
    },
    {
      id: "CASE-002",
      title: "FarmCo-Pal",
      category: "Cooperative SaaS",
      image: "/images/Farmco-pal.png",
      description: "A modular SaaS for cooperatives — activate loans, savings, milling, and more on demand. Built-in dynamic bookkeeping lets you assign debit & credit entries to exact accounts, keeping transactions transparent and auditable.",
      status: "IN DEV",
      link: "#",
      tags: ["SaaS", "FinTech", "React"]
    },
    {
      id: "CASE-003",
      title: "Gear Up",
      category: "UI/UX & Prototype",
      image: "/images/gearup.png",
      description: "A mobile design for an e-commerce website specifically tailored for computer parts and packages. Features an intuitive UI for browsing components, building custom PC rigs, and a seamless mobile checkout experience.",
      status: "PROTOTYPE",
      link: "https://www.figma.com/design/0viUh2V821olPc3tb9VXsC/Apps-Prototype?node-id=37-79&t=eiJ10YNprXA5jdEX-1",
      tags: ["Figma", "UI/UX", "Mobile Design"]
    },
    {
      id: "CASE-004",
      title: "Zorbox Cafe",
      category: "Landing Page",
      image: "/images/zorbox.png",
      description: "A sleek, responsive landing page designed to showcase a modern cafe's menu, ambiance, and location, built with a focus on fast load times and clean aesthetics.",
      status: "DEPLOYED",
      link: "https://zorbox-cafe.vercel.app/",
      tags: ["React", "Landing Page", "Vercel"]
    },
    {
      id: "CASE-005",
      title: "Mary Jean",
      category: "Landing Page",
      image: "/images/mjean.png",
      description: "An elegant, personalized landing page crafted to highlight professional services and portfolios effectively with a structured, user-friendly layout.",
      status: "DEPLOYED",
      link: "https://mary-jean.vercel.app/",
      tags: ["React", "Portfolio", "Web Design"]
    }
  ];

  const [activeCase, setActiveCase] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleCase = (id: string) => {
    setActiveCase(activeCase === id ? null : id);
  };

  const activeProject = projects.find(p => p.id === activeCase);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>FEATURED <span className={styles.highlight}>PROJECTS</span></h2>
          <p className={styles.sectionSubtitle}>Click on a case file to expand details.</p>
        </div>

        <div className={`${styles.grid} ${showAll ? styles.showAllGrid : ''}`}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={styles.folder}
              onClick={() => toggleCase(project.id)}
            >
              <div className={styles.folderTab}>
                <span className={styles.tabText}>{project.id}</span>
              </div>
              <div className={styles.folderFront}>
                <div className={styles.folderFrontOuter}>
                  <h3 className={styles.folderTitle}>CONFIDENTIAL</h3>
                  <p className={styles.folderName}>{project.title}</p>
                  <div className={styles.stamp}>
                    {project.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {projects.length > 3 && (
          <div className={styles.seeMoreContainer}>
            <button className={styles.seeMoreBtn} onClick={() => setShowAll(!showAll)}>
              {showAll ? 'SEE LESS' : 'SEE MORE'}
            </button>
          </div>
        )}
      </div>

      {/* Modal Overlay for Opened Folder */}
      {activeProject && (
        <div className={styles.overlay} onClick={() => setActiveCase(null)}>
          <div className={`${styles.folder} ${styles.open}`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.folderTab}>
              <span className={styles.tabText}>{activeProject.id}</span>
            </div>
            
            <div className={styles.folderFront}>
              <div className={styles.folderFrontOuter}>
                <h3 className={styles.folderTitle}>CONFIDENTIAL</h3>
                <p className={styles.folderName}>{activeProject.title}</p>
                <div className={styles.stamp}>
                  {activeProject.status}
                </div>
              </div>
              <div className={styles.folderFrontInner}>
                {activeProject.image && (
                  <div className={styles.photoAttachment}>
                    <img src={activeProject.image} alt={activeProject.title} />
                    <div className={styles.tape}></div>
                  </div>
                )}
              </div>
            </div>
            
            <div className={styles.folderInside}>
              <div className={styles.document}>
                <div className={styles.docHeader}>
                  <h4>{activeProject.category}</h4>
                </div>
                
                <p>{activeProject.description}</p>
                <div className={styles.tags}>
                  {activeProject.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.docFooter}>
                  <a 
                    href={activeProject.link !== "#" ? activeProject.link : undefined} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.primaryVisitBtn}
                    onClick={(e) => {
                      if (activeProject.link === "#") e.preventDefault();
                      e.stopPropagation();
                    }}
                    title="View Project"
                  >
                    VISIT PROJECT
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
