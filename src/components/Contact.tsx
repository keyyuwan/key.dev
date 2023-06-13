import { Mail } from 'lucide-react'
import { Input } from './Form/Input'

export function Contact() {
  return (
    <section id="contact" className="px-8 pb-10">
      <div className="flex flex-col items-center gap-1">
        <span className="text-center text-lg font-semibold text-purple-500">
          Contate-me
        </span>
        <p className="bg-gradient-to-br from-zinc-100 to-zinc-800 bg-clip-text text-center text-2xl font-bold text-transparent">
          Me conte sobre seu próximo projeto
        </p>
      </div>

      <form className="mt-8 w-full space-y-4">
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Telefone (WhatsApp)" type="tel" />
        <textarea
          placeholder="Mensagem"
          className="w-full rounded-sm border border-zinc-700 bg-zinc-800 p-4 outline-0 focus:border-purple-500"
        />

        <button
          type="submit"
          className="h-12 w-full rounded-sm bg-purple-500 font-semibold"
        >
          Enviar
        </button>
      </form>

      <span className="my-8 inline-block w-full text-center">ou</span>

      <div className="flex flex-col gap-4">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="flex h-12 items-center justify-center gap-4 rounded-sm bg-zinc-800"
        >
          <img src="/whatsapp.svg" alt="Logo WhatsApp" className="h-auto w-6" />
          <span className="font-semibold text-zinc-300">
            Chamar no WhatsApp
          </span>
        </a>

        <a
          href="mailto:keyflcbyuwan@gmail.com"
          className="flex h-12 items-center justify-center gap-4 rounded-sm bg-zinc-800"
        >
          <Mail size={24} className="text-zinc-700" />
          <span className="font-semibold text-zinc-300">Enviar E-mail</span>
        </a>
      </div>
    </section>
  )
}
