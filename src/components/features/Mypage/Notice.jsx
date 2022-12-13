import React from "react";
import styled from "styled-components";

const Notice = ({ onClose }) => {

  return (
    <Layout>
      <Wrap>
        <Notiee>
          <span>공지</span>
          <p>리뉴얼 업데이트 1.4v 관련</p>
        </Notiee>
        <Content>
          <span
            style={{ color: "#ED9071", fontWeight: 700, marginBottom: "10px" }}
          >
            크멍 런칭 및 1.4v 업데이트
          </span>
          <div>
            <span>
              <br />
              주변 이웃에게 반려동물을 부탁하기
            </span>
            <p>
              <br />
              포스팅을 작성하면, 내 주변의 이웃들이 나의 반려동물을 소중하게
              보살펴 준답니다! 이제 더 이상 반려동물과 떨어져 지내는 시간에
              미안해 하지 않으셔도 돼요! 이웃끼리 서로 품앗이를 하며 소중한
              가족인 반려동물을 같이 보살펴주는 건 어떨까요? 지금 바로 글을
              작성해 보세요 :D
            </p>
            <span>
              작성자와 1:1 채팅으로 더 빠르게 대화하며 일정을 조율해 보세요
            </span>
            <p>
              <br />
              작성자가 답을 줄 때까지 기다리지 않으셔도 괜찮아요! 실시간으로
              주고받는 채팅을 통해 빠르고 원활한 소통으로 새로운 일을
              시작해보세요.
            </p>
            <span>
              채팅방 내에서 수락 결정하고, 부탁한 일이 끝나면 바로 확인버튼으로
              간편하게~
            </span>
            <p>
              <br />
              일일히 모든 게시글을 찾아다니면서 수락여부와 연락들을 찾아볼 필요
              없어요+_+ 채팅 목록에서 내가 연락한 작성자 혹은 지원자와의
              대화목록을 확인해보세요. 채팅방 내에서 서로 대화하면서 일을
              진행하기로 했다면, 작성자는 채팅방 안의 수락버튼만 바로 누르면 끝!
              진행상황과 내 반려동물의 상태를 지속적으로 확인하면서 일이 잘
              마무리되었다면, 채팅방 상단에 있는 완료버튼을 누르면 서로에 대한
              평가를 할 수 있어요. 이번 부탁이 정말 마음에 들었다! 이 분은 정말
              내 가족처럼 잘 봐주신다! 하는 분을 만났다면, 별점 가득 채워서
              고마움을 표시해봐요👍
            </p>
            <span>크멍에게 바라는 점이 있다면 언제든 환영이예요!</span>
            <p>
              <br />
              크멍을 아껴주시는 마음을 담아 얘기해 주고 싶으시다면, 아래의
              만족도 설문지를 작성해 주세요! 추첨을 통해 푸짐한 상품도 제공되니
              꼭 참여해보세요😉
            </p>
            <hr />
            <br />
            <a href="https://www.instagram.com/cmung.official/">
              👉 크멍 인스타그램 바로 구경가기
            </a>
            <br/>
            <a href="https://docs.google.com/forms/d/1qO48wO5tJs4BBI_q1dtGqW528xcotdkKCvRcP5PXoNU/edit?ts=6392d6ef">
              👉 크멍에게 이용경험 말해주기
            </a>
          </div>
        </Content>
      </Wrap>
      <Btns>
        <Button onClick={onClose}>닫기</Button>
      </Btns>
    </Layout>
  );
}

export default Notice;

const Layout = styled.div`
  width: 330px;
  height: 250px;
  margin: auto;
  background-color: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Notiee = styled.div`
  width: 314.39px;
  height: 27.84px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20.07px;
  border-radius: 4px;

  cursor: pointer;

  span {
    font-family: "Pretendard", sans-serif;
    font-size: 15px;
    font-weight: 900;
    line-height: 15.51px;
    color: rgba(238, 139, 106, 1);
  }

  p {
    font-family: "Pretendard", sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 15.51px;
    color: rgba(79, 79, 79, 1);

    margin-left: 30.84px;
    margin-top: 15px;
  }
`;

const Content = styled.div`
  width: 298.45px;
  height: 119.25px;
  overflow: auto;
  flex-wrap: nowrap;
  word-break: keep-all;
  margin-left: 3px;

  /* 스크롤바 영역에 대한 설정 */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤바 막대에 대한 설정 */
  ::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: #d8d8d8;
    border-radius: 20px;
  }

  /* 스크롤바 뒷 배경에 대한 설정 */
  ::-webkit-scrollbar-track {
    background-color: #f6f0ee;
  }

  span {
    font-family: "Pretendard", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.32px;
    color: rgba(79, 79, 79, 1);
  }

  p {
    font-family: "Pretendard", sans-serif;
    font-size: 12px;
    font-weight: 300;
    line-height: 16.32px;
    color: #3c3c3c;
  }

  a {
    font-family: "Pretendard", sans-serif;
    font-size: 13px;
    font-weight: 300;
    line-height: 14.32px;
  }
`;

const Btns = styled.div`
  margin-bottom: -25px;
  margin-top: 25px;
`

const Button = styled.div`
  width: 330px;
  height: 35px;
  border-radius: 0 0 10px 10px;
  background-color: #ed9071;
  cursor: pointer;

  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;