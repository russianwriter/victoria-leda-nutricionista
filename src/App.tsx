import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { ContentSection } from '@/components/sections/content-section'
import { HeroSection } from '@/components/sections/hero-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { SiteFooter } from '@/components/site-footer'

function App() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ContentSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}

export default App
