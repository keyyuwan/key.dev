interface StackProps {
  imgPath: string
  title: string
  techs: string[]
}

export function Stack({ imgPath, title, techs }: StackProps) {
  return (
    <div className="w-full rounded-sm border border-zinc-800 bg-zinc-900 p-4 md:text-center">
      <div className="relative md:flex md:items-center md:justify-center">
        <img
          src={imgPath}
          alt="ReactJS"
          className="h-auto w-12 opacity-20 md:w-16"
        />
        <h3 className="absolute left-0 top-[50%] bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-xl font-semibold text-transparent md:left-[50%] md:translate-x-[-50%] md:text-2xl">
          {title}:
        </h3>
      </div>

      <ul className="mt-6 space-y-3 text-zinc-400">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}
