import { Github, Linkedin, Mail } from 'lucide-react'
import { NavLink } from './NavLink'

export function Footer() {
  return (
    <footer className="flex items-center border-t border-zinc-800 py-6 md:h-20">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-8 md:items-center md:justify-between">
        <span className="text-xs text-zinc-400">
          © 2023 Todos os direitos reservados.
        </span>

        <nav className="mt-2 flex items-center gap-2">
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
    </footer>
  )
}
