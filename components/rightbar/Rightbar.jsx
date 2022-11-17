import React from "react";
import Calendar from "./Calendar";
import NextUp from "./NextUp";

const Rightbar = () => {
  return (
    <div className="w-3/12 space-y-5">
      <Calendar />
      <NextUp />
    </div>
  );
};

export default Rightbar;
