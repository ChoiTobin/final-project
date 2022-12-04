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
  roomList:[],
  chatList:[],
  chatList2:[],
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

      const response = await Apis.getInitialChatList(payload)
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.data);
    }
  }
);


export const __getinitialChatList2 = createAsyncThunk(
  "/chat/__getInitialChatList2",
  async (payload, thunkAPI) => {
    try {

      const response = await Apis.getInitialChatList(payload)
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
      console.log("페이로드~~~~~~~~~~",payload)

      const response = await Apis.complete(payload)
    
      console.log(response)
      
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
      console.log("왜노푸쉬?",action.payload)
      console.log("이개뭐지",state.chatList2.chatList)
      if(state.chatList2.chatList == null){
        state.chatList2.chatList = []
        // state.chatList2.chatList.push(action.payload)
      }
      //처음 채팅내역에서 null값이 들어오게됨. 그래서 배열을 강제로 만들어서 집어넣는다.
      //
      state.chatList2.chatList.push(action.payload)
    },

  },



  extraReducers: {
    [__CreateRoom.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__CreateRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.chatList2 = action.payload;
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


    [__getinitialChatList2.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getinitialChatList2.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.chatList2 = action.payload;
    },
    [__getinitialChatList2.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

  },
});

export const { postChat, clearChat,trueChat,ListReducer } = chatSlice.actions;

export default chatSlice.reducer;