import styled, { css } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { __CreateRoom } from "../../redux/modules/chattingSlice";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import Modal from "./modalfolder/Modal";
import { __getinitialChatList } from "../../redux/modules/chattingSlice";

import { postChat, clearChat } from "../../redux/modules/chattingSlice";
import GlobalHeaderChat from "./element/GlobalHeaderChat";
import { v4 as uuidv4 } from "uuid";
import { set } from "react-hook-form";
import moment from "moment";
import ChatSubmitBox from "./ChatSubmitBox";
import ChatCard from "./ChatCard";

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
    <>
      <input onChange={inputHandler}></input>
      <button onClick={onSubmitHandler}>버튼</button>

    {/* <div>
      <body>
        <header>
          <span>
          1
          </span>
          <span> 
              <span>하잇</span>
              <span>30분전 접속</span>
          </span>
          <Modal>        
          </Modal>
        </header>
        <middle>
            <span>사진</span>
            <span>
              <span>모집중</span>
              <span>12,000원</span>
            </span>
            <span>저와 산책같이...</span>
        </middle>
        <footer>
            <div>2022년 11월 1일</div>
            <div>대화배열로 뿌리기 맵 id값으로필터 왼쪽으로 css</div>
            <div>대화배열로 뿌리기 맵 id값으로필터 오른쪽으로 css색깔</div>
            <input>
            </input>
        </footer>

      </body>
    </div> */}
      {/* <GlobalHeaderChat />
      <StChatRoomPage>
        <StChatListContainer ref={listRef}>
          {chatList.map((chat) => {
            const convertToDate = new Date(chat.createdAt);
            console.log(convertToDate);
            moment.locale("ko");
            if (
              prevDate.current < convertToDate.getDate() ||
              prevDate.current == null
            ) {
              prevDate.current = convertToDate.getDate();
              return (
                <>
                  <p key={chat.chatId}>{moment(convertToDate).format("LL")}</p>
                  <ChatCardWrapper
                    key={chat.chatId}
                    author={
                      chat.memberId === parseInt(postId)
                        ? "me"
                        : "friend"
                    }
                  >
                    <ChatCard
                      author={
                        chat.memberId === parseInt(postId)
                          ? "me"
                          : "friend"
                      }
                      body={chat.content}
                      createdAt={
                        moment
                        (convertToDate).format("LT")}
                      nickname={chat.nickname}
                    />
                  </ChatCardWrapper>
                </>
              );
            } else {
              prevDate.current = convertToDate.getDate();
              return (
                <ChatCardWrapper
                  key={chat.chatId}
                  author={
                    chat.memberId === parseInt(postId) ? "me" : "friend"
                  }
                >
                  <ChatCard
                    author={
                      chat.memberId === parseInt(postId)
                        ? "me"
                        : "friend"
                    }
                    body={chat.content}
                    createdAt={
                      moment
                      (convertToDate).format("LT")}
                    nickname={chat.nickname}
                  />
                </ChatCardWrapper>
              );
            }
          })}
        </StChatListContainer>
        <ChatSubmitBox
          sock={sock}
          ws={ws}
          room={room}
          Access_Token={Access_Token}
          memberId={postId}
        />
      </StChatRoomPage> */}
    </>
  );
}

const StChatRoomPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

// display: flex;
// flex-direction: column-reverse;
const StChatListContainer = styled.div`
  width: 100vw;
  padding: 6rem 1rem;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column-reverse;
  p {
    align-self: center;
    margin-top: 20px;
    width: 60%;
    background-color: #ffffff88;
    border-radius: 15px;
    font-size: 0.9rem;
    padding: 2px 0;
    letter-spacing: 0.2rem;
    display: flex;
  }
`;
const ChatCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${({ author }) => {
    switch (author === "me") {
      case true:
        return css`
          justify-content: flex-end;
        `;
      default:
        return css`
          justify-content: flex-start;
        `;
    }
  }}
`;
export default ChatRoomPage;