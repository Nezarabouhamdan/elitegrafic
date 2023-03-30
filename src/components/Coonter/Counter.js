import React from "react";
import { Desc, Item, Number, Row } from "./Counterstyles";

function Counter() {
  return (
    <div>
      <Row>
        <Item>
          <Number>450+</Number>
          <Desc>Completed Projects</Desc>
        </Item>
        <Item>
          <Number>20K</Number>
          <Desc>Customers</Desc>
        </Item>
        <Item>
          <Number>100+</Number>
          <Desc>Employees</Desc>
        </Item>{" "}
        <Item>
          <Number>100+</Number>
          <Desc>Employees</Desc>
        </Item>
      </Row>
    </div>
  );
}

export default Counter;
