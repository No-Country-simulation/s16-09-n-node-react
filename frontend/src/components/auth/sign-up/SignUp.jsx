import { SignUp } from "@clerk/clerk-react";
import logo from '../../../assets/logo.svg';
import icono from '../../../assets/icono.svg';
import './signup.css';
import { useEffect } from 'react';

export default function SignUpPage() {
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const header = document.querySelector('.cl-headerTitle');
      if (header) {
        header.textContent = 'Bienvenidos, ';
        header.style.color = 'black';
        header.style.display = 'flex';
        header.style.justifyContent= 'flex-start'; 
        const subtitle = document.querySelector('.cl-headerSubtitle');
        if (subtitle) {
          subtitle.remove();
        }

        clearInterval(intervalId);
      }
    }, 100); // revisa cada 100ms


    const dividerText = document.querySelector('.cl-dividerText');
        if (dividerText) {
          dividerText.innerHTML = `<div class="cl-container">
                                    <div class="cl-"></div>
                                    <span>-------------------------------------   o   -----------------------------------</span>
                                    <div class="cl-dividerText"></div>
                                   </div>`;
          clearInterval(intervalId);
        }


    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-40 flex flex-col-reverse md:flex-row md:mt-0 items-center w-screen h-screen">
      <div className="flex-1 flex justify-center items-center">
        <SignUp  />

      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-10 ">
        <img src={icono} alt="Icono" className="w-1/5 h-2/5 mb-4 md:mb-0" />
        <img src={logo} alt="Logo" className="w-3/5 mt-5 md:mt-0" />
        <b className="text-center mt-10 md:mt-20 text-3xl">¡Desde el inicio hasta el lanzamiento!</b>
      </div>
    </div>
  );
}
