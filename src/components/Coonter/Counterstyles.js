import styled from "styled-components";
export const Row = styled.div`
  height: 35vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Item = styled.div`
  width: 30vw;
  height: 35vh;
  display: flex;
  flex-direction: Column;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.h1`
  font-size: 75px;
  color: #f45c2c;
`;

export const Desc = styled.h2`
  font-size: 25px;
  color: black;
`;
