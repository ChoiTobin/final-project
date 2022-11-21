import styled, { css } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { __CreateRoom } from "../../redux/modules/chattingSlice";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import Modal from "./Chattmodalfolder/Modal";
import { __getinitialChatList } from "../../redux/modules/chattingSlice";
//import GlobalHeaderChat from "./element/GlobalHeaderChat";
import { postChat, clearChat } from "../../redux/modules/chattingSlice";
import { v4 as uuidv4 } from "uuid";
// yarn add react-hook-form
// yarn add react-is
import { set } from "react-hook-form";
import moment from "moment";
import ChatSubmitBox from "./ChatSubmitBox";
import ChatCard from "./ChatCard";
import '../../App.css';
function ChatRoomPage() {
  const dispatch = useDispatch();
  const {id}  = useParams()
  const navigate = useNavigate();


  const chatList = useSelector((state) => state.chatting.chatList);

  const sock = new SockJS("http://15.164.229.198:8080/ws/chat");
  const ws = webstomp.over(sock);
  const loginMemberId = localStorage.getItem("user-nickname");
  let postId = id
  const Access_Token = localStorage.getItem("Access-Token");


  useEffect(() => {
    dispatch(__getinitialChatList(postId));
    waitForConnection(ws, wsConnectSubscribe());
    // makeRoom();
  }, []);
  

//params


  // useEffect(() => {
  //   wsConnectSubscribe();
  //   return () => {
  //     wsConnectSubscribe();
  //   };
  // }, []);

  const [room, setRoom] = useState();




  const [chatBody, setChatBody] = useState("");
  const content = {
    message:chatBody,
      sender:localStorage.getItem('user-nickname')
    };



  let headers = { 
    Access_Token: localStorage.getItem('Access_Token')
  };

  wsConnectSubscribe()


  function wsConnectSubscribe() {
    try {
      ws.connect(
        headers,
        () => {
          let num = 0;
          const chatroom = ws.subscribe(
            `/room/${postId}`,
            function (frame) {
              console.log("어떻게나올수있지?",frame);
              const data = JSON.parse(frame.body);
              const roomId = data.roomInfoId;
              num = roomId;
              setRoom(num);
              console.log(num);
              console.log("채팅방 생성");
            });
        },
        [dispatch]
      );
    } catch (error) {
    }
  }
  function waitForConnection(ws, callback = () => {}) {
    setTimeout(
      function () {
        // 연결되었을 때 콜백함수 실행
        if (ws.ws.readyState === 1) {
          callback();
          // 연결이 안 되었으면 재호출
        } else {
          waitForConnection(ws, callback);
        }
      },
      1 // 밀리초 간격으로 실행
    );
  }


  // function makeRoom() {
  //   try {
  //     // token이 없으면 로그인 페이지로 이동
  //     // 데이터 보내기
  //     waitForConnection(ws, function () {
  //       // 초대하는 사람의 멤버 아이디
  //       // 방을 만드는 사람(로그인한 사람) , 두번째가 초대되는 사람(글 쓴 사람) , 초대되는사람 닉네임
  //       // itemId 추가
  //       ws.send(
  //         `/send/${loginMemberId}`,
  //           Access_Token ,
  //         input,
  //       );
  //       // 채팅만든 사람의 memberId 방에 들어가있는 리스트
  //       // ws.send(`/pub/room/15`, {}, { token: token });
  //       // console.log(ws.ws.readyState);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     console.log(ws.ws.readyState);
  //   }
  // }

const inputHandler = (e) =>{
  setChatBody(e.target.value)
}
const onSubmitHandler = (event) =>{
  event.preventDefault()
  ws.send(
    `/send/${postId}`,
    JSON.stringify(content),
            {
              Access_Token: localStorage.getItem("Access_Token")
            },
         )
       console.log("여기에?",ws) 
   }

   console.log("쳇 리스트",chatList)
return (
        <LoginContainer>
                <Header>
                     <div>
                      <img style={{width:20}} src={require("../chatting/chattingImg/pngwing.png")}/>
                      </div>
                     
                     <div><p>닉네임</p>
                     <span>30분</span>
                     </div>
                     <Modal/>
                </Header>
                <Section>
                    <Profile>사진</Profile>
                    <TextBox>
                      <P>
                        모집중
                        <span>제목이들어갑니다.</span>
                      </P>
                      <p>12,000원</p>
                    </TextBox>
                </Section>
                <span>날짜</span>
                <Chating>
                  여기는 채팅이 들어옵니다.
                </Chating>
                
                <Chatput>
                    <input onChange={inputHandler}></input>
                    <button onClick={onSubmitHandler}>버튼</button>
                </Chatput>  
        </LoginContainer>
  );
}



const LoginContainer = styled.div`
  width:360px;
  height:100vh;
  background-color:#FAF7F0;

`;

const Header = styled.div`
  background-color:#65647C
  width:360px;
  height:50px;
  display:flex;
  justify-content: space-between;
`

const Section = styled.div`
  width:360px;
  height:60px;
  display:flex;
  margin-top:10px;
  padding-left: 10px;
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
`
const P = styled.p`

`
const Chatput = styled.div`
  background-color:#BA94D1;
`

const Profile = styled.div`
  width:50px;
  height:50px;
  border-radius:10px;
  background-color:#BCCEF8;
  text-align:center;
  line-height:50px;
`
const Chating = styled.div`
  height:400px;
  over-flow:hidden;
  background-color:#FFECEF;
  text-align:center;
  line-height:400px;
  

`
const TextBox = styled.div`

`
export default ChatRoomPage;