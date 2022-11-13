import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */

import mainlist from "../modules/AddPageSlice";
import comments from "../modules/CommentsSlice";
import account from "../modules/LoginSlice";

const store = configureStore({

  reducer: { mainlist: mainlist, comments: comments, account : account },

  //dev tool을 개발 환경에서만 설정
  // devTools: process.env.REACT_APP_MOD !== "production",
});

export default store;
