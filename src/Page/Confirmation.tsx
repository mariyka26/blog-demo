import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router'
import { Island } from '../components/Island/Island'
import { RegistrationConfirmation } from '../components/Forms/RegistrationConfirmation/RegistrationConfirmation'
import type { OutletContextType } from '../types'

export function Confirmation(): React.ReactElement {
    const { setTitle, setBreadcrumbs } = useOutletContext<OutletContextType>()

    useEffect(() => {
        setTitle('Registration Confirmation')
        setBreadcrumbs([
            { label: 'Back to home', to: '/' },
        ])
    }, [setTitle, setBreadcrumbs])

    return (
        <Island>
            <RegistrationConfirmation />
        </Island>
    )
}