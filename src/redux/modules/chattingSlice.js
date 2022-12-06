import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Apis from "../../shared/Apis"
import { current } from "@reduxjs/toolkit"

const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

const initialState = {
  // URI: `${URI.BASE}`,
  chatListTest:[],
  complete:[],
  createRoom: [],
  create:[],
  roomList:[],
  room:[],
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
      window.location.replace(`/ChatRoomPage/${response.data.data.roomId}`);
  
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const __getRoomList = createAsyncThunk(
  "/chat/__getRoomList",
  async (payload, thunkAPI) => {
    try {
      const response = await Apis.getRoomList()
      
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);





export const __getinitialChatList2 = createAsyncThunk(
  "/chat/__getInitialChatList2",
  async (payload, thunkAPI) => {
    try {
      console.log("주는값!!!!!!!!!!",payload)
      const response = await Apis.getInitialChatList2(payload)
      
      console.log("어떤값주니 2",response)
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data);
    }
  }
);





export const __complete = createAsyncThunk(
  "/chat/__complete",
  async (payload, thunkAPI) => {
    try {


      const response = await Apis.complete(payload)
    
      console.log("컴플리트22222222222",response)
      
      return thunkAPI.fulfillWithValue(response.data.msg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data);
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

      if(state.room.chatList == null){
        state.room.chatList = []
        // state.room.chatList.push(action.payload)
      }
      console.log("어떤값?",current(state),"어떤값?",action.payload)
      //처음 채팅내역에서 null값이 들어오게됨. 그래서 배열을 강제로 만들어서 집어넣는다.
      //
      state.room.chatList.push(action.payload)
    },

  },



  extraReducers: {
    [__CreateRoom.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__CreateRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.create = action.payload;
      
    },
    [__CreateRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },



    [__complete.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__complete.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.complete = action.payload;
    },
    [__complete.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },




    [__getRoomList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getRoomList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.roomList = action.payload;
    },
    [__getRoomList.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },


    [__getinitialChatList2.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getinitialChatList2.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.room = action.payload;
    },
    [__getinitialChatList2.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

  },
});

export const { postChat, clearChat,trueChat,ListReducer } = chatSlice.actions;

export default chatSlice.reducer;