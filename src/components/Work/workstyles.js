import styled from "styled-components";

export const Worksection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #f45c2c;
  font-weight: bold;

  font-family: "Red Thinker";
  font-size: 35px;
  background-color: white;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const Childsection = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  @media screen and (max-width: 968px) {
    font-size: 7px;
  }
`;

export const Dtext = styled.h1`
  margin-bottom: 20px;
  font-size: 12px;
  text-align: center;
  color: grey;
  @media screen and (max-width: 968px) {
    font-size: 7px;
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 100px;
  background-color: #f4c3bc;
  @media screen and (max-width: 968px) {
    height: 1px;
  } ;
`;

export const Decoration = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 968px) {
  } ;
`;

export const Simg = styled.img`
  width: 15vw;
  height: 50vh;
  @media screen and (max-width: 968px) {
    width: 25vw;
    height: 22vh;
  } ;
`;
export const Mimg = styled.img`
  border-radius: 10px;
  width: 14vw;
  height: 20vh;

  box-shadow: 0px 0px 10px 1px #f4c3bc;
  @media screen and (max-width: 968px) {
    width: 35vw;
    height: 10vh;
  } ;
`;

export const Column = styled.div`
  height: 50vh;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  @media screen and (max-width: 968px) {
  } ;
`;

export const Mobile = styled.div`
  display: flex;

  width: 35%;

  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  @media screen and (max-width: 968px) {
    height: 45vh;

    width: 100%;

    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-between;
    align-items: center;
  } ;
`;
