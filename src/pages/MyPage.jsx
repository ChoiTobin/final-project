import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import styled from "styled-components";
import { ReactComponent as Delete } from "../img/delete.svg";
import { ReactComponent as Edit } from "../img/edit.svg";
import { __getMyPage, __getMyPost } from '../redux/modules/mypageSlice';

const MyPage = () => {
  const [rate, setRate] = useState()

  const onChangeRate = (event) => {
    const { name, value } = event.target;
    setRate({...rate, [name]: value})
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickEdit = () => {
    navigate(`/profileedit`);
  };

  useEffect(() => {
    dispatch(__getMyPage())
  }, [dispatch])

  useEffect(() => {
    dispatch(__getMyPost())
  }, [dispatch])

  return (
    <div>
      <div>
        <EditProfile onClick={() => onClickEdit()}>프로필 수정</EditProfile>
      </div>
      <div className="profile">
        <Account className="top-info">
          <div>
            <UserImg
              src="https://cdn-icons-png.flaticon.com/512/366/366266.png"
              alt="profile"
            />
          </div>
          <div className="name">
            <h2>푸딩이언니</h2>
            <h3>푸딩</h3>
            <span>푸들/3살/소형견</span>
          </div>
        </Account>
        <UserRate className="rateSelect">
          <span>평점 :&nbsp;&nbsp;</span>
          <select onChange={onChangeRate}>
            <option name="1" value="1">
              ⭐
            </option>
            <option name="2" value="2">
              ⭐⭐
            </option>
            <option name="3" value="3">
              ⭐⭐⭐
            </option>
            <option name="4" value="4">
              ⭐⭐⭐⭐
            </option>
            <option name="5" value="5">
              ⭐⭐⭐⭐⭐
            </option>
          </select>
        </UserRate>

        <MyPost className="myPost">
          <div>
            <h3>My Post</h3>
          </div>
          <PostList>
            <span>포스팅 제목</span>
            <div>
              <button>
                <Delete />
              </button>
              <button>
                <Edit />
              </button>
            </div>
          </PostList>
        </MyPost>
      </div>
    </div>
  );
}

export default MyPage ;

const Account = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const UserImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const EditProfile = styled.button`
  float: right;
`;

const UserRate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px 0 20px 80px;
`;

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