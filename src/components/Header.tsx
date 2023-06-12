import { Github, Linkedin, Mail } from 'lucide-react'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <header className="flex h-16 items-center border-b border-zinc-800 md:h-20">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-8">
        <span className="text-zinc-500">K</span>

        <nav className="flex items-center gap-2">
          <NavLink
            href="https://www.linkedin.com/in/key-yu-wan/"
            target="_blank"
            rel="noreferrer"
            Icon={Linkedin}
          />

          <span className="text-zinc-500">/</span>

          <NavLink
            href="https://github.com/keyyuwan"
            target="_blank"
            rel="noreferrer"
            Icon={Github}
          />

          <span className="text-zinc-500">/</span>

          <NavLink href="#contact" Icon={Mail} />
        </nav>
      </div>
    </header>
  )
}
