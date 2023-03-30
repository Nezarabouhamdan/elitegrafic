import React from "react";
import { Desc, Item, Number, Row } from "./Counterstyles";
import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
function Counter() {
  let history = useHistory();

  const initial = { opacity: 0, y: 50 };
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
    <div>
      <Row>
        <Item>
          <Number>450</Number>
          <Desc> Projects</Desc>
        </Item>
        <Item>
          <Number>2K</Number>
          <Desc>Customers</Desc>
        </Item>
        <Item>
          <Number>60+</Number>
          <Desc>Employees</Desc>
        </Item>
        {""}
        <Item>
          <Number>70+</Number>
          <Desc>Country</Desc>
        </Item>
      </Row>
    </div>
  );
}

export default Counter;
