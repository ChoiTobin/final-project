import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Form from "../components/features/Form";
import Chatroom from "../pages/Chatroom"
import MyPage from "../pages/MyPage";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/form" element={<Form />} />
        <Route path="/chat" element={<Chatroom />} />
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;