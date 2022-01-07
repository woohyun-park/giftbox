import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LikePage from "../routes/LikePage";
import { setWish } from "../modules/app";

const LikePageContainer = () => {
  const { user, wishlist } = useSelector((state) => ({
    user: state.app.user,
    wishlist: state.app.wishlist,
  }));

  const dispatch = useDispatch();
  const onSetWish = (wish) => dispatch(setWish(wish));

  return <LikePage user={user} wishlist={wishlist} onSetWish={onSetWish} />;
};

export default LikePageContainer;
