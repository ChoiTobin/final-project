// import { createSlice } from "@reduxjs/toolkit";	
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import Apis from "../../shared/Apis"
// import axios from "axios";
// import { __putPost } from "./mypageSlice";	

// const initialState = {	
//   isLoading: false,	
//   error: null,	
//   post: [],	
// }

// // 게시글 검색
// export const __getKeyword = createAsyncThunk(	
//   "/api/search/getSearch",	
//   async (payload, thunkAPI) => {	
//     console.log("제발페이로드야",payload)
//     try {	
//       const response = await Apis.getKeywordAX(payload)	
//       console.log("제발리스폰스야",response)
//       return thunkAPI.fulfillWithValue(response.data);	
//     } catch (error) {	
//       return thunkAPI.rejectWithValue(error);	
//     }	
//   }	
// )	

// const SearchSlice = createSlice({	
//   name: "search",	
//   initialState,	
//   reducers: {},	
//   extraReducers: {	
//     // 게시글 검색
//     [__getKeyword.pending]: (state) => {	
//       state.isLoading = true;	
//     },	
//     [__getKeyword.fulfilled]: (state, action) => {	
//       console.log("검색",action.payload)
//       state.isLoading = false;	
//       state.isSuccess = false;	
//       state.post.response = action.payload.data;	
//     },	
//     [__getKeyword.rejected]: (state, action) => {	
//       state.isLoading = false;	
//       state.isSuccess = false;	
//       state.error = action.payload;	
//     },	
//   }	
// })	
// export default SearchSlice.reducer;