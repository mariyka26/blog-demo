import React from 'react'

interface IslandProps {
    title?: string
    children: React.ReactNode
}

export function Island({ title, children }: IslandProps): React.ReactElement {
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                {title && <h2>{title}</h2>}
                {children}
            </div>
        </div>
    )
}