import PropTypes from "prop-types";

import "./collaborators.css";

import { useTheme } from "@/context/themecontext";
import { NavLink } from "react-router-dom";

const Collaborators = (props) => {
  const { theme } = useTheme();
  const getFilterStyle = () => {
    return theme.text === "#e8e8e8" ? "invert(0)" : "invert(1)";
  };

  return (
    <div
      className='collaborators-collaborators'
      style={{ color: theme.primary, backgroundColor: theme.background }}
    >
      <span className='collaborators-title Heading1'>
        <span>Participantes</span>
      </span>
      <div className='collaborators-container'>
        <span className='collaborators-count'>{props.count}</span>
        <span className='collaborators-text1'>miembros de equipo</span>
      </div>
      <div className='collaborators-container1'>
        <img
          alt='collaborator image'
          src={props.collaboratorImageSrc}
          className='collaborators-collaborator-image'
        />
        <img
          alt='collaborator image'
          src={props.collaboratorImageSrc1}
          className='collaborators-collaborator-image1'
        />
        <img
          alt='collaborator image'
          src={props.collaboratorImageSrc2}
          className='collaborators-collaborator-image2'
        />
        <img
          alt='Ellipse95183'
          src={props.collaboratorImageSrc3}
          className='collaborators-collaborator-image3'
        />
        <img
          alt='collaborator image'
          src={props.collaboratorImageSrc4}
          className='collaborators-collaborator-image4'
        />
        <img
          alt='collaborator image'
          src={props.collaboratorImageSrc5}
          className='collaborators-collaborator-image5'
        />
      </div>
      <NavLink to="/dashboard/participants" >
      <img
        alt='plus-icon'
        src='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f40ee3f0-c832-430f-8738-aa2f56082371/df672044-aed4-4a0d-8a7e-c02b5e6cbde7?org_if_sml=1506&amp;force_format=original'
        className='collaborators-plus-icon'
        style={{ filter: getFilterStyle() }}
      />
      </NavLink> 
    </div>
  );
};

Collaborators.defaultProps = {
  collaboratorImageSrc3: "/external/collaborator-image6-200h.png",
  collaboratorImageSrc4: "/external/collaborator-image1-200h.png",
  collaboratorImageSrc5: "/external/collaborator-image4-200h.png",
  collaboratorImageSrc1: "/external/collaborator-image3-200h.png",
  collaboratorImageSrc: "/external/collaborator-image2-200h.png",
  count: "10",
  collaboratorImageSrc2: "/external/collaborator-image5-200h.png",
};

Collaborators.propTypes = {
  collaboratorImageSrc3: PropTypes.string,
  collaboratorImageSrc4: PropTypes.string,
  collaboratorImageSrc5: PropTypes.string,
  collaboratorImageSrc1: PropTypes.string,
  collaboratorImageSrc: PropTypes.string,
  count: PropTypes.string,
  collaboratorImageSrc2: PropTypes.string,
};

export default Collaborators;
