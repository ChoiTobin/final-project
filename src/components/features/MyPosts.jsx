import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getMyPost } from "../../redux/modules/mypageSlice";

// 내가 쓴 게시글 1개
// myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}]
const MyPosts = ({ myPost }) => {

  const dispatch = useDispatch();

  // 내가 쓴 글 조회
  useEffect(() => {
    dispatch(__getMyPost);
  }, [dispatch]);

  return (
    <>
      {myPost !== undefined &&
        myPost.map((post) => {
          return (
            <div key={post.id}>
              <div className="top-line">
                <span>{post.state}</span>
                <span>{post.title}</span>
                <div>
                  <span>{post.date}</span>
                </div>
              </div>

              <div className="bottom-line">
                <span>{post.createdAt}</span>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default MyPosts;