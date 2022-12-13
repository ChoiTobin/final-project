import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deleteMyPost, __getMyPost } from "../../../redux/modules/mypageSlice";
import Edit from "../../../img/my-edit.png";
import Delete from "../../../img/my-delete.png";
import Dates from "../../../img/my-date.png";
import ModalPortal from "../../element/ModalPortal";
import EditDetail from "./EditDetail";
import "../../element/MyModal.css";

// 내가 쓴 게시글 1개
const MyContent = ({ myPost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // 내가 쓴 글 삭제
  const onDeleteMyPost = (id) => {
    dispatch(__deleteMyPost(id));
    window.confirm("해당 게시글을 삭제하시겠습니까?");
    // window.location.reload();
  };

  const status = (item) => {
    switch (item) {
      case "진행중":
        return "#ED9071";
      case "산책중":
        return "#4db173";
      case "완료":
        return "#AFAFAF";
      default:
        return null;
    }
  };

  const [modify, setModify] = useState(false);

  const openModifyModal = () => {
    setModify(true)
  }

  const closeModifyModal = () => {
    setModify(false)
  }

  // 내가 쓴 글 조회
  useEffect(() => {
    dispatch(__getMyPost());
  }, []);

  return (
    <>
      <Layout>
        {myPost !== undefined &&
          myPost.map((post) => {
            if (myPost.length !== 0) {
              return (
                <Content key={post.id}>
                  <div>
                    <Main
                      className="top-line"
                      onClick={() => {
                        navigate(`/Detail/${post.id}`);
                      }}
                    >
                      <State style={{ color: status(post.state) }}>
                        {post.state}
                      </State>
                      <Title>{post.title}</Title>
                    </Main>

                    <Down className="bottom-line">
                      <CreatedAt>
                        <img src={Dates} alt="" />
                        &nbsp;{post.date}
                        <span>{post.createdAt}</span>
                      </CreatedAt>
                    </Down>
                  </div>
                  <Icon>
                    {/* 여기서 수정하기 버튼을 누르면 "EditDetail.jsx"로 이동해야 한다 */}
                    <img
                      src={Edit}
                      alt=""
                      onClick={openModifyModal}
                      style={{ cursor: "pointer" }}
                    />
                    {modify && (
                      <ModalPortal>
                        <div className="MyModal">
                          <EditDetail onClose={closeModifyModal} />
                        </div>
                      </ModalPortal>
                    )}
                    <img
                      src={Delete}
                      alt=""
                      onClick={() => onDeleteMyPost(post.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </Icon>
                </Content>
              );
            } else {
              return null;
            }
          })}
      </Layout>
    </>
  );
};

export default MyContent;

const Layout = styled.div`
  min-height: 218px;
  max-height: 219px;
  overflow-x: hidden;
  overflow-y: auto;
  /* border: 2px solid #ed9071; */
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
  width: 355px;
  height: 66px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  margin: 9px auto 1.59px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 14px 27.14px 14.68px 32.29px;
  display: flex;
  flex-direction: row;
  gap: 33.72px;
`;

const Main = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const State = styled.span`
  /* color: #ed9071; */
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: 510;
  line-height: 16.71px;
  margin-right: 7px;
`;

const Title = styled.span`
  width: 160px;
  height: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
`;

const Down = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CreatedAt = styled.span`
  width: 129.49px;
  height: 12.01px;
  font-family: "Pretendard", sans-serif;
  font-size: 10px;
  color: "#B0B0B0";
  margin-top: 8.32px;
  gap: 18.84px;
  span {
    color: #606060;
    font-family: "Pretendard", sans-serif;
    font-size: 10px;
    line-height: 11.93px;
    margin-left: 10px;
  }
`;

const Icon = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
