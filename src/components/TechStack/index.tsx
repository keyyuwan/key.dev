import { Stack } from './Stack'

export function TechStack() {
  return (
    <section className="mt-12 px-8 md:mt-16">
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <Stack
          imgPath="/react.png"
          title="Front-end"
          techs={[
            'ReactJS',
            'Next.js',
            'TailwindCSS',
            'StitchesJS',
            'Styled Components',
            'TypeScript',
          ]}
        />
        <Stack
          imgPath="/node.png"
          title="Back-end"
          techs={[
            'Node.js',
            'Fastify',
            'NestJS',
            'Prisma ORM',
            'Vitest',
            'Docker',
          ]}
        />
      </div>
    </section>
  )
}
