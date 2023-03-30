import styled from "styled-components";
export const Herosection=styled.div`
height : 100vh ; 
background-position : center ;
 background-size:cover ; 
  display : flex ;
   align-items : center ; 
   object-fit :cover ;
   justify-content: center;
   color: #f45c2c;
   background-color: black;
   flex-direction: row;
   justify-content: center;
   align-content: center;
   align-items: center;
   flex: 1;
   @media screen and (max-width: 968px) {
    height : 60vh ; 
		
	}
   `
   export const Left=styled.div`
   height : 100vh ; 
   width: 100%;
   background-color: 	#FFFAFA;
   display: flex;
   object-fit :fill ;
   justify-content: center;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   align-items: center;

   `
   export const Right=styled.div`
   width: 50%;
   height: 100vh;
   z-index: 1;
   
   display: flex;
   flex-direction: row;

   align-items: center;
   `
export const Heroimg= styled.img`
object-fit: fill;
width:50%;
height: 100%;
position: absolute;

display: flex;
flex-direction: column;
z-index: 0;
@media screen and (max-width: 968px) {
    object-fit: fill;
    width:100%;
height: 60vh;
}`;

export const Textdiv=styled.div`
width: 70%;
height: 100vh;
z-index: 1;
margin-left: 0%;
background-color: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
@media screen and (max-width: 968px) {	width: 50%;
};
`
export const Imagediv=styled.div`
width: 68%;
height: 10vh;
z-index: 1;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const Image=styled.img`
height: 300px;
width: 20vw;
transform: scale(1.1);


`//#f4c3bc
export const Head=styled.div`
font-size:20px;
font-weight: bold;

color: #f45c2c;
@media screen and (max-width: 968px) {	font-size: 11px;
};
`
export const Head2=styled.div`
padding-top: 2px;
padding-bottom: 2px;
font-size:36px;
font-family: 'Red Thinker';

color: #f4c3bc;
@media screen and (max-width: 968px) {
    margin-top: 0px;
    font-size: 20px;
};
`
export const Head3=styled.div`
font-size:18px;
font-weight: lighter;
font-family: 'Red Thinker';
padding-top:15px;
padding-bottom:15px;
color: #C0C0C0;
@media screen and (max-width: 968px) {	font-size: 10px;
};
`
export const Underline=styled.div`
height: 2px;
width: 90%;
background-color: #DAA520;
`