import Image from 'next/image'
import { Mail } from 'lucide-react'
import { HeroPattern } from '@/components/HeroPattern'

export default function Home() {
  return (
    <main>
      <section className="relative flex h-screen items-center justify-center">
        <div className="relative z-10 flex max-w-xl flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="https://github.com/keyyuwan.png"
              alt="Key Yu Wan"
              width={120}
              height={120}
              className="rounded-full"
            />

            <span className="text-sm text-zinc-400">Oi, me chamo Key 🖐</span>
          </div>

          <h1 className="mt-2 bg-gradient-to-br from-zinc-50 to-zinc-700 bg-clip-text text-center text-2xl font-bold text-transparent">
            Desenvolvedor Full-Stack
          </h1>

          <p className="mt-8 bg-clip-text text-center leading-relaxed text-zinc-400">
            Apaixonado por tecnologia, venho desenvolvendo produtos digitais há
            mais de 2 anos.
          </p>

          <button className="mt-6 flex h-14 w-52 items-center justify-center gap-2 rounded-sm border border-zinc-700 bg-zinc-800 text-zinc-400">
            <Mail size={16} />
            Me contate
          </button>

          {/* Resolvendo problemas através da tecnologia e construindo aplicações
            de alto valor */}
        </div>

        <HeroPattern />
      </section>
    </main>
  )
}
