import styles from './Experience.module.css';

export default function Experience() {
  const experiences = [
    {
      company: "Bank for Investment and Development of Vietnam (BIDV)",
      role: "System Tester",
      period: "Jun 2025 — Oct 2025",
      points: [
        "Acted as a System Tester for the centralized AMRM project, analyzing business documents and designing test cases.",
        "Collaborated cross-functionally with Developers and Business Analysts to troubleshoot and resolve critical defects.",
        "Leveraged SQL and API testing to validate data flows, directly supporting technical analysis for system solutions."
      ]
    },
    {
      company: "CMC Global",
      role: "Intern Manual Tester",
      period: "May 2025 — Jun 2025",
      points: [
        "Participated in requirement analysis, created test cases, and executed functional testing for software products."
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Python", "C#", "JavaScript", ".NET Core", "FastAPI", "MySQL", "SQL Server"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["Jira", "Postman", "Swagger", "Visual Paradigm", "Git", "Docker"]
    },
    {
      title: "Business Analysis",
      skills: ["Requirement Gathering", "Problem Solving", "Critical Thinking", "Cross-functional Comm.", "Agile"]
    }
  ];

  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <div className={styles.wrapper}>
          
          <div className={styles.expCol}>
            <h2 className={styles.heading}>Experience</h2>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={`${styles.timelineContent} glass-panel`}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                    <span className={styles.period}>{exp.period}</span>
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
            <h2 className={styles.heading}>Skills</h2>
            <div className={styles.skillsWrapper}>
              {skillCategories.map((category, index) => (
                <div key={index} className={`${styles.skillCategory} glass-panel`}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
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
