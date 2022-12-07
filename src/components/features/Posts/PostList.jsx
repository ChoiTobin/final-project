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
