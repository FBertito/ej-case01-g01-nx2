'use client'

import { useState, FormEvent } from 'react'
import { FORM_SECTION, FORM_FIELDS } from '@/lib/content'
import styles from './ContactForm.module.css'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const body = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="formulario" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>

          
          <div className={styles.info}>
            <span className="section-label">{FORM_SECTION.sectionLabel}</span>
            <h2 className={`section-headline ${styles.headline}`}>
              {FORM_SECTION.headline}
            </h2>
            <p className={`section-subheadline ${styles.subheadline}`}>
              {FORM_SECTION.subheadline}
            </p>
          </div>

          
          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✓</span>
                <p>{FORM_SECTION.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                {FORM_FIELDS.map((field) => (
                  <div key={field.name} className={styles.field}>
                    <label htmlFor={field.name} className={styles.label}>
                      {field.label}
                      {field.required && (
                        <span className={styles.required} aria-hidden="true"> *</span>
                      )}
                    </label>

                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={styles.input}
                        rows={4}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        className={styles.input}
                        defaultValue=""
                      >
                        <option value="" disabled>{field.placeholder}</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={styles.input}
                      />
                    )}
                  </div>
                ))}

                {status === 'error' && (
                  <p className={styles.errorMsg}>{FORM_SECTION.errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={styles.submit}
                >
                  {status === 'loading' ? 'Enviando...' : FORM_SECTION.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
