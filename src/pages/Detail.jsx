import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { __getDetail } from"../redux/modules/postSlice"
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import { __CreateRoom } from "../../src/redux/modules/chattingSlice"
import { ReactComponent as Date } from "../img/mainDate.svg";
import { ReactComponent as Place } from "../img/mainPlace.svg";
import { ReactComponent as Post } from "../img/post.svg";
import { ReactComponent as User } from "../img/user-post.svg";
import { ReactComponent as Back } from "../img/backarrow.svg";
import '../FullHTML.css'
const Detail = () => {
  const navigator = useNavigate();
  const {id}  = useParams()
  const dispatch = useDispatch()	
  const post = useSelector((state)=>state.post.post)
  console.log("post",post)	
  
  useEffect(() => {	
    dispatch(__getDetail(id));	
  }, [dispatch]);	
  
  const onClickMove = () => {
    navigator(-1);
    
  };

  const onClickChatting = (post) =>{
    dispatch(__CreateRoom({
      postId:post.id,
      postTitle:post.title,
      postNickName:post.nickname,
    }));
    // navigator(`/ChatRoomPage/${post.id}`);
    setTimeout(
      function () {
        // 연결되었을 때 콜백함수 실행
        navigator(`/ChatRoomPage/${id}`);
      },
      300 // 밀리초 간격으로 실행
    );
  }

  
  //채팅방 입장시 바로 연결이 안됨 데이터를 보내는게 이동하는것 보다 느려서 그럴거라 판단이되서 setTimeout을 줌
  
  
  return (
    <div>
      <Back onClick={onClickMove}/><Header />
      <div>
        <Carousel fade style={{ height: "196.37px" }}>
          {post.imgs !== undefined &&
            post.imgs.map((pic) => {
              if (post.imgs.length !== 0) {
                return (
                  <Carousel.Item>
                    <img src={pic} alt="postImg" />
                  </Carousel.Item>
                );
              }
            })}
        </Carousel>
        <div>
          <div>
            <span>
              {post.price !== undefined && (
                <>{post.price.toLocaleString("ko-KR")}원</>
              )}
            </span>
            <div>
              <span style={{ fontWeight: 600, color: "rgba(78, 78, 78, 1)" }}>
                {post.state}
              </span>
              <span>{post.title}</span>
            </div>
            <div>
              <div>
                <span>
                  {/* <img style={{marginRight:5}} src={require("../img/calender.png")} alt=""  />{post.date} */}
                  <Date />
                  &nbsp;
                  {post.date}
                </span>
                <span>
                  {/* <img style={{width:11,marginRight:5,marginLeft:10}} src={require("../img/markup.png")} alt=""  />{post.local} */}
                  <Place />
                  &nbsp;
                  {post.local}
                </span>
              </div>
              <span>{post.createdAt}</span>
            </div>
          </div>
          <hr/>
          <div>
            <Post style={{ margin: "13.93px 0 0 24.5px" }} />
            <div style={{ margin: "11.25px 0 0 8.1px" }}>
              {/* <img style={{marginRight:5}} src={require("../img/text.png")} alt=""  /> */}
              {post.content}
            </div>
          </div>
          <hr/>
          <div>
            {/* <Userimg style={{marginRight:5}} src={require("../img/user.png")} alt=""  /> */}
            <User style={{ width: "32.3px", height: "32.25px", margin: "11.15px 13.82px 11.24px 22.79px" }} />
            <div>
              <span>&nbsp;{post.nickname}</span>
              <span>⭐4.2</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <div type="button" onClick={() => onClickMove()}>
          이전버튼(크멍톡)
        </div> */}
        {/* <Button onClick={()=>onClickChatting(post)}>채팅하기</Button> */}
        {post.nickname === localStorage.getItem("user-nickname") ? null : (
          <button onClick={() => onClickChatting(post)}>크멍톡</button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Detail;

