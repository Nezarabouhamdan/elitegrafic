import React from 'react';
import { Heroimg, Herosection } from '../Hero/Herostyles';

import img from '../../assets/Untitled (15).png';
import img1 from '../../assets/icons8-responsive-100.png';
import img2 from '../../assets/icons8-designthinking-64.png';
import img3 from '../../assets/icons8-developer-mode-80 (1).png';
import { ServerStyleSheet } from 'styled-components';
import { Servicesbox, Servicesdetails, Servicesdiv, Servicesicon, Servicesimg, Servicesname, Servicessection, Textdiv } from './Servicesstyles';
import { Decoration, Line } from '../Work/workstyles';
const Services = () => {
    return (
      <div>
      <Servicessection>
        <Servicesimg src={img}></Servicesimg>
        Our New Works
   
   <Decoration> 
   <Line>   </Line>

   <img width={'40px'} src={'work'}/>
   <Line>   </Line>

</Decoration>
        <Servicesdiv>
        <Servicesbox><Servicesicon src={img1}></Servicesicon>
        <Servicesname>Web Development</Servicesname>
        <Servicesdetails>The term, web application development means a whole range of distinct services that include enterprise
and customer research, architecture planning, design , frontend and backend coding, optimization,
maintenance, DevOps, and a lot more. </Servicesdetails>
        </Servicesbox>
        
        <Servicesbox><Servicesicon src={img2}></Servicesicon>
        <Servicesname>Graphic Design</Servicesname>
        <Servicesdetails>The term, web application development means a whole range of distinct services that include enterprise
and customer research, architecture planning, design , frontend and backend coding, optimization,
maintenance, DevOps, and a lot more. </Servicesdetails></Servicesbox>
        <Servicesbox><Servicesicon src={img3}></Servicesicon>
        <Servicesname>App Development</Servicesname>
        <Servicesdetails>The term, web application development means a whole range of distinct services that include enterprise
and customer research, architecture planning, design , frontend and backend coding, optimization,
maintenance, DevOps, and a lot more. </Servicesdetails></Servicesbox>
        </Servicesdiv>
      </Servicessection>
      </div>
    );
}

export default Services;
