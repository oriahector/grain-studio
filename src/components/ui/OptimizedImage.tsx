import { clsx } from 'clsx';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

export function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
  width,
  height,
}: OptimizedImageProps) {
  // Asegurar que siempre usamos WebP
  const webpSrc = src.endsWith('.webp')
    ? src
    : src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <img
      src={webpSrc}
      alt={alt}
      className={clsx('object-cover', className)}
      loading={loading}
      width={width}
      height={height}
    />
  );
}
