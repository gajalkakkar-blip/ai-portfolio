import { ExternalLink, LayoutTemplate, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { GithubIcon as Github } from './github-icon'

const projects = [
  {
    title: 'Kavach Shakti',
    tag: 'Cybersecurity App',
    icon: ShieldCheck,
    description:
      'A cybersecurity-focused safety app designed to help users stay protected online — spotting suspicious links, learning safe digital habits, and accessing quick help when it matters.',
    tech: ['Python', 'HTML/CSS', 'Security'],
    github: 'https://github.com/',
    live: null,
  },
  {
    title: 'Personal Portfolio',
    tag: 'Web Development',
    icon: LayoutTemplate,
    description:
      'This futuristic, dark-mode portfolio showcasing my skills, projects, and journey as an AI & Data Science student — built to be fast, accessible, and responsive.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/',
    live: '#top',
  },
]

export function Projects() {
  return (
    <section aria-labelledby="projects-title" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20" id="projects">
      <SectionHeading index="03." title="Projects" id="projects-title" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ title, tag, icon: Icon, description, tech, github, live }) => (
          <article
            key={title}
            className="glass group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-primary/60"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 group-hover:opacity-100"
            />
            <div className="flex items-start justify-between">
              <span className="glow flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="size-5" aria-hidden="true" />
                  <span className="sr-only">{`${title} source code on GitHub`}</span>
                </a>
                {live && (
                  <a href={live} className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary">
                    <ExternalLink className="size-5" aria-hidden="true" />
                    <span className="sr-only">{`View ${title}`}</span>
                  </a>
                )}
              </div>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-primary">{tag}</p>
            <h3 className="mt-1 text-2xl font-bold text-foreground">{title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{description}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
              {tech.map((t) => (
                <li key={t} className="rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-xs text-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
