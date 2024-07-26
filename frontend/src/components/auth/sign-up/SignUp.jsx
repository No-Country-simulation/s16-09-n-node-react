import icono from "@/assets/icono.svg";
import logo from "@/assets/logo.svg";
import { SignUp } from "@clerk/clerk-react";

import "./SignUp.css";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function SignUpPage() {
  useEffect(() => {
    AOS.init();

    const intervalId = setInterval(() => {
      const header = document.querySelector(".cl-headerTitle");
      if (header) {
        header.textContent = "Bienvenidos, ";
        header.style.color = "black";
        header.style.display = "flex";
        header.style.justifyContent = "flex-start";

        const subtitle = document.querySelector(".cl-headerSubtitle");
        if (subtitle) {
          subtitle.remove();
        }

        clearInterval(intervalId);
      }
    }, 100); // revisa cada 100ms

    const dividerIntervalId = setInterval(() => {
      const dividerText = document.querySelector(".cl-dividerText");
      if (dividerText) {
        dividerText.innerHTML = `<div class="cl-dividerText-container">
                                    <div class="cl-dividerText-line"></div>
                                    <span>o</span>
                                    <div class="cl-dividerText-line"></div>
                                 </div>`;
        clearInterval(dividerIntervalId);
      }
    }, 100); // revisa cada 100ms

    return () => {
      clearInterval(intervalId);
      clearInterval(dividerIntervalId);
    };
  }, []);

  return (
    <div className='p-200 mt-0 flex h-screen w-screen flex-col-reverse items-center md:mt-0 md:flex-row'>
      <div className='flex flex-1 items-center justify-center'>
        <SignUp />
      </div>
      <div
        data-aos='fade-up'
        className='flex flex-1 flex-col items-center justify-center bg-[#f8f9fa] p-10'
      >
        <img
          data-aos='fade-right'
          src={icono}
          alt='Icono'
          className='mb-4 h-2/5 w-1/5 md:mb-0'
        />
        <img
          data-aos='fade-left'
          src={logo}
          alt='Logo'
          className='mt-5 w-3/5 md:mt-0'
        />
        <b data-aos='fade-down' className='mt-10 text-center text-3xl md:mt-20'>
          ¡Desde el inicio hasta el lanzamiento!
        </b>
      </div>
    </div>
  );
}
