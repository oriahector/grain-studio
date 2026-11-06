import Image from 'next/image';
import type { Media } from '@/content/projects';
import { LoopVideo } from './LoopVideo';

interface Props {
  media: Media;
  sizes: string;
  /** LCP candidate: preload it and fetch at high priority */
  priority?: boolean;
  className?: string;
}

export function ProjectMedia({ media, sizes, priority, className }: Props) {
  if (media.kind === 'video') {
    return (
      <LoopVideo
        src={media.src}
        label={media.alt}
        width={media.width}
        height={media.height}
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
      preload={priority}
      fetchPriority={priority ? 'high' : undefined}
      placeholder={media.blur ? 'blur' : 'empty'}
      blurDataURL={media.blur}
      className={className}
    />
  );
}
