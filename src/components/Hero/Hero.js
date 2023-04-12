import React from "react";
import {
  Colored,
  Head,
  Head2,
  Head3,
  Heroimg,
  Herosection,
  Image,
  Imagediv,
  Textdiv,
  Underline,
} from "./Herostyles";
import img from "../../assets/unsplash_LxVxPA1LOVM.png";
// import img3 from '../../assets/1228798950a83faa66430c0833f9a7cb-removebg-preview.png'
import img1 from "../../assets/icons8-mesh-100.png";
// import img2 from '../../assets/7xm.xyz716177-removebg-preview.png'
import { Button, Button2, Row } from "../../Globalstyles";
import { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
export default function Hero() {
  const initial = { opacity: 0, y: 10 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      console.log("sss");
      animation.start({
        opacity: 1,
        y: 1,
      });
    }
  }, [inView, animation]);
  return (
    <Herosection id="home">
      <Heroimg src={img} />
      <Textdiv>
        <div ref={ref}>
          {" "}
          <Head2
            initial={initial}
            transition={{ delay: 0.3, duration: 0.5 }}
            animate={animation}
          >
            Let's get business <br></br>
            <Row
              initial={initial}
              transition={{ delay: 0.6, duration: 0.5 }}
              animate={animation}
            >
              started <Colored>online</Colored>
            </Row>
          </Head2>
        </div>
        <Head3
          initial={initial}
          transition={{ delay: 0.9, duration: 0.5 }}
          animate={animation}
        >
          {" "}
          We Design For Love and we create brand with <br></br> personality and
          identity that special belong for you <br></br>.{" "}
        </Head3>
        <br></br>
        <Imagediv
          initial={initial}
          transition={{ delay: 1.2, duration: 0.5 }}
          animate={animation}
        >
          <Button back="alt">Get Started</Button>
          <Button back="">
            <img width="18px" height="18px" src={img1}></img>
            Whats's Trending
          </Button>
        </Imagediv>
      </Textdiv>
    </Herosection>
  );
}
