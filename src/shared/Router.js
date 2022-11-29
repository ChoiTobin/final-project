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
// import ChatList from "../pages/chatting/element/ChatList";
// import Rating from "../components/features/Rating";
import OAuth2RedirectHandler from "../components/features/Login/OAuth2RedirectHandler"
import MainLogin from "../pages/MainLogin";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/form" element={<Form />} />
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/postlist" element={<PostList/>}/>
        <Route path="/auth/member/kakao/callback" element={<OAuth2RedirectHandler />} />
        <Route path='/MainLogin' element={<MainLogin />} />
        {/* <Route path="/chat" element={<ChatList/>} /> */}
        {/* <Route path="/Rating" element={<Rating />} /> */}
        <Route path="/ChatRoomPage/:id" element={<ChatRoomPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;