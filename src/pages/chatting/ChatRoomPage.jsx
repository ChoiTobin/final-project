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
import { set } from "react-hook-form";
import moment from "moment";
import ChatSubmitBox from "./ChatSubmitBox";
import ChatCard from "./ChatCard";
import '../../App.css';
function ChatRoomPage() {

  const {id}  = useParams()


//http://todayleave.blogspot.com/2016/01/stompjs-2.html =>에러해결


  const sock = new SockJS("http://43.200.179.166:8080/ws/chat");
  let subscription;

  const ws = webstomp.over(sock);

  const Access_Token = localStorage.getItem("Access_Token");
  const loginMemberId = localStorage.getItem("user-nickname");


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stompClient = useRef(null);
  const prevDate = useRef(0);
  const listRef = useRef();

  const chatList = useSelector((state) => state.chatting.chatList);

  let postId = Number(id)


  useEffect(() => {
    wsConnectSubscribe()
    dispatch(__getinitialChatList(postId));
   
    // waitForConnection(ws, );
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
    sender:localStorage.getItem('user-nickname'),
    message:chatBody

    };
  let headers = { 
    Access_Token: localStorage.getItem('Access_Token')
  };




  function wsConnectSubscribe() {
    try {
      ws.connect(
        headers,function(frame) {
          console.log("프레임",frame)
          ws.subscribe(
            `/room/${postId}`,
            function (response) {
              console.log("어떻게나올수있지?",response);
              const data = JSON.parse(response.body);
              console.log("뭔값나올까?",data)
              const roomId = data.roomInfoId;
              let num = 0;
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
  // function waitForConnection(ws, callback = () => {}) {
  //   setTimeout(
  //     function () {
  //       // 연결되었을 때 콜백함수 실행
  //       if (ws.ws.readyState === 1) {
  //         callback();
  //         // 연결이 안 되었으면 재호출
  //       } else {
  //         waitForConnection(ws, callback);
  //       }
  //     },
  //     1 // 밀리초 간격으로 실행
  //   );
  // }


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
       //console.log("여기에?",ws) 
   }

   //console.log("쳇 리스트",chatList)
return (
        <LoginContainer>
                <Header>
                     <div>
                      <Img src={require("../chatting/chattingImg/png-clipart-computer-icons-arrow-previous-button-angle-triangle.png")}/>
                      </div>
                     
                     <div>
                      <Nickname>닉네임</Nickname>
                      <Time>30분 전 접속</Time>
                     </div>
                     <Modal/>
                </Header>
                <Section>
                    <Profile><Img2 src={require("../chatting/chattingImg/KakaoTalk_20221121_174337130_01.png")}/></Profile>
                    <TextBox>
                      <P>
                        <OrangeSpan>모집 중</OrangeSpan>
                        <Span></Span>
                        <Title>제목이들어갑제목이들어갑제목이들어갑제목이들어갑제목이들어갑제목이들어갑니다.</Title>
                      </P>
                      <Money>12,000원</Money>
                    </TextBox>
                </Section>
                  <DivAt>날짜</DivAt>
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
const DivAt = styled.div`
margin-top:10px;
text-align:center;
color:#787878;
font-size:12px;
`
const Money = styled.p`
font-weight:bold;

`
const Title = styled.span`
width: 200px;
overflow:hidden; 
text-overflow:ellipsis;
white-space:nowrap; 
display:inline-block;
font-weight:bold;
font-size:12px;


`
const Span= styled.span`
width:30px;

margin-left:10px;
`
const OrangeSpan = styled.span`
color:#ED9071;
font-weight:bold;


`
const Img = styled.img`
margin-top:6px;
height:25px;
width:25px;
margin-left:10px;

`
const Img2 = styled.img`

height:33px;
width:30px;

`

const Time = styled.span`
font-size:6px;
`
const Nickname = styled.p`
margin-left:5px;
font-weight:bold;
font-size:15px;
`

const LoginContainer = styled.div`
  width:360px;
  height:100vh;
  background-color:#FAF7F0;

`;

const Header = styled.div`
  border-bottom:1px solid #ED9071;
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
  border-bottom:1px solid #ED9071;
`
const P = styled.p`


`
const Chatput = styled.div`
  background-color:#BA94D1;
`

const Profile = styled.div`
  margin-top:5px;
  margin-right:5px;
  width:50px;
  height:50px;
  border-radius:10px;

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