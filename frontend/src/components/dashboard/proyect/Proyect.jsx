import PropTypes from 'prop-types'
import './proyect.css'
import { useTheme } from '../../../context/ThemeContext'

const Proyect = (props) => {

  const {theme} = useTheme()
  const getFilterStyle = () => {
    return theme.text === "#e8e8e8" ? 
      'invert(0)' : 
      'invert(1)';
  };
  return (
    <div className="proyect-proyect" style={props.theme}>
      <span className="proyect-title" style={props.theme}>{props.title}</span>
      <span className="proyect-description Body1" style={{color:theme.subtitulos }}>{props.description}</span>
      <img
        alt="proyect image"
        src={props.proyectImageSrc}
        className="proyect-proyect-image"
      />
      <div className="proyect-dates" style={{color:theme.subtitulos }}>
        <span className="proyect-beginning Label1">Inicio: {props.beginning}</span>
        <span className="proyect-deadline Label1">Entrega: {props.deadline}</span>
      </div>
      <img
        alt="plus-icon"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f40ee3f0-c832-430f-8738-aa2f56082371/b442d114-e08c-44d3-8cf8-dd3ecea493d6?org_if_sml=1506&amp;force_format=original"
        className="proyect-plus-icon"
        style={{filter: getFilterStyle()}}
      />
    </div>
  )
}

Proyect.defaultProps = {
  title: 'Proyecto',
  description: 'Red social para compartir Skills',
  proyectImageSrc: '/external/proyect-image-200h-200h.png',
  beginning: '01/07/2024',
  deadline: '01/09/2024',
}

Proyect.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  proyectImageSrc: PropTypes.string,
  beginning: PropTypes.string,
  deadline: PropTypes.string,
}

export default Proyect
