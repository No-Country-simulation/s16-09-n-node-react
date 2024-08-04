import { updateProject, getProjects } from "../slices/projectSlices";
import axios from "axios"
const API_KEY = import.meta.env.VITE_API_KEY

export const getAllProjects = () => async (dispatch) => {
  try {
    const { data } = await axios('/projects', {
      "headers": {
        "accept": "application/json",
        "apiKey": API_KEY
      }
    })
    dispatch(getProjects(data.data.projects))
  } catch (error) {
    console.error(error);
    // notificar error
  }
}

export const getProject = (id) => async (dispatch) => {
  try {
    const { data } = await axios(`/projects?id=${id}`, {
      "headers": {
        "accept": "application/json",
        "apiKey": API_KEY
      }
    })
    console.log(data);
    dispatch(updateProject(data))
  } catch (error) {
    console.error(error);
    // notificar
  }
}

export const updateSelectedProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/projects?id=${id}`, {
      "headers": {
        "accept": "application/json",
        "apiKey": API_KEY
      },
      project
    })
    console.log(data);
    dispatch(updateProject(data))
  } catch (error) {
    console.error(error);
    // notificar
  }
}

export const createNewProject = (project) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/projects`, {
      "headers": {
        "accept": "application/json",
        "apiKey": API_KEY
      },
      project
    })
    console.log(data);
    dispatch(updateProject(data))
  } catch (error) {
    console.error(error);
    // notificar
  }
}
