import { useEffect } from 'react';
import { useOutletContext } from 'react-router'
import { MyPostList } from '../components/Card/MyPosts/MyPostsList'
import { Tabs } from '../components/Tabs/Tabs'
import type { OutletContextType } from '../types'
import { PostPreviewModal } from '../components/PostPreviewModal/PostPreviewModal'
import { PostCoverPreviewModal } from '../components/PostCoverPreview/PostCoverPreviewModal'

export function MyPosts(): React.ReactElement {
    const { setTitle, setTabs } = useOutletContext<OutletContextType>()

    useEffect(() => {
        setTitle('My posts')
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
            <MyPostList />
            <PostPreviewModal />
            <PostCoverPreviewModal />
        </>
    );
}