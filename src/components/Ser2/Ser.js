import React from "react";
import {
  Serdesc,
  Serdetails,
  Serimg,
  Serimgm,
  Sername,
  Sersdiv,
  Sersection,
  Sersicon,
  Sertop,
} from "./Serstyles";
import app from "../../assets/7xm.xyz843439.jpg";
import web from "../../assets/7xm.xyz735766.jpg";
import graphic from "../../assets/7xm.xyz352079.jpg";
import img1 from "../../assets/icons8-responsive-100 (1).png";
import img2 from "../../assets/icons8-designthinking-64 (1).png";
import img3 from "../../assets/icons8-developer-mode-80.png";
import img5 from "../../assets/icons8-services-64 (1).png";

import { Decoration, Dtext, Line } from "../Work/workstyles";

const Ser = () => {
  return (
    <Sersection>
      Our Services
      <Decoration>
        <Line> </Line>

        <img width={"40px"} src={img5} />
        <Line> </Line>
      </Decoration>
      <Dtext>
        we have dozens of terms for this basic idea, including customer support,
        customer care, client relations, and support service.<br></br>
        Most of these are fairly interchangeable.
      </Dtext>
      {/* <Serimgm src={img4}/> */}
      <Sersdiv>
        <Sertop>
          <Serdetails>
            <Sersicon src={img3}></Sersicon>
            <Sername>App Development</Sername>
            <Serdesc>
              Mobile application development includes numerous services in
              different domains and topics. The services include developing
              mobile applications, especially for end-user smartphones, tablets,
              and other similar devices.
            </Serdesc>
          </Serdetails>
          <Serimg src={graphic} />
          <Serdetails>
            <Sersicon src={img1}></Sersicon>
            <Sername>Web Development</Sername>
            <Serdesc>
              Web application development means a whole range of distinct
              services that include enterprise and customer research,
              architecture planning, design , frontend and backend coding,
              optimization, maintenance, DevOps, and a lot more.
            </Serdesc>
          </Serdetails>
        </Sertop>
        <Sertop>
          <Serimg src={app} />
          <Serdetails>
            <Sersicon src={img2}></Sersicon>
            <Sername>Graphic Design</Sername>
            <Serdesc>
              Graphic design is an interdisciplinary branch of design and of the
              fine arts. Its practice involves creativity, innovation and
              lateral thinking using manual or digital tools, where it is usual
              to use text and graphics to communicate visually.
            </Serdesc>
          </Serdetails>
          <Serimg src={web} />
        </Sertop>
      </Sersdiv>
    </Sersection>
  );
};

export default Ser;
