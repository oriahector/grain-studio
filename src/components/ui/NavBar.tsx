import { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import clsx from 'clsx';
import { IconPointFilled } from '@tabler/icons-react';
import { Button } from './Button';
import { floatAnimation } from '@/utils/animations';
import { ANIMATION_DURATIONS } from '@/config/constants';
import { scrollToSection, scrollToTop } from '@/utils/navigation';

const LINKS = [
  { id: 'works', label: 'Works' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;

export function NavBar() {
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    scrollToTop();
  };

  const handleLogoKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <header
      className={clsx(
        `font-anton fixed top-0 right-0 left-0 z-50 transition-colors`,
        hasScrolled ? 'bg-klein text-white' : 'bg-transparent text-white'
      )}
      style={{ transitionDuration: `${ANIMATION_DURATIONS.NORMAL}ms` }}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        id="scroll-indicator"
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="fixed top-0 right-0 left-0 h-1 bg-white"
        aria-hidden="true"
        role="presentation"
      />

      <div className="mx-auto flex h-20 items-center justify-between">
        <div className="section-container flex w-full items-center justify-between">
          {/* Logo */}
          <div
            className="flex cursor-pointer items-center text-lg uppercase md:text-2xl"
            onClick={handleLogoClick}
            onKeyDown={handleLogoKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Grain Studio - Go to top"
          >
            <span>Grain</span>
            <motion.span
              animate={floatAnimation}
              className="mx-0.5 inline-block"
            >
              <IconPointFilled size={14} className="object-contain" />
            </motion.span>
            <span>Studio</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-3 md:gap-7">
            {LINKS.map((link) => (
              <Button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                size="md"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
