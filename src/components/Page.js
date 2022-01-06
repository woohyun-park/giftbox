import React from "react";

const Counter = ({ number, onGotoMain, onGotoFriend }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onGotoMain}>Main</button>
        <button onClick={onGotoFriend}>Friend</button>
      </div>
    </div>
  );
};

export default Counter;
