const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg font-bold text-primary text-glow">
          {'<GK />'}
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary sm:px-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
