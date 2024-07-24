import { useParams } from "react-router-dom"

const AddEditProyect = () => {
  const { id } = useParams()
  
  return <div>
    component {id ? "edit" : 'add'} proyect
  </div>
}

export default AddEditProyect
