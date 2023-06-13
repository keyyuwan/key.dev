import { ChevronRight } from 'lucide-react'

export function Project() {
  return (
    <div className="flex flex-col  gap-3 pb-4">
      <img
        src="/ignite-call.png"
        alt=""
        className="h-40 w-full object-cover md:h-60 lg:h-64"
      />
      <a
        href=""
        className="ml-auto flex gap-1 text-xs text-zinc-400 transition-colors hover:text-zinc-300"
      >
        Visualizar Ignite Call
        <ChevronRight size={16} />
      </a>
    </div>
  )
}
