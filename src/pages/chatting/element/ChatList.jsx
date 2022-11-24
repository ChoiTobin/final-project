import React,{ useEffect, useRef, useState }  from 'react'
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {__getRoomList} from "../../../redux/modules/chattingSlice"
import {v4 as uuidv4} from 'uuid';
import { __getinitialChatList } from "../../../redux/modules/chattingSlice"
const ChatList = () => {
    // const {id}  = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const chatList = useSelector((state) => state.chatting.roomList);
    console.log("첼리스트",chatList)

    useEffect(() => {

        dispatch(__getRoomList());
      }, []);
const onClickChatting = (item) => {
    console.log("빈값으로오나?",item.id)
  navigator(`/ChatRoomPage/${item.id}`);
  dispatch(__getinitialChatList({
    postId:item.id,
    roomId:1,
    
      
}));

}



  return (
      <>
            {  
             chatList !== undefined && chatList !== [] &&
             chatList.map((item,i)=>{
               return(
              <>    
                <div key={uuidv4()}>
                    <span>{item.title}</span>
                    <span>
                        <button onClick={()=>onClickChatting(item)}>
                        버튼
                        </button>
                    </span>
                </div>
              </>
               )
              }
              )
            } 
      </>

  )
}

export default ChatList ;