import { Mail } from 'lucide-react'
import Image from 'next/image'
import { HeroPattern } from './HeroPattern'

export function Greetings() {
  return (
    <section className="relative flex justify-center overflow-hidden pb-16 pt-20">
      <div className="relative z-10 flex max-w-xl flex-col items-center justify-center px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="https://github.com/keyyuwan.png"
            alt="Key Yu Wan"
            width={120}
            height={120}
            className="rounded-full"
          />

          <span className="text-sm text-zinc-500">Oi, me chamo Key 👋🏼</span>
        </div>

        <h1 className="mt-2	bg-gradient-to-br from-zinc-100 to-zinc-900 bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent md:mt-4 md:text-4xl">
          Desenvolvedor Full-Stack
        </h1>

        <p className="mt-8 bg-clip-text text-center leading-relaxed text-zinc-400 md:text-lg">
          Apaixonado por tecnologia, venho trabalhando na área de
          desenvolvimento há mais de 2 anos.
        </p>

        <a
          href="#contact"
          className="mt-6 flex h-14 w-52 items-center justify-center gap-2 rounded-sm border border-zinc-800 bg-zinc-900 text-zinc-400 transition duration-300 hover:scale-95"
        >
          <Mail size={16} />
          Contate-me
        </a>

        {/* Resolvendo problemas através da tecnologia e construindo aplicações
            de alto valor */}
      </div>

      <HeroPattern />
    </section>
  )
}
