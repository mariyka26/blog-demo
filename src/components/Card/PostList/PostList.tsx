import { useEffect } from 'react'
import { useParams, NavLink } from 'react-router'
import { CardPost } from '../PostCard/PostCard'
import { useAppDispatch, useAppSelector } from '../../../redux/store.ts'
import { fetchPosts, setOrdering } from '../../../redux/posts-slice.ts'
import { POSTS_LIMIT } from '../../../redux/posts-slice'
import { buildSchemePagination } from '../../../utils/buildPagination.ts'
// import style from './PostList.module.scss'


export function PostList() {
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

    function handleOrdering(event: React.ChangeEvent<HTMLSelectElement>): void {
        const selectedValue = event.target.value;
        const orderingValue = selectedValue.length > 0 ? selectedValue : '';
        dispatch(setOrdering(orderingValue));
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
            <label htmlFor="sorting-select" className="form-label">Упорядочить по:</label>
            <select
                id="sorting-select"
                className="form-select form-select-sm w-25"
                onChange={handleOrdering}
                value={ordering}
            >
                <option value="" disabled>выбрать параметр</option>
                <option value="title">алфавиту</option>
                <option value="-date">дате создания (по убыванию)</option>
                <option value="date">дате создания (по возрастанию)</option>
                <option value="id">порядковому номеру</option>
                <option value="-id">порядковому номеру(в обратном порядке)</option>
            </select>

            {renderPagination()}
            {list.map((post) => (
                <div key={post.id} className="postItem">
                    <CardPost {...post} />
                </div>
            ))}
        </div>
    )
}