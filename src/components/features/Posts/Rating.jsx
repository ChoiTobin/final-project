import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux"
import postSlice, { __getPostRating, __getPostTime  } from "../../redux/modules/postSlice"

const ARRAY = [0, 1, 2, 3, 4];

function Search() {
  const dispatch = useDispatch()
  // const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [clicked, setClicked] = useState([1,2,3,4,5]);
  console.log("별:",clicked)
  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  
  //postUserId: rating: 바디값으로 보내준다
  
  const onClickRating = () => {
    dispatch(__getPostRating());
  } 
  // 채팅방에서 완료버튼을 눌렀을때 평점모달이 뜨고 평점남기기를 눌러야 서버로 완료라는걸 보내서 
  // 평점을 보내주고 상태값을 바꾼다 
  // 평점숫자로 나오는건 백에서 보여줄것같다는 예상 .. 4점
  
  return (
    <Wrap>
      <RatingText>평가하기</RatingText>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
      </Stars>
      <button type="button" onClick={onClickRating}>평점남기기</button>
    </Wrap>
  );
}

export default Search;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;