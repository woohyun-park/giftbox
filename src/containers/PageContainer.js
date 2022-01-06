import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Page from "../components/Page";
import { gotoMain, gotoFriend } from "../modules/page";

const PageContainer = () => {
  const { number } = useSelector((state) => ({
    number: state.page.number,
  }));

  const dispatch = useDispatch();
  const onGotoMain = () => dispatch(gotoMain());
  const onGotoFriend = () => dispatch(gotoFriend());

  return (
    <Page number={number} onGotoMain={onGotoMain} onGotoFriend={onGotoFriend} />
  );
};

export default PageContainer;
