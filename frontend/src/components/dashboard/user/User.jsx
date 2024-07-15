import PropTypes from 'prop-types'
import './user.css'

const User = (props) => {
  return (
    <div className={`user-user`}>
      <div className="user-container">
        <img
          alt="user image"
          src={props.userImage}
          className="user-user-image"
        />
        <div className="user-container1">
          <span className="user-text Heading3">
            {props.userName}
          </span>
          <span className="user-text2 Body2">
            {props.userRol}
          </span>
        </div>
      </div>
      <img
        alt="settings icon"
        src="/assets/settings-icon.svg"
        className="user-settings-icon"
      />
    </div>
  )
}

User.defaultProps = {
  userImage: '/external/user-image.png',
  userName: 'Usuario',
  userRol: 'Frontend'
}

User.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  userRol: PropTypes.string
}

export default User
