import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp";
import Form from "../components/features/Posts/Form";
import MyPage from "../pages/MyPage";
import Detail from "../pages/Detail";
import PostList from "../components/features/Posts/PostList";
import ChatRoomPage from "../pages/ChatRoomPage";
import ChatList from "../pages/ChatList";
import Rating from "../components/features/Posts/Rating";
import Desc from "../pages/Desc.jsx"

// 추가
import OAuth2RedirectHandler from "../components/features/Login/OAuth2RedirectHandler"
import MainLogin from "../pages/MainLogin";
import OAuthNaverLogin from "../components/features/Login/OAuthNaverLogin"
// 추가


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/" element={<Desc/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/form" element={<Form />} />
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/postlist" element={<PostList/>}/>
        {/* <Route path="/chat" element={<ChatList/>} /> */}
      {/* 추가 */}  
      <Route path="/auth/member/kakao/callback" element={<OAuth2RedirectHandler />} />
      <Route path='/MainLogin' element={<MainLogin />} />
      <Route path="/chat" element={<ChatList/>} />
      <Route path="/ChatRoomPage/:id" element={<ChatRoomPage />} />
      <Route path="/Rating" element={<Rating />} />
       {/* 네이버 */}
      <Route path="/auth/member/naver/callback" element={<OAuthNaverLogin />} />



      </Routes>
    </BrowserRouter>
  );
};

export default Router;