import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    list-style: none;
    display: flex;
    align-items: center;
  }
  .navItem:not(:last-child) {
    margin-right: 20px;
  }
  .navLink {
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.main};
    cursor: pointer;
    font-weight: 600;
    &:hover {
      color: ${({ theme }) => theme.colors.active};
    }
  }
  .activeNavLink {
    color: ${({ theme }) => theme.colors.active};
  }
`;
