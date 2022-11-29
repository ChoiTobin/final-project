import { configureStore } from "@reduxjs/toolkit";

// import list from "../modules/listSlice";
// import search from "../modules/searchSlice";
import mypage from "../modules/mypageSlice";
import post from "../modules/postSlice";
import account from "../modules/userSlice";
import chatting from "../modules/chattingSlice";


const store = configureStore({
    
  reducer: {
    // list,
    // search,
    mypage,
    post,
    account,
    chatting,
  },
  
  //dev tool을 개발 환경에서만 설정
  // devTools: process.env.REACT_APP_MOD !== "production",
});

export default store;