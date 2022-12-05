import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {__getinitialChatList2, __getRoomList } from "../redux/modules/chattingSlice";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Layouts from "../components/Layout/Layout";
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
  roomId:item.roomId}  
        )
    );
  }
  ,200 );
  }

return (
      
  <Layouts>
    <Header />
      <DivOverflow>
        { Room !== undefined && Room !==null ?
          Room.map((item,i)=>{       
          return(
          <Root key={i}>
              

              <FlexDiv>
                  <div>
                    <Userimg style={{marginRight:5}} src={require("../img/user.png")} alt=""  />
                  </div>
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
                      <Img src={`${item.post.image[0].image}`}/>
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
      </DivOverflow>
    <Footer/>
  </Layouts>
  )
}
export default ChatList ;
const DivOverflow = styled.div`
overflow:auto; 
width:100%;
height:520px;

` 
const Img = styled.img`
  width:50px;
  height:30px;
`

const Userimg = styled.img`
  width:50px;
`
const Span = styled.span`
font-size:14px;
`
const MarginDiv =styled.div`

margin-left:10px;
`;

const Root = styled.div`
width:100%;
height:30px;
margin:17px;
margin-bottom:30px;
margin-left:10px;
`
const FlexDiv = styled.div`

display:flex;

height: 460px;
`

