import { useEffect } from 'react'
import { useParams, NavLink } from 'react-router'
import { CardPost } from '../PostCard/PostCard'
import { useAppDispatch, useAppSelector } from '../../../redux/store.ts'
import { fetchPosts } from '../../../redux/posts-slice.ts'
import { POSTS_LIMIT } from '../../../redux/posts-slice'
import { buildSchemePagination } from '../../../utils/buildPagination.ts'

export function MyPostList() {
    const { currentPage = 1, query } = useParams()
    const dispatch = useAppDispatch()
    const { list, error, isLoading, total, ordering } = useAppSelector((state) => state.posts)

    useEffect(() => {
        const offset = (Number(currentPage) - 1) * POSTS_LIMIT
        dispatch(fetchPosts({ offset, search: query ?? '' }))
    }, [dispatch, currentPage, query, ordering])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>
    }

    if (!list || list.length == 0) {
        return <div>List is empty</div>
    }

    function renderPagination() {
        const pageCount = Math.ceil(total / POSTS_LIMIT)
        const pagination = buildSchemePagination(+currentPage, pageCount)
        return (
            <nav className="my-4">
                <ul className="pagination">
                    {pagination.map((item, index) => {
                        if (item === '...') {
                            return <li className="page-item disabled" key={index}><span className="page-link">{item}</span></li>
                        }

                        return <li className="page-item" key={index}><NavLink className="page-link" to={`/posts/all/${item}`}>{item}</NavLink></li>
                    })}
                </ul>
            </nav>
        )
    }

    return (
        <div /*className={style.postGrid}*/>

            {renderPagination()}
            {list.map((post) => (
                <div key={post.id} className="postItem">
                    <CardPost {...post} />
                </div>
            ))}
        </div>
    )
}