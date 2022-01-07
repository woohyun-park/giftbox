import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../routes/AuthPage";
import HomePageContainer from "../containers/HomePageContainer";
import LikePageContainer from "../containers/LikePageContainer";
import AddPageContainer from "../containers/AddPageContainer";
import AlarmPage from "../routes/AlarmPage";
import ProfilePage from "../routes/ProfilePage";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, user }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<HomePageContainer />} />
            <Route exact path="/like" element={<LikePageContainer />} />
            <Route exact path="/add" element={<AddPageContainer />} />
            <Route exact path="/alarm" element={<AlarmPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      {isLoggedIn && <Navigation />}
    </BrowserRouter>
  );
};

export default AppRouter;
