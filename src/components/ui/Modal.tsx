import React from 'react';
import clsx from 'clsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      aria-hidden={!isOpen}
      className="fixed inset-0 z-50 mx-auto pointer-events-auto"
      onClick={onClose}
      role="presentation"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-100 transition-opacity duration-320" />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        className={clsx(
          'fixed right-0 top-0 h-full w-full bg-white text-accent shadow-xl',
          'opacity-100 transition-all duration-520',
          'clip-path-inset-0-0-0-0'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <div className="mb-4 flex items-center gap-4">
            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className={clsx(
                'flex size-8 flex-shrink-0 items-center justify-center rounded-full',
                'border border-klein text-klein',
                'transition-all duration-180 ease-in',
                'hover:bg-klein hover:text-white',
                'focus:outline-none focus:ring-2 focus:ring-klein focus:ring-offset-2'
              )}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {title && (
              <div className="flex items-center gap-2 uppercase tracking-wide text-klein">
                <h2 className="text-lg font-anton md:text-2xl">{title}</h2>
                <img
                  src="images/grain.svg"
                  alt="Grain Studio logo"
                  className="h-2 w-2 object-contain"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </aside>
    </div>
  );
}
