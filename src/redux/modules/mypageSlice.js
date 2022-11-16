import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis"


// 게시글 수정
export const __putMyPost = createAsyncThunk(
  "posts/__putPost",
  async (payload, thunkAPI) => {
    console.log("게시글 수정 페이로드", payload);
    try {
      const response = await Apis.putPostAX(payload)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 게시글 삭제
export const __deleteMyPost = createAsyncThunk(
  "posts/__deletePost",
  async (id, thunkAPI) => {
    console.log("게시글 삭제 id", id);
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
  "mypage/__getMyPage",
  async (payload, thunkAPI) => {
    console.log("마이페이지 조회", payload);
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
  "mypage/__getmypost",
  async (payload, thunkAPI) => {
    console.log("마이페이지 내 게시글 조회", payload);
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
  "mypage/__postMyImg",
  async (payload, thunkAPI) => {
    console.log("마이페이지 프사 업로드", payload);
    try {
      await Apis.postMyImgAX(payload)
        .then((response) => {
          return thunkAPI.fulfillWithValue(payload)
      })
    } catch (error) {
      alert(error.response)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 조회
export const __getMyPet = createAsyncThunk(
  "mypage/__getMyPet",
  async (payload, thunkAPI) => {
    console.log("반려동물 정보 조회", payload);
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
  "mypage/__addMyPet",
  async (payload, thunkAPI) => {
    console.log("반려동물 정보 작성", payload);
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
  "mypage/__putMyPet",
  async (payload, thunkAPI) => {
    console.log("반려동물 정보 수정", payload);
    try {
      await Apis.putMyPetAX(payload)
        .then((response) => {
          return thunkAPI.fulfillWithValue(payload)
        })
    } catch (error) {
      alert(error.response)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 삭제
export const __deleteMyPet = createAsyncThunk(
  "mypage/__deleteMyPet",
  async (id, thunkAPI) => {
    console.log("반려동물 정보 삭제", id);
    try {
      Apis.deleteMyPetAX(id)
      return thunkAPI.fulfillWithValue(id)
    } catch (error) {
      alert(error.response)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const mypageSlice = createSlice({
  name: "mypage",
  initialState: {
    myPage: [],
    myPost: [],
  },
  reducers: {},
  extraReducers: {
    // 게시글 수정
    [__putMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__putMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.post.response.push(action.payload.data)
      console.log("게시글 수정 action.payload", action.payload);
    },
    [__putMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 게시글 삭제
    [__deleteMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.post = state.post.splice(action.payload, 1)
      console.log("게시글 삭제 action.payload", action.payload);
    },
    [__deleteMyPost.rejected]: (state, action) => {
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
      console.log("마이페이지 조회 action.payload", action.payload);
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
      console.log("마이페이지 내 게시글 조회", action.payload)
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
      console.log("마이페이지 프사 업로드 action.payload", action.payload);
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
      console.log("반려동물 정보 조회 action.payload", action.payload);
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
      console.log("반려동물 정보 작성 action.payload", action.payload);
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
      console.log("반려동물 정보 수정 action.payload", action.payload);
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
      console.log("반려동물 정보 삭제 action.payload", action.payload);
    },
    [__deleteMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.id;
    },
  }
})

export default mypageSlice.reducer;