import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../components/Nav";
import {
  gotoMain,
  gotoLike,
  gotoAdd,
  gotoAlarm,
  gotoProfile,
} from "../modules/nav";

const NavContainer = () => {
  const { num } = useSelector((state) => ({
    num: state.nav.num,
  }));

  const dispatch = useDispatch();
  const onGotoMain = () => dispatch(gotoMain());
  const onGotoLike = () => dispatch(gotoLike());
  const onGotoAdd = () => dispatch(gotoAdd());
  const onGotoAlarm = () => dispatch(gotoAlarm());
  const onGotoProfile = () => dispatch(gotoProfile());

  return (
    <Nav
      num={num}
      onGotoMain={onGotoMain}
      onGotoLike={onGotoLike}
      onGotoAdd={onGotoAdd}
      onGotoAlarm={onGotoAlarm}
      onGotoProfile={onGotoProfile}
    />
  );
};

export default NavContainer;
