import { useEffect } from 'react';
import { useOutletContext } from 'react-router'
import { Island } from '../components/Island/Island'
import { SignUpForm } from '../components/Forms/SignUpForm/SignUpForm'
import type { OutletContextType } from '../types'

export function SignUp(): React.ReactElement {
    const { setTitle, setBreadcrumbs } = useOutletContext<OutletContextType>()

    useEffect(() => {
        setTitle('Sign Up')
        setBreadcrumbs([
            { label: 'Back to home', to: '/' },
        ])
    }, [setTitle, setBreadcrumbs])

    return (
        <Island>
            <SignUpForm />
        </Island>
    )
}