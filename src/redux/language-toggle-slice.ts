import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LangType } from '../types'

interface LanguageState {
    language: LangType;
}

const initialState: LanguageState = {
    language: 'en',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<LangType>) {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer