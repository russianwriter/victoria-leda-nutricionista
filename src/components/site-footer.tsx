import { Instagram, MapPin, MessageCircle, Youtube } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { site, whatsappUrl } from '@/config/site'

const socialLinks = [
  { icon: MessageCircle, href: whatsappUrl, label: 'WhatsApp' },
  { icon: Youtube, href: site.youtube, label: 'YouTube' },
  { icon: Instagram, href: site.instagram, label: 'Instagram' },
]

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-cream py-12">
      <Reveal className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-xl font-bold">{site.name}</p>
          <p className="mt-1 text-sm text-foreground/60">
            {site.role} · {site.crn}
          </p>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-foreground/60 md:justify-start">
            <MapPin className="h-4 w-4 shrink-0 text-leaf" />
            <span>{site.location.label}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground/70 transition-colors hover:border-watermelon/40 hover:bg-watermelon hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="container mt-8 border-t border-border pt-6">
        <p className="text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados. Este site não substitui uma consulta
          nutricional individualizada.
        </p>

        <a
          href={site.developer.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram da ${site.developer.name}`}
          className="mt-5 flex items-center justify-center gap-3 opacity-80 transition-opacity hover:opacity-100"
        >
          <span className="text-xs text-foreground/50">Desenvolvido por</span>
          <img
            src={site.developer.logo}
            alt={`Logo ${site.developer.name}`}
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="font-display text-base font-bold text-foreground/70">{site.developer.name}</span>
        </a>
      </Reveal>
    </footer>
  )
}
