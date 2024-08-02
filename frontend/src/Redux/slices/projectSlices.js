import { createSlice } from '@reduxjs/toolkit'

export const projectSlices = createSlice({
  name: 'project',
  initialState: {
    allProjects: [],
    projectSelected: {}
  },
  reducers: {
    getProjects(state, {payload}) {
      state.allProjects = payload
    },
    updateProject(state, { payload }) {
      state.projectSelected = payload
    }
  }
})

export const { updateProject, getProjects } = projectSlices.actions

export default projectSlices.reducer
