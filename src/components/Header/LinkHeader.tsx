import { LinkStyled, LinksWrapper } from "./Header.style";

interface INavLinkHeader {
  label: string;
  isActive: boolean;
  linkTo: string;
}

export interface IsActiveProps{
  isActive?:boolean;
}

const LinkHeader = ({ linkTo, label, isActive }: INavLinkHeader) => {
  return (
    <LinksWrapper isActive={isActive}>
      <LinkStyled to={linkTo}>{label}</LinkStyled>
    </LinksWrapper>
  );
};

export default LinkHeader;


