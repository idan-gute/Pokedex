import Logo from "../../assets/styles/Icons/Logo";
import { HeaderWrapper, LinkContainer, NavBar } from "./Header.style";
import LinkHeader from "./LinkHeader";
import { useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <NavBar>
        <Logo/>
        <LinkContainer>
        <LinkHeader
          label="Home"
          linkTo="/"
          isActive={pathname === "/"}
          />
        <LinkHeader label="Favorites"
          linkTo="/favorites"
          isActive={pathname === "/favorites"}/>
          </LinkContainer>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
