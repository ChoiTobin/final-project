import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deleteMyPost, __getMyPost } from "../../../redux/modules/mypageSlice";
import { ReactComponent as Edit } from "../../../img/edit.svg";
import { ReactComponent as Delete } from "../../../img/delete.svg";
import { ReactComponent as Dates } from "../../../img/myDate.svg";
import ModalPortal from "../../element/ModalPortal";
import EditDetail from "./EditDetail";
import "../../element/MyModal.css";

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
      <div>
        {myPost !== undefined &&
          myPost.map((post) => {
            if (myPost.length !== 0) {
              return (
                <div key={post.id}>
                  <div>
                    <div
                      className="top-line"
                      onClick={() => {
                        navigate(`/Detail/${post.id}`);
                      }}
                    >
                      <div
                        style={
                          post.state
                            ? { color: "#ED9071" }
                            : { color: "#A1A1A1" }
                        }
                      >
                        {post.state}
                      </div>
                      <span>{post.title}</span>
                    </div>

                    <div className="bottom-line">
                      <div>
                        <Dates />
                        &nbsp;{post.date}
                        <span>{post.createdAt}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* 여기서 수정하기 버튼을 누르면 "EditDetail.jsx"로 이동해야 한다 */}
                    <Edit
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
                    <Delete
                      onClick={() => onDeleteMyPost(post.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </>
  );
};

export default MyContent;
