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
    <footer className="container-px py-3 text-md bg-accent text-white">
      <div className="flex justify-between items-center font-arimo text-md md:text-lg">
        <div>
          © {new Date().getFullYear()} Grain Studio
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
              <social.icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}