import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LogoContainer = styled(NavLink)`
  .headerLogo {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.main};
  }
`;
