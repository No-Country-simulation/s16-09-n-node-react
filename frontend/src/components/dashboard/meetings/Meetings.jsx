import PropTypes from "prop-types";

import "./meetings.css";

import { useTheme } from "@/context/themecontext";
import { NavLink } from "react-router-dom";

const Meetings = (props) => {
  const { theme } = useTheme();
  return (
    <div
      className='meetings-meetings'
      style={{ color: theme.primary, backgroundColor: theme.background }}
    >
      <span className='meetings-title Heading1'>
        <span>Reuniones</span>
      </span>
      <div
        className='meetings-container'
        style={{ color: theme.subtitulos, backgroundColor: theme.back }}
      >
        <div className='meetings-container1'>
          <span className='meetings-text1 Heading3'>
            <span>Sistema de Diseño</span>
          </span>
          <span className='meetings-text3 Body3'>
            <span>Diseño UX/UI</span>
          </span>
          <div className='meetings-collaborators'>
            <img
              alt='collaborator image'
              src={props.collaboratorImageSrc}
              className='meetings-collaborator-image'
            />
            <img
              alt='collaborator image'
              src={props.collaboratorImageSrc1}
              className='meetings-collaborator-image1'
            />
          </div>
          <div className='meetings-container2'>
            <span className='meetings-schelude Label1'>
              <span>10:15 am - 11:15 am</span>
            </span>
          </div>
        </div>
        <div className='meetings-container3'>
          <input
            type='text'
            placeholder={props.textinputPlaceholder}
            className='meetings-textinput'
          />
          <button type='button' className='meetings-button'>
            <span className='meetings-text6 Label1'>
              <span
                style={{
                  backgroundColor: theme.secondary,
                  padding: "12%",
                  margin: "1%",
                  color: theme.subtitulos,
                }}
              >
                Unirse
              </span>
            </span>
          </button>
        </div>
      </div>
      <NavLink to={"/dashboard/meetings-details"}>
        <img
          alt='plus-icon'
          src='/assets/plus-icon.svg'
          className='meetings-plus-icon'
        />
      </NavLink>
    </div>
  );
};

Meetings.defaultProps = {
  collaboratorImageSrc: "/external/collaborator-image2-200h.png",
  collaboratorImageSrc1: "/external/collaborator-image3-200h.png",
  textinputPlaceholder: "https://meet.google.com/eg",
};

Meetings.propTypes = {
  collaboratorImageSrc: PropTypes.string,
  collaboratorImageSrc1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
};

export default Meetings;
