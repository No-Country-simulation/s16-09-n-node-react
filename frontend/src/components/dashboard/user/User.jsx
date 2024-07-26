import PropTypes from "prop-types";

import "./user.css";

import { useState } from "react";
import { useTheme } from "@/context/themecontext";
import { UserButton, useUser } from "@clerk/clerk-react";
import ClipLoader from "react-spinners/ClipLoader";

import UserMenu from "./UserMenu";
function User({
  // userImage = "/external/user-image.png",
  // userName = "Usuario",
  userRol = "Frontend",
}) {
  const { theme } = useTheme();
  const { isLoader, user } = useUser();

  const set = "/assets/settings-icon.svg";
  const close = "/assets/close-icon.svg";
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const getFilterStyle = () => {
    return theme.text === "#e8e8e8" ? "invert(0)" : "invert(1)";
    
  };



  return !user ? (
    <p>
      <ClipLoader
        color='white'
        loading={isLoader}
        size={40}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </p>
  ) : (
    <div
      className={`user-user`}
      style={{ color: theme.subtitulos, backgroundColor: theme.background }}
    >
      <div className='user-container font-white'>
        <UserButton userProfileMode='navigation' userProfileUrl='/perfil' />
        <div
          className='user-container1'
          style={{ color: theme.subtitulos, backgroundColor: theme.background }}
        >
          <span
            className='user-text Heading3 font-bold'
            style={{
              color: theme.subtitulos,
              backgroundColor: theme.background,
            }}
          >
            {user.fullName}
          </span>
          <span
            className='user-text2 Body2'
            style={{
              color: theme.subtitulos,
              backgroundColor: theme.background,
            }}
          >
            {userRol}
          </span>
        </div>
      </div>
      <img
        alt='settings icon'
        src={showMenu ? close : set}
        className='user-settings-icon cursor-pointer hover:text-red-700'
   
        onClick={handleMenu}
        style={{ filter: getFilterStyle() }}
      />
      {showMenu && 
      
      
      <UserMenu handleMenu={handleMenu} className='user-menu' />}
    </div>
  );
}

User.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  userRol: PropTypes.string,
};

export default User;