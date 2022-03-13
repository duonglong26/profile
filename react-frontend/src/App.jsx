import React from "react";
import { Routes, Route } from "react-router-dom";
import Introduce from './app/views/Introduce/Introduce';
import UserProfile from './app/views/Profile/UserProfile';
import { ROOT_PATH } from "./Const";

function App() {

  return (
    <>
      <Routes>
        <Route path={ROOT_PATH + "/"} element={<Introduce />} />
        <Route path={ROOT_PATH + "/user"} element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
