import styled from "styled-components";
export const Sersection = styled.div`
  height: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  object-fit: cover;
  color: #f45c2c;
  font-family: "Red Thinker";
  font-size: 35px;
  background-color: white;
  font-weight: bold;
  position: relative;
  background-color: NONE;
  flex-direction: column;
  z-index: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 968px) {
    height: 80vh;
  }
`;
export const Sersdiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  align-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  flex: 1;
`;
export const Sertop = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 20px;
  height: 45vh;
  @media screen and (max-width: 968px) {
    height: 30vh;
    gap: 10px;
  }
`;
export const Serimg = styled.img`
  height: 40vh;
  width: 30vw;
  z-index: 1;
  @media screen and (max-width: 968px) {
    height: 25vh;
    width: 28vw;
  }
`;
export const Serdetails = styled.div`
  height: 40vh;
  width: 30vw;
  z-index: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bold;
  font-family: "Red Thinker";
  box-shadow: 0px 0px 10px 1px #f4c3bc;

  align-content: center;
  align-items: center;
  font-size: 25;
  @media screen and (max-width: 968px) {
    height: 25vh;
    width: 28vw;
  }
`;
export const Sersicon = styled.img`
  z-index: 1;
  height: 50px;
  width: 50px;
  @media screen and (max-width: 968px) {
    height: 30px;
    width: 30px;
  }
`;
export const Sername = styled.p`
  font-size: 25px;
  font-family: "Red Thinker";
  z-index: 1;
  color: #f45c2c;
  @media screen and (max-width: 968px) {
    text-align: center;
    font-size: 13px;
  }
`;
export const Serdesc = styled.p`
  font-size: 18px;
  font-family: "Red Thinker";
  z-index: 1;
  color: grey;
  text-align: center;
  @media screen and (max-width: 968px) {
    text-align: center;
    font-size: 7px;
  }
`;
export const Serimgm = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  position: absolute;
  z-index: 0;
  @media screen and (max-width: 968px) {
    object-fit: fill;
    width: 100%;
    height: 60vh;
  }
`;
