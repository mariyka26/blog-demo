import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { PostPreviewStateType, PostType } from '../types'

const initialState: PostPreviewStateType = {
    data: null,
    isShownModal: false,
}

export const postCoverPreview = createSlice({
    name: 'postCoverPreview',
    initialState,
    reducers: {
        setCoverPreview: (state, action: PayloadAction<PostType>) => {
            state.data = action.payload
        },
        hideCoverPreview: state => {
            state.isShownModal = false
        },
        clearCoverPreview: state => {
            state.data = null
        },
        showCoverPreview: state => {
            state.isShownModal = true
        },
    },
})

export const { setCoverPreview, hideCoverPreview, clearCoverPreview, showCoverPreview } =
    postCoverPreview.actions
export const postCoverPreviewReducer = postCoverPreview.reducer