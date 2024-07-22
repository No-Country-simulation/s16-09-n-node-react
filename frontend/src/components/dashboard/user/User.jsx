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
const getFilterStyle = () => {
  return theme.text === "#e8e8e8" ? 
    'invert(0)' : 
    'invert(1)';
};


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
    <div className={`user-user`} style={{color: theme.subtitulos, backgroundColor: theme.background} }>
      <div className="user-container font-white"  style={{pointerEvents: "none",  }}>
    <UserButton  />
        <div className="user-container1" style={{color: theme.subtitulos, backgroundColor: theme.background}}>
          <span className="user-text Heading3 font-bold" style={{color: theme.subtitulos, backgroundColor: theme.background}  }>
    { user.fullName }
          </span>
          <span className="user-text2 Body2" style={{color: theme.subtitulos, backgroundColor: theme.background} }>
            {userRol}
          </span>
        </div>
      </div>
      <img
        alt="settings icon"
        src="/assets/settings-icon.svg"
        className="user-settings-icon hover:text-red-700"
              style={{ filter: getFilterStyle() }}
 
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
