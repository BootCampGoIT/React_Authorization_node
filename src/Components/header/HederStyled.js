import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  @media (min-width: 1024px) {
    padding: 0 60px;
  }
`;
