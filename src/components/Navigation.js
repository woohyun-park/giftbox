import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
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
      <img className="nav__btn" src="img/Home.png" />
    </Link>
    <Link to="/like">
      <img className="nav__btn" src="img/Like.png" />
    </Link>
    <Link to="/add">
      <img className="nav__btn" src="img/Add.png" />
    </Link>
    <Link to="/alarm">
      <img className="nav__btn" src="img/Alarm.png" />
    </Link>
    <Link to="/profile">
      <img className="nav__btn" src="img/Profile.png" />
    </Link>
  </div>
);
export default Navigation;
