import styled from "styled-components";

export const ButtonLike = styled.button.attrs({ className: "ButtonLike" })`
  cursor: pointer;
  border: none;
  background: none;
`;

export const PokemonDetailsWrapper = styled.div`
  margin: 0 110px;
  color: rgba(2, 1, 102, 1);
  max-width: 844px;

`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardWrapper = styled.div`
  border-radius: 9px;
  background-color: #f7f7f9;
  padding: 20px;
`
export const InnerWrapper = styled.div`
display: flex;
align-items: center;
`
export const DescriptionWrapper = styled.div`
    margin-inline-start: 30px;
`
export const LeftWrapper = styled.div`
    text-align: center;
`
export const TypeWrapper = styled.div`
display: flex;
gap: 10px;
div:first-of-type {
  background-color: red;
}
div{
  background-color: green;
  padding: 10px;
  border-radius: 9px;
  margin-top: 15px;
}
`