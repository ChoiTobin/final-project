import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis"
import axios from "axios";
import { __putPost } from "./mypageSlice";	


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
      console.log("list:",response.data)

      const payloadData = {page:payload.pageNumber , responseData:response.data.data}
            return thunkAPI.fulfillWithValue(payloadData);	
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
    console.log("작성:",payload)
    try {	
      const response = await Apis.postFileAX(payload)	
      console.log("res:",response.data)
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
      const payloadData = {page:payload.pageNumber , responseData:response.data.data}
      return thunkAPI.fulfillWithValue(payloadData);	
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
            const payloadData = {page:payload.pageNumber , responseData:response.data.data}
            console.log("뭐가들어오나????",response.data.data);
            return thunkAPI.fulfillWithValue(payloadData);	
    } catch (error) {	
      return thunkAPI.rejectWithValue(error);	
    }	
  }	
)	

const postSlice = createSlice({	
  name: "post",	
  initialState : {	
    isLoading: false,	
    post:{},
    posts:[], //공배열로 바꿔야함
    error: null,	
  } ,	
  
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
      if (action.payload.page === 0) {
        state.posts.splice(0)
        state.posts.push(...action.payload.responseData)
      } else {
        state.posts.push(...action.payload.responseData)// 기존에 있던 리스트에서 뒤에 붙여줘야하기 때문에 push를 써줘야함
      }
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
      
      if (action.payload.page === 0) {
        state.posts.splice(0)
        state.posts.push(...action.payload.responseData)
      } else {
        state.posts.push(...action.payload.responseData)// 기존에 있던 리스트에서 뒤에 붙여줘야하기 때문에 push를 써줘야함
      }
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
      if (action.payload.page === 0) {
        state.posts.splice(0)
        state.posts.push(...action.payload.responseData)
      } else {
        state.posts.push(...action.payload.responseData)// 기존에 있던 리스트에서 뒤에 붙여줘야하기 때문에 push를 써줘야함
      }
          },
    [__getCategory.rejected]: (state, action) => {	
      state.isLoading = false;	
      state.isSuccess = false;	
      state.error = action.payload;	
    }
  }	
})	
export default postSlice.reducer;
