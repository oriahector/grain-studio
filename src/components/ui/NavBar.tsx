import React from 'react';
import { motion, useScroll } from 'motion/react';
import clsx from 'clsx';
import { IconPointFilled } from '@tabler/icons-react';
import { Button } from './Button';

const LINKS = [
  { id: 'works', label: 'Works' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;

export function NavBar() {
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={clsx(
        'font-anton fixed top-0 right-0 left-0 z-50 transition-colors duration-300',
        hasScrolled ? 'bg-klein text-white' : 'bg-transparent text-white'
      )}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        id="scroll-indicator"
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="fixed top-0 right-0 left-0 h-1 bg-white"
      />

      <div className="mx-auto flex h-20 items-center justify-between">
        <div className="section-container flex w-full items-center justify-between">
          {/* Logo */}
          <div
            className="flex cursor-pointer items-center text-lg uppercase md:text-2xl"
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            aria-label="Grain Studio - Go to top"
          >
            <span>Grain</span>
            <motion.span
              animate={{
                x: [0, 2, -2, 0],
                y: [0, -3, 1, 0],
              }}
              transition={{
                x: {
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                },
              }}
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
