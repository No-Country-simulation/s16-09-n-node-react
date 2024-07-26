import { NavLink } from "react-router-dom";

import "./progress.css";

import { useTheme } from "@/context/themecontext";

const Progress = () => {
  const getFilterStyle = () => {
    return theme.text === "#e8e8e8" ? "invert(0)" : "invert(1)";
  };

  const { theme } = useTheme();
  return (
    <div
      className='progress-progress'
      style={{ color: theme.text, backgroundColor: theme.background }}
    >
      <span className='progress-title Heading1'>
        <span>Progreso</span>
      </span>
      <div className='progress-design'>
        <span className='progress-text1 Body1'>
          <span>Diseño UX/UI</span>
        </span>
        <div className='progress-progress1'>
          <div className='progress-range'></div>
        </div>
      </div>
      <div className='progress-frontend'>
        <span className='progress-text3 Body1'>
          <span>Frontend</span>
        </span>
        <div className='progress-progress2'>
          <div className='progress-range1'></div>
        </div>
      </div>
      <div className='progress-backend'>
        <span className='progress-text5 Body1'>
          <span>Backend</span>
        </span>
        <div className='progress-progress3'>
          <div className='progress-range2'></div>
        </div>
      </div>
      <div className='progress-data'>
        <span className='progress-text7 Body1'>
          <span>Data Análisis</span>
        </span>
        <div className='progress-progress4'>
          <div className='progress-range3'></div>
        </div>
      </div>
      <NavLink to={"/dashboard/progress-details"}>
        <img
          alt='plus-icon'
          src='/assets/plus-icon.svg'
          className='progress-plus-icon'
          style={{ filter: getFilterStyle() }}
        />
      </NavLink>
    </div>
  );
};

export default Progress;
