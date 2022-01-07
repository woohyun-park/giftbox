import React from "react";
import { useSelector, useDispatch } from "react-redux";
import App from "../App";
import { setUser } from "../modules/app";

const AppContainer = () => {
  const { user } = useSelector((state) => ({
    user: state.app.user,
  }));

  const dispatch = useDispatch();
  const onSetUser = (user) => dispatch(setUser(user));

  return <App user={user} onSetUser={onSetUser} />;
};

export default AppContainer;
