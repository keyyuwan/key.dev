import { Project } from './Project'

export function Projects() {
  return (
    <div className="mt-16 px-8">
      <h2 className="text-center text-2xl font-bold md:mx-auto md:max-w-3xl md:text-4xl">
        Achando soluções através da tecnologia e construindo aplicações de{' '}
        <span className="text-purple-500">alto valor</span>
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-2 md:mt-8 md:grid-cols-2 md:gap-4">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>

      <p className="mt-16 text-center text-zinc-100 md:mx-auto md:mt-20 md:max-w-md md:text-lg">
        esses foram alguns projetos que desenvolvi utilizando as{' '}
        <span className="font-medium text-purple-500">
          tecnologias mais modernas:
        </span>
      </p>
    </div>
  )
}
