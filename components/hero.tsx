import { ArrowRight, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-6 py-24">
      <p className="glass mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-primary">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        B.Tech AI &amp; DS · 1st Year
      </p>
      <h1 id="hero-title" className="text-5xl font-bold tracking-tight text-balance sm:text-7xl">
        <span className="bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
          Gajal Kakkar
        </span>
      </h1>
      <p className="mt-4 font-mono text-lg text-primary text-glow sm:text-xl">
        {'> AI & Data Science Enthusiast'}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
        {"I'm a first-year engineering student fascinated by how data and intelligent systems shape the world. I love writing code, breaking down tough problems, and turning ideas into real, useful software — one commit at a time."}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="glow inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          View Projects
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="glass inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
        >
          <Mail className="size-4" aria-hidden="true" />
          Contact
        </a>
      </div>
    </section>
  )
}
