import { configureStore } from "@reduxjs/toolkit";

import mypage from "../modules/mypageSlice";
import post from "../modules/postSlice";
import account from "../modules/userSlice";
import chatting from "../modules/chattingSlice";

const store = configureStore({
    
  reducer: {
    mypage,
    post,
    account,
    chatting,
  },
  
  //dev tool을 개발 환경에서만 설정
  // devTools: process.env.REACT_APP_MOD !== "production",
});

export default store;