import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="container-fluid w-75">{children}</div>
}