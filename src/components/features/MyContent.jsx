import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deleteMyPost, __getMyPost } from "../../redux/modules/mypageSlice";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import EditDetail from "./EditDetail";

// 내가 쓴 게시글 1개
// myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}]
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
                {/* 여기서 수정하기 버튼을 누르면 "EditDetail.jsx"로 이동해야 한다 */}
                <button onClick={onClickModal}>수정하기</button>
                <Modal modalOption={modalOption} />

                <button onClick={() => onDeleteMyPost(post.id)}>
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