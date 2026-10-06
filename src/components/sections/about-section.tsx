import { Reveal } from '@/components/ui/reveal'
import { site } from '@/config/site'

export const AboutSection = () => {
  return (
    <section id="sobre" className="relative bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf">Quem sou</span>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Nutrição que cabe na sua vida real
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
            <Reveal delay={0.1}>
              <p>
                Sou <strong className="font-semibold text-foreground">{site.name}</strong>, nutricionista, e meu
                trabalho é simples de explicar: ajudar você a melhorar a alimentação e alcançar seus objetivos de saúde{' '}
                <strong className="font-semibold text-watermelon">com equilíbrio</strong>, sem dietas radicais.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Convivo com diabetes tipo 1 desde a infância, e isso orienta boa parte do que faço. Por isso domino a
                contagem de carboidratos e produzo muito conteúdo sobre controle glicêmico, resistência à insulina,
                glicemia em jejum e pós-prandial, e até sobre como as emoções impactam o controle da doença.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                Também não vivo só de números: compartilho receitas saudáveis de verdade, como bolos, biscoitos, pão de
                queijo, salgados e sobremesas, além de dicas práticas sobre colesterol, emagrecimento, fome noturna e
                dietas da moda.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
