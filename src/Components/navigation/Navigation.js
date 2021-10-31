import React from "react";
import NavigationItem from "./NavigationItem";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ routes, toggle, isAuth = "false" }) => {
  return (
    <NavigationContainer>
      <ul className='navList'>
        {routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
          <NavigationItem
            key={path}
            name={name}
            path={path}
            exact={exact}
            isPrivate={isPrivate}
            isRestricted={isRestricted}
            isAuth={isAuth}
          />
        ))}
        {isAuth && (
          <li
            className='navItem'
            // onClick={signOut}
          >
            <span className='navLink'>Sign Out</span>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
