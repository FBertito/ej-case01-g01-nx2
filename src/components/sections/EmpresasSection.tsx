import Image from 'next/image'
import { EMPRESAS_SECTION, COMPANIES } from '@/lib/content'
import styles from './EmpresasSection.module.css'

export default function EmpresasSection() {
  return (
    <section id="empresas" className={`section ${styles.empresas}`}>
      <div className="container">

        <div className={styles.header}>
          <span className="section-label">{EMPRESAS_SECTION.sectionLabel}</span>
          <h2 className="section-headline">{EMPRESAS_SECTION.headline}</h2>
          <p className="section-subheadline">{EMPRESAS_SECTION.subheadline}</p>
        </div>

        <div className={styles.grid}>
          {COMPANIES.map((company) => (
            <div key={company.name} className={styles.card}>

              
              <div className={styles.logoWrap}>
                <Image
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  width={160}
                  height={64}
                  className={styles.logo}
                />
              </div>

              <p className={styles.companyName}>{company.name}</p>
              <span className={styles.sector}>{company.sector}</span>

              {company.website && (
                <a href={company.website} target="_blank" rel="noopener noreferrer" className={styles.siteLink}>
                  Visitar site →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
