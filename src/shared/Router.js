import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Home from "../../pages/Home";
import MainPage from "../pages/MainPage";
import Edit from "../pages/Edit";




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 페이지 이동하기 */}
        <Route path='/' element={<SignIn />} />

        {/* 회원가입 페이지 이동하기 */}
        <Route path='signup' element={<SignUp />} />

        {/* 인스타 리스트 생성 페이지로 이동하기 */}
        <Route path='/home' element={<Home />} />
        
        {/* 인스타 메인 리스트 이동하기 */}
        <Route path='/mainpage' element={<MainPage />} />

        {/* 수정페이지 이동하기 */}
        <Route path='/Edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
