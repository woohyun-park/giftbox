import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillHouseDoorFill,
  BsFillHeartFill,
  BsFillPlusSquareFill,
  BsFillBellFill,
  BsFillPersonFill,
} from "react-icons/bs";

const Navigation = () => (
  <div className="nav">
    <Link to="/">
      <BsFillHouseDoorFill className="nav__btn" />
    </Link>
    <Link to="/like">
      <BsFillHeartFill className="nav__btn" />
    </Link>
    <Link to="/add">
      <BsFillPlusSquareFill className="nav__btn" />
    </Link>
    <Link to="/alarm">
      <BsFillBellFill className="nav__btn" />
    </Link>
    <Link to="/profile">
      <BsFillPersonFill className="nav__btn" />
    </Link>
  </div>
);
export default Navigation;
