import React from 'react'
import { Head, Head2, Head3, Heroimg, Herosection, Image, Imagediv,  Textdiv, Underline } from './Herostyles'
import img from '../../assets/7xm.xyz378227.jpg'
// import img3 from '../../assets/1228798950a83faa66430c0833f9a7cb-removebg-preview.png'
import img1 from '../../assets/icons8-mesh-100.png'
// import img2 from '../../assets/7xm.xyz716177-removebg-preview.png'
import { Button,Button2 } from '../../Globalstyles'

export default function Hero() {
  return (
   <Herosection>
    <Heroimg src={img}/>
    <Textdiv>

<Head2>We Design For Love and we create brand with personality and identity that special belong for you .</Head2>

<Head3>
Let's get this business started on the online
</Head3>
<br></br>
<Imagediv>
<Button>Get Started</Button>
<img width='25px' src={img1}></img> 
 Whats's Trending
</Imagediv>
    </Textdiv>
    <Imagediv>

    </Imagediv>
   </Herosection>
  )
}
