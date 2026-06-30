import styles from './About.module.css';
import { GitBranch, Terminal, Users, Database } from 'lucide-react';

export default function About() {
  const bentoCards = [
    {
      id: "req",
      icon: <GitBranch size={24} />,
      label: "CORE DOMAIN",
      title: "Requirement Engineering & UML",
      desc: "Eliciting, analyzing, and documenting business requirements through structured workflows. Delivering comprehensive BRDs, FRSs, and UML diagrams that align stakeholders and technical teams.",
      tags: ["BRD / FRS", "Use Case Diagrams", "User Stories", "BPMN 2.0"],
      accent: "#0284C7"
    },
    {
      id: "api",
      icon: <Terminal size={24} />,
      label: "QUALITY ASSURANCE",
      title: "API & System Testing Rigor",
      desc: "Designing and executing thorough test strategies—from API validation to regression suites. Experienced in identifying critical system defects and ensuring seamless data flows.",
      tags: ["Postman", "API Validation", "SQL Queries", "Defect Tracking"],
      accent: "#0D9488"
    },
    {
      id: "agile",
      icon: <Users size={24} />,
      label: "COLLABORATION",
      title: "Agile & Cross-Functional Bridge",
      desc: "Actively bridging the communication gap between business stakeholders and developers. Participating in agile refinement and ensuring technical implementations meet user acceptance criteria.",
      tags: ["Agile/Scrum", "Jira & Confluence", "Stakeholder Mgmt", "UAT"],
      accent: "#4F46E5"
    },
    {
      id: "db",
      icon: <Database size={24} />,
      label: "DATA FOUNDATIONS",
      title: "Database Analysis & SQL",
      desc: "Leveraging relational database structures and querying SQL to verify backend data integrity, support root-cause analysis, and validate complex system logic.",
      tags: ["MySQL", "SQL Server", "Relational Schemas", "Data Integrity"],
      accent: "#7C3AED"
    }
  ];

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <p className={styles.subHeading}>Dual-domain rigor combining business analysis with software testing</p>
        </div>

        <div className={styles.aboutLayout}>
          {/* Executive Brief */}
          <div className={`${styles.executiveBrief} glass-panel`}>
            <div className={styles.briefTitleArea}>
              <span className={styles.badge}>EXECUTIVE BRIEF</span>
              <h3>Career Objective &amp; Positioning</h3>
            </div>
            <div className={styles.briefContent}>
              <p>
                As a Computer Science student at Vietnam Japan University (VNU) with real-world project experience at BIDV and CMC Global, I specialize in translating complex business needs into precise, robust software requirements. My unique background in rigorous System Testing allows me to approach business analysis with an eye for quality, security, and edge-case prevention from day one.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className={styles.bentoGrid}>
            {bentoCards.map((card, index) => (
              <div key={index} className={`${styles.bentoCard} glass-panel`}>
                <div>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox} style={{ backgroundColor: card.accent }}>
                      {card.icon}
                    </div>
                    <span className={styles.domainLabel} style={{ color: card.accent }}>
                      {card.label}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>

                <div className={styles.tagList}>
                  {card.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
