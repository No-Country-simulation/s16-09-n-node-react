import './main.css'
import Proyect from "../proyect/Proyect"
import Tools from "../tools/Tools"
import Tasks from '../tasks/Tasks'
import Meetings from '../meetings/Meetings'
import Docs from '../docs/Docs'
import Collaborators from '../collaborators/Collaborators'
import Progress from '../progress/Progress'
import Calendar from '../calendar/Calendar'
import { useTheme } from '../../../context/ThemeContext'

const Main = () => {

  const { theme } = useTheme()
  console.log(theme, "theme")

  return <div className="main-container" style={{ color: theme.text }}>
    <Proyect theme={theme } />
    <Tools theme={theme } />
    <Collaborators />
    <Tasks />
    <Progress />
    <Meetings />
    <Docs />
    <Calendar />
  </div>
}

export default Main
