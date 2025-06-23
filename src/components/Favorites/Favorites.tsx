import React, { useEffect } from 'react'
import { CardPost } from '../Card/PostCard/PostCard'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { fetchPosts } from '../../redux/posts-slice'

import type { PostType } from '../../types'

export function PostsFavoriteList(): React.ReactElement {
    const dispatch = useAppDispatch()
    const { favorites, error, isLoading } = useAppSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div className="alert alert-danger"> Error: {error}</div>
    }

    if (!favorites || favorites.length == 0) {
        return <div>List is empty</div>
    }

    return (
        <div className="container mt-4">
            <ul className="list-group">
                {favorites.map((post: PostType) => (
                    <li key={post.id} className="list-group-item mb-3 p-3 rounded shadow-sm">
                        <CardPost {...post} />
                    </li>
                ))}
            </ul>
        </div>
    )
}