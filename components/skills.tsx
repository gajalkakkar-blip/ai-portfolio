import { Braces, FileCode2, GitBranch, Puzzle, Terminal } from 'lucide-react'
import { SectionHeading } from './section-heading'

const skills = [
  { name: 'C', icon: Terminal, note: 'Fundamentals & logic' },
  { name: 'Python', icon: Braces, note: 'Scripting & data' },
  { name: 'HTML/CSS', icon: FileCode2, note: 'Web interfaces' },
  { name: 'Git', icon: GitBranch, note: 'Version control' },
  { name: 'Problem Solving', icon: Puzzle, note: 'DSA & thinking' },
]

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20" id="skills">
      <SectionHeading index="02." title="Skills" id="skills-title" />
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map(({ name, icon: Icon, note }) => (
          <li
            key={name}
            className="glass group flex flex-col items-center gap-3 rounded-xl p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_28px_-6px_var(--primary)]"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <span className="font-semibold text-foreground">{name}</span>
            <span className="font-mono text-xs text-muted-foreground">{note}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
