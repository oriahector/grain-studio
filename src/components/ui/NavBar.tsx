import React from 'react';
import { motion, useScroll } from 'motion/react';

import { Button } from './Button';

const links = [
  { id: 'works', label: 'Works' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;

export function NavBar() {
  const { scrollYProgress } = useScroll();

  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 font-anton ${
        hasScrolled ? 'bg-klein text-white' : 'text-white'
      }`}
    >
      <motion.div
        id="scroll-indicator"
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="fixed top-0 left-0 right-0 h-1 bg-white"
      />
      <div className="container-px mx-auto flex h-20 items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <div
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Go to top"
          >
            <div className=" uppercase tracking-wide text-lg md:text-2xl flex items-center">
              Grain{' '}
              <img
                src="images/grain.svg"
                alt="icon"
                className="w-2 h-2 object-contain "
              />{' '}
              Studio
            </div>
          </div>

          <nav className="flex items-center gap-2 md:gap-6">
            {links.map((l) => (
              <Button
                key={l.id}
                onClick={() => {
                  document
                    .querySelector(`#${l.id}`)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {l.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
