import styles from './About.module.css';

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={`container`}>
        <div className={styles.aboutWrapper}>
          <div className={styles.imageCol}>
            <div className={styles.imageContainer}>
              <div className={styles.imageGlow}></div>
              <img src="/images/about_me.jpg" alt="Phuong Thao full body" className={styles.aboutImage} />
            </div>
          </div>
          
          <div className={styles.textCol}>
            <h2 className={styles.heading}>
              About <span className="text-gradient">Me</span>
            </h2>
            <div className={`${styles.contentCard} glass-panel`}>
              <h3 className={styles.subHeading}>Career Objective</h3>
              <p className={styles.paragraph}>
                I am actively seeking a Business Analyst Internship to hone my business analysis and project communication skills. I aim to leverage my strong foundation in Computer Science and hands-on experience in Software Testing to optimize development workflows and ensure high-quality product deliverables.
              </p>
              <p className={styles.paragraph}>
                My ultimate goal is to become a professional IT Business Analyst, acting as a vital bridge between business objectives and technology solutions. I am deeply passionate about understanding user needs and translating them into robust, scalable, and secure system architectures.
              </p>
              
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <h4 className={styles.statNumber}>3.08</h4>
                  <p className={styles.statLabel}>GPA</p>
                </div>
                <div className={styles.statItem}>
                  <h4 className={styles.statNumber}>3+</h4>
                  <p className={styles.statLabel}>Major Projects</p>
                </div>
                <div className={styles.statItem}>
                  <h4 className={styles.statNumber}>2</h4>
                  <p className={styles.statLabel}>Certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
