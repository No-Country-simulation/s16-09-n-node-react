import { useParams } from "react-router-dom"
import { useTheme } from '../../../context/ThemeContext'
import { useState } from "react"

const AddEditProyect = () => {
  const { id } = useParams()
  const { theme } = useTheme()
  const [fileName, setFileName] = useState('')

  const style = {
    color: theme.text,
    backgroundColor: theme.background
  }

  return (
    <div className="h-full w-full flex flex-col justify-start rounded-xl py-5 px-14" style={style}>
      {/* component {id ? "edit" : 'add'} proyect */}
      <form className="w-4/5 gap-1 p-0">
        <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa' }}>
          <legend className="w-auto p-2 text-sm">Nombre del Proyecto</legend>
          <input type="text" name="name" id="name" />
        </fieldset>
        <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa' }}>
          <legend className="w-auto p-2 text-sm">Descrición</legend>
          <textarea name="description" id="description" ></textarea>
        </fieldset>
        <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa' }}>
          <legend className="w-auto p-2 text-sm">Participantes</legend>
          <input type="text" name="participants" id="participants" />
        </fieldset>
        <div className="flex w-full justify-between">
          <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa', width: '48%' }}>
            <legend className="w-auto p-2 text-sm">Fecha de inicio</legend>
            <input type='date' name="beginning" id="beginning" />
          </fieldset>
          <fieldset className="border border-solid p-3 rounded-lg" style={{ borderColor: '#007dfa', width: '48%' }}>
            <legend className="w-auto p-2 text-sm">Fecha de entrega</legend>
            <input type="date" name="deadline" id="deadline" />
          </fieldset>
        </div>
        <fieldset className="flex flex-col items-center border border-dashed p-3 rounded-lg gap-1" style={{ borderColor: '#007dfa' }}>
          <legend className="w-auto p-2 text-sm">Imagen de portada</legend>
          <input
            type="file"
            id="custom-input"
            onChange={(e) => setFileName(e.target.files[0].name)}
            hidden
          />
          <label
            for="custom-input"
            className="w-auto py-2 px-4 rounded-md border text-sm cursor-pointer"
            style={{ borderColor: '#007dfa' }}
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
        <div className="flex w-full">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
        </div>
      </form>
    </div>
  )
}

export default AddEditProyect
