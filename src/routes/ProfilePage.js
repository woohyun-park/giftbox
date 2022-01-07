import React from "react";
import { authService } from "../fbase";

const ProfilePage = () => {
  const onLogOutClick = () => authService.signOut();
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default ProfilePage;
