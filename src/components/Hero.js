import styles from './Hero.module.css';
import { ArrowRight, CheckCircle2, GitBranch, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`} id="home">
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <div className={styles.statusPill}>
            <span className={styles.statusDot}></span>
            <span className={styles.statusText}>Open to opportunities • Hanoi</span>
          </div>

          <h1 className={styles.name}>
            Bridging Business <span className="text-gradient">Objectives</span> with Flawless System Execution.
          </h1>

          <p className={styles.description}>
            <strong>Nguyen Thi Phuong Thao</strong> — IT Business Analyst Intern &amp; System Tester with rigorous analytical training in requirement engineering, UML modeling, API validation, and zero-defect software testing.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">
              Explore Featured Projects
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact &amp; Connect
            </a>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>3.08</span>
              <span className={styles.statLabel}>Academic GPA</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>3+</span>
              <span className={styles.statLabel}>Major Projects</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>2</span>
              <span className={styles.statLabel}>Professional Certs</span>
            </div>
          </div>
        </div>
        
        <div className={styles.visualContent}>
          <div className={styles.imageCard}>
            <img src="/images/hero_me.jpg" alt="Nguyen Thi Phuong Thao - Business Analyst" className={styles.heroImage} />
            
            <div className={styles.floatingBadge1}>
              <span className={styles.badgeIcon}><GitBranch size={18} /></span>
              <span>UML &amp; Requirement Engineering</span>
            </div>

            <div className={styles.floatingBadge2}>
              <span className={styles.badgeIcon}><ShieldCheck size={18} /></span>
              <span>API &amp; System Quality Testing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
