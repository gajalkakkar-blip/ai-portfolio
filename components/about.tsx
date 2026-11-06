import { Brain, Code2, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'

const highlights = [
  { icon: Brain, label: 'Focus', value: 'AI & Machine Learning' },
  { icon: Code2, label: 'Currently', value: 'Mastering Python & DSA' },
  { icon: Sparkles, label: 'Goal', value: 'Build tech that matters' },
]

export function About() {
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20" id="about">
      <SectionHeading index="01." title="About Me" id="about-title" />
      <div className="glass relative overflow-hidden rounded-2xl p-8 md:p-10">
        <div aria-hidden="true" className="absolute -top-24 -right-24 size-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
            <p>
              {"Hi! I'm "}
              <span className="text-foreground font-medium">Gajal</span>
              {", a first-year Artificial Intelligence & Data Science engineering student. My journey started with curiosity about how computers think — and it quickly grew into a passion for programming and problem solving."}
            </p>
            <p>
              {"I enjoy learning by building: from small C programs to web projects and security-focused apps. I'm excited to explore machine learning, data analysis, and the ways AI can make everyday life safer and smarter."}
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {highlights.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4 rounded-xl border border-border bg-background/40 p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="font-medium text-foreground">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
