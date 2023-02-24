import { createSlice } from "@reduxjs/toolkit"

const initialState : {value: 'light' | 'dark'} = {
  value: 'light'
}

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.value = state.value === 'light' ? 'dark' : 'light'
    }
  }
})

export const selectTheme = (state: { ThemeReducer: {value: 'light' | 'dark'}} ) => state.ThemeReducer.value

export const { toggleTheme } = ThemeSlice.actions

export const ThemeReducer = ThemeSlice.reducer
