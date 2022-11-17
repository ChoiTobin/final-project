import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __deleteMyPost, __getMyPost } from "../../redux/modules/mypageSlice";

// 내가 쓴 게시글 1개
// myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}]
const MyContent = ({ myPost }) => {
  const dispatch = useDispatch();
  console.log("들어올까요", { myPost });

  // 내가 쓴 글 삭제
  const onDeleteMyPost = (id) => {
    dispatch(__deleteMyPost(id));
    window.alert("해당 게시글을 삭제하시겠습니까?");
    window.location.reload();
  };

  // 내가 쓴 글 조회
  useEffect(() => {
    dispatch(__getMyPost());
  }, []);

  return (
    <>
      {myPost !== undefined &&
        myPost.map((post) => {
          if (myPost.length !== 0) {
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
                <button>수정하기</button>
                <button onClick={() => onDeleteMyPost(myPost.id)}>
                  삭제하기
                </button>
              </div>
            );
          } else {
            return null;
          }
        })}
    </>
  );
}

export default MyContent;