import type { ReactNode } from 'react'

interface MainProps {
    children: ReactNode
}

export function Main({ children }: MainProps) {
    return <main className="flex-grow-1">{children}</main>
}