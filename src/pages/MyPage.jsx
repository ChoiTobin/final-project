import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Delete } from "../img/delete.svg";
import { ReactComponent as Edit } from "../img/edit.svg";
import { __getMyPost } from "../redux/modules/mypageSlice";
import Profile from "../components/features/Profile";
import Detail from "../pages/Detail";

// 전체 마이페이지 뷰
const MyPage = () => {
  const dispatch = useDispatch();
  // const myInfos = useSelector((state) => state.mypage.profile);

  // 작성한 내용 GET으로 가져와서 뿌려주기
  useEffect(() => {
    dispatch(__getMyPost());
  }, [dispatch]);
  
  return (
    <div>
      {/* Profile.jsx에서 유저 닉네임 + 반려동물 정보 import해서 가지고 옴 */}
      <div className="profile">
        {/* <Profile key={myInfos.userId} myInfos={myInfos} /> */}
      </div>
      {/* 내가 쓴 글만 마이페이지에서 보기 + 수정/삭제 */}
      <MyPost className="myPost">
        <div>
          <h3>My Post</h3>
        </div>
        {/* 게시글 목록 리스트 + 제목 클릭하면 게시글 상세로 + 수정은 수정페이지로 navigate + 삭제는 confirm */}
        {/* <PostList>
          {myInfos.map((post) => {
            if (post.length !== 0)
              return (
                <div>
                  <Detail key={post.postId} post={post} />
                  <button>
                    삭제버튼 아이콘
                    <Delete />
                  </button>
                  <button>
                    수정버튼 아이콘
                    <Edit />
                  </button> */}
                </div>
              );
          })}
          <div></div>
        </PostList> */}
      </MyPost>
    </div>
  );
};

export default MyPage;

const MyPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: row;
`;
