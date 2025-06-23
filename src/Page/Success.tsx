import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router'
import { Island } from '../components/Island/Island'
import { SuccessSignIn } from '../components/Forms/SuccessSignIn/SuccessSignIn'
import type { OutletContextType } from '../types'

export function Success(): React.ReactElement {
    const { setTitle, setBreadcrumbs } = useOutletContext<OutletContextType>()

    useEffect(() => {
        setTitle('Success')
        setBreadcrumbs([
            { label: 'Back to home', to: '/' },
        ])
    }, [setTitle, setBreadcrumbs])

    return (
        <Island>
            <SuccessSignIn />
        </Island>
    )
}