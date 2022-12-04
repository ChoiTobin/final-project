import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RunPet } from "../img/introImg.svg";
import { ReactComponent as NavArrow } from "../img/nav-arrow.svg";

const Desc = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <span>
          산책 맡기고 싶은데 안심할 수 있는
          사람을 찾고 싶을 떄가 있으셨나요?
        </span>
        <span>
          크멍을 통해 믿고 맡기고,
          소소한 재능 나눔으로 페이까지!
        </span>
      </div>
      <RunPet style={{ width: "135.02px", height:"135.02px" }} />
      <div>
        <span onClick={() => navigate('/signin')}>바로 크멍 시작하기 <NavArrow/></span>
      </div>
    </div>
  )
}

export default Desc;
