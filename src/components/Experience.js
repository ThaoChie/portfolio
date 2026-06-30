import styles from './Experience.module.css';
import { Briefcase, Code, Wrench, Brain } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Bank for Investment and Development of Vietnam (BIDV) - Onsite",
      role: "System Tester",
      period: "Jun 2025 — Oct 2025",
      points: [
        "Acted as a core System Tester for the centralized AMRM project, rigorously analyzing business documentation and designing end-to-end test suites.",
        "Collaborated cross-functionally with Software Engineers and Business Analysts to troubleshoot defects and ensure alignment with business requirements.",
        "Executed complex SQL and API validation tests to inspect backend data integrity and support technical decision-making."
      ]
    },
    {
      company: "CMC Global",
      role: "Intern Manual Tester",
      period: "May 2025 — Jun 2025",
      points: [
        "Participated in comprehensive requirement gathering sessions and authored structured test cases for enterprise client applications.",
        "Executed functional and regression testing cycles, documenting anomalies clearly in defect tracking platforms."
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Business Analysis & Core Competencies",
      icon: <Brain size={20} color="#0284C7" />,
      skills: ["Requirement Gathering", "BRD / FRS Authoring", "Use Case Modeling", "Agile / Scrum", "Critical Thinking", "Stakeholder Comm."]
    },
    {
      title: "Technical Languages & Frameworks",
      icon: <Code size={20} color="#0D9488" />,
      skills: ["Python", "C#", "JavaScript", ".NET Core", "FastAPI", "SQL Querying", "Relational Schemas"]
    },
    {
      title: "Testing & Architecture Tools",
      icon: <Wrench size={20} color="#4F46E5" />,
      skills: ["Postman API Testing", "Jira & Confluence", "Swagger UI", "Visual Paradigm (UML)", "Git / GitHub", "Docker"]
    }
  ];

  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <div className={styles.wrapper}>
          
          <div className={styles.expCol}>
            <h2 className={styles.heading}>Professional Track</h2>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={`${styles.timelineContent} glass-panel`}>
                    <div className={styles.roleHeader}>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <span className={styles.period}>{exp.period}</span>
                    </div>
                    <h4 className={styles.company}>{exp.company}</h4>
                    <ul className={styles.points}>
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillsCol}>
            <h2 className={styles.heading}>Technical Matrix</h2>
            <div className={styles.skillsWrapper}>
              {skillCategories.map((category, index) => (
                <div key={index} className={`${styles.skillCategory} glass-panel`}>
                  <h3 className={styles.categoryTitle}>
                    {category.icon}
                    <span>{category.title}</span>
                  </h3>
                  <div className={styles.skillTags}>
                    {category.skills.map((skill, i) => (
                      <span key={i} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
