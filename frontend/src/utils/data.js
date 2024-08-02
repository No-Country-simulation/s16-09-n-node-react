import axios from "axios"

export const getProjects = async () => {
  const {data} = await axios('/projects', {
    "headers": {
      "accept": "application/json",
      "apiKey": "S16-09-N-NODE-REACT"
    }
  })
  console.log(data);
  return data.data.projects
}