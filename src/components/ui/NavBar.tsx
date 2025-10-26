import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

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
        'fixed left-0 right-0 top-0 z-50 font-anton transition-colors duration-300',
        hasScrolled ? 'bg-klein text-white' : 'bg-transparent text-white'
      )}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        id="scroll-indicator"
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="fixed left-0 right-0 top-0 h-1 bg-white"
      />

      <div className="mx-auto flex h-20 items-center justify-between">
        <div className="section-container flex w-full items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center text-lg md:text-2xl cursor-pointer uppercase"
            onClick={handleLogoClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            tabIndex={0}
            aria-label="Grain Studio - Go to top"
          >
            <span>Grain</span>
            <motion.span
              animate={
                isHovered
                  ? {
                      scale: [1, 1.5, 1],
                    }
                  : { scale: 1 }
              }
              transition={{
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1],
                },
              }}
              className="mx-0.5 inline-block"
            >
              <IconPointFilled size={14} className="object-contain" />
            </motion.span>
            <span>Studio</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2 md:gap-6">
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
