
import { createSlice } from '@reduxjs/toolkit'
import data from "../services/data.json"

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: data,
  },
  reducers: {},
})

export const { searchByCategory} = categorySlice.actions

export default categorySlice.reducer