import React from "react";
import Scores from "./Scores";
import Map from "./Map";
import Analytics from "./Analytics";
const Main = () => {
  return (
    <div className="container w-6/12 max-h-screen flex flex-col space-y-5">
      <Scores />
      <Map />
      <Analytics />
    </div>
  );
};

export default Main;
