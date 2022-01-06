import React from "react";
import {
  BsFillHouseDoorFill,
  BsFillHeartFill,
  BsFillPlusSquareFill,
  BsFillBellFill,
  BsFillPersonFill,
} from "react-icons/bs";

const Nav = ({
  num,
  onGotoMain,
  onGotoLike,
  onGotoAdd,
  onGotoAlarm,
  onGotoProfile,
}) => {
  const toggleBtn = (id) => {
    return id === num ? "nav__btn nav__btn--selected" : "nav__btn";
  };
  return (
    <div className="nav">
      <div className={toggleBtn(0)}>
        <BsFillHouseDoorFill onClick={onGotoMain}></BsFillHouseDoorFill>
      </div>
      <div className={toggleBtn(1)}>
        <BsFillHeartFill onClick={onGotoLike}></BsFillHeartFill>
      </div>
      <div className={toggleBtn(2)}>
        <BsFillPlusSquareFill onClick={onGotoAdd}></BsFillPlusSquareFill>
      </div>
      <div className={toggleBtn(3)}>
        <BsFillBellFill onClick={onGotoAlarm}></BsFillBellFill>
      </div>
      <div className={toggleBtn(4)}>
        <BsFillPersonFill onClick={onGotoProfile}></BsFillPersonFill>
      </div>
    </div>
  );
};

export default Nav;
