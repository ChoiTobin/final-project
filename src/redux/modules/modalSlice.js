import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
  mode: "Success",
};

export const modalSlice = createSlice({
  name: "modal", // 이 slice의 이름을 만들어준다.
  initialState, // 초기 state값을 정의한다.
  reducers: {
    makeShow: (state) => {
      state.isShown = true;
    },
    disappear: (state) => {
      state.isShown = false;
    },
    changeType: (state, action) => {
      state.mode = action.payload;
    },
  }, // state를 바꾸는 함수
});

export const { makeShow, disappear, changeType } = modalSlice.actions;
export default modalSlice.reducer;