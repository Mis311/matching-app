import React from "react";

const Leftbar = () => {
  return (
    <div>
      <div className="container w-72 max-h-screen min-h-screen flex flex-col p-7 rounded-lg flex-wrap space-y-5 ">
        <span className="logo">Gaktoo</span>
        <div className="bg-gray-900 flex justify-center  session-button  h-16 ">
          <h1 className="text-base text-bold">Start Session</h1>
        </div>
        <div className="bg-gray-900 justify-center flex  h-28">Conference Room</div>
        <div className="bg-gray-900 justify-center flex h-64">Messages</div>
      </div>
    </div>
  );
};

export default Leftbar;
