import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`} id="home">
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <h2 className={styles.greeting}>Hello, I'm</h2>
          <h1 className={styles.name}>Nguyen Thi <span className="text-gradient">Phuong Thao</span></h1>
          <h3 className={styles.role}>Business Analyst Intern</h3>
          <p className={styles.description}>
            Bridging the gap between business objectives and technology solutions. I leverage a strong foundation in Computer Science and testing to ensure high-quality product deliverables.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div className={styles.visualContent}>
          <div className={`${styles.imageContainer}`}>
            <img src="/images/hero_me.jpg" alt="Phuong Thao - Business Analyst" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
