import { IconBrandInstagram, IconCopyright } from '@tabler/icons-react';

const socialLinks = [
  {
    name: 'Instagram' as const,
    url: 'https://instagram.com/wearegrainstudio',
    icon: IconBrandInstagram,
  },
  // Aquí puedes agregar más redes sociales según necesites
];

export function Footer() {
  return (
    <footer className="bg-klein py-6 text-white md:py-8">
      <div className="section-container">
        <div className="flex items-center justify-between text-sm md:text-base">
          <div className="flex items-center gap-1">
            <IconCopyright className="size-4" />
            <span>{new Date().getFullYear()} Grain Studio</span>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon strokeWidth={1.5} className="size-6 md:size-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
