'use client';

interface Props {
  src: string;
  label: string;
  width?: number;
  height?: number;
  className?: string;
}

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Muted, looping clip that plays like an animated image. With reduced motion
 * it stays paused and shows controls, so the visitor can choose to play it.
 */
export function LoopVideo({ src, label, width, height, className }: Props) {
  return (
    <video
      ref={(video) => {
        if (video && reducedMotion()) {
          video.pause();
          video.controls = true;
        }
      }}
      src={src}
      aria-label={label}
      width={width}
      height={height}
      autoPlay
      muted
      loop
      playsInline
      className={className}
    />
  );
}
