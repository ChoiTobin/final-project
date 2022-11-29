import React,{ useEffect, useRef, useState }  from 'react'
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {__getRoomList} from "../../../redux/modules/chattingSlice"
import {v4 as uuidv4} from 'uuid';
import { __getinitialChatList } from "../../../redux/modules/chattingSlice"


const ChatList = () => {
    const {id}  = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const Room = useSelector((state) => state.chatting.roomList);


    
    useEffect(() => {

        dispatch(__getRoomList());
      }, []);

const onClickChatting = (item) => {


  navigator(`/ChatRoomPage/${item.postId}`);

  dispatch(__getinitialChatList({
   
    postId:item.postId,
    roomId:item.roomId,
    
}));


}



  return (
      <>
            {  
             Room !== undefined && Room !== [] &&
             Room.map((item,i)=>{
               return(
               
                <div key={i}>

                    <span>{item.title}</span>
                    <span>
                        <button onClick={()=>onClickChatting(item)}>
                        {item.postId}번방
                        </button>
                    </span>
                </div>

               )
              }
              )
            } 
      </>

  )
}

export default ChatList ;