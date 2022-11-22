import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis"

// post{id}, myInfo{id, nickname, userImage}, myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}],
// myPic{userImage}, myPets: [{id, name, age, categoryName}, {""}, {""}]
const initialState = {
  post: {id: 0,},
  myInfo: {
    id: 0,
    nickname: "",
    userImage: "",
  },
  myPost: [
    {
      id: 0,
      title: "",
      content: "",
      price: "",
      category: "",
      state: "",
      local: "",
      date: "",
      imgs: "",
    }
  ],
  myPic: {},
  myPets: [
    {
      id: 0,
      name: "",
      age: "",
      category: "",
    },
  ],
  isLoading: false,
  error: null,

}

// 게시글 수정
export const __putMyPost = createAsyncThunk(
  "posts/__putPost",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.putPostAX(payload)
      console.log("putPost 수정수정", response)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 게시글 삭제
export const __deleteMyPost = createAsyncThunk(
  "posts/__deletePost",
  async (payload, thunkAPI) => {
    try {
      console.log("deletePost", payload)
      await Apis.deletePostAX(payload)
        .then((response) => {
        console.log("response", response.data)
      })
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      // alert(error.response.data)
      return thunkAPI.rejectWithValue(error);
    }
  }
)


// 마이페이지 조회
export const __getMyPage = createAsyncThunk(
  "mypage/__getMyPage",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.getMyPageAX()
      console.log("마이페이지 조회", response);
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
      const response = await Apis.getMyPostAX()
      console.log("내 게시글", response);
      return thunkAPI.fulfillWithValue(response.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 프로필 이미지 업로드
export const __postMyImg = createAsyncThunk(
  "mypage/__postMyImg",
  async (payload, thunkAPI) => {
    try {
      await Apis.postMyImgAX(payload)
        .then((response) => {
          console.log("프사 res", response);
          // return thunkAPI.fulfillWithValue(response)
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
    try {
      const response = await Apis.getMyPetAX()
      console.log("반려동물 정보", response);
      return thunkAPI.fulfillWithValue(response.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 작성
export const __addMyPet = createAsyncThunk(
  "mypage/__addMyPet",
  async (payload, thunkAPI) => {
    console.log("add 반려동물", payload)
    try {
      const response = await Apis.postMyPetAX(payload)
      console.log("add 반려동물 응답", response)
      return thunkAPI.fulfillWithValue(response.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)


// 마이페이지 반려동물 정보 수정
export const __putMyPet = createAsyncThunk(
  "mypage/__putMyPet",
  async (payload, thunkAPI) => {
    console.log("수정 페이로드 들어오나", payload)
    try {
      const response = await Apis.putMyPetAX(payload)
      console.log(response, "반려동물 수정 완료")
          return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 삭제
export const __deleteMyPet = createAsyncThunk(
  "mypage/__deleteMyPet",
  async (payload, thunkAPI) => {
    try {
      const response = Apis.deleteMyPetAX(payload)
      console.log("응답하라 오바", response);
      return thunkAPI.fulfillWithValue(response.data.data)
    } catch (error) {
      // alert(error.response)
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
      // state.myPost = action.payload;
      state.myPost.response.push(action.payload.data)
      
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
      state.myPost = state.post.filter((post) => post.id !== action.payload)
    },
    [__deleteMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.id;
    },
    // 마이페이지 조회 - myInfo{id, nickname, userImage}
    [__getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("여기서는?", action.payload)
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
      console.log("내 글은?", action.payload)
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
    // 마이페이지 반려동물 정보 조회 - myPets: [{id, name, age, categoryName}, {""}, {""}]
    [__getMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("이거는?", action.payload)
      state.myPets = action.payload;
    },
    [__getMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 작성 - myPets: [{, name, age, categoryName}, {""}, {""}]
    [__addMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("1도 없어?", action.payload)
      state.myPets = action.payload;
    },
    [__addMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 수정 - myPets: [{id, name, age, categoryName}, {""}, {""}]
    [__putMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__putMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      const indexId = state.myPets.findIndex((myPets) => {
        if (myPets.id === action.payload.id) {
          return true;
        }
        return false;
      });
      state.myPets[indexId] = action.payload;
      state.myPets = [...state.myPets];
    },
    [__putMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 삭제 - myPets: [{id, name, age, categoryName}, {""}, {""}]
    [__deleteMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.myPets = state.myPets.filter((myPets) => myPets.id !== action.id)
    },
    [__deleteMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  }
})

export default mypageSlice.reducer;