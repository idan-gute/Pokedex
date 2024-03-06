import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkCardStyled = styled(Link)`
  display: block;
  height: 100%;
`;
export const CardWrapper = styled.div`
  width: 240.56px;
  height: 255px;
  border-radius: 9px;
  background-color: #f7f7f9;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.15);
  padding: 10px 16px;
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ImgPokemon = styled.img`
  width: 197px;
  height: 197px;
`;
