import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router'
import { Island } from '../components/Island/Island'
import { SignInForm } from '../components/Forms/SignInForm/SignInForm'
import type { OutletContextType } from '../types'

export function SignIn(): React.ReactElement {
    const { setTitle, setBreadcrumbs } = useOutletContext<OutletContextType>()

    useEffect(() => {
        setTitle('Sign In')
        setBreadcrumbs([
            { label: 'Back to home', to: '/' },
        ])
    }, [setTitle, setBreadcrumbs])

    return (
        <Island>
            <SignInForm />
        </Island>
    )
}