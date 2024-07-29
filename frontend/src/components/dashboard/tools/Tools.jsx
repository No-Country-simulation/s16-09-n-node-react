import { NavLink } from "react-router-dom";
import Aos from "aos";

import "./tools.css";




import { useTheme } from "@/context/themecontext";
import { useEffect } from "react";




const Tools = () => {
  const { theme } = useTheme();


  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const getFilterStyle = () => {
    return theme.text === "#e8e8e8" ? "invert(0)" : "invert(1)";
  };
  return (
    <div data-aos="fade-left"
      className='tools-tools'
      style={{ color: theme.primary, backgroundColor: theme.background }}
    >
      <span className='tools-title Heading1'>
        <span>Herramientas</span>
      </span>
      <div className='tools-design'>
        <img
          alt='Figma Icon'
          src='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f40ee3f0-c832-430f-8738-aa2f56082371/f6d0ea63-bb7f-4072-9327-7f64b6f86bae?org_if_sml=11052&amp;force_format=original'
          className='tools-figma-icon'
        />
        <span className='tools-text1 Body1'>
          <span>Diseño UX/UI</span>
        </span>
      </div>
      <div className='tools-frontend'>
        <img
          alt='react icon'
          src='/assets/react-icon.svg'
          className='tools-react-icon'
        />
        <span className='tools-text3 Body1'>
          <span>Frontend</span>
        </span>
      </div>
      <div className='tools-backend'>
        <img
          alt='backend icon'
          src='/assets/node-icon.svg'
          className='tools-backend-icon'
        />
        <span className='tools-text5 Body1'>
          <span>Backend</span>
        </span>
      </div>
      <div className='tools-data'>
        <img
          alt='python icon'
          src='/assets/python-icon.svg'
          className='tools-python-icon'
        />
        <span className='tools-text7 Body1'>
          <span>Data Análisis</span>
        </span>
      </div>
      <NavLink to={"/dashboard/tools"}>
        <img
          alt='plus-icon'
          src='/assets/plus-icon.svg'
          className='tools-plus-icon'
          style={{ filter: getFilterStyle() }}
        />
      </NavLink>
    </div>
  );
};

export default Tools;
