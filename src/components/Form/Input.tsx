import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="w-full rounded-sm border border-zinc-700 bg-zinc-800 p-4 outline-0 focus:border-purple-500"
      {...rest}
    />
  )
}
