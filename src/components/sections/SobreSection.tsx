import Image from 'next/image'
import { SOBRE } from '@/lib/content'
import styles from './SobreSection.module.css'

export default function SobreSection() {
  return (
    <section id="sobre" className={`section ${styles.sobre}`}>
      <div className="container">

        <div className={styles.header}>
          <span className="section-label">{SOBRE.sectionLabel}</span>
          <h2 className={`section-headline ${styles.headline}`}>{SOBRE.headline}</h2>
        </div>

        <div className={styles.grid}>

          
          <div className={styles.text}>
            {SOBRE.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}

            
            <div className={styles.imageWrap}>
              <Image
                src="/images/sobre-evento.png"
                alt="Feira NX Experience — substitua pela foto real"
                width={560}
                height={360}
                className={styles.image}
              />
              <p className={styles.imageCaption}>
                
                Foto do evento — substituir por imagem real
              </p>
            </div>
          </div>

          
          <div className={styles.cards}>
            {SOBRE.differentials.map((item) => (
              <div key={item.label} className={styles.card}>
                <span className={styles.cardIcon} aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className={styles.cardTitle}>{item.label}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
