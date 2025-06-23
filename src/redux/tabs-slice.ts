import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { TabsType } from '../types'

const initialState: TabsType = {
    activeTabKey: null,
}

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setActiveTab: (state, action: PayloadAction<number>) => {
            state.activeTabKey = action.payload
        },
    },
})

export const { setActiveTab } = tabsSlice.actions
export const tabsReducer = tabsSlice.reducer