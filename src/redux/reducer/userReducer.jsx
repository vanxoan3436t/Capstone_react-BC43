//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  number: 1
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {}
});

export const { } = userReducer.actions

export default userReducer.reducer