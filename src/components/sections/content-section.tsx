import { MessageCircle, Play, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import { FlowButton } from '@/components/ui/flow-button'
import { Reveal } from '@/components/ui/reveal'
import { site, whatsappUrl } from '@/config/site'

const topics = [
  'Contagem de carboidratos na prática',
  'Resistência à insulina',
  'Glicemia em jejum e pós-prandial',
  'Emoções e controle do diabetes',
  'Dietas da moda: carnívora, 30 dias sem açúcar',
  'Receitas: bolos, biscoitos, pão de queijo e sobremesas',
]

export const ContentSection = () => {
  return (
    <section id="conteudo" className="relative overflow-hidden bg-leaf-light py-20 md:py-28">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-salmon/40 blur-3xl" />
      <div className="container relative">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <Reveal direction="left">
              <span className="inline-flex items-center gap-2 rounded-full bg-watermelon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-watermelon">
                <Youtube className="h-4 w-4 shrink-0" /> Canal no YouTube
              </span>
              <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Conteúdo gratuito, direto ao ponto
              </h2>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                Toda semana compartilho vídeos sobre controle glicêmico, contagem de carboidratos, receitas e dicas de
                nutrição. Um conteúdo pensado para ser prático, acolhedor e sem promessas milagrosas.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-leaf/20 bg-white/70 px-5 py-3">
                <span className="font-display text-3xl font-black text-leaf-dark">1,25 mil</span>
                <span className="text-sm font-medium text-foreground/70">inscritos acompanhando</span>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-watermelon px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-watermelon/25 transition-colors hover:bg-watermelon-dark"
                >
                  <Youtube className="h-5 w-5 shrink-0" /> Inscrever-se no canal
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-watermelon/40 hover:text-watermelon"
                >
                  Seguir no Instagram
                </a>
              </div>
            </Reveal>
          </div>

          <ul className="grid gap-3">
            {topics.map((topic, index) => (
              <Reveal as="li" key={topic} direction="right" delay={index * 0.08}>
                <motion.a
                  href={site.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 6 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/80 px-5 py-4 backdrop-blur transition-colors hover:border-watermelon/30 hover:bg-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-watermelon/10 text-watermelon">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80">{topic}</span>
                </motion.a>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="max-w-xl font-display text-2xl font-bold leading-snug text-foreground/85">
              Gostou do conteúdo? Vamos cuidar da sua alimentação juntas.
            </p>
            <FlowButton
              text="Falar no WhatsApp"
              href={whatsappUrl}
              external
              icon={MessageCircle}
              variant="watermelon"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
