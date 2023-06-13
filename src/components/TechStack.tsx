export function TechStack() {
  return (
    <section className="mt-12 px-8 md:mt-16">
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <div className="w-full rounded-sm border border-zinc-800 bg-zinc-900 p-4 md:text-center">
          <div className="relative md:flex md:items-center md:justify-center">
            <img
              src="/react.png"
              alt="ReactJS"
              className="h-auto w-12 opacity-20 md:w-16"
            />
            <h3 className="absolute left-0 top-[50%] bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-xl font-semibold text-transparent md:left-[50%] md:translate-x-[-50%] md:text-2xl">
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

        <div className="w-full rounded-sm border border-zinc-800 bg-zinc-900 p-4 md:text-center">
          <div className="relative md:flex md:items-center md:justify-center">
            <img
              src="/node.png"
              alt="Node.js"
              className="h-auto w-12 opacity-20 md:w-16"
            />
            <h3 className="absolute left-0 top-[50%] bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-xl font-semibold text-transparent md:left-[50%] md:translate-x-[-50%] md:text-2xl">
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
