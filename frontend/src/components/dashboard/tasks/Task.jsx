import PropTypes from 'prop-types'
import './task.css'
import { useTheme } from '../../../context/ThemeContext'
import { NavLink } from 'react-router-dom'

const Task = (props) => {
  const { theme } = useTheme()

  return (
    <NavLink className="task-task" style={{color: theme.text, background: theme.back1}} to={'/dashboard/task-details/task_1'}>
      <span className="task-issue Heading3" style={{color: theme.subtitulos}}>
        <span>
          Diseño de Footer
        </span>
      </span>
      <span className="task-team Body3">
        <span>Diseño UX/UI</span>
      </span>
      <div className="task-collaborators">
        <img
          alt="collaborator image"
          src={props.collaboratorImageSrc}
          className="task-collaborator-image"
        />
        <img
          alt="collaborator image"
          src={props.collaboratorImageSrc1}
          className="task-collaborator-image1"
        />
      </div>
      <div className="task-container">
        <div className="task-status">
          <div className="task-in-progress"></div>
          <span className="task-text3 Label1" style={{ color: theme.titulos}}>
            <span>En curso</span>
          </span>
        </div>
        <div className="task-container1">
          <img
            alt="message-icon"
            src="/assets/message-icon.svg"
            className="task-message-icon"
          />
          <span className="task-text5 Heading3">{props.text}</span>
        </div>
      </div>
    </NavLink>
  )
}

Task.defaultProps = {
  text: '3',
  collaboratorImageSrc: '/external/collaborator-image2-200h.png',
  collaboratorImageSrc1: '/external/collaborator-image3-200h.png',
}

Task.propTypes = {
  text: PropTypes.string,
  collaboratorImageSrc: PropTypes.string,
  collaboratorImageSrc1: PropTypes.string,
}

export default Task
