import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <header className="flex h-16 items-center border-b border-zinc-800 md:h-20">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-8">
        <img src="/logo.svg" alt="" className="h-auto w-8 md:w-10" />

        <nav className="flex items-center gap-2">
          <NavLink
            href="https://www.linkedin.com/in/key-yu-wan/"
            target="_blank"
            rel="noreferrer"
            Icon={Linkedin}
            className="md:hidden"
          />

          <Link
            href="https://www.linkedin.com/in/key-yu-wan/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline md:text-sm md:text-zinc-500 md:transition-colors md:hover:text-zinc-300"
          >
            LinkedIn
          </Link>

          <span className="text-zinc-500">/</span>

          <NavLink
            href="https://github.com/keyyuwan"
            target="_blank"
            rel="noreferrer"
            Icon={Github}
            className="md:hidden"
          />

          <Link
            href="https://github.com/keyyuwan"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline md:text-sm md:text-zinc-500 md:transition-colors md:hover:text-zinc-300"
          >
            Github
          </Link>

          <span className="text-zinc-500">/</span>

          <NavLink href="#contact" Icon={Mail} className="md:hidden" />

          <a
            href="#contact"
            className="hidden md:inline md:text-sm md:text-zinc-500 md:transition-colors md:hover:text-zinc-300"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
