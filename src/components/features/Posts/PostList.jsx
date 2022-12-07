import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __getPostTime,
} from "../../../redux/modules/postSlice";
import "../../../App.css";
import { useInView } from "react-intersection-observer";
import "../../../styles/postlist.css";
const PostList = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState();
  const [ref, inView] = useInView();

  // 서버에서 아이템을 가지고 오는 함수

  const getItems = useCallback(async () => {
    if (localStorage.getItem("전체검색") === "전체") {
      dispatch(__getPostTime(page));
    }
  }, [page]);

  //스크롤내릴때 전체보기 인식 어느페이지에서든 조건 붙여서 전체보기 일때만 실행

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);
  return (
    <div className="postwrap">
      {posts !== undefined &&
        posts.map((post) => {
          return (
            <div
              className="listwrap"
              key={post.idx}
              onClick={() => {
                navigator(`/Detail/${post.id}`);
              }}
            >
              <div className="text-box">
                <h3>{post.category}</h3>
                <div className="txt">
                  {post.state}
                  <p>{post.title}</p>
                </div>
                <p>{post.createdAt}</p>
              </div>
              <div className="text-box flexbox">
                <div className="date">
                  <p>
                    <img src={require("../../../img/calender.png")} alt="" />
                    {post.date}
                  </p>
                  <p>
                    <img src={require("../../../img/markup.png")} alt="" />
                    {post.local}
                  </p>
                </div>
                <p className="price">{post.price.toLocaleString("ko-KR")}원</p>
              </div>
            </div>
          );
        })}
      <div ref={ref}></div>
    </div>
  );
};
export default PostList;

const Layouts = styled.div`
  width: 360px;
  height: 315.96px;
  margin: 32.17px auto 0;

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
  cursor: pointer;
`;

const Body = styled.div`
  background-color: #fff;
  width: 360px;
  height: 100.53px;
  margin: 9px auto 10.47px;
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  width: 317.36px;
  height: 72.23px;
  margin: auto;
`;

const Top = styled.div`
  width: 313px;
  height: 46px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 143px;
`;

const TopLeft = styled.div`
  width: 300px;
  height: 44.78px;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 16.24px;
`;

const Category = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 13.53px;
  margin-bottom: 4px;
  margin-top: -5px;
`;

const State = styled.div`
  color: #FD9071;
  font-weight: 700;
  font-size: 15px;
  line-height: 16.24px;
  margin-bottom: 2px;
`;

const Title = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  font-weight: 450;
  line-height: 16.24px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2.78px;
`;

const Created = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  font-weight: 300;
  line-height: 10.74px;
  margin-bottom: 9.87px;
`;

const When = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  font-weight: 300;
  line-height: 10.74px;
`;

const Places = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  font-weight: 300;
  line-height: 10.74px;
`;

const Price = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
`;

const Down = styled.div`
  /* background-color: lightcoral; */
  width: 317.9px;
  height: 27.95px;

  font-family: "Pretendard", sans-serif;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 84px;
`;

const DownLeft = styled.div`
  /* background-color: lightyellow; */
  width: 150px;
  height: 17px;

  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 11px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  font-size: 10px;
  gap: 8px;
  margin-top: -5px;
`;

const DownRight = styled.div`
  background-color: #ed9071;
  width: 83.9px;
  height: 27.95px;
  line-height: 19px;
  border-radius: 2px;

  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
`;