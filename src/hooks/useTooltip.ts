import { useState, useRef } from 'react';

interface TooltipState {
  visible: boolean;
  text: string;
  x: number;
  y: number;
}

const TOOLTIP_OFFSET = {
  X: 0, // Will use CSS transform center
  Y: 0, // Will use CSS transform -100%
} as const;

export function useTooltip() {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    text: '',
    x: 0,
    y: 0,
  });
  const tipRef = useRef<HTMLDivElement | null>(null);

  const handlePointerEnter = (e: React.PointerEvent, text: string) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setTooltip({
      visible: true,
      text,
      x: e.clientX + TOOLTIP_OFFSET.X,
      y: e.clientY + TOOLTIP_OFFSET.Y,
    });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX + TOOLTIP_OFFSET.X,
      y: e.clientY + TOOLTIP_OFFSET.Y,
    }));
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    try {
      (e.target as Element).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignore error
    }
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return {
    tooltip,
    tipRef,
    handlePointerEnter,
    handlePointerMove,
    handlePointerLeave,
  };
}
