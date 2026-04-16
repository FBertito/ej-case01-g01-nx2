import { SITE, FOOTER } from '@/lib/content'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        
        <div className={styles.brand}>
          
          <span className={styles.logoText}>{SITE.name}</span>
          <p className={styles.tagline}>{FOOTER.tagline}</p>
          <a href={`mailto:${FOOTER.contactEmail}`} className={styles.email}>
            {FOOTER.contactEmail}
          </a>
          <p className={styles.address}>{FOOTER.address}</p>
        </div>

        
        <nav className={styles.links} aria-label="Links do rodapé">
          {FOOTER.links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        
        <div className={styles.social}>
          <p className={styles.socialTitle}>Redes sociais</p>
          {FOOTER.social.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={s.platform}
            >
              
              {s.platform}
            </a>
          ))}
        </div>
      </div>

      
      <div className={styles.bottom}>
        <div className="container">
          <p>{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
