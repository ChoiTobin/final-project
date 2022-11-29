import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { __getinitialChatList, __getRoomList } from "../redux/modules/chattingSlice";


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
//들어갈때 get요청



  return (
      <>
            { 
             Room !== undefined && Room !== [] &&
             Room.map((item,i)=>{
               return(
               
                <div key={i}>

                    <span>{item.title}</span>
                    <span>
                        <LoginButton onClick={()=>onClickChatting(item)}>
                        {item.postId}번방
                        </LoginButton>
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


const LoginButton = styled.button`
font-size:18px;
color: white;
border: none;
border-radius: 3px;
font-weight: bold;
width: 253px;
height: 40px;
margin-top: 30px;

// 버튼 누르면 손모양 나오게 하는 마우스 커서
cursor: pointer;
background-color: #ED9071;
`;