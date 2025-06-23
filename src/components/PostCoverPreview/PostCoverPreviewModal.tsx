import { Modal } from '../Modal/Modal.jsx'
import { hideCoverPreview, clearCoverPreview } from '../../redux/post-cover-preview-slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

export function PostCoverPreviewModal() {
    const { data, isShownModal } = useAppSelector(state => state.postCoverPreview)
    const dispatch = useAppDispatch()

    function handleClose() {
        dispatch(hideCoverPreview())
        dispatch(clearCoverPreview())
    }

    function renderModal() {
        if (!data) return null

        return <img src={data?.image} alt={data?.title} className="modal-img img-fluid" />
    }

    return (
        <Modal opened={isShownModal} onClose={handleClose}>
            {renderModal()}
        </Modal>
    )
}