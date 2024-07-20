import PropTypes from 'prop-types'
import './user.css'
import { UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'
import ClipLoader from "react-spinners/ClipLoader";
import {useTheme} from '../../../context/ThemeContext'

const styles = {
  spinner: {
    display: 'block',
    margin: '10px auto',
    borderColor: 'white',
  } 
}

const User = ({ userImage = '/external/user-image.png', userName = 'Usuario', userRol = 'Frontend' }) => {
const { theme } = useTheme()
const {isLoader, user } = useUser()

console.log (user, isLoader, 'user')
  return (
 (!user ) ?   <p>
     <ClipLoader
 color="white"
 loading={isLoader}
 size={40}
 cssOverride= {styles.spinner  }
 aria-label="Loading Spinner"
 data-testid="loader"
/></p>  : (
    <div className={`user-user`} style={{color: theme.text, backgroundColor: theme.background} }>
      <div className="user-container font-white">
    <UserButton userProfileMode="navigation"   userProfileUrl="/perfil"
    
    />
        <div className="user-container1" style={{color: theme.text, backgroundColor: theme.background}}>
          <span className="user-text Heading3 font-bold" style={{color: theme.text, backgroundColor: theme.background}  }>
    { user.fullName }
          </span>
          <span className="user-text2 Body2" style={{color: theme.text, backgroundColor: theme.background} }>
            {userRol}
          </span>
        </div>
      </div>
      <img
        alt="settings icon"
        src="/assets/settings-icon.svg"
        className="user-settings-icon hover:text-red-700"
        style={{color: theme.text, backgroundColor: theme.background} }
 
      />
    </div>) 
  )
}

User.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  userRol: PropTypes.string
}

export default User
