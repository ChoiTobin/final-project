import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as RunPet } from "../img/introImg.svg";
import { ReactComponent as NavArrow } from "../img/navarrow.svg";

const Desc = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        <Title>
          산책 맡기고 싶은데 안심할 수 있는
          사람을 찾고 싶을 떄가 있으셨나요?
        </Title>
        <Explain>
          크멍을 통해 믿고 맡기고,
          소소한 재능 나눔으로 페이까지!
        </Explain>
      </div>
      <RunPet style={{ width: "135.02px", height:"135.02px" }} />
      <div>
        <Move onClick={() => navigate('/signin')}>바로 크멍 시작하기 <NavArrow/></Move>
      </div>
    </Layout>
  )
}

export default Desc;

const Layout = styled.div`
  width: 360px;
  height: 640px;
  background-color: #f6f0ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Title = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20.03px;
  color: #434343;
`;

const Explain = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15.02px;
  color: #434343;
`;

const Move = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 25.04px;
  color: #ED9071;
`;