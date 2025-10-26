import React, { useEffect, useRef } from 'react';
import { IconX } from '@tabler/icons-react';
import { motion, useMotionValue } from 'motion/react';
import { IconPointFilled } from '@tabler/icons-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useMotionValue(0);

  // Scroll progress tracking
  useEffect(() => {
    const element = contentRef.current;
    if (!isOpen || !element) return;

    const handleScroll = () => {
      const scrollHeight = element.scrollHeight - element.clientHeight;
      const progress = scrollHeight > 0 ? element.scrollTop / scrollHeight : 0;
      scrollYProgress.set(progress);
    };

    element.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => element.removeEventListener('scroll', handleScroll);
  }, [isOpen, scrollYProgress]);

  // ESC key & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, onClose]);

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
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.3 },
        }}
        className="relative w-full h-full md:h-auto bg-white shadow-2xl md:rounded-xl flex flex-col max-h-screen md:max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="relative flex items-center justify-between px-5 py-4 md:px-6">
            <div className="flex items-center text-klein text-lg font-anton uppercase   md:text-xl">
              <span id="modal-title">Grain</span>
              <IconPointFilled size={14} className="object-contain" />
              <span>Studio</span>
            </div>
            <button
              type="button"
              aria-label="Cerrar modal"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-full text-klein hover:text-white transition-colors ring-2 ring-klein hover:bg-klein cursor-pointer"
            >
              <IconX size={20} />
            </button>

            {/* Scroll Progress Bar */}
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="absolute left-0 bottom-0 right-0 h-1 bg-klein"
            />
          </div>
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
