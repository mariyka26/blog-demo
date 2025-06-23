import React from 'react'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router'
import { NewPostForm } from '../components/Forms/NewPostForm/NewPostForm'
import type { OutletContextType } from '../types'

export function NewPost(): React.ReactElement {
    const { setTitle, setBreadcrumbs } = useOutletContext<OutletContextType>()

    useEffect(() => {
        setTitle('Sign In')
        setBreadcrumbs([
            { label: 'Back to home', to: '/' },
        ])
    }, [setTitle, setBreadcrumbs])

    return (
        <NewPostForm />
    )
}