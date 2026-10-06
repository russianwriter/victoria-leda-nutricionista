import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/config/site'

export const WhatsAppFloat = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-watermelon py-3.5 pl-4 pr-5 text-sm font-semibold text-white shadow-2xl shadow-watermelon/30 transition-all hover:-translate-y-0.5 hover:bg-watermelon-dark"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:inline">Fale comigo</span>
    </a>
  )
}
