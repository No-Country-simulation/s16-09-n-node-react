import PropTypes from 'prop-types';
import './user.css';
import { UserButton, useUser } from '@clerk/clerk-react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useTheme } from '../../../context/ThemeContext';
import { useState } from 'react';
import UserMenu from './UserMenu';

const User = ({ userImage = '/external/user-image.png', userName = 'Usuario', userRol = 'Frontend' }) => {
  const { theme } = useTheme();
  const { isLoader, user } = useUser();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(prev => !prev);
  };

  const spinnerStyles = {
    display: 'block',
    margin: '10px auto',
    borderColor: 'white',
  };

  if (!user) {
    return (
      <p>
        <ClipLoader
          color="white"
          loading={isLoader}
          size={40}
          cssOverride={spinnerStyles}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </p>
    );
  }

  return (
    <div className="user-user" style={{ borderColor: showMenu ? 'var(--dl-color-ours-light-over)' : '', color: theme.text, backgroundColor: theme.backgroundColor }}>
      <div className="user-container font-white">
        <UserButton userProfileMode="navigation" userProfileUrl="/perfil" />
        <div className="user-container1" style={{ color: theme.text, backgroundColor: theme.backgroundColor }}>
          <span className="user-text Heading3 font-bold">{user.fullName}</span>
          <span className="user-text2 Body2">{userRol}</span>
        </div>
      </div>
      <img
        alt="settings icon"
        src={showMenu ? '/assets/close-icon.svg' : '/assets/settings-icon.svg'}
        className="user-settings-icon hover:text-red-700 cursor-pointer"
        style={{ color: theme.text, backgroundColor: theme.backgroundColor }}
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
