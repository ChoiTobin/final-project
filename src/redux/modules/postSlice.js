import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis"
import axios from "axios";
import { __putPost } from "./mypageSlice";	
const initialState = {	
  isLoading: false,	
  post:{},
  posts:[], //공배열로 바꿔야함
  error: null,	
} 

// 평점넘기기
export const __getPostRating = createAsyncThunk(	
  "api/posts/getPostRating",	
  async (payload, thunkAPI) => {

    try {	
      const response = await Apis.getPostRatingAX(payload)	

      window.location.replace('/home')
      return thunkAPI.fulfillWithValue(response.data);	
    } catch (error) {	
      return thunkAPI.rejectWithValue(error);	
    }	
  }	
)

// 게시글 전체 조회	
export const __getPostTime = createAsyncThunk(	
  "api/posts/getPost",	
  async (payload, thunkAPI) => {

    try {	
      
      const response = await Apis.getPostTimeAX(payload)	
      


      return thunkAPI.fulfillWithValue(response.data);	
    } catch (error) {
      return thunkAPI.rejectWithValue(error);	
    }	
  }	
)

// 게시글 상세 조회	
export const __getDetail = createAsyncThunk(	
  "api/post/getDetail",	
  async (payload, thunkAPI) => {	

    try {	
      const response = await Apis.getDetailAX(payload)

      return thunkAPI.fulfillWithValue(response.data);	
    } catch (error) {	
      return thunkAPI.rejectWithValue(error);	
    }	
  }	
)	

// 게시글 작성	
export const __addPost = createAsyncThunk(	
  "api/posts/addPost",	
  async (payload, thunkAPI) => {	

    try {	
      const response = await Apis.postFileAX(payload)	

      alert("작성완료하였습니다.")
      window.location.replace('/home')
      return thunkAPI.fulfillWithValue(response.data);	
    } catch (error) {	
      return thunkAPI.rejectWithValue(error);	
    }	
  }	
)

// 게시글 진행 상테 수정	
export const __editState = createAsyncThunk(	
  "api/posts/editState",	
  async (payload, thunkAPI) => {	
    try {	
      const response = await Apis.getStateAX(payload)	
      return thunkAPI.fulfillWithValue(response.data);	
    } catch (error) {	
      return thunkAPI.rejectWithValue(error);	
    }	
  }	
)

// 게시글 검색
export const __getKeyword = createAsyncThunk(	
  "/api/search/getSearch",	
  async (payload, thunkAPI) => {	

    try {	
      const response = await Apis.getKeywordAX(payload)	

      return thunkAPI.fulfillWithValue(response.data);	
    } catch (error) {	
      return thunkAPI.rejectWithValue(error);	
    }	
  }	
)	

// 카테고리 검색
export const __getCategory = createAsyncThunk(	
  "/api/search/getCategory",	
  async (payload, thunkAPI) => {	

    try {	
      const response = await Apis.getFilterAX(payload)	

      return thunkAPI.fulfillWithValue(response.data);	
    } catch (error) {	
      return thunkAPI.rejectWithValue(error);	
    }	
  }	
)	

const postSlice = createSlice({	
  name: "post",	
  initialState,	
  reducers: {},	
  extraReducers: {	
    // 평점넘기기
    [__getPostRating.pending]: (state) => {	
      state.isLoading = true;	
    },	
    [__getPostRating.fulfilled]: (state, action) => {	

      state.isLoading = false;	
      state.isSuccess = false;	
      state.post.response = action.payload.data;
    },	
    [__getPostRating.rejected]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.error = action.payload;	
    },	
    // 게시글 전체 조회	
    [__getPostTime.pending]: (state) => {	
      state.isLoading = true;	
    },	
    [__getPostTime.fulfilled]: (state, action) => {	

      state.isLoading = false;	
      state.isSuccess = false;	

      // state.posts.push(...action.payload.data);	
      state.post.response = action.payload.data;
    },	
    [__getPostTime.rejected]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.error = action.payload;	
    },	
    // 게시글 상세 조회	
    [__getDetail.pending]: (state) => {	
      state.isLoading = true;	
    },	
    [__getDetail.fulfilled]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.post = action.payload.data;	
    },	
    [__getDetail.rejected]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.error = action.payload;	
    },	
    // 게시글 작성	
    [__addPost.pending]: (state) => {	
      state.isLoading = false;	
    },	
    [__addPost.fulfilled]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.posts = action.payload
    },	
    [__addPost.rejected]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.error = action.payload;	
    },	
    // 게시글 진행 상태 수정	
    [__editState.pending]: (state) => {	
      state.isLoading = true;	
    },	
    [__editState.fulfilled]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.post.response.push(...action.payload.data)	
    },	
    [__editState.rejected]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.error = action.payload;	
    },
    // 검색
    [__getKeyword.pending]: (state) => {	
      state.isLoading = true;	
    },	
    [__getKeyword.fulfilled]: (state, action) => {	

      state.isLoading = false;	
      state.isSuccess = false;	
      state.post = action.payload.data;	
      // state.posts.push(...action.payload.data);
    },	
    [__getKeyword.rejected]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.error = action.payload;	
    },
    // 카테고리 검색
    [__getCategory.pending]: (state) => {	
      state.isLoading = true;	
    },	
    [__getCategory.fulfilled]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	

      state.post = action.payload.data;	
      // state.posts.push(...action.payload.data);
    },
    [__getCategory.rejected]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.error = action.payload;	
    }
  }	
})	
export default postSlice.reducer;
