import { ArrowUpRight, Mail } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { GithubIcon as Github } from './github-icon'

const contacts = [
  {
    label: 'Email',
    value: 'gajalkakkar@example.com',
    href: 'mailto:gajalkakkar@example.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/gajalkakkar',
    href: 'https://github.com/gajalkakkar',
    icon: Github,
    external: true,
  },
]

export function Contact() {
  return (
    <section aria-labelledby="contact-title" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20" id="contact">
      <SectionHeading index="04." title="Get In Touch" id="contact-title" />
      <div className="glass relative overflow-hidden rounded-2xl p-8 text-center md:p-12">
        <div aria-hidden="true" className="absolute -bottom-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {"Whether it's a project idea, a collaboration, or just a chat about AI and code — my inbox is always open."}
          </p>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {contacts.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-5 text-left transition-all hover:border-primary/60 hover:shadow-[0_0_28px_-6px_var(--primary)]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                    <span className="block truncate font-medium text-foreground group-hover:text-primary">{value}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
