import {
  Activity,
  Calculator,
  ChefHat,
  Droplets,
  HeartPulse,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { whatsappUrl } from '@/config/site'

interface Service {
  icon: LucideIcon
  title: string
  text: string
  tags: string[]
}

const services: Service[] = [
  {
    icon: Calculator,
    title: 'Contagem de carboidratos',
    text: 'Aprenda na prática a contar carboidratos e a ajustar as doses com mais segurança no dia a dia.',
    tags: ['Diabetes', 'Rotina'],
  },
  {
    icon: Droplets,
    title: 'Controle glicêmico',
    text: 'Estratégias para glicemia em jejum e pós-prandial, resistência à insulina e variabilidade.',
    tags: ['Glicemia', 'Monitorização'],
  },
  {
    icon: ChefHat,
    title: 'Receitas saudáveis',
    text: 'Bolos, biscoitos, pão de queijo, salgados e sobremesas que cabem no seu plano sem culpa.',
    tags: ['Praticidade', 'Sabor'],
  },
  {
    icon: TrendingUp,
    title: 'Emagrecimento com equilíbrio',
    text: 'Emagrecimento sustentável, sem terrorismo nutricional e sem dietas da moda.',
    tags: ['Sem extremos'],
  },
  {
    icon: Activity,
    title: 'Colesterol e saúde metabólica',
    text: 'Cuidado da saúde cardiovascular e metabólica com alimentação real e ajustável.',
    tags: ['Prevenção'],
  },
  {
    icon: HeartPulse,
    title: 'Emoções e alimentação',
    text: 'Como o estresse e as emoções influenciam o controle da glicemia, a fome noturna e as escolhas.',
    tags: ['Comportamento'],
  },
]

export const ServicesSection = () => {
  return (
    <section id="atendimento" className="relative bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-leaf">Atendimento</span>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Como posso te ajudar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">
            Um acompanhamento construído para a sua realidade, seja você pessoa com diabetes, alguém que busca
            emagrecer com saúde ou só quer comer melhor sem neuras.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, tags }) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-watermelon/40 hover:shadow-2xl hover:shadow-watermelon/10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-salmon-light to-salmon text-watermelon-dark transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">{text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-leaf-light px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-leaf-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-leaf/25 transition-colors hover:bg-leaf-dark"
          >
            Tirar dúvidas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
