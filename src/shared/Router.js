import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Form from "../components/features/Form";
import Content from "../components/features/Content";
import Chatroom from "../pages/Chatroom"
import MyPage from "../pages/MyPage";
import Detail from "../pages/Detail";
import PostList from "../components/features/PostList";
import ProfileEdit from "../pages/ProfileEdit";

// 추가
import OAuth2RedirectHandler from "../components/features/OAuth2RedirectHandler"
import MainLogin from "../pages/MainLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/form" element={<Form />} />
        <Route path="/chat" element={<Chatroom />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/pet" element={<ProfileEdit />} />
        <Route path="/detail/:postId" element={<Detail/>}/>
        <Route path="/postlist" element={<PostList/>}/>
      
      
      {/* 추가 */}
      <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler />} />
      <Route path='/MainLogin' element={<MainLogin />} />

      
      </Routes>
    </BrowserRouter>
  );
};

export default Router;