import { useState } from 'react';

interface TooltipState {
  visible: boolean;
  text: string;
  x: number;
  y: number;
}

export function useTooltip() {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    text: '',
    x: 0,
    y: 0,
  });

  const showTooltip = (text: string, x: number, y: number) => {
    setTooltip({ visible: true, text, x, y });
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const moveTooltip = (x: number, y: number) => {
    setTooltip((prev) => ({ ...prev, x, y }));
  };

  return {
    tooltip,
    showTooltip,
    hideTooltip,
    moveTooltip,
  };
}
