import { memo } from 'react';
import { motion } from 'motion/react';
import clsx from 'clsx';

export interface Tab {
  id: string;
  label: string;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

/**
 * TabGroup - Pestañas animadas siguiendo el estilo visual del proyecto
 */
export const TabGroup = memo(function TabGroup({
  tabs,
  activeTab,
  onChange,
  className,
}: TabGroupProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-2 md:gap-4',
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={clsx(
              'font-anton relative cursor-pointer px-3 py-2 text-sm uppercase transition-colors duration-300 md:px-4 md:text-lg',
              isActive ? 'text-white' : 'text-white/60 hover:text-white/80'
            )}
          >
            {tab.label}
            {isActive && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute right-0 bottom-0 left-0 h-0.5 bg-white"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
});
