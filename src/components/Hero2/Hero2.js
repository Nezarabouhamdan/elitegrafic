import React from 'react';
import { Heroimg, Herosection, Left, Right,Head2, Head3, Imagediv, Textdiv  } from './Herostyles2';
import img from '../../assets/7xm.xyz804005.jpg';
import { Button,Button2 } from '../../Globalstyles'

import img1 from '../../assets/icons8-mesh-100.png'

//7xm.xyz974731.jpg
const Hero2 = () => {
    return (
      <Herosection>
        <Left>

            <Textdiv>
<Head2>We Design For Love and we create brand with personality and identity that special belong for you .</Head2>

<Head3>
Let's get this business started on the online
</Head3>
<Imagediv>
<Button>Get Started</Button>
<img width='25px' src={img1}></img> 
 Whats's Trending
</Imagediv>
            </Textdiv>
        </Left>
        <Right><Heroimg src={img}></Heroimg></Right>
      </Herosection>
    );
}

export default Hero2;
