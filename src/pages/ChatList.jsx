import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { __getinitialChatList2, __getRoomList } from "../redux/modules/chattingSlice";


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
  navigator(`/ChatRoomPage/${item.postId}`)
  setTimeout(
    function () {
      dispatch(__getinitialChatList2({
        postId:item.postId,
        roomId:item.roomId,}
    ));},100 );

  //여기 부분을 풀면 채팅 이 잘나오고 방이 안들어가짐
  //방들어갈떄 API한개.



 //roomID가  undefind가 나타남. 방연결이 되었다안되었다함
 // chatList쪽에 dispatch에 SetTimeout을 설정한후 roomId를 직접 로컬로 받아서 sub에 넣으니까 해결은됨 f5시에 문자가 두개씩나타나는 오류가생김.
}
//들어갈때 get요청

// window.onload = function(event) {
//   window.location.reload()
//   //event.preventDefault()
// };
return (
      <> 
        { Room !== undefined && Room !==null ?
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
        )})
              :
      <>
            <div>채팅내역이 없습니다.</div>
            <button onClick={ () =>navigator(-1)}>이전으로</button>
      </>
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