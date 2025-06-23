import React, { useEffect } from 'react'
import { Tabs } from '../components/Tabs/Tabs'
import { PostsFavoriteList } from '../components/Favorites/Favorites'
import { useOutletContext } from 'react-router'
import type { OutletContextType } from '../types'
import { PostPreviewModal } from '../components/PostPreviewModal/PostPreviewModal'
import { PostCoverPreviewModal } from '../components/PostCoverPreview/PostCoverPreviewModal'

export function FavoriteCards(): React.ReactElement {
    const { setTitle, setTabs } = useOutletContext<OutletContextType>()

    useEffect(() => {
        setTitle('Blog')
        setTabs([])
    }, [setTitle, setTabs])

    return (
        <>
            <Tabs
                items={[
                    { to: '/posts/all/1', label: 'All' },
                    { to: '/posts/favorites', label: 'My favorites' },
                ]}
            />
            <PostsFavoriteList />
            <PostPreviewModal />
            <PostCoverPreviewModal />
        </>
    )
}