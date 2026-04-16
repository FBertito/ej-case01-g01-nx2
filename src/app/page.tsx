import Header        from '@/components/layout/Header'
import Footer        from '@/components/layout/Footer'
import HeroSection   from '@/components/sections/HeroSection'
import SobreSection  from '@/components/sections/SobreSection'
import EmpresasSection from '@/components/sections/EmpresasSection'
import ContactForm   from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      
      <Header />

      <main>
        
        <HeroSection />

        
        <SobreSection />

        
        <EmpresasSection />

        
        <ContactForm />
      </main>

      
      <Footer />
    </>
  )
}
