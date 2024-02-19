import { Link, LinkProps, useLocation } from 'react-router-dom'
export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="font-sm flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground  data-[current=true]:text-foreground"
      {...props}
    />
  )
}
