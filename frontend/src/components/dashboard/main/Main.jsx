import './main.css'
import Proyect from "../proyect/Proyect"
import Tools from "../tools/Tools"
import Tasks from '../tasks/Tasks'
import Meetings from '../meetings/Meetings'
import Docs from '../docs/Docs'
import Collaborators from '../collaborators/Collaborators'
import Progress from '../progress/Progress'
import Calendar from '../calendar/Calendar'

const Main = () => {
  return <div className="main-container">
    <Proyect />
    <Tools />
    <Collaborators />
    <Tasks />
    <Progress />
    <Meetings />
    <Docs />
    <Calendar />
  </div>
}

export default Main
