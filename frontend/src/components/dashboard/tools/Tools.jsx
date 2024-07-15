import './tools.css'

const Tools = (props) => {
  return (
    <div className="tools-tools">
      <span className="tools-title Heading1">
        <span>Herramientas</span>
      </span>
      <div className="tools-design">
        <img
          alt="Figma Icon"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f40ee3f0-c832-430f-8738-aa2f56082371/f6d0ea63-bb7f-4072-9327-7f64b6f86bae?org_if_sml=11052&amp;force_format=original"
          className="tools-figma-icon"
        />
        <span className="tools-text1 Body1">
          <span>Diseño UX/UI</span>
        </span>
      </div>
      <div className="tools-frontend">
        <img
          alt="react icon"
          src="/assets/react-icon.svg"
          className="tools-react-icon"
        />
        <span className="tools-text3 Body1">
          <span>Frontend</span>
        </span>
      </div>
      <div className="tools-backend">
        <img
          alt="backend icon"
          src="/assets/node-icon.svg"
          className="tools-backend-icon"
        />
        <span className="tools-text5 Body1">
          <span>Backend</span>
        </span>
      </div>
      <div className="tools-data">
        <img
          alt="python icon"
          src="/assets/python-icon.svg"
          className="tools-python-icon"
        />
        <span className="tools-text7 Body1">
          <span>Data Análisis</span>
        </span>
      </div>
      <img
        alt="plus-icon"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f40ee3f0-c832-430f-8738-aa2f56082371/bab876eb-3955-49c0-bf71-09ad91ed4f7a?org_if_sml=1506&amp;force_format=original"
        className="tools-plus-icon"
      />
    </div>
  )
}

export default Tools
