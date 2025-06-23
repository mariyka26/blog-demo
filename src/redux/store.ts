import { configureStore } from "@reduxjs/toolkit";
import { postPreviewReducer } from './post-preview-slice'
import { postsReducer } from './posts-slice'
import { postReducer } from './post-slice'
import { useDispatch, useSelector } from 'react-redux'
import { postCoverPreviewReducer } from "./post-cover-preview-slice";
import { languageReducer } from './language-toggle-slice'
import { tabsReducer } from './tabs-slice'
import { localeStorageMiddleware } from './posts-slice'
import { authReducer } from './auth-slice'

export const store = configureStore({
    reducer: {
        postPreview: postPreviewReducer,
        posts: postsReducer,
        post: postReducer,
        postCoverPreview: postCoverPreviewReducer,
        language: languageReducer,
        tabs: tabsReducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localeStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()