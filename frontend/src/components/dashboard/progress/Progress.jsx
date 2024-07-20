import './progress.css'
import { useTheme } from '../../../context/ThemeContext'

const Progress = (props) => {

const { theme } = useTheme()
  return (
    <div className="progress-progress" style={{color: theme.text, backgroundColor: theme.background}}>
      <span className="progress-title Heading1">
        <span>Progreso</span>
      </span>
      <div className="progress-design">
        <span className="progress-text1 Body1">
          <span>Diseño UX/UI</span>
        </span>
        <div className="progress-progress1">
          <div className="progress-range"></div>
        </div>
      </div>
      <div className="progress-frontend">
        <span className="progress-text3 Body1">
          <span>Frontend</span>
        </span>
        <div className="progress-progress2">
          <div className="progress-range1"></div>
        </div>
      </div>
      <div className="progress-backend">
        <span className="progress-text5 Body1">
          <span>Backend</span>
        </span>
        <div className="progress-progress3">
          <div className="progress-range2"></div>
        </div>
      </div>
      <div className="progress-data">
        <span className="progress-text7 Body1">
          <span>Data Análisis</span>
        </span>
        <div className="progress-progress4">
          <div className="progress-range3"></div>
        </div>
      </div>
      <img
        alt="plus-icon"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f40ee3f0-c832-430f-8738-aa2f56082371/d1f79472-57bb-4962-b786-d5139a98bf52?org_if_sml=1506&amp;force_format=original"
        className="progress-plus-icon"
      />
    </div>
  )
}

export default Progress
