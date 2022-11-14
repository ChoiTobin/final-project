import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Form from "../components/features/Form";
import Content from "../components/features/Content";
import Chatroom from "../pages/Chatroom"
import MyPage from "../pages/MyPage";
import Detail from "../pages/Detail";
import PostList from "../components/features/PostList";

// 추가
import OAuth2RedirectHandler from "../components/features/OAuth2RedirectHandler"
import MainLogin from "../pages/MainLogin";

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
        <Route path="/postlist" element={<PostList/>}/>
      
      
      {/* 추가 */}
      <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler />} />
      <Route path='/MainLogin' element={<MainLogin />} />

      
      </Routes>
    </BrowserRouter>
  );
};

export default Router;