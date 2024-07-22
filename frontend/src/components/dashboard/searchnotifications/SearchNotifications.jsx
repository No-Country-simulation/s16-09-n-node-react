import './searchnotifications.css'
import PropTypes from 'prop-types'
import { useTheme } from '../../../context/ThemeContext'

const SearchNotifications = (props) => {

  const { theme } = useTheme()
  console.log(theme, "theme")
  return (
    <div
      className={`search-notifications-search-notifications`}
      style={{ color: theme.text, backgroundColor: theme.background } }	
    >
      <div className="search-notifications-search">
        <button type="button" className="search-notifications-button">
          <img
            alt="search icon"
            src="/external/search-icon.svg"
            className="search-notifications-search-icon"
          />
        </button>
        <input
          type="text"
          placeholder="Buscar proyecto, participante, tarea..."
          className="search-notifications-textinput"
          style={{ color: theme.text, backgroundColor: theme.back }}
        />
      </div>
      <div className="search-notifications-notification">
        <div className="search-notifications-container">
          <img
            alt="pastedImage"
            src="/external/alert-icon.svg"
            className="search-notifications-alert-icon"
          />
          <div className="search-notifications-alert"></div>
        </div>
        <span className="search-notifications-text Heading2">
          <span className="">Notificaciones</span>
        </span>
      </div>
    </div>
  )
}

SearchNotifications.defaultProps = {
  rootClassName: '',
}

SearchNotifications.propTypes = {
  rootClassName: PropTypes.string,
}

export default SearchNotifications
