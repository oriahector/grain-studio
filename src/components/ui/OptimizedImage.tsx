import { memo } from 'react';
import { clsx } from 'clsx';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'auto' | 'sync';
}

/**
 * Componente optimizado para imágenes WebP con mejores prácticas de performance
 * - Usa memo para evitar re-renders innecesarios
 * - Soporta fetchPriority para imágenes críticas
 * - Decoding async para mejor performance
 */
export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
  width,
  height,
  fetchPriority = 'auto',
  decoding = 'async',
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
      fetchPriority={fetchPriority}
      decoding={decoding}
    />
  );
});
