import { SignIn } from "@clerk/clerk-react";
import logo from '../../../assets/logo.svg';
import icono from '../../../assets/icono.svg';
import { useEffect } from 'react';

export default function SignInPage() {
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
        const dividerText = document.querySelector('.cl-dividerText');
        if (dividerText) {
          dividerText.innerHTML = `<div class="cl-container">
                                    <div class="cl-"></div>
                                    <span>-------------------------------------   o   -----------------------------------</span>
                                    <div class="cl-dividerText"></div>
                                   </div>`;
          clearInterval(intervalId);
        }

        clearInterval(intervalId);
      }
    }, 100); // revisa cada 100ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-40 flex flex-col-reverse md:flex-row md:mt-0 items-center w-screen h-screen">
      <div className="flex-1 flex justify-center items-center">
        <SignIn  />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-10 ">
        <img src={icono} alt="Icono" className="w-1/5 h-2/5 mb-4 md:mb-0" />
        <img src={logo} alt="Logo" className="w-3/5 mt-5 md:mt-0" />
        <b className="text-center mt-10 md:mt-10 mt-lg">¡Desde el inicio hasta el lanzamiento!</b>
      </div>
    </div>
  );
}
