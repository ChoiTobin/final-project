import styled, { css } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { __CreateRoom } from "../../redux/modules/chattingSlice";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";

import { postChat, clearChat } from "../../redux/modules/chattingSlice";
import GlobalHeaderChat from "./element/GlobalHeaderChat";
import { v4 as uuidv4 } from "uuid";
import { set } from "react-hook-form";
import moment from "moment";
import ChatSubmitBox from "./ChatSubmitBox";
import ChatCard from "./ChatCard";

function ChatRoomPage() {
  const {id}  = useParams()

  const sock = new SockJS("http://54.180.92.242:8080/ws/chat");
  const ws = webstomp.over(sock);
  //0.소켓 연결


  // access-token
  // const Access_Token = localStorage.getItem("Access_Token");
  let subscription;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // // stompClient
  // const stompClient = useRef(null);
  // //
  // const prevDate = useRef(0);
  // // 채팅 내역 리스트
  // //주석 const listRef = useRef();

  // // 방
  // const [room, setRoom] = useState();
  

  const chatList = useSelector((state) => state.chatting.chatList);

  // useEffect(() => {
  // dispatch(__CreateRoom({name:"dkdkdk"}));
  // }, []);
  //1.방생성 받는 data:id와 name id=숫자


  //드려야할것 방생성할때 postid=URLparams값,title,엑세스토큰



  // const member = localStorage.getItem("user-nickname");
  // const obj = JSON.parse(member);
  // const 
  //login memberid가 어떻게되는지?
  // const loginMemberId = member;

  // const postId = localStorage.getItem("user-nickname");

  //id:nickname


  // 컴포넌트 마운트시에 소켓 연결 , 채팅방 생성
//   useEffect(() => {

//     dispatch(__CreateRoom({name:"dkdkdk"}));
// //
//     //방생성****** 확인 완료.
// // dispatch(__getinitialChatList(postId));
// // wsConnectSubscribe()
//  //주석풀기 waitForConnection(ws, wsConnectSubscribe());
//     // makeRoom();

//     return () => {
//       // 주석풀기wsDisConnectUnsubscribe();

//     };
//   }, []);
  // useEffect(() => {
  //   listRef.current.scrollTop = listRef.current.scrollHeight;
  // }, [chatList]);

  // 웹소켓 연결, 구독
  

  // let headers = { 
  //   Access_Token: localStorage.getItem('Access_Token')
  // };
  // 헤더 주석풀기 75~94
  // console.log('헤더스',headers.Acc)
  // function wsConnectSubscribe() {
  //   try {
  //     ws.connect(headers,
  //       () => {
  //         // 채팅방 만들기(memberId) -> 방 만드는 사람의 아이디(로그인한 사람의 아이디)
  //         // send랑 똑같은 멤버 아이디
  //         let num = 0;
  //         const chatroom = ws.subscribe(
  //           `/sub/room/founder/${loginMemberId}`,
  //           function (frame) {
  //             //주석풀기 const data = JSON.parse(frame.body);
  //             // const roomId = data.roomInfoId;
  //             // num = roomId;
  //             // setRoom(num);
  //             // console.log(num);
  //           }
  //         );
// 주석 풀기 95~126 setTimeout
          // setTimeout(() => {
          //   chatroom.unsubscribe();
          //   subscription = ws.subscribe(
          //     `/sub/chat/room/${num}`,
          //     function (frame) {
          //       dispatch(postChat(JSON.parse(frame.body)));
          //       console.log(frame);
          //     },
          //     {
          //       Access_Token: Access_Token,
          //     },
          //     function (payload) {
          //       console.log(payload);
          //       ws.disconnect();
          //     }
          //   );
          //   return () => {
          //     dispatch(clearChat());
          //     prevDate.current = null;
          //     const headers = { postId: postId, room: room };
          //     subscription.unsubscribe(headers);
          //     ws.current.disconnect();
          //   };
          // }, 500);
  //       },
  //       [dispatch]
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // 연결해제, 구독해제 주석풀기 128-140
  // function wsDisConnectUnsubscribe() {
  //   try {
  //     ws.disconnect(
  //       () => {
  //         ws.unsubscribe("sub-0");
  //       },
  //       { Access_Token: Access_Token }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // 웹소켓이 연결될 때 까지 실행하는 함수 주석풀기 142-156
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

  // 방 생성하기 주석 158-195
  // function makeRoom() {
  //   try {
  //     // token이 없으면 로그인 페이지로 이동
  //     if (!Access_Token) {
  //       alert("토큰이 없습니다. 다시 로그인 해주세요.");
  //       navigate("/login");
  //     }
  //     // 데이터 보내기
  //    // waitForConnection(ws, function () {
  //       // 초대하는 사람의 멤버 아이디
  //       // 방을 만드는 사람(로그인한 사람) , 두번째가 초대되는 사람(글 쓴 사람) , 초대되는사람 닉네임
  //       // postId 추가
  //       ws.send(
  //         `/pub/room/founder/${postId}`,
  //         JSON.stringify({
  //           // memberId: localStorage.getItem("itemMemberId"),
  //           // nickname: localStorage.getItem("user-nickname"),
  //           postId: localStorage.getItem("postId"),
  //           // title: localStorage.getItem("title"),
  //         }),
  //         {
  //           Access_Token: Access_Token,
  //         }
  //       );
        
  //       // 채팅만든 사람의 memberId 방에 들어가있는 리스트
  //       // ws.send(`/pub/room/15`, {}, { token: token });
  //       // console.log(ws.ws.readyState);
  //   //  });
  //   } catch (error) {
  //     console.log(error);
  //     console.log(ws.ws.readyState);
  //   }
  // }
   //주석 useEffect(() => {
    //주석  listRef.current.scrollTop = listRef.current.scrollHeight;
   //주석 }, [chatList]);

  return (
    <>
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