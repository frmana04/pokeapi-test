import React from "react";
import "./Header.scss";
import ImageHeader from 'assets/images/cabecera.jpg'
function Header() {
  return (
    <>
      
      <div className="header">
          <img className="header__img" src={ImageHeader} alt="header"/>
          <h3 className="header__title">PokeApi Test</h3>
      </div>

    </>
  );
}

export default Header;
