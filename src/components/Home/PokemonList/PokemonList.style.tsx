import styled from "styled-components";

export const ListWrapper = styled.div.attrs({ className: "ListWrapper" })`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 110px 80px;
`;
export const SearchInput = styled.input.attrs({ className: "SearchInput" })`
  display: block;
  margin: 26px auto;
  width: 341px;
  height: 36px;
  border: 1px solid rgba(2, 1, 102, 0.5);
  border-radius: 9px;
  padding: 0 5px;
`;
