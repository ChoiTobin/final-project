import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Apis from "../../shared/Apis";

const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

const initialState = {
  // URI: `${URI.BASE}`,
  createRoom: [],
  roomList:[],
  chatList:[],
  listReducer:[],
  chatTrueFalse:false,
  isLoading: false,
  roomId: null,
  err: null,
};
export const __CreateRoom = createAsyncThunk(
  "/chat/__CreateRoom",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.CreateRoom(payload)

      window.localStorage.setItem("roomId",response.data.data.roomId)
      console.log("실행시점확인 roomID들어오는 시점")
      window.location.reload(payload)

      
    
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const __getRoomList = createAsyncThunk(
//   "/chat/__getRoomList",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await Apis.getRoomList()
//       console.log("리스폰스",response)
//       return thunkAPI.fulfillWithValue(response.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );







export const __getinitialChatList = createAsyncThunk(
  "/chat/__getinitialChatList",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/room/${payload}`
        , {
        headers: {
          Access_Token: localStorage.getItem("Access_Token"),
        },
  
      }
      )
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    postChat: (state, action) => {
      state.chatList.unshift(action.payload);
    },
    clearChat: (state, action) => {
      state.chatList = new Array(0);
    },
    trueChat: (state, action) => {
      state.chatTrueFalse = action.payload.mode
    },
 
    ListReducer: (state, action) => {
      state.listReducer.push(action.payload)
 
    },

  },



  extraReducers: {
    [__CreateRoom.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__CreateRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.createRoom = action.payload;
      // console.log("풀필드",action.payload,state.createRoom)
    },
    [__CreateRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    // [__getRoomList.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [__getRoomList.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.roomList = action.payload;
    // },
    // [__getRoomList.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.err = action.payload;
    // },
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

export const { postChat, clearChat,trueChat,ListReducer } = chatSlice.actions;

export default chatSlice.reducer;