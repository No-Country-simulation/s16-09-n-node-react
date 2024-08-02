import axios from "axios"
const API_KEY = import.meta.env.VITE_API_KEY

export const getProjects = async () => {
  const {data} = await axios('/projects', {
    "headers": {
      "accept": "application/json",
      "apiKey": API_KEY
    }
  })
  console.log(data);
  return data.data.projects
}

export const getProject = async (id) => {
  const {data} = await axios(`/projects?id=${id}`, {
    "headers": {
      "accept": "application/json",
      "apiKey": API_KEY
    }
  })
  console.log(data);
  return data.data.projects
}
