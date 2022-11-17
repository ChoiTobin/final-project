import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn"
import Form from "../components/features/Form";
import MyPage from "../pages/MyPage";
import Detail from "../pages/Detail";
import PostList from "../components/features/PostList";
import ChatRoomPage from "../pages/chatting/ChatRoomPage";


// 추가
import OAuth2RedirectHandler from "../components/features/OAuth2RedirectHandler"
import MainLogin from "../pages/MainLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/form" element={<Form />} />
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/postlist" element={<PostList/>}/>
      {/* 추가 */}
      <Route path="/auth/member/kakao/callback" element={<OAuth2RedirectHandler />} />
      <Route path='/MainLogin' element={<MainLogin />} />
      <Route path="/ChatRoomPage" element={<ChatRoomPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;