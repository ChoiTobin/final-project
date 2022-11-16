import { configureStore } from "@reduxjs/toolkit";
import chat from "../modules/chatSlice";
import list from "../modules/listSlice";
import mypage from "../modules/mypageSlice";
import post from "../modules/postSlice";
import search from "../modules/searchSlice";
import account from "../modules/userSlice";

const store = configureStore({
    
  reducer: {
    chat,
    list,
    mypage,
    post,
    search,
    account,
  },
  
  //dev tool을 개발 환경에서만 설정
  // devTools: process.env.REACT_APP_MOD !== "production",
});

export default store;
