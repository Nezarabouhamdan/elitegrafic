import React from "react";
import Counter from "../components/Coonter/Counter";

import Hero from "../components/Hero/Hero";
import Hero2 from "../components/Hero2/Hero2";
import Ser from "../components/Ser2/Ser";
import Work from "../components/Work/Work";
function Home() {
  return (
    <>
      <Hero />
      <Counter />

      <Ser />
      <Work />
    </>
  );
}

export default Home;
