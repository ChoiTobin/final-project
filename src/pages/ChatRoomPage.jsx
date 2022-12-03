import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import { useNavigate, useParams } from "react-router-dom";

import { __getinitialChatList,__getinitialChatList2, ListReducer } from "../redux/modules/chattingSlice";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as BackArrow } from "../img/backarrow.svg";
import Modal2 from "../pages/ChatModal/Modal2"
import RatingModal from "../components/features/Posts/RatingModal/RatingModal";
function ChatRoomPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const sock = new SockJS(`${process.env.REACT_APP_URL}/ws/chat`);
  const ws = webstomp.over(sock);
  const dispatch = useDispatch();
  
//문제 해결 list에서 들어갈때 getintalchatlist를 요청하는데  이미 그페이지에서는 getintalchatlist를 요청하고 있었다.
// 그런데 요청하는 정보가 다르기대문에 다른 값을 리스폰스 받게 되었고 나는 한쪽방면의  getintalchatlist를 getintalchatlist2로 바꿔주었다. 그리고 chatList2로 이니셜스테이트도 바꿔주었다..
// useSelector로 map 돌리고 reducer도 받은값을 getintalchalist2같은 이니셜스테이트ㅡ 써서 뜨게함 ui로

  // const listReducer = useSelector((state) => state.chatting.chatList);
  const chatList = useSelector((state) => state.chatting.chatList);
  const chatList2 = useSelector((state) => state.chatting.chatList2);

  console.log("요청하는정보~~",chatList,chatList2)

  let postId = Number(id);
  //여러번 호출안하거나 undefined 
  //onSubmitHandler

  useEffect(() => { //채팅내역을 mount될때마다 
    dispatch(__getinitialChatList({postId: postId,roomId: 1,}));
      return () => 
      {
        onbeforeunloda();
      }
    },[]);

    //소켓이 끊겼을떄 감지해서 페이지를 이탈했을떄 스토어를 리셋 array splice
    //splice(0) 싹다 날려줌.state.search 
    //state.splice(0) =>0번째 인덱스부터 날린다.

  useEffect(() => {
    wsConnectSubscribe();
      return () => 
      {onbeforeunloda();};
  }, 
  [chatList2.roomId]);

  //함수를 return안에 만들어서 리듀서를 비워주는 
  //새로고침 하지 않으면 메시지가 2개로 나오는 issue 떄문에 두번 연결
  //끊어주지 않으면 또 다시 이전화면 다녀오면 2개 나오는 issue때문에

  const [chatBody, setChatBody] = useState("");

  const content = {
    sender: localStorage.getItem("user-nickname"),
    message: chatBody,
  };

  let headers = {
    Access_Token: localStorage.getItem("Access_Token"),
  };

  function wsConnectSubscribe() {
    try {
      ws.connect(headers, (frame) => {
      //roomID가  undefind가 나타남. chatList쪽에 dispatch에 SetTimeout을 설정한후 roomId를 직접 로컬로 받아서 sub에 넣으니까 해결은됨 f5시에 문자가 두개씩나타나는 오류가생김.
      ws.subscribe(`/sub/${chatList2.roomId}`, (response) => {
        let data = JSON.parse(response.body);
        dispatch(ListReducer(data));
      })
    });
      }catch(error) {}
  }

  function waitForConnection(ws, callback) {
    setTimeout(
      function () {
        // 연결되었을 때 콜백함수 실행
        if (ws.ws.readyState === 1) {
          callback();
          // 연결이 안 되었으면 재호출
        } else {
          waitForConnection(ws, callback);
        }
          },1 // 밀리초 간격으로 실행
      );
    }//stomp 메시지 에러 waitForConnection함수로 해결

  const onbeforeunloda = () => {
    try {
      ws.disconnect(
        () => {
          ws.unsubscribe("sub-0");
          clearTimeout(waitForConnection);
        },

        { Access_Token: localStorage.getItem("Access_Token") }
      );
    } catch (e) {
      // console.log("연결구독해체 에러", e);
    }
      };


  //채팅 메시지 여러개로 나오는것 구독해체로 해결
  const inputHandler = (e) => {
    setChatBody(e.target.value);
  };
  
  const onSubmitHandler = (event) => {
    //event.preventDefault()
    if (chatBody === "" || chatBody === " ") {
      return alert("내용을 입력해주세요.");
    }
    waitForConnection(ws, function () {
      ws.send(
        `/pub/${chatList2.roomId}`,
        JSON.stringify(content),
        {
          Access_Token: localStorage.getItem("Access_Token"),
        },
        setChatBody("")
      );
    });
  };
  const appKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmitHandler();
      setChatBody("");
    }
  };
  //enter시 메시지 보냄
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [chatList2]);
  //채팅창 치면 맨 밑으로 내려감.

  return (
    <LoginContainer>
      <Header>
        <Modal2/>
        <div>

          <BackArrow onClick={
            ()=>  navigate(-1)
            }/>

        </div>
        <div>
          <Nickname>{chatList2.postNickname}</Nickname>
          <Time>30분 전 접속 </Time>
        </div>
        {
          localStorage.getItem("user-nickname") === chatList2.postNickname ?
            <>
            <Modal2></Modal2>
  
            </>

            : null
        }
      </Header>
      <Section>
        <Profile>
          <Img2>{chatList2.postImg}</Img2>
        </Profile>
        <TextBox>
          <OrangeSpan>{chatList2.state}</OrangeSpan>
          <Span></Span>
          <Title>{chatList2.title}</Title>
          <Money>{chatList2.price}원</Money>
        </TextBox>
      </Section>
      <DivAt>날짜 오늘</DivAt>
      <OverFlow sx={{ height: "80%", overflow: "scroll" }}>


      


        {
        chatList2.chatList !== undefined &&
        chatList2.chatList !== null &&
        chatList2.chatList.map((item, i) => {
            return localStorage.getItem("user-nickname") == item.sender ? 
            (

              <TextBox key={uuidv4()}>
                <Colorspan>{item.message}</Colorspan>
              </TextBox>
            ) : 
            (
              <TextBox key={uuidv4()}>
                <Colorspan2>{item.message}</Colorspan2>
              </TextBox>
            );
          })}

        <div ref={scrollRef}></div>
      </OverFlow>
      <Chatput>
        <Input
          value={chatBody}
          onKeyPress={appKeyPress}
          onChange={inputHandler}
        ></Input>
        {/* <ArrowImg
          onSubmit={appKeyPress}
          onClick={onSubmitHandler}

          src={require("../img/send.png")}

        />
      </Chatput>
    </LoginContainer>
  );
}

const ArrowImg = styled.img`
  position: absolute;
  top: 10px;
  right: 6px;
  border: none;
  width: 13px;
  height: 15px;
  background-color: white;
`;
const Chatput = styled.div`
  border-radius: 20%;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  text-indent: 8px;
  border: 2px solid #ed9071;
  border-radius: 30px;
  display: inline-block;
  font-weight: lighter;
  font-size: 12px;
  max-width: calc(100% - 32px);
  min-width: 50px;
`;
const Colorspan2 = styled.div`
  background: gray;
  color: black;
  padding: 6px;
  border-radius: 7px;
  font-size: 12px;
  display: flex;
  flex-direction: left;
  text-align: left;
  width: 170px;
  margin-bottom: 3px;
  float: right;

  overflow: hidden;
`;
const Colorspan = styled.div`
  background: #ed9071;
  color: black;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 7px;
  font-size: 12px;
  display: flex;
  text-align: left;
  width: 150px;
  margin-bottom: 3px;

  overflow: hidden;
`;

const TextBox = styled.div`
  padding: 4px;
  background: #f6f0ee;
  min-height: 20.26px;
  width: 318.82px;
`;

const OverFlow = styled.div`
  overflow: auto;
  height: 460px;
  ::-webkit-scrollbar {
    width: 1vw;
  }
  ::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 7px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
const DivAt = styled.div`
  margin-top: 10px;
  text-align: center;
  color: #787878;
  font-size: 12px;
  background: #f6f0ee;
`;
const Money = styled.p`
  font-weight: bold;
`;
const Title = styled.span`
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
`;
const Span = styled.span`
  width: 30px;
  margin-left: 10px;
`;
const OrangeSpan = styled.span`
  color: #ed9071;
  font-weight: bold;
`;
const Img = styled.img`
  margin-top: 6px;
  height: 25px;
  width: 25px;
  margin-left: 10px;
`;
const Img2 = styled.img`
  height: 33px;
  width: 30px;
`;

const Time = styled.span`
  font-size: 6px;
  margin-left: 95px;
`;
const Nickname = styled.p`
  margin-left: 105px;
  font-weight: bold;
  font-size: 15px;
`;

const LoginContainer = styled.div`
  width: 340px;
  margin: 0 auto;
  height: 100%;
  background-color: #f6f0ee;
`;

const Header = styled.div`
  border-bottom: 1px solid #ed9071;
  background: #f6f0ee;
  width: 100%;
  height: 70px;
  display: flex;
  margin-top: 40px;
`;

const Section = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  margin-top: 10px;
  padding-left: 10px;
  background: #f6f0ee;
  border-bottom: 1px solid #ed9071;
`;

const Profile = styled.div`
  margin-top: 5px;
  margin-right: 5px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
`;
const Chating = styled.div`
  height: 400px;
  over-flow: hidden;
  background-color: #ffecef;
  text-align: center;
  line-height: 400px;
`;

export default ChatRoomPage;
