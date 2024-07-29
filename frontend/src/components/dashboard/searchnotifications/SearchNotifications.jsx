import "./searchnotifications.css";

import { useTheme } from "@/context/themecontext";
import PropTypes from "prop-types";
import Aos from 'aos'
import { useEffect } from "react";


const SearchNotifications = () => {
  const { theme } = useTheme();
  

  useEffect (()=>{

Aos.init({duration: 1000})

  }, [])

  const getStyle = () =>{

    return theme.text === "#e8e8e8" ? "invert(0)" : "invert(1)";

  }
  return (
    <div data-aos="fade-down"
      className={`search-notifications-search-notifications`}
      style={{ color: theme.text, backgroundColor: theme.background }}
    >
      <div className='search-notifications-search'>
        <button type='button' className='search-notifications-button'>
          <img
            alt='search icon'
            src='/external/search-icon.svg'
            className='search-notifications-search-icon'
          />
        </button>
        <input
          type='text'
          placeholder='Buscar proyecto, participante, tarea...'
          className='search-notifications-textinput'
          style={{ color: theme.text, backgroundColor: theme.back }}
        />
      </div>
      <div className='search-notifications-notification'>
        <div className='search-notifications-container'>
          <img
            alt='pastedImage'
            src='/external/alert-icon.svg'
            className='search-notifications-alert-icon cursor-pointer'
            style={{filter: getStyle()}}
            onClick={() => alert("en desarrollo")}
          />
          <div className='search-notifications-alert'></div>
        </div>
        <span className='search-notifications-text Heading2'>
          <span className=''>Notificaciones</span>
        </span>
      </div>
    </div>
  );
};

SearchNotifications.defaultProps = {
  rootClassName: "",
};

SearchNotifications.propTypes = {
  rootClassName: PropTypes.string,
};

export default SearchNotifications;
