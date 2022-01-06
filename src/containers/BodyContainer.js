import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Body from "../components/Body";

const BodyContainer = () => {
  const { num } = useSelector((state) => ({
    num: state.nav.num,
  }));

  return <Body num={num} />;
};

export default BodyContainer;
