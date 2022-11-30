import styled from 'styled-components';
export const Herosection=styled.div`
height : 100vh ; 
background-position : center ;
 background-size:cover ; 
  display : flex ;
   object-fit :cover ;
   color: white;
   background-color: black;
   flex-direction: column;
   justify-content: left;
   align-content: left;
   align-items: left;
   @media screen and (max-width: 968px) {
    height : 50vh ; 
    justify-content: center;
   align-content: center;
   align-items: center;
	}
   `
   

export const Heroimg= styled.img`
object-fit: fill;
width:100%;
height: 100vh;
position: absolute;
z-index: 0;
@media screen and (max-width: 968px) {
    object-fit: fill;
    transform: rotate(90deg);

    
    width:100%;
height: 100vw;
}`;
export const Textdiv=styled.div`
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
    margin-left: 0%;

    justify-content: center;
align-items: center;
};
`
export const Imagediv=styled.div`
width: 60%;
height: 10vh;
z-index: 1;
text-align: center;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 968px) {	
    width: 100%;

justify-content: center;
align-items: center;
};
`
export const Button2=styled.div`
width: 60%;
height: 10vh;
`
export const Image=styled.img`
height: 300px;
width: 20vw;
transform: scale(1.1);


`//#f4c3bc
export const Head=styled.div`
font-size:20px;
font-weight: bold;

color: WHITE;
@media screen and (max-width: 968px) {	font-size: 11px;
};
`
export const Head2=styled.div`
padding-top: 2px;
padding-bottom: 2px;
font-size:35px;
font-family: 'Red Thinker';

color: WHITE;
@media screen and (max-width: 968px) {
    color: #f45c2c;
    margin-top: 20px;
    font-size: 15px;
};
`
export const Head3=styled.div`
font-size:18px;
font-weight: lighter;
font-family: 'Red Thinker';
padding-top:15px;
padding-bottom:15px;
color: gray;
@media screen and (max-width: 968px) {	font-size: 12px;
    padding-top:10px;
    padding-bottom:0px;

};
`
export const Underline=styled.div`
height: 2px;
width: 90%;
background-color: #DAA520;
`
