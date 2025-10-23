import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      aria-hidden={!isOpen}
      className="fixed inset-0 z-50 panel-container"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 overlay" />
      
      <aside
        role="dialog"
        aria-modal="true"
        className="fixed right-0 top-0 h-full w-full bg-white text-accent shadow-xl panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="mb-4 flex items-center">
            <button
              aria-label="Cerrar"
              onClick={onClose}
              className="close-btn mr-4"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {title && <h3 className="text-2xl font-semibold">{title}</h3>}
          </div>
          {children}
        </div>
      </aside>
    </div>
  )
}
