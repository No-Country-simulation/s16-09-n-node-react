import PropTypes from 'prop-types'
import './task1.css'
import { useTheme } from '../../../context/ThemeContext'
import { NavLink } from 'react-router-dom'

const Task1 = (props) => {
  const { theme } = useTheme()
  return (
    <NavLink to={'/dashboard/task-details/task_2'} className="task1-task" style={{color: theme.text, background: theme.back1}}>
      <span className="task1-issue Heading3" style={{color: theme.subtitulos}}>
        <span>
          Desarrollo de UI
        </span>
      </span>
      <span className="task1-team Body3" >
        <span>Frontend</span>
      </span>
      <div className="task1-collaborators">
        <img
          alt="collaborator image"
          src="/external/collaborator-image5-200h.png"
          className="task1-collaborator-image"
        />
        <img
          alt={props.collaboratorImageAlt1}
          src="/external/collaborator-image6-200h.png"
          className="task1-collaborator-image1"
        />
        <img
          alt={props.collaboratorImageAlt2}
          src="/external/collaborator-image1-200h.png"
          className="task1-collaborator-image2"
        />
      </div>
      <div className="task1-container">
        <div className="task1-status">
          <div className="task1-in-progress"></div>
          <span className="task1-text3 Label1">
            <span>En curso</span>
          </span>
        </div>
        <div className="task1-container1">
          <img
            alt="message-icon"
            src="/assets/message-icon.svg"
            className="task1-message-icon"
          />
          <span className="task1-text5 Heading3">{props.text}</span>
        </div>
      </div>
    </NavLink>
  )
}

Task1.defaultProps = {
  collaboratorImageAlt2: 'collaborator image',
  collaboratorImageAlt1: 'Ellipse95183',
  text: '2',
  messageIconSrc: 'e16765a7-4c12-45b2-93c4-6ecc4f7969d2',
  messageIconAlt: 'message-icon',
}

Task1.propTypes = {
  collaboratorImageAlt2: PropTypes.string,
  collaboratorImageAlt1: PropTypes.string,
  text: PropTypes.string,
  messageIconSrc: PropTypes.string,
  messageIconAlt: PropTypes.string,
}

export default Task1
