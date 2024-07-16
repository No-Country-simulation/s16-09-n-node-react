import PropTypes from 'prop-types'
import './user.css'
import { UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'

const User = (props) => {

const {isLoader, user } = useUser()

console.log (user, isLoader, 'user')
  return (
 (!user ) ?   <p> Loading... </p>  : (
    <div className={`user-user`}>
      <div className="user-container font-white">
    <UserButton  />
        <div className="user-container1">
          <span className="user-text Heading3 font-bold">
    { user.fullName }
          </span>
          <span className="user-text2 Body2">
            {props.userRol}
          </span>
        </div>
      </div>
      <img
        alt="settings icon"
        src="/assets/settings-icon.svg"
        className="user-settings-icon hover:text-red-700"
 
      />
    </div>) 
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
