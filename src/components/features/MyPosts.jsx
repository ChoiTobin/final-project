import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPost } from "../../redux/modules/mypageSlice";

// 내가 쓴 게시글 1개
const MyPosts = () => {
  const dispatch = useDispatch();
  const mypost = useSelector((state) => state.mypage.mypost)

  useEffect(() => {
    dispatch(__getMyPost());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div>
          <h3>{mypost.state}</h3>
          <span>{mypost.title}</span>
        </div>
        <span>{mypost.date}</span>
      </div>

      <span>{mypost.createdAt}</span>
    </div>
  );
}

export default MyPosts;