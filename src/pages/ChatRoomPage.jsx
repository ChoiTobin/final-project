import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import { useNavigate, useParams } from "react-router-dom";
import { __getinitialChatList, ListReducer } from "../redux/modules/chattingSlice";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import Modal2 from "../components/element/ChatModal/Modal2";
import { ReactComponent as BackArrow } from "../img/backarrow.svg";
import { ReactComponent as Send } from "../img/send.svg";

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
    <div>
      <div>
        <Modal2/>
        <div>
          {/* <Img
            onClick={() => navigate(-1)}
            src={require("../chatting/chattingImg/png-clipart-computer-icons-arrow-previous-button-angle-triangle.png")}
          /> */}
          <BackArrow onClick={() => navigate(-1)} />
        </div>
        <div>
          <span>{chatList.postNickname}</span>
          <span>30분 전 접속 </span>
        </div>
        <span>{/* 잠시주석 <Modal2></Modal2> */}</span>
      </div>
      <div>
        <div>
          <span>{chatList.postImg}</span>
        </div>
        <div>
          <span>{chatList.state}</span>
          <span>{chatList.title}</span>
          <span>{chatList.price}원</span>
        </div>
      </div>
      <div>날짜 오늘</div>
      <div sx={{ height: "80%", overflow: "scroll" }}>
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
            return localStorage.getItem("user-nickname") === item.sender ? (
              <div key={uuidv4()}>
                <span>{item.message}</span>
              </div>
            ) : (
              <div key={uuidv4()}>
                <span>{item.message}</span>
              </div>
            );
          })}

        <div ref={scrollRef}></div>
      </div>
      <div>
        <input
          value={chatBody}
          onKeyPress={appKeyPress}
          onChange={inputHandler}
        ></input>
        {/* <ArrowImg
          onSubmit={appKeyPress}
          onClick={onSubmitHandler}
          src={require("../chatting/chattingImg/iconSand.png")}
        /> */}
        {/* <ArrowImg
          onSubmit={appKeyPress}
          onClick={onSubmitHandler}
          src={require("../img/send.png")}
        /> */}
        <Send
          onSubmit={appKeyPress}
          onClick={onSubmitHandler}
        />
      </div>
    </div>
  );
}

export default ChatRoomPage;
