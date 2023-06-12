export function Projects() {
  return (
    <div className="px-8">
      <h2 className="text-center text-2xl font-bold">
        Achando soluções através da tecnologia e construindo aplicações de{' '}
        <span className="text-purple-500">alto valor</span>
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-2">
        <img
          src="/ignite-call.png"
          alt=""
          className="h-40 w-full object-cover"
        />
        <img
          src="/ignite-call.png"
          alt=""
          className="h-40 w-full object-cover"
        />
        <img
          src="/ignite-call.png"
          alt=""
          className="h-40 w-full object-cover"
        />
        <img
          src="/ignite-call.png"
          alt=""
          className="h-40 w-full object-cover"
        />
      </div>

      <p className="mt-16 text-center text-zinc-100">
        esses foram alguns projetos que desenvolvi utilizando as{' '}
        <span className="font-medium text-purple-500">
          tecnologias mais modernas:
        </span>
      </p>
    </div>
  )
}
