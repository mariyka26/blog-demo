import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import type { PostsStateType, PostType, PostsParamsType, PostsResponseType } from '../types'
import type { Middleware } from '@reduxjs/toolkit'
import { requestPosts, requestMyPosts } from '../services/posts'

export const POSTS_LIMIT: number = 10

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (params: PostsParamsType = {}, { getState }) => {
    const { limit = POSTS_LIMIT, offset = 0, author__course_group = 17 } = params
    const ordering = getState().posts.ordering
    console.log(ordering);

    const data = await requestPosts({ ...params, limit, offset, author__course_group, ordering })

    return data
})

const initialState: PostsStateType = {
    list: null,
    favorites: [],
    error: null,
    isLoading: false,
    limit: POSTS_LIMIT,
    total: 0,
    ordering: '',
    isMyPosts: [],
}

export const localeStorageMiddleware: Middleware = store => next => action => {
    const result = next(action)
    if (typeof action === 'object' && action !== null && 'type' in action) {
        if (action.type === 'posts/addFavorite' || action.type === 'posts/removeFavorite') {
            const state = store.getState()
            const favoritesId = state.posts.favorites.map((post: PostType) => post.id)
            localStorage.setItem('favorites', JSON.stringify(favoritesId))
        }
    }
    return result
}

export const fetchMyPosts = createAsyncThunk('posts/myPosts', async (params: PostsParamsType = {}) => {
    const { limit = POSTS_LIMIT, offset = 0 } = params

    const data = await requestMyPosts({ ...params, limit, offset })

    return data
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setOrdering: (state, action: PayloadAction<string>) => {
            state.ordering = action.payload
        },
        addFavorite: (state, action: PayloadAction<PostType>) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(post => post.id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message || null
                state.isLoading = false
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostsResponseType>) => {
                if (action.payload && action.payload.results) {
                    state.list = action.payload.results;
                    state.total = action.payload.count;
                } else {
                    state.list = [];
                    state.error = 'No results found';
                }
                state.isLoading = false;
            })
            .addCase(fetchMyPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchMyPosts.rejected, (state, action) => {
                state.error = action.error.message || null
                state.isLoading = false
            })
            .addCase(fetchMyPosts.fulfilled, (state, action: PayloadAction<PostsResponseType>) => {
                state.myPosts = action.payload.results
                state.total = action.payload.count
                state.isLoading = false
            })
    }
})

export const postsReducer = postsSlice.reducer
export const { addFavorite, removeFavorite, setOrdering } = postsSlice.actions