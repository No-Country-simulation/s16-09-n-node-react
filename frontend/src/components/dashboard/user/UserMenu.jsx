import './usermenu.css';

export default function UserMenu({handleMenu}) {

  return (
    <main className={"user-menu-container"}>
      <div className={"user-menu-link"} onClick={handleMenu}>
        <span className={"user-menu-label"}>Información Personal</span>
        <img
          loading="lazy"
          src="/assets/arrow-down-icon.svg"
          className={"user-menu-icon"}
        />
      </div>
      <div className={"user-menu-link"} onClick={handleMenu}>
        <span className={"user-menu-label"}>Cuenta</span>
        <img
          loading="lazy"
          src="/assets/arrow-down-icon.svg"
          className={"user-menu-icon"}
        />
      </div>
      <div className={"user-menu-link"} onClick={handleMenu}>
        <span className={"user-menu-label"}>Apariencia e Idioma</span>
        <img
          loading="lazy"
          src="/assets/arrow-down-icon.svg"
          className={"user-menu-icon"}
        />
      </div>
      <div className={"user-menu-link"} onClick={handleMenu}>
        <span className={"user-menu-label"}>Integraciones</span>
        <img
          loading="lazy"
          src="/assets/arrow-down-icon.svg"
          className={"user-menu-icon"}
        />
      </div>
      <div className={"user-menu-link"} onClick={handleMenu}>
        <span className={"user-menu-label"}>Privacidad y Seguridad</span>
        <img
          loading="lazy"
          src="/assets/arrow-down-icon.svg"
          className={"user-menu-icon"}
        />
      </div>
      <div className={"user-menu-link"} onClick={handleMenu}>
        <span className={"user-menu-label"}>Preferencias de Proyectos</span>
        <img
          loading="lazy"
          src="/assets/arrow-down-icon.svg"
          className={"user-menu-icon"}
        />
      </div>
      <div className={"user-menu-link"} onClick={handleMenu}>
        <span className={"user-menu-label"}>Ayuda y Soporte</span>
        <img
          loading="lazy"
          src="/assets/arrow-down-icon.svg"
          className={"user-menu-icon"}
        />
      </div>
    </main>
  );
}