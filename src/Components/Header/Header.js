import React from "react";
import imgLogo from "./img/headerLogo.png";
import "./style.css"


export default function Header() {
  return (
    <div>
      <header className="logo">
        <img src={imgLogo} alt="Logo" />
      </header>
    </div>
  );
}
