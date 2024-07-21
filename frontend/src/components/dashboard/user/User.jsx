import PropTypes from 'prop-types'
import './user.css'
import { UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from 'react';
import UserMenu from './UserMenu';


const styles = {
  spinner: {
    display: 'block',
    margin: '10px auto',
    borderColor: 'white',
  }
}

const User = (props) => {

  const { isLoader, user } = useUser()

  const set = '/assets/settings-icon.svg'
  const close = '/assets/close-icon.svg'
  const [showMenu, setShowMenu] = useState(false)
  
  const handleMenu = () => {
    setShowMenu(prev => !prev)
  }
  
  return (
    (!user) ? <p>   <ClipLoader
      color="white"
      loading={isLoader}
      size={40}
      cssOverride={styles.spinner}
      aria-label="Loading Spinner"
      data-testid="loader"
    /></p> : (
      <div className={`user-user`} style={showMenu ? {borderColor: 'var(--dl-color-ours-light-over)'} : null}>
        <div className="user-container font-white">
          <UserButton/>
          <div className="user-container1">
            <span className="user-text Heading3 font-bold">
              {user.fullName}
            </span>
            <span className="user-text2 Body2">
              {props.userRol}
            </span>
          </div>
        </div>
        <img
          alt="settings icon"
          src={showMenu ? close : set}
          className="user-settings-icon cursor-pointer"
          onClick={handleMenu}
        />
        {showMenu && <UserMenu handleMenu={handleMenu} />}
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
