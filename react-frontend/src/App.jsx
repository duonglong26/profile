import React from "react";
import { Routes, Route } from "react-router-dom";
import Introduce from './app/views/Introduce/Introduce';
import UserProfile from './app/views/Profile/UserProfile';
import { ROOT_PATH } from "./Constraint";
import Login from './app/views/Login/LoginForm';

function App() {

  return (
    <>
      <Routes>
        <Route path={ROOT_PATH + "/"} element={<Introduce />} />
        <Route path={ROOT_PATH + "/user"} element={<UserProfile />} />
        <Route path={ROOT_PATH + "/login"} element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
