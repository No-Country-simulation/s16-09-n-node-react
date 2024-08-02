import { configureStore } from '@reduxjs/toolkit'
import userSlices from './slices/userSlices'
import projectSlices from './slices/projectSlices'

export const store = configureStore({
  reducer: {
    project: projectSlices,
    user: userSlices
  }
})
