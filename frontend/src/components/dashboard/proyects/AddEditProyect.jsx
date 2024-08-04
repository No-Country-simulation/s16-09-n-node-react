/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useTheme } from '@/context/themecontext'
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updateSelectedProject, createNewProject } from "@/Redux/actions/projects";

const AddEditProyect = () => {
  const { id } = useParams()
  const { theme } = useTheme()
  const [fileName, setFileName] = useState('')

  const style = {
    color: theme.alternative,
    backgroundColor: theme.background
  }
  const alternative = { color: theme.alternative }

  const dispatch = useDispatch()
  const { projectSelected } = useSelector(state => state.project)
  const initialState = {
    id: '',
    name: '',
    description: '',
    image: '',
    beginning: '',
    deadline: '',
    status: ''
  }
  const [data, setData] = useState(initialState)
  useEffect(()=> {
    if (id && Object.keys(projectSelected).length > 0) {
      setData({
        ...initialState,
        ...projectSelected
      })
    }
  }, [projectSelected])

  useEffect(()=> console.log(data), [data])

  const handleChange = ev => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    if (id) {
      dispatch(updateSelectedProject(id, data))
    } else {
      dispatch(createNewProject(data))
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-start rounded-xl py-5 px-14" style={style}>
      {/* component {id ? "edit" : 'add'} proyect */}
      <form className="w-4/5 gap-1 p-0" onSubmit={handleSubmit}>
        <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa' }}>
          <legend className="w-auto px-2 text-sm" style={alternative}>Nombre del Proyecto</legend>
          <input 
            type="text" 
            name="name" 
            id="name" 
            className="bg-transparent outline-none px-2"
            placeholder="ProyectoX"
            onChange={handleChange}
            value={data.name}
          />
        </fieldset>
        <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa' }}>
          <legend className="w-auto px-2 text-sm" style={alternative}>Descrición</legend>
          <textarea 
            name="description" 
            id="description" 
            className="bg-transparent outline-none px-2" 
            placeholder={'- Funcionalidad \n- Objetivo'}
            onChange={handleChange}
            value={data.description}
          ></textarea>
        </fieldset>
        <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa' }}>
          <legend className="w-auto px-2 text-sm" style={alternative}>Participantes</legend>
          <input type="text" name="participants" id="participants" className="bg-transparent outline-none px-2" />
        </fieldset>
        <div className="flex w-full justify-between">
          <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa', width: '48%' }}>
            <legend className="w-auto px-2 text-sm" style={alternative}>Fecha de inicio</legend>
            <input 
              type='date' 
              name="beginning" 
              id="beginning" 
              className="bg-transparent outline-none px-2"
              onChange={handleChange}
              value={data.beginning}
            />
          </fieldset>
          <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa', width: '48%' }}>
            <legend className="w-auto px-2 text-sm" style={alternative}>Fecha de entrega</legend>
            <input 
              type="date" 
              name="deadline" 
              id="deadline" 
              className="bg-transparent outline-none px-2"
              onChange={handleChange}
              value={data.deadline}
            />
          </fieldset>
        </div>
        <fieldset className="flex flex-col items-center border border-dashed p-3 rounded-lg gap-1" style={{ borderColor: '#007dfa' }}>
          <legend className="w-auto px-2 text-sm" style={alternative}>Imagen de portada</legend>
          <input
            type="file"
            id="custom-input"
            onChange={(e) => setFileName(e.target.files[0].name)}
            hidden
          />
          <label
            htmlFor="custom-input"
            className="w-auto py-2 px-4 rounded-md text-sm cursor-pointer"
            style={{ color: '#121416', backgroundColor: theme.buttonSecondary }}
          >
            Cargar imagen
          </label>
          {
            fileName !== '' && (
              <div className="w-auto p-1 relative">
                <button
                  className="absolute -top-1 -right-1/2"
                  style={{ fontSize: '8px' }}
                  onClick={() => setFileName('')}
                >x</button>
                <span className="w-auto">
                  {fileName}
                </span>
              </div>
            )
          }
          <span className="w-auto">o arrastra un archivo</span>
          <span className="w-auto" style={{ fontSize: '10px' }}>PNG, JPG ó PDF.  Max 5MB</span>
        </fieldset>
        <div className="flex w-full justify-center gap-8 mt-4">
          <button
            type="button"
            style={{ borderColor: '#007dfa' }}
            className="w-1/3 py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border">
            Cancelar
          </button>
          <button
            type="button"
            style={{ backgroundColor: '#007DFA', color: '#CCCCCC' }}
            className="w-1/3 py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border">
            {!id ? "Crear proyecto" : 'Guardar cambios'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddEditProyect
