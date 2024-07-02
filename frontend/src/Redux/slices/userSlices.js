import { createSlice } from '@reduxjs/toolkit'

export const userSlices = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    updateUser(state, { payload }) {
      state.user = payload
    }
  }
})

export const { updateUser } = userSlices.actions

export default userSlices.reducer
