import React from "react";
import { BurgerContainer } from "./BurgerStyled";
import sprite from "../../../icons/headerSprite.svg";
const Burger = ({ toggle }) => {
  return (
    <BurgerContainer onClick={toggle}>
      <svg className='burgerMenu'>
        <use href={sprite + "#icon-menu"} />
      </svg>
    </BurgerContainer>
  );
};

export default Burger;
