import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis"

const initialState = {
  profile: [
    {
      userId: 0,
      nickname: "",
      petId: 0,
      name: "",
      age: 0,
      category: "",
      rate: 0,
    }
  ],
  isLoading: false,
  error: null,
}

// 마이페이지 조회 - GET
export const __getMyPage = createAsyncThunk(
  "api/mypage",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.getMyPageAX(payload)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 마이페이지 내 게시글 조회 - GET
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


// 마이페이지 프로필 이미지 업로드 - POST
export const __postMyPage = createAsyncThunk(
  "api/mypage/image",
  async (payload, thunkAPI) => {
    try {
      await Apis.putPostAX(payload)
        .then((response) => {
          return thunkAPI.fulfillWithValue(payload)
      })
    } catch (error) {
      alert(error.response.data.mypage)
      return thunkAPI.rejectWithValue(error)
    }
  }
)


// 마이페이지 반려동물 정보 조회 - GET
export const __getMyPet = createAsyncThunk(
  "api/mypage/pet",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.getMyPetAX(payload)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)


// 마이페이지 반려동물 정보 수정 - PUT
export const __putMyPet = createAsyncThunk(
  "api/mypage/pet/petId",
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


// 마이페이지 반려동물 정보 삭제 - DELETE
export const __deleteMyPet = createAsyncThunk(
  "api/mypage/pet/petId",
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
    // 마이페이지 조회 - GET
    [__getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("action.payload_getMyPage", action.payload)
      state.mypage = action.payload.data
    },
    [__getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 내 게시글 조회 - GET
    [__getMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("action.payload_getMyPost", action.payload)
      state.mypage = action.payload.data
    },
    [__getMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },

    // 마이페이지 프로필 이미지 업로드 - POST
    [__getMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage.response.push(action.payload.data)
    },
    [__getMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 마이페이지 반려동물 정보 조회 - GET
    [__getMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage = action.payload.data;
    },
    [__getMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },

    // 마이페이지 반려동물 정보 수정 - PUT
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

    // 마이페이지 반려동물 정보 삭제 - DELETE
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
    }
  }
})

export default mypageSlice.reducer;