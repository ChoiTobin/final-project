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
console.log("룸",Room)
return (
      <> 
        { Room !== undefined && Room !==null ?
          Room.map((item,i)=>{       
          return(
            <Root key={i}>
                  <FlexDiv>
                      <div>
                        <img src={require("../img/bros_blank.jpg")} width="48px"/>
                      </div>
                      {/* {
                        item.post.image !== undefined

                        console.log("찍어보자!",item.post.image[0].image)
                      } */}
                      <MarginDiv>
                          <h4 onClick={()=>onClickChatting(item)}>
                            {item.joinNickname}
                          </h4>
                          <div>
                            <Span>{item.title}</Span>
                          </div>
                      </MarginDiv>
                      <div>
                      {

          item.post.image.length !== 0 &&
                  <img src={`${item.post.image[0].image}`}/>
                }

                      </div>
                  </FlexDiv>
            </Root>



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

const Span = styled.span`
font-size:14px;
`
const MarginDiv =styled.div`
margin-left:10px;

`

const Root = styled.div`
background-color: #f6f0ee;
width:100%;
height:100%;
margin:17px;
margin-bottom:30px;
margin-left:10px;



`
const FlexDiv = styled.div`
display:flex;


    
`

