import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deleteMyPost, __getMyPost } from "../../../redux/modules/mypageSlice";
import { ReactComponent as DateColor } from "../../../img/datecolor.svg";
import { ReactComponent as Edit } from "../../../img/edit.svg";
import { ReactComponent as Delete } from "../../../img/delete.svg";
import { ReactComponent as Dates } from "../../../img/date.svg";

// 내가 쓴 게시글 1개
const MyContent = ({ myPost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("들어올까요", { myPost });

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
                    onClick={() => {
                      navigate(`/Detail/${post.id}`);
                    }}
                  >
                    <State>{post.state}</State>
                    <Title>{post.title}</Title>
                    <div>
                      <Date>
                        <DateColor />
                        &nbsp;{post.date}
                      </Date>
                    </div>
                  </Main>

                  <Down className="bottom-line">
                    <CreatedAt>
                      <Dates />
                      {post.createdAt}
                    </CreatedAt>
                    <Icon>
                      {/* 여기서 수정하기 버튼을 누르면 "EditDetail.jsx"로 이동해야 한다 */}
                      <Edit />

                      <Delete onClick={() => onDeleteMyPost(post.id)} />
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
};

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
  padding: 14px 27.14px 14.68px 32.29px;
`;

const Main = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const State = styled.span`
  color: #ed9071;
  font-family: "Spoqa Han Sans Neo", sans-serif;
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
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  /* text-align: center; */
`;

const Date = styled.span`
  width: 38.5px;
  height: 12px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 11.93px;
  color: "#ED9071";
  /* margin-left: 19px; */
  gap: 3.94px;
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
