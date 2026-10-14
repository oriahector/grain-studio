import Image from 'next/image';
import type { Media } from '@/lib/projects';

interface Props {
  media: Media;
  sizes: string;
  priority?: boolean;
  className?: string;
}

export function ProjectMedia({ media, sizes, priority, className }: Props) {
  if (media.kind === 'video') {
    return (
      <video
        src={media.src}
        aria-label={media.alt}
        autoPlay
        muted
        loop
        playsInline
        className={className}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      priority={priority}
      placeholder={media.blur ? 'blur' : 'empty'}
      blurDataURL={media.blur}
      className={className}
    />
  );
}
