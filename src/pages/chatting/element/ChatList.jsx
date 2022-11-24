// import React,{ useEffect, useRef, useState }  from 'react'
// import styled, { css } from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams, useLocation } from "react-router-dom";
// import {__getRoomList} from "../../../redux/modules/chattingSlice"
// import {v4 as uuidv4} from 'uuid';

// const ChatList = () => {
//     // const {id}  = useParams()
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const navigator = useNavigate();
//     const chatList = useSelector((state) => state.chatting.roomList);

//     useEffect(() => {
//         dispatch(__getRoomList());
//       }, []);
// const onClickChatting = (item) => {

//   navigator(`/ChatRoomPage/${item.id}`);

// }

//   return (
//       <>
//             {  chatList !== undefined && chatList !== null &&
//              chatList.map((item,i)=>{
//               <>
//                 <div key={uuidv4()}>{item.title}</div>
//                 <button onClick={()=>onClickChatting(item)}>
//                 </button>
//               </>
  
//               }
//               )
//             } 
//       </>

//   )
// }

// export default ChatList ;
