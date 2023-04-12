import React from "react";
import Counter from "../components/Coonter/Counter";
import Hero from "../components/Hero/Hero";

import Aboutus from "../components/About/About";

import Services from "../components/Services/Services";
function Home() {
  return (
    <>
      <Hero />
      <Counter />
      <Aboutus />
      <Services />
    </>
  );
}

export default Home;
