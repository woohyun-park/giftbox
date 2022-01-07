import React from "react";
import { authService } from "../fbase";

const ProfilePage = () => {
  const onLogOutClick = () => authService.signOut();
  return (
    <div className="page">
      <button onClick={onLogOutClick}>Log Out</button>
    </div>
  );
};
export default ProfilePage;
