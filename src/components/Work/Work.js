import React from 'react';
import { Childsection, Decoration, Dtext, Line, Worksection,Simg,Bimg,Mimg, Column, Row, Mobile} from './workstyles';
import work from '../../assets/icons8-home-office-96 (2).png';
//nike
import nikeo from '../../assets/20221119_204332.jpg';
import nikeb from '../../assets/20221119_204312.jpg';
//god
import god1 from '../../assets/Screenshot_20220915_192704.jpg';
import god2 from '../../assets/20221119_203451.jpg';
//just
import j1 from '../../assets/3.jpg';
import j2 from '../../assets/R.jpg';
//oud
import oudl from '../../assets/12222.jpg';
import oud from '../../assets/IMG-20211119-WA0071.jpg';

//jellwery
import jf from '../../assets/screencapture-localhost-3000-2022-10-01-20_17_20.png';

//vitnage
import v1 from '../../assets/deerr.jpg';
import v2 from '../../assets/3223.jpg';
//fdl
import fdl from '../../assets/Screenshot from 2022-11-24 09-14-53.png';


//bendtita
//sarah
import blogo from '../../assets/hy.jpg';
import bposter from '../../assets/vfd.jpg';
import bc from '../../assets/m6.jpg';
import bmenu from '../../assets/moooooooooooo.jpg';
import bmenu2 from '../../assets/moooooo.jpg';
//nezar
import bwf from '../../assets/screencapture-localhost-3000-2022-09-26-13_24_51.png';
import bmainm from '../../assets/20221119_204127.jpg';
import bmenum from '../../assets/20220926_041818.jpg';
import bmainw from '../../assets/20220926_040516.png';
import bmenuw from '../../assets/20220926_040421.png';
//parts
import dj from '../../assets/Screenshot from 2022-09-25 23-29-25.png';
import jw from '../../assets/Screenshot from 2022-10-01 20-19-58.png';
import jw2 from '../../assets/20221119_204506.jpg';

const Work = () => {
    return (
      <Worksection>
         Our New Works
   
   <Decoration> 
   <Line>   </Line>

   <img width={'40px'} src={work}/>
   <Line>   </Line>

</Decoration>

<Dtext>IT SOFTWARE DEVELOPMENET NEWEST WORKS</Dtext>

<Childsection>
<Mobile><Simg src={nikeb}></Simg>
<Simg  src={nikeo}></Simg></Mobile>

<Mobile>

<Column>
<Mimg src={fdl}></Mimg>
<Mimg src={jw}></Mimg>
</Column>
<Column>
<Mimg src={dj}></Mimg>
<Mimg src={jw2}></Mimg>


</Column></Mobile>
<Mobile><Simg  src={god1}></Simg>
<Simg  src={god2}></Simg></Mobile>


</Childsection>
 <Decoration> 
   <Line>   </Line>

   <img width={'40px'} src={work}/>
   <Line>   </Line>

</Decoration>

<Dtext>GRAPHIC DESIGN NEWEST WOKRS</Dtext>

<Childsection>
<Mobile>
<Column>
<Mimg src={bc}></Mimg>
<Mimg src={v1}></Mimg>
</Column>
<Column>
<Mimg src={blogo}></Mimg>
<Mimg src={v2}></Mimg>
</Column>
</Mobile>

<Mobile><Simg  src={bposter}></Simg>
<Simg  src={bmenu}></Simg></Mobile>

<Mobile>
<Column>
<Mimg src={oudl}></Mimg>
<Mimg src={j2}></Mimg>
</Column>

<Column>
<Mimg src={oud}></Mimg>
<Mimg src={j1}></Mimg>
</Column></Mobile>
     </Childsection>
    

      </Worksection>
    );
}

export default Work;
