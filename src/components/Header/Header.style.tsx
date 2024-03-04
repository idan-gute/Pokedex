import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IsActiveProps } from './LinkHeader';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 93px;
  background-color: #020166;
  padding: 0 31px;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

export const LinkContainer = styled.div.attrs({ className: 'Link-container' })`
  display: flex;
  height: inherit;
  max-width: 272px;
`;

export const LinkStyled = styled(NavLink)`
  font-weight: 400;
  font-size: 1rem;
  line-height: 18.75px;
  color: #F7F7F9;
  text-decoration: none;
  &.active {
    font-weight: 100;
    flood-color:  #000000;
  }
`;

export const LinksWrapper = styled.li<IsActiveProps>`
  display: flex;
  align-items: center;
 background-color: ${({ isActive }) => isActive && "#94D97E"};
  padding: 24px;
`;