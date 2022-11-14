import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */

import postList from "../modules/postSlice";
import account from "../modules/userSlice";

const store = configureStore({
    
  reducer: { postList: postList,account:account}
  
  //dev tool을 개발 환경에서만 설정
  // devTools: process.env.REACT_APP_MOD !== "production",
});

export default store;
