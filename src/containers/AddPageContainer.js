import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddPage from "../routes/AddPage";
import { setWish } from "../modules/app";

const AddPageContainer = () => {
  const { user } = useSelector((state) => ({
    user: state.app.user,
  }));

  const dispatch = useDispatch();
  const onSetWish = (wish) => dispatch(setWish(wish));

  return <AddPage user={user} onSetWish={onSetWish} />;
};

export default AddPageContainer;
