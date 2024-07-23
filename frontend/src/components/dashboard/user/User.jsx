import PropTypes from "prop-types";

import "./user.css";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/themecontext";
import { UserButton, useUser } from "@clerk/clerk-react";
import ClipLoader from "react-spinners/ClipLoader";

import UserMenu from "./UserMenu";

const styles = {
  spinner: {
    display: "block",
    margin: "10px auto",
    borderColor: "white",
  },
};

const User = ({
  userImage = "/external/user-image.png",
  userName = "Usuario",
  userRol = "Frontend",
}) => {
  const { theme } = useTheme();
  const { isLoader, user } = useUser();

  const set = "/assets/settings-icon.svg";
  const close = "/assets/close-icon.svg";
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  let style = showMenu
    ? { borderColor: "var(--dl-color-ours-light-over)" }
    : {};
  style.color = theme.text;
  style.backgroundColor = theme.background;

  return !user ? (
    <p>
      <ClipLoader
        color='white'
        loading={isLoader}
        size={40}
        cssOverride={styles.spinner}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </p>
  ) : (
    <div className={`user-user`} style={style}>
      <div className='user-container font-white'>
        <UserButton userProfileMode='navigation' userProfileUrl='/perfil' />
        <div className='user-container1' style={{ color: theme.text }}>
          <span
            className='user-text Heading3 font-bold'
            style={{ color: theme.text }}
          >
            {user.fullName}
          </span>
          <span className='user-text2 Body2' style={{ color: theme.text }}>
            {userRol}
          </span>
        </div>
      </div>
      <img
        alt='settings icon'
        src={showMenu ? close : set}
        className='user-settings-icon cursor-pointer hover:text-red-700'
        style={{ color: theme.text }}
        onClick={handleMenu}
      />
      {showMenu && <UserMenu handleMenu={handleMenu} />}
    </div>
  );
};

User.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  userRol: PropTypes.string,
};

export default User;
