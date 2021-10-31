import React, { useEffect, useState } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Modal from "../modal/Modal";
import Navigation from "../navigation/Navigation";
import Burger from "./burger/Burger";
import { HeaderContainer } from "./HederStyled";
import Logo from "./logo/Logo";

const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  useEffect(() => {
    window.addEventListener("resize", onHandleResizeWindow);
    return () => {
      window.removeEventListener("resize", onHandleResizeWindow);
    };
  });
  const toggle = () => setBurgerOpen((prev) => !prev);

  const onHandleResizeWindow = () => {
    width >= breakPoint && isBurgerOpen && toggle();
    setWidth(window.innerWidth);
  };

  return (
    <HeaderContainer>
      <Logo />
      {width >= breakPoint ? (
        <Navigation routes={mainRoutes} toggle={toggle} />
      ) : (
        <Burger toggle={toggle} />
      )}
      {isBurgerOpen && (
        <Modal closeModal={toggle}>
          <Navigation routes={mainRoutes} toggle={toggle} />
        </Modal>
      )}
    </HeaderContainer>
  );
};

export default Header;
