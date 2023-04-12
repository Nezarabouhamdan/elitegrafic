import { motion } from "framer-motion";
import styled from "styled-components";
export const Herosection = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  object-fit: cover;
  color: white;
  background-color: black;
  flex-direction: column;
  justify-content: left;
  align-content: left;
  align-items: left;
  @media screen and (max-width: 968px) {
    height: 100vh;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;

export const Heroimg = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 0;
  @media screen and (max-width: 968px) {
    object-fit: fill;
    transform: rotate(90deg);

    width: 100vh;
    height: 100vw;
  }
`;
export const Textdiv = styled.div`
  width: 50%;
  height: 100vh;
  z-index: 1;
  margin-left: 10%;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  @media screen and (max-width: 968px) {
    width: 80%;
    margin-top: -20%;
    margin-left: 0%;

    justify-content: center;
    align-items: center;
  } ;
`;
export const Imagediv = styled(motion.div)`
  width: 60%;
  height: 10vh;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Bebas Neue";
  color: #333333;

  @media screen and (max-width: 968px) {
    width: 100%;
    padding-top: 0px;
    justify-content: space-around;
    align-items: center;
  } ;
`;
export const Button2 = styled.div`
  width: 60%;
  height: 10vh;
`;
export const Image = styled.img`
  height: 300px;
  width: 20vw;
  transform: scale(1.1);
`; //#f4c3bc
export const Head = styled.div`
  font-size: 20px;
  font-weight: bold;

  color: black;
  @media screen and (max-width: 968px) {
    font-size: 11px;
  } ;
`;
export const Head2 = styled(motion.div)`
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 80px;
  font-family: "Bebas Neue";
  color: #333333;
  font-weight: 100;

  @media screen and (max-width: 968px) {
    margin-top: 25px;
    text-align: center;

    font-size: 40px;
  } ;
`;
export const Head3 = styled(motion.div)`
  font-size: 16px;
  font-weight: 400;
  font-family: "Mulish";
  padding-top: 15px;
  padding-bottom: 15px;
  color: #828282;
  @media screen and (max-width: 968px) {
    font-size: 12px;
    padding-top: 50px;
    padding-bottom: 0px;
  } ;
`;
export const Underline = styled.div`
  height: 2px;
  width: 90%;
  background-color: #daa520;
`;
export const Colored = styled.div`
  font-size: 80px;
  font-weight: 100;

  font-family: "Bebas Neue";
  color: #f45c2c;
`;
