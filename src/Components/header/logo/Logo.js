import React from "react";
import { LogoContainer } from "./LogoStyled";
import sprite from "../../../icons/headerSprite.svg";

const Logo = () => {
  return (
    <LogoContainer to='/'>
      <svg className="headerLogo">
        <use href={sprite + "#icon-home"} />
      </svg>
    </LogoContainer>
  );
};

export default Logo;
