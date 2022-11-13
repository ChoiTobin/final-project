import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Chatroom from "../pages/Chatroom";
import Home from "../pages/Home";
import MyPage from "../pages/MyPage"
import Detail from "../pages/Detail";
import MainLogin from "../pages/MainLogin";
import OAuth2RedirectHandler from "../components/features/OAuth2RedirectHandler"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 페이지 이동하기 */}
        <Route path='/SignIn' element={<SignIn />} />

        {/* 회원가입 페이지 이동하기 */}
        <Route path='/signup' element={<SignUp />} />

        {/* 인스타 리스트 생성 페이지로 이동하기 */}
        <Route path='/Chatroom' element={<Chatroom />} />
        
        {/* 인스타 메인 리스트 이동하기 */}
        <Route path='/' element={<Home />} />

        {/* 수정페이지 이동하기 */}
        <Route path='/MyPage' element={<MyPage />} />

        <Route path='/Detail' element={<Detail />} />
        {/* 디테일페이지 */}
        <Route path='/MainLogin' element={<MainLogin />} />


      {/* Redirect uri로 이동하기 전에 인가 코드를 redirect 해주는 주소 */}
      <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler />} />


      </Routes>
    </BrowserRouter>
  );
};

export default Router;
