import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis"


const initialState = {
  isLoading: false,
  error: null,
  mypage: {},
  post: {},
}

// 게시글 수정
export const __putPost = createAsyncThunk(
  "api/posts/putPost",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.putPostAX(payload)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 게시글 삭제
export const __deletePost = createAsyncThunk(
  "api/posts/deletePost",
  async (id, thunkAPI) => {
    try {
      const response = await Apis.deletePostAX(id)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)


// 마이페이지 조회
export const __getMyPage = createAsyncThunk(
  "api/mypage/getMyPage",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.getMyPageAX(payload)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 마이페이지 내 게시글 조회
export const __getMyPost = createAsyncThunk(
  "api/mypage/getmypost",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.getMyPostAX(payload)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 프로필 이미지 업로드
export const __postMyImg = createAsyncThunk(
  "api/mypage/__postMyImg",
  async (payload, thunkAPI) => {
    try {
      await Apis.postMyImgAX(payload)
        .then((response) => {
          return thunkAPI.fulfillWithValue(payload)
      })
    } catch (error) {
      alert(error.response.data.mypage)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 조회
export const __getMyPet = createAsyncThunk(
  "api/mypage/getMyPet",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.getMyPetAX(payload)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 작성
export const __addMyPet = createAsyncThunk(
  "api/mypage/addMyPet",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.postMyPetAX(payload)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)


// 마이페이지 반려동물 정보 수정
export const __putMyPet = createAsyncThunk(
  "api/mypage/putMyPet",
  async (payload, thunkAPI) => {
    try {
      await Apis.putMyPetAX(payload)
        .then((response) => {
          return thunkAPI.fulfillWithValue(payload)
        })
    } catch (error) {
      alert(error.response.data.message)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 삭제
export const __deleteMyPet = createAsyncThunk(
  "api/mypage/deleteMyPet",
  async (id, thunkAPI) => {
    try {
      Apis.deleteMyPetAX(id)
      return thunkAPI.fulfillWithValue(id)
    } catch (error) {
      alert(error.response.data)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const mypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {},
  extraReducers: {
    // 게시글 수정
    [__putPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__putPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.post.response.push(action.payload.data)
    },
    [__putPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 게시글 삭제
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.post = state.post.splice(action.payload, 1)
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 조회
    [__getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("action.payload_getMyPage", action.payload)
      state.mypage = action.payload
    },
    [__getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 내 게시글 조회
    [__getMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("action.payload_getMyPost", action.payload)
      state.mypage = action.payload;
    },
    [__getMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 프로필 이미지 업로드
    [__postMyImg.pending]: (state) => {
      state.isLoading = true;
    },
    [__postMyImg.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage.response.push(action.payload.data)
    },
    [__postMyImg.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 조회
    [__getMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage = action.payload.data;
    },
    [__getMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 작성
    [__addMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage.response.push(action.payload.data)
    },
    [__addMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 수정
    [__putMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__putMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage.response.push(action.payload.data);
    },
    [__putMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 삭제
    [__deleteMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage = state.mypage.splice(action.payload, 1)
    },
    [__deleteMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.id;
    },
  }
})

export default mypageSlice.reducer;