import Image from 'next/image'
import { HERO } from '@/lib/content'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>

      
      <div className={styles.heroBg}>
        <Image
          src={HERO.backgroundImage}
          alt="Hero background"
          fill
          priority
          className={styles.heroBgImg}
        />
        
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={`container ${styles.inner}`}>

        
        <div className={styles.content}>
          <h1 className={styles.headline}>{HERO.headline}</h1>
          <p className={styles.subheadline}>{HERO.subheadline}</p>

          <div className={styles.actions}>
            <a href={HERO.cta.primary.href} className={styles.ctaPrimary}>
              {HERO.cta.primary.label}
            </a>
            <a href={HERO.cta.secondary.href} className={styles.ctaSecondary}>
              {HERO.cta.secondary.label}
            </a>
          </div>
        </div>

        
        <div className={styles.visual}>
          <Image
            src="/images/hero-ilustracao.png"
            alt="Hero ilustração"
            width={460}
            height={460}
            className={styles.visualImg}
          />
        </div>
      </div>

      
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {HERO.stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
