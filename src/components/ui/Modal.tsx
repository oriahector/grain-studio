import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { IconX } from '@tabler/icons-react';
import { motion, useScroll } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = 'lg',
}: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: contentRef });

  // Manejo de tecla ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Body scroll lock cuando modal está abierto
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const sizeClasses = {
    sm: 'max-w-lg',
    md: 'max-w-2xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    full: 'w-full',
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 lg:p-6"
      onClick={onClose}
      role="presentation"
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1], // easeOutExpo
          opacity: { duration: 0.3 },
        }}
        className={clsx(
          'relative w-full h-full md:h-auto',
          sizeClasses[size],
          'bg-white shadow-2xl',
          'md:rounded-xl',
          'flex flex-col',
          'max-h-screen md:max-h-[92vh]'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="relative flex flex-shrink-0 items-center justify-between px-5 py-4 md:px-6">
            <h2
              id="modal-title"
              className="text-lg font-anton uppercase tracking-wide text-klein md:text-xl"
            >
              {title}
            </h2>

            {/* Close Button */}
            <button
              type="button"
              aria-label="Cerrar modal"
              onClick={onClose}
              className={clsx(
                'flex size-8 flex-shrink-0 items-center justify-center rounded-full',
                'text-gray-400 hover:text-klein',
                'transition-colors duration-150',
                'focus:outline-none focus:ring-2 focus:ring-klein focus:ring-offset-2'
              )}
            >
              <IconX size={20} className="cursor-pointer" />
            </button>
            {/* Scroll Progress Bar */}
            <motion.div
              style={{
                scaleX: scrollYProgress,
                transformOrigin: '0%',
              }}
              className="absolute left-0 bottom-0 right-0 h-1 bg-klein z-10 md:rounded-tl-xl overflow-hidden"
            />
          </div>
        )}

        {/* Close button sin header */}
        {!title && (
          <button
            type="button"
            aria-label="Cerrar modal"
            onClick={onClose}
            className={clsx(
              'absolute right-4 top-4 z-10',
              'flex size-8 items-center justify-center rounded-full',
              'bg-white/90 text-gray-400 hover:text-klein shadow-lg',
              'transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-klein focus:ring-offset-2'
            )}
          >
            <IconX size={20} />
          </button>
        )}

        {/* Content */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto px-5 py-4 md:px-6 md:py-5"
        >
          {children}
        </div>
      </motion.aside>
    </div>
  );
}
