import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../shared/Cookie"

// const params = {
//   key: process.env.REACT_APP_MOVIE,
// };

// const headers = {
//   'Content-Type' : 'application/json',
//   'Access_Token' : getCookie('Access_Token')
// }

const initialState = {
    postList: [],
    isLoading: false,
    error: null,
  } 

  // 추가
  export const __postConimal = createAsyncThunk(
  "conimal/postConimal",
  async (payload, thunkAPI) => {
  // console.log("데이터",payload);
  // const Authorization =  (getCookie('Access_Token'))
  // const RefreshToken= (getCookie('refreshToken'))
  try {
  const data = await axios.post(`http://localhost:3001/posts`,payload,{
    // headers:{
    //   enctype:"multipart/form-data",
    //   Authorization:`Bearer ${Authorization}`,
    //   RefreshToken:RefreshToken,
    //   "cache-control":"no-cache",
    // }
  })
  // console.log("데이터2",data);
  return thunkAPI.fulfillWithValue(data.data);
  }catch (error) {
  return thunkAPI.rejectWithValue(error);
  }});
  
  // 생성
  export const __getConimal = createAsyncThunk(
  "conimal/getConimal",
  async (payload, thunkAPI) => {
  try {
  // const Authorization =  (getCookie('Access_Token'))
  // const RefreshToken= (getCookie('refreshToken'))
  const data = await axios.get("http://localhost:3001/posts",{
    // headers:{
    //   enctype:"multipart/form-data",
    //   Authorization:`Bearer ${Authorization}`,
    //   RefreshToken:RefreshToken,
    //   "cache-control":"no-cache",
    // }
  })
  // console.log("데이타",data.data)
  return thunkAPI.fulfillWithValue(data.data)
  } catch (error) {
  return thunkAPI.rejectWithValue(error)
  }})

  const PostSlice = createSlice({
    name: "conimalList",
    initialState,
    extraReducers: {
      // 생성
      [__postConimal.pending]: (state) => {
        state.isLoading = true;
      },
      [__postConimal.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.postList = action.payload
        // console.log("들어와줘",action.payload)
      },
      [__postConimal.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      //추가
      [__getConimal.pending]: (state) => {
        state.isLoading = true;
      },
      [__getConimal.fulfilled]: (state, action) => {
        state.isLoading = false;
        // state.isSuccess = false;
        state.postList = action.payload;
      },
      [__getConimal.rejected]: (state, action) => {
        state.isLoading = false;
        // state.isSuccess = false;
        state.error = action.payload;
      }
}})

export const {} = PostSlice.actions;
export default PostSlice.reducer;