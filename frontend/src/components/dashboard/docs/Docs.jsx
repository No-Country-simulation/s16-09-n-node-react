import { NavLink } from "react-router-dom";

import "./docs.css";

import { useTheme } from "@/context/themecontext";

const Docs = (props) => {
  const { theme } = useTheme();
  return (
    <div
      className='docs-docs'
      style={{ color: theme.primary, backgroundColor: theme.background }}
    >
      <span className='docs-title Heading1'>
        <span>Documentación</span>
      </span>
      <div className='docs-container' style={{ backgroundColor: theme.back }}>
        <div className='docs-container1'>
          <span className='docs-text1 Heading3'>
            <span>MVP</span>
          </span>
          <span className='docs-text3 Body3'>
            <span>Red Social para compartir Skills</span>
          </span>
        </div>
        <div className='docs-container2'>
          <div className='docs-container3'>
            <div className='docs-container4'>
              <img
                alt='sheet icon'
                src='/assets/sheet-icon.svg'
                className='docs-sheet-icon'
              />
              <span className='docs-text5 Body3'>
                <span>mvp.userstories.doc</span>
              </span>
            </div>
            <img
              alt='download-icon'
              src='/assets/download-icon.svg'
              className='docs-download-icon'
            />
          </div>
          <div className='docs-container5'>
            <div className='docs-container6'>
              <img
                alt='figma icon'
                src='/assets/figma-icon.svg'
                className='docs-figma-icon'
              />
              <span className='docs-text7 Body3'>
                <span>https://www.figma.com</span>
              </span>
            </div>
            <img
              alt='link-icon'
              src='/assets/link-icon.svg'
              className='docs-link-icon'
            />
          </div>
        </div>
      </div>
      <NavLink to={"/dashboard/docs-details"}>
        <img
          alt='plus-icon'
          src='/assets/plus-icon.svg'
          className='docs-plus-icon'
        />
      </NavLink>
    </div>
  );
};

export default Docs;
