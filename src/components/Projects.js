import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Personal Finance App",
      tech: ["ASP.NET Core", "ReactJS", "Gemini API", "Qdrant Vector DB"],
      description: "A comprehensive AI-driven personal finance management application designed to optimize user experience through automated financial tracking and intelligent insights.",
      features: [
        "Integrated Gemini Vision to automatically extract data from receipt/invoice images, reducing manual data entry time by 90%.",
        "Implemented RAG (Retrieval-Augmented Generation) combined with a Vector Database (Qdrant) to deliver highly accurate, personalized financial advice.",
        "Designed an automated budget allocation system to calculate daily Safe-to-Spend limits.",
        "Interactive data visualization using Chart.js."
      ],
      github: "https://github.com/ThaoChie/AI-Powered-Personal-Finance-Management-Application",
      image: "/images/finance.png"
    },
    {
      title: "E-Learning Security System",
      tech: ["TypeScript", "Web Security", "Authentication", "Authorization"],
      description: "A robust and secure architecture for an e-learning platform, focusing on protecting user data integrity and preventing unauthorized access.",
      features: [
        "Analyzed and gathered business requirements to map out secure user flows.",
        "Designed comprehensive authorization and authentication modules.",
        "Implemented strict security protocols and measures against common web vulnerabilities.",
        "Ensured compliance with data protection standards for educational environments."
      ],
      github: "https://github.com/ThaoChie/Elearning-Sys",
      image: "/images/elearning.png"
    },
    {
      title: "Hybrid Recommendation System",
      tech: ["Python", "Machine Learning", "Collaborative Filtering", "Data Processing"],
      description: "An advanced e-commerce hybrid recommender system that leverages both content-based and collaborative filtering to boost sales and user engagement.",
      features: [
        "Integrated multiple recommendation algorithms to optimize the accuracy of product suggestions.",
        "Researched and implemented specialized techniques to mitigate the cold-start problem for new users and products.",
        "Processed large e-commerce datasets to extract meaningful business insights.",
        "Demonstrated strong analytical skills in evaluating model performance."
      ],
      github: "https://github.com/ThaoChie/hybrid-recommendation-system",
      image: "/images/ecommerce.png"
    },
    {
      title: "LiMS System",
      tech: ["Enterprise System", "Dashboard UI", "Data Management"],
      description: "A Laboratory Information Management System (LiMS) built to streamline laboratory workflows, track samples efficiently, and ensure absolute data accuracy and compliance.",
      features: [
        "Centralized dashboard for tracking hundreds of daily laboratory samples in real-time.",
        "Automated reporting features that minimize human error in data transcription.",
        "Strict access controls and audit trails to maintain compliance with health and safety regulations.",
        "Intuitive user interface tailored for laboratory technicians and managers."
      ],
      github: "#",
      image: "/images/lims.png"
    }
  ];

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={styles.subHeading}>In-depth look at my technical implementations and system interfaces</p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.projectCard} glass-panel`}>
              <div className={styles.imageColumn}>
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={`${project.title} UI`} className={styles.projectImage} />
                  <div className={styles.imageOverlay}></div>
                </div>
              </div>
              
              <div className={styles.contentColumn}>
                <h3 className={styles.title}>{project.title}</h3>
                
                <div className={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.featuresBox}>
                  <h4 className={styles.featuresTitle}>Key Features & Highlights:</h4>
                  <ul className={styles.featuresList}>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.links}>
                  {project.github !== "#" ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{padding: '0.6rem 1.2rem', fontSize: '0.9rem'}}>
                      <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        View Source Code
                      </span>
                    </a>
                  ) : (
                    <span className={styles.pendingLink}>System currently internal/private</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
