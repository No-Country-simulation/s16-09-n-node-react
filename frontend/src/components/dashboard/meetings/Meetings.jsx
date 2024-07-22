import PropTypes from 'prop-types'
import './meetings.css'
import { useTheme } from '../../../context/ThemeContext'

const Meetings = (props) => {
  const { theme } = useTheme()
  return (
    <div className="meetings-meetings" style={{color: theme.primary, backgroundColor: theme.background}}>
      <span className="meetings-title Heading1" >
        <span>Reuniones</span>
      </span>
      <div className="meetings-container" style={{color: theme.subtitulos, backgroundColor: theme.back }}>
        <div className="meetings-container1">
          <span className="meetings-text1 Heading3">
            <span>Sistema de Diseño</span>
          </span>
          <span className="meetings-text3 Body3">
            <span>Diseño UX/UI</span>
          </span>
          <div className="meetings-collaborators">
            <img
              alt="collaborator image"
              src={props.collaboratorImageSrc}
              className="meetings-collaborator-image"
            />
            <img
              alt="collaborator image"
              src={props.collaboratorImageSrc1}
              className="meetings-collaborator-image1"
            />
          </div>
          <div className="meetings-container2">
            <span className="meetings-schelude Label1">
              <span>10:15 am - 11:15 am</span>
            </span>
          </div>
        </div>
        <div className="meetings-container3">
          <input
            type="text"
            placeholder={props.textinputPlaceholder}
            className="meetings-textinput"
          />
          <button type="button" className="meetings-button" >
            <span className="meetings-text6 Label1" >
              <span style={{backgroundColor: theme.secondary, padding: "12%", margin: "1%", color: theme.subtitulos}} >Unirse</span>
            </span>
          </button>
        </div>
      </div>
      <img
        alt="plus-icon"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f40ee3f0-c832-430f-8738-aa2f56082371/b48db469-3890-44ba-bfee-b404f2ee41f2?org_if_sml=1506&amp;force_format=original"
        className="meetings-plus-icon"
      />
    </div>
  )
}

Meetings.defaultProps = {
  collaboratorImageSrc: '/external/collaborator-image2-200h.png',
  collaboratorImageSrc1: '/external/collaborator-image3-200h.png',
  textinputPlaceholder: 'https://meet.google.com/eg',
}

Meetings.propTypes = {
  collaboratorImageSrc: PropTypes.string,
  collaboratorImageSrc1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
}

export default Meetings
