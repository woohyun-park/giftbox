import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../routes/AuthPage";
import HomePageContainer from "../containers/HomePageContainer";
import LikePage from "../routes/LikePage";
import AddPage from "../routes/AddPage";
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
            <Route exact path="/like" element={<LikePage />} />
            <Route exact path="/add" element={<AddPage />} />
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
