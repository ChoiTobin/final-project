import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Apis from "../../shared/Apis";
import { getCookie ,setCookie, delCookie } from "../../shared/Cookie";
const initialState = {
  account : [],
  idCheck:[],
  nickCheck:[],
  detail : {},
  feeds : [],
  isLoading : false,
  error : null
};
export const __userLogout = createAsyncThunk(
  "account/userLogout",
  async(payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3000`,)
      delCookie("Access_Token")
      delCookie("refreshToken")
      delCookie("nickname")
      return thunkAPI.fulfillWithValue(payload)
    }catch(error){
      return thunkAPI.rejectWithValue(error);
    }
  }
)
//tobin전체 로그아웃-----------------------------------------------------------------------
// export const __kakaoLogout = createAsyncThunk(
//   "account/kakaoLogout",
//   async(payload, thunkAPI) => {
//     try {
//       await axios.get(`https://kauth.kakao.com/oauth/logout?client_$id=${process.env.REACT_APP_API_KAKAO_ID}&logout_redirect_uri=${process.env.REACT_APP_API_KAKAO_LOGOUT}`)
//       return thunkAPI.fulfillWithValue(payload)
//     }catch(error){
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// )
//tobin카카오톡 로그아웃-----------------------------------------------------------------------
export const __kakaoLogin = (code) => {
  return function (dispatch, getState) {
      // membersApis.loginAX(code)
      
      axios.get(`https://wepungsan.kro.kr/auth/member/kakao/callback?code=${code}`)
    //post가 아닌 get으로 보낸다.
    // `http://{서버주소}?code=${code}`
          .then((res) => {
            console.log(res)
              if(res.data.status === 200){
              const Access_Token = res.headers.access_token;
              localStorage.setItem("Access_Token", Access_Token);

              localStorage.setItem("user-userId", res.data.data.email);

              localStorage.setItem("user-nickname", res.data.data.nickname);

              localStorage.setItem("userImage", res.data.data.userImage);

              //카멜케이스
              // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
              window.location.replace("/home")
            }
          })
          
          .catch((error) => {
            
            window.alert("로그인에 실패하였습니다.");
              
              // 로그인 실패하면 로그인 화면으로 돌려보냄
              //window.location.replace('/SignIn');
          })
  }
};
//tobin카카오톡 로그인-----------------------------------------------------------------------
export const  __userSignUp = createAsyncThunk(
  "account/userSignUp",
  async (payload, thunkAPI) => {
    try {

      const res = await Apis.signupAX(payload)
      .then((response)=>{
        // if(response.status ==200){
        //   window.location.replace('/home')
        //   alert("회원가입이 완료됬습니다.")
        // }
      })
      return thunkAPI.fulfillWithValue(res)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
//tobin회원가입------------------------------------------------------------------------
export const __userCheck = createAsyncThunk(
  "idCheck/userCheck",
  // login : reducer name, 경로 정해줘야
  async (payload, thunkAPI) => {

    try {
      const res = await Apis.usernameAX(payload)

      alert(res.data.message)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//tobin이메일중복검사------------------------------------------------------------------------
export const __NickCheck = createAsyncThunk(
  "account/NickCheck",
  // login : reducer name, 경로 정해줘야
  async (payload, thunkAPI) => {
    try {
      const res = await Apis.nicknameAX(payload)

      alert(res.data.message)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//tobin닉네임 중복검사------------------------------------------------------------------------
export const __userLogin = createAsyncThunk(
  "account/userLogin",
  // login : reducer name, 경로 정해줘야
  async (payload, thunkAPI) => {
    try {
      await Apis.loginAX(payload)
      .then((response)=>{
        //console.log(response.data)
        if (response.data.status === 200) {
          console.log("어떤값이들어올까?~~~~~~~~~~~~~~~~~",response)
          //setCookie represh token 받기 
          localStorage.setItem("Access_Token", response.headers.access_token)
          localStorage.setItem("user-nickname", response.data.data.nickname)
          localStorage.setItem("user-userId", response.data.data.userId)
          window.location.replace('/home');
          alert(response.data.message)
          
        }else{
          alert(response.data.message)
        }
        return thunkAPI.fulfillWithValue(response.data)
      })
    } catch (error) {
      if (error.response.data.status === 500) {
        window.location.reload();
        alert("로그인 정보를 다시 확인해주세요")
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//tobin로그인------------------------------------------------------------------------
export const LoginSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: {
    [__userSignUp.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userSignUp.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.account=action.payload; //
    },
    [__userSignUp.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__userCheck.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userCheck.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.idCheck=action.payload; //
    },
    [__userCheck.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__userLogin.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userLogin.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.account=action.payload; //
    },
    [__userLogin.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__userLogout.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userLogout.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.account = action.payload; //
    },
    [__NickCheck.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__NickCheck.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.nickCheck=action.payload; //
    },
    [__NickCheck.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  }
})
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { userLogin, userSignUp, userSignUpGet} = LoginSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default LoginSlice.reducer;