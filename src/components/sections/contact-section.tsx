import { Instagram, Mail, MessageCircle, Youtube } from 'lucide-react'
import { FlowButton } from '@/components/ui/flow-button'
import { Reveal } from '@/components/ui/reveal'
import { site, whatsappUrl } from '@/config/site'

export const ContactSection = () => {
  return (
    <section id="contato" className="relative bg-background py-20 md:py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-watermelon via-watermelon-dark to-leaf-dark px-8 py-16 text-center shadow-2xl shadow-watermelon/20 md:px-16 md:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-salmon/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-leaf/40 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <Reveal delay={0.1}>
                <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                  Vamos começar a sua mudança com equilíbrio?
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 text-base leading-relaxed text-white/85">
                  Me chama no WhatsApp para agendar sua consulta ou tire suas dúvidas. Também te espero no YouTube e no
                  Instagram, onde compartilho conteúdo novo toda semana.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <FlowButton
                    text="Falar no WhatsApp"
                    href={whatsappUrl}
                    external
                    icon={MessageCircle}
                    variant="light"
                    className="w-full justify-center border-[1.5px] px-7 py-4 font-bold sm:w-auto"
                  />
                  <a
                    href={site.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
                  >
                    <Youtube className="h-5 w-5 shrink-0" /> Assinar o canal
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/85">
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Instagram className="h-4 w-4 shrink-0" /> @victorialeda
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0" /> {site.email}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
