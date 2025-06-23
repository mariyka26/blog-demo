import { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router'
import { PostList } from '../components/Card/PostList/PostList'
import { PostPreviewModal } from '../components/PostPreviewModal/PostPreviewModal'
import { PostCoverPreviewModal } from '../components/PostCoverPreview/PostCoverPreviewModal'


export function PostsSearch(): React.ReactNode {
    const { query } = useParams<{ query: string }>()
    const { setTitle } = useOutletContext<{ title: string; setTitle: (title: string) => void }>()

    useEffect(() => {
        setTitle(`Результат поиска по «${query}»`)

        return () => {
            setTitle('')
        }
    }, [setTitle, query])

    return (
        <div>
            <PostList />
            <PostPreviewModal />
            <PostCoverPreviewModal />
        </div>
    )
}