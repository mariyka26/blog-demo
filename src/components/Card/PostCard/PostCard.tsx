import { Link } from 'react-router'
import type { PostType } from '../../../types'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { setData, showModal } from '../../../redux/post-preview-slice'
import { setCoverPreview, showCoverPreview } from '../../../redux/post-cover-preview-slice'
import { addFavorite, removeFavorite } from '../../../redux/posts-slice'
import Bookmark from '../../../assets/bookmark.svg'
import BookmarkHeart from '../../../assets/bookmark_heart.svg'

export function CardPost(props: PostType) {
    const { title, text, image, date, id } = props
    const dispatch = useAppDispatch()
    const { favorites } = useAppSelector(state => state.posts)

    function renderFavoriteIcon() {
        const isFavorite = favorites.some(item => item.id === id);
        const iconSrc = isFavorite ? BookmarkHeart : Bookmark;

        return <img src={iconSrc} alt="Bookmark Icon" />;
    }

    function handleClickBookmark() {
        const isAlreadyFavorite = favorites.find(item => item.id === id);

        if (isAlreadyFavorite) {
            dispatch(removeFavorite(id));
            return;
        }

        dispatch(addFavorite(props));
    }

    function handleClickCoverPreview() {
        dispatch(setCoverPreview(props))
        dispatch(showCoverPreview())
    }

    function handleClickPostPreview() {
        const data = { title, text, image, date, id }
        dispatch(setData(data))
        dispatch(showModal())
    }



    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="custom-cursor col-4" onClick={handleClickCoverPreview}>
                    <img src={image}
                        className="img-fluid rounded"
                        style={{
                            height: '250px',
                            width: '100%',
                            objectFit: 'cover',
                        }} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-body-secondary">{date}</small></p>
                    </div>
                    <div className="g-3">
                        <Link to={`/posts/${id}`} className="btn btn-primary m-1 w-50">Читать далее</Link>
                        <button
                            type="button"
                            className="btn btn-warning m-1 w-50"
                            onClick={handleClickPostPreview}>Быстрый просмотр</button>
                        <div onClick={handleClickBookmark}>{renderFavoriteIcon()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}