import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deleteMyPost, __getMyPost } from "../../redux/modules/mypageSlice";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import EditDetail from "./EditDetail";
import styled from "styled-components";
import { ReactComponent as DateColor } from "../../img/datecolor.svg"
import { ReactComponent as Edit } from "../../img/edit.svg";
import { ReactComponent as Delete } from "../../img/delete.svg";

// 내가 쓴 게시글 1개
const MyContent = ({ myPost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log("들어올까요", { myPost });

  const [modalOption, showModal] = useModal();

  const onClickModal = useCallback(() => {
    showModal(
      true,
      "게시글 수정하기",
      () => console.log("모달 ON"),
      null,
      <EditDetail/>
    )
  }, [modalOption])

  // 내가 쓴 글 삭제
  const onDeleteMyPost = (id) => {
    dispatch(__deleteMyPost(id));
    window.confirm("해당 게시글을 삭제하시겠습니까?");
    window.location.reload();
  };

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
                <Main
                  className="top-line"
                  onClick={() => {navigate(`/Detail/${post.id}`)}}
                >
                  <State>{post.state}</State>
                  <Title>{post.title}</Title>
                  <div>
                    <Date><DateColor/>&nbsp;{post.date}</Date>
                  </div>
                </Main>

                <Down className="bottom-line">
                  <CreatedAt>{post.createdAt}</CreatedAt>
                  <Icon>
                    {/* 여기서 수정하기 버튼을 누르면 "EditDetail.jsx"로 이동해야 한다 */}
                    <Edit onClick={onClickModal}/>
                    <Modal modalOption={modalOption} />

                    <Delete onClick={() => onDeleteMyPost(post.id)}/>
                  </Icon>
                </Down>
                
              </Content>
            );
          } else {
            return null;
          }
        })}
      </Layout>
      
    </>
  );
}

export default MyContent;

const Layout = styled.div`
  min-height: 225px;
  max-height: 226px;
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
  height: 66px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  margin: 9px auto 1.59px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 12px 40px 10.59px 38px;
`;

const Main = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const State = styled.span`
  color: #ed9071;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 15px;
  font-weight: 900;
  margin-right: 7px;
`;

const Title = styled.span`
  width: 130px;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 15px;
`;

const Date = styled.span`
  width: 75px;
  height: 12px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 10px;
  color: "#ED9071";
  margin-left: 19px;
`;

const Down = styled.div`
  display: flex;
  flex-direction: row;
  gap: 168px;
`;

const CreatedAt = styled.span`
  width: 73px;
  height: 12px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 10px;
  color: "#B0B0B0";
  margin-top: 10px;
`;

const Icon = styled.div`
  gap: 8.31px;
`;