import { AnimatedTestimonials, type Testimonial } from '@/components/ui/animated-testimonials'

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Paciente',
    role: '',
    company: '',
    content:
      'Cheguei com 83 kg e um IMC de quase 30. Hoje estou com 75 kg, meu peso ideal, e com um IMC saudável. Os resultados foram excelentes!',
    rating: 5,
    avatar: '',
  },
  {
    id: 2,
    name: 'Paciente',
    role: '',
    company: '',
    content:
      'Nem acreditei que aqueles exames eram meus quando os recebi. Tinha melhorado tudo: colesterol regulado (isso nunca tinha acontecido), gordura no fígado revertida e nada de pré-diabetes!',
    rating: 5,
    avatar: '',
  },
  {
    id: 3,
    name: 'Paciente',
    role: '',
    company: '',
    content:
      'Você explica muito bem e eu adorei o plano alimentar. Me surpreendi muito! Tô besta de ver como mudou tanta coisa em apenas um mês.',
    rating: 5,
    avatar: '',
  },
  {
    id: 4,
    name: 'Paciente',
    role: '',
    company: '',
    content:
      'Sobre o plano alimentar, está tudo às mil maravilhas. Estou ficando satisfeita com a quantidade de comida; achei que ia passar fome, mas estou mais satisfeita do que antes.',
    rating: 5,
    avatar: '',
  },
]

export const TestimonialsSection = () => {
  return (
    <AnimatedTestimonials
      badgeText="Depoimentos"
      title="O que dizem os pacientes"
      subtitle="Histórias reais de quem encontrou mais equilíbrio, saúde e liberdade com a comida."
      testimonials={testimonials}
      autoRotateInterval={12000}
    />
  )
}

export default TestimonialsSection
