import { useTheme } from "@/context/themecontext";
import { NavLink } from "react-router-dom";
import Aos from "aos";

import { proyects } from "./data";
import ProyectCard from "./ProyectCard";
import { useEffect } from "react";

const Proyects = () => {
  const { theme } = useTheme()
  const style = {
    color: theme.text,
    backgroundColor: theme.backgroundColor,
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (


  
      <div 
      className='no-scrollbar flex h-screen flex-wrap justify-start gap-3 overflow-auto'
      style={style}
     
    >
      <NavLink 
        className='flex w-1/3 flex-col items-center justify-center gap-4 rounded-2xl'
        to='/dashboard/proyect/add-proyect'
        style={{ backgroundColor: theme.background, height: "50dvh" }}
      >
        <svg
          width='40'
          height='40'
          viewBox='0 0 63 62'
          fill={theme.text}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M63 35.4286H36V62H27V35.4286H0V26.5714H27V0H36V26.5714H63V35.4286Z'
            fill='#CCCCCC'
          />
        </svg>
        <span className='font-roboto text-center'>Crear Projecto</span>
      </NavLink>
      {proyects && proyects.length > 0
        ? proyects.map((proyect, idx) => (
            <ProyectCard 
      
              idx={idx}
              proyect={proyect}
              theme={theme}
              key={proyect.id}
            />
          ))
        : null}
    </div>
 );
};

export default Proyects;
