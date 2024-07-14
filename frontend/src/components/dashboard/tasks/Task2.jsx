import PropTypes from 'prop-types'
import './task2.css'

const Task2 = (props) => {
  return (
    <div className="task2-task">
      <span className="task2-issue Heading3">
        <span>Validación de Datos</span>
      </span>
      <span className="task2-team Body3">
        <span>Backend</span>
      </span>
      <div className="task2-collaborators">
        <img
          alt="collaborator image"
          src={props.collaboratorImageSrc}
          className="task2-collaborator-image"
        />
      </div>
      <div className="task2-container">
        <div className="task2-status">
          <div className="task2-in-progress"></div>
          <span className="task2-text2 Label1">
            <span>En curso</span>
          </span>
        </div>
        <div className="task2-container1">
          <img
            alt="message-icon"
            src="/assets/message-icon.svg"
            className="task2-message-icon"
          />
          <span className="task2-text4 Heading3">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

Task2.defaultProps = {
  text: '4',
  collaboratorImageSrc: '/external/collaborator-image4-200h.png',
}

Task2.propTypes = {
  text: PropTypes.string,
  collaboratorImageSrc: PropTypes.string,
}

export default Task2
