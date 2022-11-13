import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis"
import axios from "axios";
const initialState = {
    postList: [],
    isLoading: false,
    error: null,
  } 
  
  export const __postConimal = createAsyncThunk(
  "conimal/postConimal",
  async (payload, thunkAPI) => {
  console.log("포스트페이로드",payload)
  try {
  const data = await axios.post("http://localhost:3001/posts",payload);
  // window.location.replace("/")
  // console.log("포스트데이터",data)
  return thunkAPI.fulfillWithValue(data.data);
  }catch (error) {
  // window.location.replace("/")
  return thunkAPI.rejectWithValue(error);
  }});
  
  export const __getConimal = createAsyncThunk(
  "conimal/getConimal",
  async (payload, thunkAPI) => {
  console.log("페이로드 들어오니?",payload)
  try {
    const data = await axios.get("http://localhost:3001/posts")
  // console.log("데이터2",data)
  return thunkAPI.fulfillWithValue(data.data)
  } catch (error) {
  return thunkAPI.rejectWithValue(error)
  }})

  // export const __postConimal = createAsyncThunk(
  // "conimal/postConimal",
  // async (payload, thunkAPI) => {
  //   console.log("페이로드",payload)
  // try {
  // const data = await Apis.postFileAX(payload)
  // // window.location.replace("/")
  // console.log("데이터",data)
  // return thunkAPI.fulfillWithValue(data.data);
  // }catch (error) {
  // // window.location.replace("/")
  // return thunkAPI.rejectWithValue(error);
  // }});
  
  // export const __getConimal = createAsyncThunk(
  // "conimal/getConimal",
  // async (payload, thunkAPI) => {
  // try {
  // const data = await Apis.getPostTimeAX()
  // return thunkAPI.fulfillWithValue(data.data)
  // } catch (error) {
  // return thunkAPI.rejectWithValue(error)
  // }})
  
  export const __getSearch = createAsyncThunk(
  "search/getSearch",
  async (payload, thunkAPI) => {
  try {
  const data = await Apis.getKeywordAX()
  // console.log("데이터",data)
  return thunkAPI.fulfillWithValue(data.data)
  } catch (error) {
  return thunkAPI.rejectWithValue(error)
  }})
  
  const PostSlice = createSlice({
    name: "postList",
    initialState,
    extraReducers: {
      [__postConimal.pending]: (state) => {
        state.isLoading = true;
      },
      [__postConimal.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.postList = action.payload
      },
      [__postConimal.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      [__getConimal.pending]: (state) => {
        state.isLoading = true;
      },
      [__getConimal.fulfilled]: (state, action) => {
        state.isLoading = false;
        // console.log("풀필드",action.payload)
        // state.isSuccess = false;
        state.postList = action.payload;
        // console.log("페이로드3",state.postList)
      },
      [__getConimal.rejected]: (state, action) => {
        state.isLoading = false;
        // state.isSuccess = false;
        state.error = action.payload;
      },
      [__getSearch.pending]: (state) => {
        state.isLoading = true;
      },
      [__getSearch.fulfilled]: (state, action) => {
        state.isLoading = false;
        // state.isSuccess = false;
        state.postList = action.payload;
      },
      [__getSearch.rejected]: (state, action) => {
        state.isLoading = false;
        // state.isSuccess = false;
        state.error = action.payload;
      }
}})

export const {postConimal,getConimal} = PostSlice.actions;
export default PostSlice.reducer;