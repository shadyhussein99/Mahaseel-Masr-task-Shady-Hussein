// Actually it has no meaning in the task, but in real project there should be data managed by a third-party state management like Redux

import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: "",
  },
  reducers: {
    searchByCategory: (state) => {
      state.value += 1
    },
  },
})

export const { searchByCategory} = categorySlice.actions

export default categorySlice.reducer