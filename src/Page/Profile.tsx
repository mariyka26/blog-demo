import { useEffect } from 'react'
import { useOutletContext } from 'react-router'
import type { OutletContextType } from '../types'

export function Profile(): React.ReactElement {
    const { setTitle } = useOutletContext<OutletContextType>()

    useEffect(() => {
        setTitle('Профиль')
    }, [setTitle])

    return (
        <div>
            Приватная страница
        </div>
    )
}