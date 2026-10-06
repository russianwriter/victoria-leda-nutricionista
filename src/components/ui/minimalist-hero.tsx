import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { type LucideIcon, MapPin, X } from 'lucide-react'
import { FlowButton } from '@/components/ui/flow-button'
import { cn } from '@/lib/utils'

export interface HeroCta {
  label: string
  href: string
  icon?: LucideIcon
  variant?: 'primary' | 'outline' | 'ghost'
  external?: boolean
}

interface MinimalistHeroProps {
  logoText: string
  logoTagline?: string
  navLinks: { label: string; href: string }[];
  mainText: string
  readMoreLabel?: string
  readMoreLink?: string
  imageSrc: string
  imageAlt: string
  overlayText: {
    part1: string
    part2: string
  };
  socialLinks: { icon: LucideIcon; href: string; label: string }[];
  locations: { label: string; variant?: 'leaf' | 'watermelon'; icon?: LucideIcon }[]
  ctas?: HeroCta[]
  navCta?: HeroCta
  circleClassName?: string
  className?: string
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-watermelon"
  >
    {children}
  </a>
)

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-watermelon/40 hover:bg-watermelon hover:text-white"
  >
    <Icon className="h-5 w-5" />
  </a>
)

const ctaStyles: Record<NonNullable<HeroCta['variant']>, string> = {
  primary:
    'bg-watermelon text-white shadow-lg shadow-watermelon/25 hover:bg-watermelon-dark hover:shadow-watermelon/35',
  outline:
    'border border-leaf/30 bg-leaf-light/60 text-leaf-dark hover:border-leaf hover:bg-leaf hover:text-white',
  ghost: 'text-foreground/70 hover:text-watermelon',
}

const CtaButton = ({ cta }: { cta: HeroCta }) => {
  const Icon = cta.icon

  if ((cta.variant ?? 'primary') === 'primary') {
    return (
      <FlowButton
        text={cta.label}
        href={cta.href}
        external={cta.external}
        icon={Icon}
        variant="watermelon"
      />
    )
  }

  return (
    <a
      href={cta.href}
      {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300',
        ctaStyles[cta.variant ?? 'primary'],
      )}
    >
      {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
      {cta.label}
    </a>
  )
}

export const MinimalistHero = ({
  logoText,
  logoTagline,
  navLinks,
  mainText,
  readMoreLabel = 'Saiba mais',
  readMoreLink = '#',
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locations,
  ctas = [],
  navCta,
  circleClassName,
  className,
}: MinimalistHeroProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className={cn(
        'relative flex min-h-[100svh] w-full flex-col items-center justify-between gap-8 overflow-hidden bg-background p-6 font-sans sm:p-8 md:p-12',
        className,
      )}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-salmon/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />

      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.a
          href="#top"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col leading-none"
        >
          <span className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {logoText}
          </span>
          {logoTagline ? (
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-leaf">
              {logoTagline}
            </span>
          ) : null}
        </motion.a>

        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          {navCta ? (
            <FlowButton
              text={navCta.label}
              href={navCta.href}
              external={navCta.external}
              icon={navCta.icon}
              variant="watermelon"
              className="py-2 text-xs"
            />
          ) : null}
        </nav>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <>
              <span className="block h-0.5 w-6 bg-foreground"></span>
              <span className="block h-0.5 w-6 bg-foreground"></span>
              <span className="block h-0.5 w-5 bg-foreground"></span>
            </>
          )}
        </motion.button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="z-30 flex w-full max-w-7xl flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold tracking-widest text-foreground/70 transition-colors hover:text-watermelon"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-6 md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">{mainText}</p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-watermelon decoration-2 underline-offset-4 transition-colors hover:text-watermelon"
          >
            {readMoreLabel}
          </a>

          {ctas.length > 0 ? (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {ctas.map((cta) => (
                <CtaButton key={cta.label} cta={cta} />
              ))}
            </div>
          ) : null}
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 flex h-full items-center justify-center md:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={cn(
              'absolute z-0 h-[280px] w-[280px] rounded-full bg-gradient-to-br from-salmon via-salmon-light to-watermelon/70 md:h-[380px] md:w-[380px] lg:h-[480px] lg:w-[480px]',
              circleClassName,
            )}
          ></motion.div>
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-64 scale-150 object-contain drop-shadow-2xl md:w-80 lg:w-[26rem]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = `https://cdn.21st.dev/assets/mirror/69/69f133c713200aa29789f9f07a83f105cc28793926179eb4a224b0454a743a00.svg`
            }}
          />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="font-display text-6xl font-black leading-[0.9] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
            {overlayText.part1}
            <br />
            <span className="text-watermelon">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} label={link.label} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex flex-col items-center gap-2 sm:items-start"
        >
          {locations.map((location) => {
            const LocationIcon = location.icon ?? MapPin
            return (
              <span
                key={location.label}
                className={cn(
                  'inline-flex max-w-full items-center gap-2 rounded-full border px-4 py-2 text-center text-xs font-semibold leading-snug',
                  location.variant === 'watermelon'
                    ? 'border-watermelon/25 bg-salmon-light text-watermelon-dark'
                    : 'border-leaf/25 bg-leaf-light text-leaf-dark',
                )}
              >
                <LocationIcon className="h-4 w-4 shrink-0" />
                {location.label}
              </span>
            )
          })}
        </motion.div>
      </footer>
    </div>
  )
}

export default MinimalistHero
