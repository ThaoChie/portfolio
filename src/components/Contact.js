import styles from './Contact.module.css';
import { Mail, Phone, Send, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={`${styles.contactCard} glass-panel`}>
          <div className={styles.glowBg}></div>
          <div className={styles.content}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              NEXT STEPS
            </span>
            <h2 className={styles.heading} style={{ marginTop: '0.5rem' }}>Let&apos;s Build Impactful Systems Together</h2>
            <p className={styles.description}>
              I am currently seeking opportunities as an IT Business Analyst Intern or System Tester in Hanoi. 
              Whether you are looking for rigorous requirement engineering, API quality testing, or cross-functional bridge leadership, let&apos;s connect!
            </p>
            
            <div className={styles.contactInfo}>
              <a href="mailto:phuongthao.vju@gmail.com" className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Mail size={22} />
                </div>
                <span>phuongthao.vju@gmail.com</span>
              </a>
              
              <a href="tel:0944138963" className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Phone size={22} />
                </div>
                <span>0944 138 963</span>
              </a>

              <a href="https://github.com/ThaoChie" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <ExternalLink size={22} />
                </div>
                <span>github.com/ThaoChie</span>
              </a>
            </div>

            <div className={styles.action}>
              <a href="mailto:phuongthao.vju@gmail.com" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
                <Send size={18} /> Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
