import type { ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
}

export function Title({ children }: TitleProps) {
    return <h1 className="fw-bold mb-4">{children}</h1>;
}