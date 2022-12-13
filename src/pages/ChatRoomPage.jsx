import styled from "styled-components";
import "../styles/ChatRoomPage.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import { useNavigate, useParams } from "react-router-dom";
import {
  __getinitialChatList2,
  ListReducer,
} from "../redux/modules/chattingSlice";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as BackArrow } from "../img/backarrow.svg";
import Modal2 from "../pages/ChatModal/Modal2";
import { off } from "process";
import { ReactComponent as Complete } from '../img/state-g.svg';
import imgDefault from "../img/user2.png";
function ChatRoomPage() {

  const { id } = useParams();
  const navigate = useNavigate();
  const sock = new SockJS(`${process.env.REACT_APP_URL}/ws/chat`);
  const ws = webstomp.over(sock);
  const dispatch = useDispatch();
  const room = useSelector((state) => state.chatting.room);

  useEffect(() => {
    //페이지가 마운트될때마다 띄어준후 연결 한뒤 나갓을때 끊어준다.
    //heelo

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
    }
  };

  //채팅 메시지 여러개로 나오는것 구독해체로 해결
  const inputHandler = (e) => {
    setChatBody(e.target.value);
  };

  const onSubmitHandler = (event) => {
    
    if (chatBody === "" ) {
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

  const [textareaHeight, setTextareaHeight] = useState({
    row: 1,
    lineBreak: {},
  });

  const resizeTextarea = (e) => {
    const { scrollHeight, clientHeight, value } = e.target;

    // 줄바꿈이 일어날 때
    if (scrollHeight > clientHeight) {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }

    // 텍스트 지워서 줄바꿈 지점에 도달했을 때
    if (textareaHeight.lineBreak[value.length]) {
      setTextareaHeight((prev) => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
  };

  const onKeyEnter = (e) => {
    if (e.code === "Enter") {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
      }));
    }
  };

  return (
    <div className="chattingContainer">
      <div className="Header">
        <div>
          <BackArrow
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="Nickname">
          {localStorage.getItem("user-nickname") === room.joinUserNickname
            ? room.postUserNickname
            : room.joinUserNickname}
        </div>
        {localStorage.getItem("user-nickname") === room.postUserNickname &&
        room.state !== "완료" ? (
          <Modal2 />
        ) : room.state === "완료" ? (
          <>
            <div className="flexZone">
              <div>
                <Complete />
              </div>
              <div>
                <div className="clearName">완료</div>
              </div>
            </div>
          </>
        ) : (
          <img alt="" />
        )}
      </div>

      {/* header */}
      <div className="row">
        <div className="flexBox">
          <div>
            {/* <img className="photoImg" src={require("../img/user.png")} alt="" /> */}
            {
              room.joinUserNickname == localStorage.getItem("user-nickname")
             ?

             <img className="photoImg2" src={(room.postUserImg !==null ? room.postUserImg:imgDefault)} alt="" />
             :

             <img className="photoImg2" src={(room.joinUserImg !== null ? room.joinUserImg: imgDefault)} alt="" />
            }
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
      {/* <div>
        {room !== undefined && room !== [] && (
          <>
            <div className="atTime">{dateString}</div>
          </>
        )}
      </div> */}

      {/* section 과 채팅 사이 시간*/}
      {/* <OverFlow sx={{ height: "80%", overflow: "scroll" }}> */}
      <OverFlow>
        <div className="chat-date">
          {room !== undefined && room !== [] && (
            <>
              <div className="atTime">{dateString}</div>
            </>
          )}
        </div>
        {room.chatList !== undefined &&
          room.chatList !== null &&
          room.chatList.map((item, i) => {
            return localStorage.getItem("user-nickname") === item.sender ? (
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
          placeholder="내용을 입력하세요"
        />
        {/* <InputText
          autoComplete="off"
          onChange={inputHandler}
          onKeyDown={onKeyEnter}
          row={textareaHeight.row}
          resizeTextarea={resizeTextarea}
        /> */}
        <img
          className="ArrowImg"
          onSubmit={appKeyPress}
          onClick={onSubmitHandler}
          src={require("../img/send.png")}
          alt=""
        />
      </div>
    </div>
  );
}

export default ChatRoomPage;

{
  /* footer */
}
const OverFlow = styled.div`
  width: 360px;
  height: 454px;
  background-color: #f6f0ee;
  opacity: 96%;
  overflow-x: hidden;
  overflow-y: auto;
  /* border: 2px solid cornflowerblue; */
  /* 스크롤바 영역에 대한 설정 */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤바 막대에 대한 설정 */
  ::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: #d8d8d8;
    border-radius: 20px;
  }

  /* 스크롤바 뒷 배경에 대한 설정 */
  ::-webkit-scrollbar-track {
    background-color: #f6f0ee;
  }
`;



const InputText = styled.textarea`
  all: unset;
  display: block;
  /* width: 100%; */
  width: 324.41px;
  height: ${({ row, theme }) => +theme.listSize * row + 4}px;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  resize: none;
  /* background-color: lightblue; */
  background-color: white;
  /* border: 1px solid #ed9071; */
  border-radius: 15px;
  padding: 5px 47.48px 0 12.93px;
  /* 스크롤바 영역에 대한 설정 */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* 스크롤바 막대에 대한 설정 */
  ::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: #d8d8d8;
    border-radius: 20px;
  }
  /* 스크롤바 뒷 배경에 대한 설정 */
  ::-webkit-scrollbar-track {
    background-color: #f6f0ee;
  }
`;
