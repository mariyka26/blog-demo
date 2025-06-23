import { useEffect } from 'react';
import { useOutletContext } from 'react-router'
import { PostList } from '../components/Card/PostList/PostList'
import { Tabs } from '../components/Tabs/Tabs'
import type { OutletContextType } from '../types'
import { PostPreviewModal } from '../components/PostPreviewModal/PostPreviewModal'
import { PostCoverPreviewModal } from '../components/PostCoverPreview/PostCoverPreviewModal'

export function Posts(): React.ReactElement {
    const { setTitle, setTabs } = useOutletContext<OutletContextType>()

    useEffect(() => {
        setTitle('Blog')
        setTabs([])
    }, [setTitle, setTabs])

    return (
        <>
            <Tabs
                items={[
                    { to: '/posts/all', label: 'All' },
                    { to: '/posts/favorites', label: 'My favorites' },
                ]}
            />
            <PostList />
            <PostPreviewModal />
            <PostCoverPreviewModal />
        </>
    );
}