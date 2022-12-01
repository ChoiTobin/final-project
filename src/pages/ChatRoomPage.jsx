import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import { useNavigate, useParams } from "react-router-dom";
import { __getinitialChatList, ListReducer } from "../redux/modules/chattingSlice";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as BackArrow } from "../img/backarrow.svg";
import Modal2 from "../pages/ChatModal/Modal2"
import Rating from "../components/features/Posts/Rating";
import RatingModal from "../components/features/Posts/RatingModal/RatingModal";


function ChatRoomPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const sock = new SockJS(`${process.env.REACT_APP_URL}/ws/chat`);
  const ws = webstomp.over(sock);
  const dispatch = useDispatch();

  const listReducer = useSelector((state) => state.chatting.chatList);
  const chatList = useSelector((state) => state.chatting.chatList);
  
  console.log("쳇리스트", chatList);

  let postId = Number(id);

  //onSubmitHandler
  useEffect(() => {
    dispatch(
      __getinitialChatList({
        postId: postId,
        roomId: 1,
      })
    );

    return () => {
      onbeforeunloda();
    };
  }, []);

  useEffect(() => {
    wsConnectSubscribe();

    return () => {
      onbeforeunloda();
    };
  }, [chatList.roomId]);
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
        ws.subscribe(`/sub/${chatList.roomId}`, (response) => {
          let data = JSON.parse(response.body);
          dispatch(ListReducer(data));
        });
      });
    } catch (error) {}
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
      },
      1 // 밀리초 간격으로 실행
    );
  }
  //stomp 메시지 에러 waitForConnection함수로 해결

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
      console.log("연결구독해체 에러", e);
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
        `/pub/${chatList.roomId}`,
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
  }, [listReducer]);
  //채팅창 치면 맨 밑으로 내려감.

  return (
    // <Modal2></Modal2>
    <LoginContainer>
      <Header>
      <Modal2/>
      <RatingModal/>
        <div>
          {/* <Img
            onClick={() => navigate(-1)}
            src={require("../chatting/chattingImg/png-clipart-computer-icons-arrow-previous-button-angle-triangle.png")}
          /> */}
          <BackArrow onClick={() => navigate(-1)} />
        </div>
        <div>
          <Nickname>{chatList.postNickname}</Nickname>
          <Time>30분 전 접속 </Time>
        </div>
        <span>{/* 잠시주석 <Modal2></Modal2> */}</span>
      </Header>
      <Section>
        <Profile>
          <Img2>{chatList.postImg}</Img2>
        </Profile>
        <TextBox>
          <OrangeSpan>{chatList.state}</OrangeSpan>
          <Span></Span>
          <Title>{chatList.title}</Title>
          <Money>{chatList.price}원</Money>
        </TextBox>
      </Section>
      <DivAt>날짜 오늘</DivAt>
      <OverFlow sx={{ height: "80%", overflow: "scroll" }}>
        {/* { chatList.chatList !== undefined && chatList.chatList !== null &&
                       chatList.chatList.map((item,i)=>{
                          return(
                          
                          localStorage.getItem('user-nickname') == item.sender ?  
                        <TextBox key={uuidv4()}><Colorspan>{item.message}</Colorspan></TextBox>
                        :
                        <TextBox key={uuidv4()}><Colorspan2>{item.message}</Colorspan2></TextBox>
                        
                          )
                        })
                      } */}
        {listReducer.chatList !== undefined &&
          listReducer.chatList !== null &&
          listReducer.chatList.map((item, i) => {
            return localStorage.getItem("user-nickname") == item.sender ? (
              <TextBox key={uuidv4()}>
                <Colorspan>{item.message}</Colorspan>
              </TextBox>
            ) : (
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
          src={require("../chatting/chattingImg/iconSand.png")}
        /> */}
        <ArrowImg
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
