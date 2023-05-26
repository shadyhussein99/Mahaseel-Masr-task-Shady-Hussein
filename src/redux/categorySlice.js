// Actually it has no meaning in the task, but in real project there should be data managed by a third-party state management like Redux

import { createSlice } from '@reduxjs/toolkit'
import data from "../services/data.json"

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: data,
  },
  reducers: {
    searchByCategory: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { searchByCategory} = categorySlice.actions

export default categorySlice.reducer