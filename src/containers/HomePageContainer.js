import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "../routes/HomePage";
import { setWish } from "../modules/app";

const HomePageContainer = () => {
  const { user, wishlist } = useSelector((state) => ({
    user: state.app.user,
    wishlist: state.app.wishlist,
  }));

  const dispatch = useDispatch();
  const onSetWish = (wish) => dispatch(setWish(wish));

  return <HomePage user={user} wishlist={wishlist} onSetWish={onSetWish} />;
};

export default HomePageContainer;
