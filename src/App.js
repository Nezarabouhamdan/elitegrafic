import React from "react";
import { Globalstyle } from "./Globalstyles";
import { BrowserRouter, Switch, Rotue, Route } from "react-router-dom";
import Home from "./Page/Home";
import Navbar from "./components/Navbar/Navbar";

import "./fonts/BebasNeue-Regular.ttf";
import "./fonts/style.css";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <Navbar />
      <switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/NAV" component={Navbar}></Route>
      </switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
