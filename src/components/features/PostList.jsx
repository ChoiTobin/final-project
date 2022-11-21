import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  __getDetail,
  __getPostTime,
  __deletePost,
} from "../../redux/modules/postSlice";

const PostList = ({ searchposts, posts }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = useState(0); //페이지수
  const [size, setSize] = useState([]); //리스트수
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  /**  서버에서 아이템을 가지고 오는 함수 */
  const getItems = useCallback(async () => {
    dispatch(__getPostTime(page));
  }, [page]);

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
    setSize(posts);
    // console.log("size", size)
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading && size !== posts) {
      setPage((prevState) => prevState + 1);
      // console.log("페이지",page)
    }
  }, [inView, loading]);

  return (
    <>
      {searchposts && searchposts.Length !== 0
        ? searchposts.map((post) => {
            return (
              <div key={post.id}>
                <ul>
                  <li>
                    {post.state},{post.title}
                  </li>
                  <li>{post.content}</li>
                  <li>{post.category}</li>
                  <li>{post.price}원</li>
                  <li>{post.date}</li>
                  <li>{post.local}</li>
                  <li>{post.createdAt}</li>
                </ul>
              </div>
            );
          })
        : posts.map((post) => {
            // if (post.length !== 0)
            return (
              <div
                onClick={() => {
                  navigator(`/Detail/${post.id}`);
                }}
                key={post.id}
              >
                <ul>
                  <li>
                    {post.state},{post.title}
                  </li>
                  <li>{post.content}</li>
                  <li>{post.category}</li>
                  <li>{post.price}원</li>
                  <li>{post.date}</li>
                  <li>{post.local}</li>
                  <li>{post.createdAt}</li>
                  <li>{post.nickname}</li>
                </ul>
              </div>
            );
          })}
      <div ref={ref}></div>
    </>
  );
};
export default PostList;
//
