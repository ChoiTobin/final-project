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
                      <MarginDiv>
                          <h4 onClick={()=>onClickChatting(item)}>
                            {item.joinNickname}
                          </h4>
                          <div>
                            <Span>{item.title}</Span>
                          </div>
                      </MarginDiv>
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

const SignupButton = styled.button`
  width: 320px;
  height: 50px;
  margin: 24.41px auto 20px;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.87px;


const LogoBox = styled.div`
  width: 175px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const LoginBox = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  span {
    font-family: "Pretendard", sans-serif;
    font-weight: 700;
    // 버튼 누르면 손모양 나오게 하는 마우스 커서
    cursor: pointer;
  }
`;

const Duplicate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CheckBtn = styled.button`
  width: 60.32px;
  height: 25px;
  border: none;
  border-radius: 3px;
  background-color: #d9d9d9;
  color: #7d7d7d;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.32px;
  position: relative;
  z-index: 100;
  margin-left: -60px;
  margin-right: 16.12px;
`;

const Green = styled.div`
  color: #4db173;
  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  margin-bottom: 5px;
  font-weight: 700;
  /* text-align: left; */
`;

const Red = styled.div`
  color: #fd6e7f;
  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  margin-bottom: 5px;
  font-weight: 700;
  /* text-align: left; */
`;

const ErrorMessageWrap = styled.div`
  font-family: "Pretendard", sans-serif;
  color: #fd6e7f;
  font-size: 11px;
  margin-bottom: 5px;
  font-weight: 700;
`;

const LogoBox = styled.div`
  width: 175px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const LoginBox = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  span {
    font-family: "Pretendard", sans-serif;
    font-weight: 700;
    // 버튼 누르면 손모양 나오게 하는 마우스 커서
    cursor: pointer;
  }
`;

const Duplicate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CheckBtn = styled.button`
  width: 60.32px;
  height: 25px;
  border: none;
  border-radius: 3px;
  background-color: #d9d9d9;
  color: #7d7d7d;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.32px;
  position: relative;
  z-index: 100;
  margin-left: -60px;
  margin-right: 16.12px;
`;

const Green = styled.div`
  color: #4db173;
  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  margin-bottom: 5px;
  font-weight: 700;
  /* text-align: left; */
`;

const Red = styled.div`
  color: #fd6e7f;
  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  margin-bottom: 5px;
  font-weight: 700;
  /* text-align: left; */
`;

const ErrorMessageWrap = styled.div`
  font-family: "Pretendard", sans-serif;
  color: #fd6e7f;
  font-size: 11px;
  margin-bottom: 5px;
  font-weight: 700;
`;
