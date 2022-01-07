import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../routes/AuthPage";
import HomePage from "../routes/HomePage";
import LikePage from "../routes/LikePage";
import AddPage from "../routes/AddPage";
import AlarmPage from "../routes/AlarmPage";
import ProfilePage from "../routes/ProfilePage";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<HomePage userObj={userObj} />} />
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
    </BrowserRouter>
  );
};

export default AppRouter;
