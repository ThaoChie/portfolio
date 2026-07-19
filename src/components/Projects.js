import styles from './Projects.module.css';
import { CheckCircle2, ExternalLink, Lock, Play } from 'lucide-react';

function getYouTubeID(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Personal Finance App",
      category: "FINTECH CASE STUDY",
      timeline: "Nov 2025 — Jan 2026",
      tech: ["ASP.NET Core", "ReactJS", "Gemini Vision API", "Qdrant Vector DB"],
      description: "An AI-driven personal finance management application engineered to automate financial tracking, receipt extraction, and personalized budgeting.",
      features: [
        "Integrated Gemini Vision to automatically extract receipt & invoice data, cutting manual data entry time by 90%.",
        "Implemented RAG (Retrieval-Augmented Generation) architecture with Qdrant vector database to deliver personalized, hallucination-free financial advice.",
        "Architected an automated budget allocation engine calculating daily Safe-to-Spend limits with interactive Chart.js reporting."
      ],
      github: "https://github.com/ThaoChie/AI-Powered-Personal-Finance-Management-Application",
      demo: "", // Dán link YouTube vào đây để nhúng video trực tiếp
      image: ""
    },
    {
      title: "E-Learning Security System",
      category: "SYSTEM SECURITY & ACCESS CONTROL",
      timeline: "2024",
      tech: ["OAuth 2.0 / JWT", "Role-Based Access Control (RBAC)", "OWASP Security Standards", "Data Protection"],
      description: "A secure educational platform architecture focusing specifically on robust authorization protocols, multi-level access control, and defense against web vulnerabilities.",
      features: [
        "Elicited and mapped comprehensive security user flows focusing on multi-role authorization and token-based authentication.",
        "Architected strict Role-Based Access Control (RBAC) to isolate administrative privileges and safeguard sensitive student records.",
        "Implemented defensive measures against common OWASP web vulnerabilities (XSS, CSRF, SQL Injection) to maintain system integrity."
      ],
      github: "https://github.com/ThaoChie/elearning-system",
      demo: "https://youtu.be/m-Bgw8E2jeM",
      image: "/images/elearning.png"
    },
    {
      title: "Hybrid Recommendation System",
      category: "MACHINE LEARNING & ALGORITHMIC MODELING",
      timeline: "2024",
      tech: ["Python", "Machine Learning", "Collaborative Filtering", "Content-Based Filtering", "Scikit-Learn & Pandas"],
      description: "An advanced machine learning recommendation engine blending collaborative and content-based filtering algorithms to predict user preferences with high precision.",
      features: [
        "Engineered hybrid machine learning models combining user-item collaborative matrix factorization with content similarity vectors.",
        "Researched and integrated specialized algorithmic fallback logic to effectively solve the sparsity and cold-start prediction problem.",
        "Processed and pre-processed complex transaction datasets using Python (Pandas/NumPy) to train and evaluate recommendation accuracy."
      ],
      github: "https://github.com/ThaoChie/hybrid-recommendation-system",
      demo: "https://youtu.be/XQ6TlrCnTgw", // Video YouTube sẽ được nhúng thẳng vào khung ảnh
      image: "/images/ecommerce.png"
    },
    {
      title: "Library Information Management System (LiMS)",
      category: "ENTERPRISE MANAGEMENT SYSTEM & WORKFLOW MODELING",
      timeline: "2024 — 2025",
      tech: ["Enterprise System", "BPMN / UML Modeling", "SQL Database", "Workflow Automation"],
      description: "A comprehensive library information management system engineered to streamline book cataloging, reader circulation workflows, reservations, and inventory auditing.",
      features: [
        "Elicited stakeholder requirements and modeled complete AS-IS and TO-BE workflows using BPMN 2.0 and UML use case diagrams.",
        "Engineered automated borrowing and returning lifecycles with built-in due date tracking and penalty calculation logic.",
        "Designed structured database schemas and multi-level role-based access control (RBAC) for librarians, administrators, and readers."
      ],
      github: "https://github.com/ThaoChie/LiMS-He-Thong-Quan-Tri-Thu-Vien",
      demo: "",
      image: ""
    }
  ];

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Featured <span className="text-gradient">Case Studies</span>
          </h2>
          <p className={styles.subHeading}>Detailed examination of business analysis, system architecture, and quality assurance</p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => {
            const ytId = getYouTubeID(project.demo);
            return (
              <div key={index} className={`${styles.projectCard} glass-panel`}>
                <div className={styles.imageColumn}>
                  <div className={styles.imageWrapper}>
                    {ytId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1&vq=hd1080`}
                        title={`${project.title} Video Demo`}
                        className={styles.videoFrame}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : project.image ? (
                      <img src={project.image} alt={`${project.title} UI`} className={styles.projectImage} />
                    ) : (
                      <div className={styles.projectImage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.05)', color: '#888' }}>
                        Image Not Available
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={styles.contentColumn}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryBadge}>{project.category}</span>
                    <span className={styles.timeline}>{project.timeline}</span>
                  </div>

                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  
                  <div className={styles.techStack}>
                    {project.tech.map((t, i) => (
                      <span key={i} className={styles.techTag}>{t}</span>
                    ))}
                  </div>

                  <div className={styles.featuresBox}>
                    <h4 className={styles.featuresTitle}>Key Architectural Highlights:</h4>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature, i) => (
                        <li key={i} className={styles.featureItem}>
                          <span className={styles.checkIcon}><CheckCircle2 size={18} /></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.links}>
                    {project.github !== "#" ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{padding: '0.65rem 1.4rem', fontSize: '0.9rem'}}>
                        <ExternalLink size={18} />
                        View Source Code
                      </a>
                    ) : (
                      <span className={styles.pendingLink}>
                        <Lock size={16} /> Internal Enterprise System
                      </span>
                    )}

                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{padding: '0.65rem 1.4rem', fontSize: '0.9rem'}}>
                        <Play size={16} className="text-[#0284C7]" fill="#0284C7" />
                        Watch on YouTube
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
