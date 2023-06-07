import { LucideIcon } from 'lucide-react'
import { AnchorHTMLAttributes } from 'react'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Icon: LucideIcon
}

export function NavLink({ Icon, ...rest }: NavLinkProps) {
  return (
    <a {...rest}>
      <Icon
        size={16}
        className="text-zinc-500 transition-colors hover:text-zinc-300"
      />
    </a>
  )
}
