import type React from "react";
import "../styles/Header.css";

interface HeaderProps {
  setPath: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Header = ({ setPath }: HeaderProps) => {
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    const href: string | null = e.currentTarget.getAttribute("href");
    setPath(href);
    window.history.pushState({}, "", href);
  };

  return (
    <header className="header">
      <div>
        <h1>SPA con Fetch</h1>
      </div>
      <nav className="header__nav">
        <a onClick={(e) => handleClick(e)} href="/home">
          Home
        </a>
        <a onClick={(e) => handleClick(e)} href="/acerca">
          Acerca
        </a>
        <a onClick={(e) => handleClick(e)} href="/servicios">
          Servicios
        </a>
        <a onClick={(e) => handleClick(e)} href="/contacto">
          Contacto
        </a>
      </nav>
    </header>
  );
};
