import { IconCopyright, IconArrowUpRight } from '@tabler/icons-react';
import { Button } from './Button';

const socialLinks = [
  {
    name: 'Instagram' as const,
    url: 'https://instagram.com/wearegrainstudio',
  },
];

export function Footer() {
  return (
    <footer className="bg-klein py-6 text-white md:py-8">
      <div className="section-container mt-20">
        <p>
          Behind Grain Studio are{' '}
          <a
            href="https://www.linkedin.com/in/hmartinezoria/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-opacity hover:opacity-80"
          >
            Héctor
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/in/clara-morrondo/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-opacity hover:opacity-80"
          >
            Clara
          </a>
        </p>
      </div>
      <div className="section-container">
        <div className="flex items-center justify-between text-sm md:text-base">
          <div className="flex items-center gap-1">
            <IconCopyright className="size-4" />
            <span>{new Date().getFullYear()} Grain Studio</span>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Button
                size="xs"
                className="flex items-center gap-1 !capitalize"
                onClick={() => window.open(social.url, '_blank')}
              >
                {social.name}
                <IconArrowUpRight size={24} stroke={1} />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
