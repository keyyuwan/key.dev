export function TechStack() {
  return (
    <section className="px-8 py-12">
      <div className="flex flex-col gap-4">
        <div className="rounded-sm border border-zinc-800 bg-zinc-900 p-4">
          <div className="relative">
            <img
              src="/react.png"
              alt="ReactJS"
              className="h-auto w-12 opacity-20"
            />
            <h3 className="absolute left-0 top-[50%] bg-gradient-to-br from-zinc-100 to-zinc-700 bg-clip-text text-xl font-semibold text-transparent">
              Front-end:
            </h3>
          </div>

          <ul className="mt-6 space-y-3 text-zinc-400">
            <li>ReactJS</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>StitchesJS</li>
            <li>Styled Components</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className="rounded-sm border border-zinc-800 bg-zinc-900 p-4">
          <div className="relative">
            <img
              src="/node.png"
              alt="ReactJS"
              className="h-auto w-12 opacity-20"
            />
            <h3 className="absolute left-0 top-[50%] bg-gradient-to-br from-zinc-100 to-zinc-700 bg-clip-text text-xl font-semibold text-transparent">
              Back-end:
            </h3>
          </div>

          <ul className="mt-6 space-y-3 text-zinc-400">
            <li>Node.js</li>
            <li>Fastify</li>
            <li>NestJS</li>
            <li>Prisma</li>
            <li>Vitest</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
