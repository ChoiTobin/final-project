import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import {
  __getinitialChatList2,
  ListReducer,
} from "../redux/modules/chattingSlice";
import { v4 as uuidv4 } from "uuid";
import Modal2 from "../pages/ChatModal/Modal2";
import { off } from "process";
import { ReactComponent as BackArrow } from "../img/header-backarrow.svg";
import { ReactComponent as Send } from "../img/send.svg";
import { ReactComponent as User } from "../img/user-chat.svg";
import "../styles/ChatRoomPage.css";

function ChatRoomPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const sock = new SockJS(`${process.env.REACT_APP_URL}/ws/chat`);
  const ws = webstomp.over(sock);
  const dispatch = useDispatch();
  const room = useSelector((state) => state.chatting.room);

  useEffect(() => {
    //페이지가 마운트될때마다 띄어준후 연결 한뒤 나갓을때 끊어준다.

    dispatch(__getinitialChatList2(id));
    wsConnectSubscribe();
    return () => {
      onbeforeunloda();
    };
  }, [room.roomId]);

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
        ws.subscribe(`/sub/${room.roomId}`, (response) => {
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
  } //stomp 메시지 에러 waitForConnection함수로 해결

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
        `/pub/${room.roomId}`,
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
        block: "end",
        inline: "nearest",
      });
    }
  }, [room]);
  //채팅창 치면 맨 밑으로 내려감.

  const original = `${room.price}`;
  const fomatting = original.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //가격 3째자리수 마다 ,붙이는 정규식

  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  let dateString = year + "-" + month + "-" + day;

  return (
    <div className="LoginContainer">
      <div className="Header">
        <div>
          <BackArrow onClick={() => navigate(-1)} />
        </div>
        <div className="Nickname">
          {localStorage.getItem("user-nickname") == room.joinNickname
            ? room.postNickname
            : room.joinNickname}
        </div>
        <Modal2></Modal2>
      </div>
      {/* header */}
      <div className="row">
        <div className="flexBox">
          <div>
            {/* <img className="photoImg" src={require("../img/user.png")} alt=""  /> */}
            <User />
          </div>
          <div>
            <div className="flexBox2">
              <span className="colorSpan">{room.state}</span>
              <span className="colorSpan2">{room.title}</span>
            </div>
            <div className="marginBottom">
              <span className="colorSpan3">{fomatting}원</span>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <div>
        {room !== undefined && room !== [] && (
          <>
            <div className="atTime">{dateString}</div>
          </>
        )}
      </div>

      {/* section 과 채팅 사이 시간*/}
      <OverFlow sx={{ height: "80%", overflow: "scroll" }}>
        {room.chatList !== undefined &&
          room.chatList !== null &&
          room.chatList.map((item, i) => {
            return localStorage.getItem("user-nickname") == item.sender ? (
              <div className="textBox" key={uuidv4()}>
                <div className="textColorDiv2">{item.message}</div>
              </div>
            ) : (
              <div className="textBox" key={uuidv4()}>
                <div className="textColorDiv">{item.message}</div>
              </div>
            );
          })}
        <div ref={scrollRef}></div>
      </OverFlow>
      <div className="foot">
        <input
          className="INPUT"
          value={chatBody}
          onKeyPress={appKeyPress}
          onChange={inputHandler}
        ></input>
        {/* <img className="ArrowImg"
      onSubmit={appKeyPress}
      onClick={onSubmitHandler}
      src={require("../img/send.png")}/> */}
        <Send onSubmit={appKeyPress} onClick={onSubmitHandler} />
      </div>
    </div>
  );
}
export default ChatRoomPage;

const LoginContainer = styled.div`
  width: 340px;
  height: 640px;
  background-color: #f6f0ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Header = styled.div`
  border-bottom: 1px solid #ed9071;
  width: 340px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 22.79px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Btn = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  border-bottom: 1px solid rgba(237, 144, 113, 0.41);
`;

const Time = styled.span`
  font-size: 6px;
`;
const Nickname = styled.p`
  font-weight: bold;
  font-size: 15px;
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
  /* padding: 4px; */
  min-height: 20.26px;
  width: 318.82px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
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
  /* background: #f6f0ee; */
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
  font-size: 16px;
  font-weight: 900;
  line-height: 15.51px;
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

const Chating = styled.div`
  height: 400px;
  over-flow: hidden;
  background-color: #ffecef;
  text-align: center;
  line-height: 400px;
`;
