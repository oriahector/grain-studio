import { InstagramIcon } from "../icons/Instagram"

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/wearegrainstudio',
    icon: InstagramIcon
  },
  // Aquí puedes agregar más redes sociales según necesites
]

export function Footer() {
  return (
    <footer className="container-px py-10 text-md bg-accent text-white">
      <div className="flex justify-between items-center">
        <div>
          © {new Date().getFullYear()} Grain Studio • All rights reserved
        </div>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label={`Follow us on ${social.name}`}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}