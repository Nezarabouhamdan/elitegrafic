import styled from "styled-components";
export const Servicessection=styled.div`
height : 80vh ; 
background-position : center ;
 background-size:cover ; 
  display : flex ;
   object-fit :cover ;

   font-weight: bold;
   font-family: 'Red Thinker';
   background-color: white;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   align-items: center;
   flex: 1;
   @media screen and (max-width: 968px) {
    height : 60vh ; 
	}`;
    export const Servicesimg= styled.img`
    object-fit: fill;
    width:100%;
    height: 100%;
    position: absolute;
    opacity: 1;
    z-index:0;
    @media screen and (max-width: 968px) {
        object-fit: fill;
        width:100%;
    height: 60vh;
    }`;
    export const Textdiv=styled.div`
    width: 100%;
    z-index: 1;
    margin-top: 25px;
    display: flex;
    color: #f45c2c;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;
    font-size:30px;
    
    font-family: 'Red Thinker';

    `
    export const Servicesdiv=styled.div`
    display: flex;
    flex-direction: row;
    height: 50vh;
    justify-content: space-around;
   align-content: center;
   align-items: center;
   width: 100%;
   flex: 1;
    `
       export const Servicesbox=styled.div`
       display: flex;
       color: #fff;
       flex-direction: column;
       width: 28%;
       border-radius: 50px;
       z-index: 1;
       background-color: rgba(255, 255, 255, .5);
       height: 50vh;
       justify-content: space-evenly;
      align-content: center;
      align-items: center;
       `
       export const Servicesicon=styled.img`
       height: 100px;
       width: 100px;
       `
       export const Servicesname=styled.h1`
       font-size:25;
       font-family: 'Red Thinker';

       color: #f45c2c;
       ` 
        export const Servicesdetails=styled.h5`
       font-size:18;
       font-family: 'Red Thinker';

       text-align: center;
       color: #f4c3bc;
       `