import { Modal } from '../Modal/Modal'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { clearData, hideModal } from '../../redux/post-preview-slice'

interface PostPreviewState {
    data: {
        title: string
        text: string
        date: string
        image: string
    } | null
    isShownModal: boolean
}

export function PostPreviewModal() {
    const dispatch = useAppDispatch()
    const { data, isShownModal } = useAppSelector((state: { postPreview: PostPreviewState }) => state.postPreview)

    function handleClose() {
        dispatch(hideModal())
        dispatch(clearData())
    }

    function renderPost() {
        if (!data) return null

        return (
            <article>
                <time className="text-body-secondary">{data.date}</time>
                <div className="d-flex justify-content-center">
                    <img src={data.image} alt="" className="img-fluid rounded" />
                </div>
                <h1 className="mt-3">{data.title}</h1>
                <p>{data.text}</p>
            </article>
        )
    }

    return (
        <Modal opened={isShownModal} onClose={handleClose}>
            {renderPost()}
        </Modal>
    )
}