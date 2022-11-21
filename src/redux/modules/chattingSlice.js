import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Apis from "../../shared/Apis";


// const URI = {
//   BASE: process.env.REACT_APP_BASE_URI,
// };
const initialState = {
  // URI: `${URI.BASE}`,
  createRoom: [],
  chatList:[],
  chatTrueFalse:false,
  isLoading: false,
  roomId: null,
  err: null,
};
export const __CreateRoom = createAsyncThunk(
  "/chat/__CreateRoom",
  async (payload, thunkAPI) => {
    try {
      await Apis.CreateRoom(payload)
      .then((res) => {
        console.log("레스레스레스",res)
        return thunkAPI.fulfillWithValue(res.data);
      })
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __getinitialChatList = createAsyncThunk(
  "/chat/__getinitialChatList",
  async (payload, thunkAPI) => {
    try {
      
      const response = await axios.get(`http://43.200.179.166:8080/api/${payload}`, {
        headers: {
          Access_Token: localStorage.getItem("Access_Token"),
        },
      });
      console.log("리스폰스",response)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//CreateRoom: (createRoom) => token.post(`/api/room`, createRoom)




















// export const __getinitialChatList = createAsyncThunk(
//   "/chat/__getinitialChatList",
//   async (payload, thunkAPI) => {
//     try {

//       const response = await axios.get(`https://wepungsan.kro.kr/room/${payload}`, {
//         headers: {
//           Access_Token: localStorage.getItem("Access_Token"),
//         },
//       });
//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
const chatSlice = createSlice({
  name: "chatting",
  initialState,
  reducers: {
    postChat: (state, action) => {
      //state.chatList=action.payload;
      state.chatList.unshift(action.payload);
      //console.log("디스패치확인",state.chatList,"디스패치확인2",action.payload.mode)
    },
    clearChat: (state, action) => {
      state.chatList = new Array(0);
    },
    trueChat: (state, action) => {
      state.chatTrueFalse = action.payload.mode
    },
  },
  extraReducers: {
    [__CreateRoom.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__CreateRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.createRoom = action.payload;
    },
    [__CreateRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [__getinitialChatList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getinitialChatList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.chatList = action.payload;
    },
    [__getinitialChatList.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

export const { postChat, clearChat,trueChat } = chatSlice.actions;

export default chatSlice.reducer;