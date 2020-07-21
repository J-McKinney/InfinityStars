import React from "react";
import InfinityStars from "./InfinityStars/InfinityStars";
import Zoom from "react-reveal/Zoom";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Zoom delay={2000} duration={4000}>
        <InfinityStars />
      </Zoom>
    </>
  );
}

export default App;
