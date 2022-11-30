import styled ,{createGlobalStyle} from 'styled-components'
  import {SecondColor,PrimaryColor,Redcolor} from './data/GlobalData';
  
 export const Globalstyle=createGlobalStyle`*{
box-sizing: border-box;
margin: 0;
padding: 0px;

font-family: 'Orbitron', sans-serif;}`;
export const Container=styled.div`
width:100%;
max-width:1330px;
margin:0 auto;
padding :50px;
@media screen and (max-width:968px){
    padding:0 30px;
}`
export const Section=styled.div`
color:white;
padding: 160px;
background: ${({inverse})=>inverse?SecondColor:PrimaryColor};
`
export const MainHeading=styled.h1`
font-size:35px;
margin-bottom:2rem;
color: ${({inverse})=>inverse?PrimaryColor:SecondColor};
width: 100%;
letter-spacing: 4px;
text-align: center;
@media screen and (max-width:968px){
   font-size : 22px; 
  }
`
export const MainHeading2=styled.h1`
font-size:20px;
margin-bottom:0rem;
color: ${({inverse})=>inverse?PrimaryColor:SecondColor};
letter-spacing: 6px;
text-align: center;

`
export const Button=styled.button`
border-radius: 8px;
background: #f45c2c;
width:150px;
white-space:  nowrap;
padding:  ${({big})=>big?'12px 64px':"10px 12px"};
font-weight:1000;
color: #fff;
font-size: ${({fontbig})=>fontbig?'20px':"14px"};
outline: none;
border: 2px solid #f45c2c;
cursor: pointer;
position: relative;
overflow: hidden;
&:before{
  background:white;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
  transition: all 0.6s ease;
  width: 102%;
  height: 0%;
}
&:hover:before{
  height: 200%;
}
&:hover{
  z-index: 1;
  color:black;}
  @media screen and (max-width: 968px) {	width:115px ;
	font-size: small;
};
`
export const Button2=styled.button`
border-radius: 8px;
background: none;
width:150px;
white-space:  nowrap;
padding:  ${({big})=>big?'12px 64px':"10px 12px"};
font-weight:1000;
color: #fff;
font-size: ${({fontbig})=>fontbig?'20px':"14px"};
outline: none;
border: 2px solid none;
cursor: pointer;
position: relative;
overflow: hidden;
&:before{
  background:white;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
  transition: all 0.6s ease;
  width: 102%;
  height: 0%;
}
&:hover:before{
  height: 200%;
}
&:hover{
  z-index: 1;
  color:black;}
  @media screen and (max-width: 968px) {	width:115px ;
	font-size: small;
};
`

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;
