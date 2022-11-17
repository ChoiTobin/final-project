import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis"

// post{id}, myInfo{id, nickname, userImage}, myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}],
// myPic{userImage}, myPets: [{petId, name, age, categoryName}, {""}, {""}]
const initialState = {
  post: {},
  myInfo: {},
  mypost: [],
  myPic: {},
  myPets: {
    pet1: {},
    pet2: {},
    pet3: {}
  },
  isLoading: false,
  error: null,

}

// 게시글 수정
export const __putMyPost = createAsyncThunk(
  "posts/__putPost",
  async (payload, thunkAPI) => {
    try {
      console.log("putPost", payload)
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
    try {
      console.log("deletePost", id)
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
    try {
      console.log("getMyPage", payload)
      const response = await Apis.getMyPageAX()
      console.log("response MyPage", response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 마이페이지 내 게시글 조회
export const __getMyPost = createAsyncThunk(
  "mypage/__getmypost",
  async (payload, thunkAPI) => {
    try {
      console.log("getMyPost", payload)
      const response = await Apis.getMyPostAX(payload)
      console.log("내 게시글", response);
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
    console.log("postMyImg", payload)
    try {
      await Apis.postMyImgAX(payload)
        .then((response) => {
          return thunkAPI.fulfillWithValue(response)
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
    console.log("getMyPet", payload)
    try {
      const response = await Apis.getMyPetAX(payload)
      console.log("getMyPet res", response);
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
    console.log("addMyPet", payload)
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
    console.log("putMyPet", payload)
    try {
      const response = await Apis.putMyPetAX(payload)
          return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      alert(error.response)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 삭제
export const __deleteMyPet = createAsyncThunk(
  "mypage/__deleteMyPet",
  async (petId, thunkAPI) => {
    try {
      console.log("deleteMyPet", petId)
      const response =  Apis.deleteMyPetAX(petId)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      alert(error.response)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const mypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {},
  extraReducers: {
    // 게시글 수정 - post{id}
    [__putMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__putMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.post = action.payload
    },
    [__putMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 게시글 삭제 - post{id}
    [__deleteMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.post.id = action.payload
    },
    [__deleteMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 조회 - myInfo{id, nickname, userImage}
    [__getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.myInfo = action.payload;
    },
    [__getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 내 게시글 조회 - myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}]
    [__getMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.myPost = action.payload;
    },
    [__getMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 프로필 이미지 업로드 - myPic{userImage}
    [__postMyImg.pending]: (state) => {
      state.isLoading = true;
    },
    [__postMyImg.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.myPic = action.payload;
    },
    [__postMyImg.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 조회 - myPets: [{petId, name, age, categoryName}, {""}, {""}]
    [__getMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.myPets = action.payload;
    },
    [__getMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 작성 - myPets: [{petId, name, age, categoryName}, {""}, {""}]
    [__addMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.myPets = action.payload;
    },
    [__addMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 수정 - myPets: [{petId, name, age, categoryName}, {""}, {""}]
    [__putMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__putMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.myPets = action.payload;
    },
    [__putMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 삭제 - myPets: [{petId, name, age, categoryName}, {""}, {""}]
    [__deleteMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.myPets.petId = action.payload;
    },
    [__deleteMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.id;
    },
  }
})

export default mypageSlice.reducer;