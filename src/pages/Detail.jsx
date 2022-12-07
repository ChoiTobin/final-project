import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styled from "styled-components";
import { __getDetail } from"../redux/modules/postSlice"
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import { __CreateRoom } from "../../src/redux/modules/chattingSlice"
import { ReactComponent as Date } from "../img/post-date.svg";
import { ReactComponent as Place } from "../img/post-local.svg";
import { ReactComponent as Post } from "../img/post-content.svg";
import { ReactComponent as User } from "../img/user-post.svg";
import '../FullHTML.css'
const Detail = () => {
  const navigator = useNavigate();
  const {id}  = useParams()
  const dispatch = useDispatch()	
  const post = useSelector((state)=>state.post.post)



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
    <Layout>
      <Header />
      <Container>
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
        <Content>
          <Top>
            <Price>
              {post.price !== undefined && (
                <>{post.price.toLocaleString("ko-KR")}원</>
              )}
            </Price>
            <Title>
              <span style={{ fontWeight: 600, color: "rgba(78, 78, 78, 1)" }}>
                {post.state}
              </span>
              <span>{post.title}</span>
            </Title>
            <Info>
              <Plan>
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
              </Plan>
              <span>{post.createdAt}</span>
            </Info>
          </Top>
          <Hr/>
          <Body>
            <Post style={{ margin: "13.93px 0 0 24.5px" }} />
            <div style={{ margin: "11.25px 0 0 8.1px" }}>
              {/* <img style={{marginRight:5}} src={require("../img/text.png")} alt=""  /> */}
              {post.content}
            </div>
          </Body>
          <Hr/>
          <Profile>
            {/* <Userimg style={{marginRight:5}} src={require("../img/user.png")} alt=""  /> */}
            <User style={{ width: "32.3px", height: "32.25px", margin: "11.15px 13.82px 11.24px 22.79px" }} />
            <MyInfo>
              <span>&nbsp;{post.nickname}</span>
              <span>⭐4.2</span>
            </MyInfo>
          </Profile>
        </Content>
      </Container>
      <ChatBtn>
        {/* <div type="button" onClick={() => onClickMove()}>
          이전버튼(크멍톡)
        </div> */}
        {/* <Button onClick={()=>onClickChatting(post)}>채팅하기</Button> */}
        {post.nickname === localStorage.getItem("user-nickname") ? null : (
          <button onClick={() => onClickChatting(post)}>크멍톡</button>
        )}
      </ChatBtn>
      <Footer />
    </Layout>
  );
}

export default Detail;

const Layout = styled.div`
  width: 360px;
  height: 640px;
  margin: auto;
  background-color: #f6f0ee;
`;

const Container = styled.div`
  width: 360px;
  /* height: 466.38px; */
  height: 473.38px;
  overflow-x: hidden;
  overflow-y: auto;
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

const Content = styled.div`
  width: 360px;
  height: 270.01px;
`;

const Top = styled.div`
  height: 83.14px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 11.24px 0 5.79px 22.79px;
`;

const Price = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 19.09px;
  color: #ED9071;
  margin: 11.24px 0 7.43px 0;
`;

const Title = styled.div`
  width: 340px;
  height: 83.14px;
  span {
    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin: 7.43px 5px 5.5px 0;
    color: rgba(40, 40, 40, 1);
  }
`;

const Info = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 16.26px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 110px;
`;

const Plan = styled.div`
  span {
    align-items: center;
    justify-content: flex-end;
    margin-right: 8.43px;
  }
`;

const Hr = styled.hr`
  width: 360px;
  border: 0.24px solid #EE8B6A;
`

const Body = styled.div`
  width: 340px;
  min-height: 131.42px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 15.54px;
`;

const Profile = styled.div`
  width: 340px;
  height: 55.05px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 15.51px;
  color: rgba(78, 78, 78, 1);
  gap: 5px;
`;

const ChatBtn = styled.div`
  button {
    width: 360px;
    height: 47.8px;
    color: #fff;
    background-color: #ed9071;
    border: none;
    font-family: "Pretendard", sans-serif;
    font-size: 19px;
    font-weight: 700;
    line-height: 19.09px;
    letter-spacing: 0.055cm;
  }
`;

