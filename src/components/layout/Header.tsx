'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SITE, NAV_LINKS, CTA_HEADER } from '@/lib/content'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        <a href="#hero" className={styles.logo} aria-label={SITE.name}>
          <Image
            src="/logos/nx-logo.webp"
            alt={SITE.name}
            width={280}
            height={78}
            className={styles.logoImg}
            priority
            unoptimized
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '5px',
              padding: '1px',
              display: 'inline-block'
            }}
          />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={CTA_HEADER.href} className={styles.cta}>
          {CTA_HEADER.label}
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CTA_HEADER.href}
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            {CTA_HEADER.label}
          </a>
        </div>
      )}
    </header>
  )
}
