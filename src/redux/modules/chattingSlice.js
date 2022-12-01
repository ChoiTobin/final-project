import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Apis from "../../shared/Apis"
import { current } from "@reduxjs/toolkit"

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
      console.log("실행시점확인","방입장시 thunk")
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


export const __getinitialChatList = createAsyncThunk(
  "/chat/__getInitialChatList",
  async (payload, thunkAPI) => {
    try {
      console.log("방입장시","get")
      const response = await Apis.getInitialChatList(payload)
    
  
      
      return thunkAPI.fulfillWithValue(response.data.data);
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
      state.chatList.chatList.push(action.payload)

 
    },

  },



  extraReducers: {
    [__CreateRoom.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__CreateRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.createRoom = action.payload;
      console.log("방입장시","fullfild")
      // console.log("풀필드",action.payload,state.createRoom)
    },
    [__CreateRoom.rejected]: (state, action) => {
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
    [__getinitialChatList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getinitialChatList.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("방입장시","get")

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