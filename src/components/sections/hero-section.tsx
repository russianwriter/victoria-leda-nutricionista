import { Globe2, Instagram, MessageCircle, Youtube } from 'lucide-react'
import { MinimalistHero } from '@/components/ui/minimalist-hero'
import { navLinks, site, whatsappUrl } from '@/config/site'

export const HeroSection = () => {
  return (
    <div id="top">
      <MinimalistHero
        logoText={site.crn}
        logoTagline={site.role}
        navLinks={navLinks}
        mainText="Te ajudo a chegar nos seus objetivos, com equilíbrio, sem terrorismo alimentar, melhorando sua relação com a comida."
        readMoreLabel="Conheça o meu trabalho"
        readMoreLink="#sobre"
        imageSrc={site.heroImage}
        imageAlt={`Foto de ${site.name}, ${site.role}`}
        overlayText={(() => {
          const [firstName, ...rest] = site.name.split(' ')
          return { part1: firstName, part2: rest.join(' ') }
        })()}
        socialLinks={[
          { icon: MessageCircle, href: whatsappUrl, label: 'WhatsApp' },
          { icon: Youtube, href: site.youtube, label: 'YouTube' },
          { icon: Instagram, href: site.instagram, label: 'Instagram' },
        ]}
        locations={[
          { label: site.location.remote, variant: 'leaf', icon: Globe2 },
          { label: site.location.presencial, variant: 'watermelon' },
        ]}
        navCta={{ label: 'WhatsApp', href: whatsappUrl, icon: MessageCircle, external: true }}
        ctas={[
          { label: 'Falar no WhatsApp', href: whatsappUrl, icon: MessageCircle, variant: 'primary', external: true },
          { label: 'Ver no YouTube', href: site.youtube, icon: Youtube, variant: 'outline', external: true },
        ]}
      />
    </div>
  )
}
