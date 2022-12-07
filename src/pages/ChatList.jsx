import "../styles/ChatList.css";
import React, { useEffect } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Layouts from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __getinitialChatList2,
  __getRoomList,
} from "../redux/modules/chattingSlice";

const ChatList = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const Room = useSelector((state) => state.chatting.roomList);

  useEffect(() => {
    dispatch(__getRoomList());
  }, []);

  const onClickChatting = (item) => {
    navigator(`/ChatRoomPage/${item.roomId}`);
    setTimeout(function () {
      dispatch(__getinitialChatList2(item.roomId));
    }, 200);
  };

  //리스트방에서 빠져나오면 로컬스토리에서 최근 날짜 없앰 그리고 로컬스토리지 단한번 만실행
  //채팅 샌드할때
  return (
    <Layouts>
      <Header />

      <div className="line"></div>
      <div className="overflow">
        {Room !== undefined && Room !== null ? (
          Room.map((item, i) => {
            return (
              <div className="root" key={i}>
                <div className="flexDiv">
                  <img
                    className="Userimg"
                    src={require("../img/user.png")}
                    alt=""
                    onClick={() => onClickChatting(item)}
                  />
                  <div className="marginDiv">
                    <p
                      className="boldText"
                      onClick={() => onClickChatting(item)}
                    >
                      {
                        localStorage.getItem("user-nickname") ==
                        item.joinNickname
                          ? item.postNickname
                          : item.joinNickname
                        //내 아이디명이 아닌 상대방 아이디
                      }
                    </p>
                    <div
                      className="chatlength"
                      onClick={() => onClickChatting(item)}
                    >
                      {item.chatList[item.chatList.length - 1] !== undefined &&
                        item.chatList[item.chatList.length - 1].message}
                    </div>

                    <span className="whiteTime">
                      {item.chatList[item.chatList.length - 1] !== undefined &&
                        `${item.chatList[
                          item.chatList.length - 1
                        ].sendDate.substring(5, 7)}월`}
                      {item.chatList[item.chatList.length - 1] !== undefined &&
                        `${item.chatList[
                          item.chatList.length - 1
                        ].sendDate.substring(8, 10)}일`}
                    </span>
                  </div>
                  {item.post.image.length !== 0 && (
                    <img className="img" src={`${item.post.image[0].image}`} />
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div>채팅내역이 없습니다.</div>
            <button onClick={() => navigator(-1)}>이전으로</button>
          </>
        )}
      </div>
      <Footer />
    </Layouts>
  );
};
export default ChatList;
