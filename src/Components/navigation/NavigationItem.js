import React from "react";

import { NavLink } from "react-router-dom";

const NavigationItem = ({
  name,
  path,
  exact,
  isPrivate,
  isRestricted,
  isAuth,
}) => {
  return (
    <>
      {((!isPrivate && !isRestricted) ||
        (isPrivate && !isRestricted && isAuth) ||
        (!isPrivate && isRestricted && !isAuth)) && (
        <li className='navItem'>
          <NavLink
            to={path}
            exact={exact}
            className='navLink'
            activeClassName='activeNavLink'>
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
