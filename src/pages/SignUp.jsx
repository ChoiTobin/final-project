import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __userSignUp,
  __userCheck,
  __NickCheck,
} from "../../src/redux/modules/userSlice";
import { ReactComponent as Logo } from "../img/logoImg.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const initialState = {
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  };

  const [join, setJoin] = useState(initialState);
  const [IdValid, setIdValid] = useState(false);
  const [nickValid, setNickValid] = useState(false);
  const [PwValid, setPwValid] = useState(false);
  const [PwCValid, setPwCValid] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setJoin({ ...join, [name]: value });
    //red 시작
    const regexId =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    //이메일 체크
    //https://velog.io/@gym/React-721
    if (regexId.test(join.email)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }

    const regexNick = /^[가-힣ㄱ-ㅎa-zA-Z0-9._-]{1,19}$/;
    if (regexNick.test(join.nickname)) {
      setNickValid(true);
    } else {
      setNickValid(false);
    }

    const regexPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
    if (regexPw.test(join.password)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }

    const regexPwC = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
    if (regexPwC.test(join.passwordCheck)) {
      setPwCValid(true);
    } else {
      setPwCValid(false);
    }
  };

  const obj = {
    email: join.email,
    nickname: join.nickname,
    password: join.password,
    passwordCheck: join.passwordCheck,
  };

  const userIdCheck =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  //이메일 체크
  //https://velog.io/@gym/React-721
  const usernicknameCheck = /^[가-힣ㄱ-ㅎa-zA-Z0-9._]{1,19}$/;
  //글자수만제한 2~20
  const passwordCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
  //if (!regPass.test(password)) alert("영문, 숫자, 특수기호 조합으로 8-20자리 이상 입력해주세요.")

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!userIdCheck.test(obj.email)) {
      return alert("아이디 양식에 맞춰주세요");
    }

    if (!usernicknameCheck.test(obj.nickname)) {
      return alert("닉네임 양식에 맞춰주세요");
    }
    if (!passwordCheck.test(obj.passwordCheck)) {
      return alert("비밀번호 양식에 맞춰주세요");
    }

    if (obj.email === "" || obj.email === undefined) {
      return alert("빈칸을 입력해주세요.");
    }
    if (obj.nickname === "" || obj.nickname === undefined) {
      return alert("빈칸을 입력해주세요.");
    }
    if (obj.password === "" || obj.password === undefined) {
      return alert("빈칸을 입력해주세요.");
    }
    if (obj.passwordCheck === "" || obj.passwordCheck === undefined) {
      return alert("빈칸을 입력해주세요.");
    }
    if (account.nickCheck.status !== 200) {
      alert("닉네임 중복확인을 해주세요");
    }
    if (account.idCheck.status !== 200) {
      alert("아이디 중복확인을 해주세요");
    }
    // 중복확인이 true이고 true일때 그리고 dispatch를 보내서
    // account statusCode 회원가입이 response로 왔을때 가입됨.

    dispatch(__userSignUp(obj));
    if (
      account.idCheck.status === 200 &&
      account.nickCheck.status === 200 &&
      obj.password === obj.passwordCheck
    ) {
      alert("회원가입이 완료되었습니다.");
      window.location.replace("/SignIn");
    }
  };

  return (
    <SignupContainer>
      <SignupBox onSubmit={onSubmitHandler}>
        <Logo
          style={{
            width: "58.75px",
            height: "44.43px",
            margin: "36.84px auto 18.68px",
          }}
        />
        <LogoBox>
          <LoGoSignUp1>SIGN UP</LoGoSignUp1>
        </LogoBox>
        <InputBox>
          <Insert>
            <InputTop
              name="email"
              placeholder="아이디"
              onChange={onChangeHandler}
            />
            <CheckBtn
              type="button"
              onClick={() => {
                dispatch(__userCheck({ email: join.email }));
              }}
            >
              중복확인
            </CheckBtn>
            <ErrorMessageWrap>
              {!IdValid
                ? !IdValid &&
                  join.email.length > 0 && <div>이메일 형식을 입력해주세요</div>
                : IdValid &&
                  join.email.length > 0 && (
                    <Green>올바른 이메일 형식 입니다.</Green>
                  )}
            </ErrorMessageWrap>
          </Insert>
          <Insert>
            <InputTop
              name="nickname"
              placeholder="닉네임"
              onChange={onChangeHandler}
            />
            <CheckBtn
              type="button"
              onClick={() => {
                dispatch(__NickCheck({ nickname: join.nickname }));
              }}
            >
              중복확인
            </CheckBtn>
            <ErrorMessageWrap>
              {!nickValid
                ? !nickValid &&
                  join.nickname.length > 0 && (
                    <div>닉네임 영문,한글,숫자,기호 특수문자(_) 2자~20자</div>
                  )
                : nickValid &&
                  join.nickname.length > 0 && (
                    <Green>올바른 닉네임 형식 입니다.</Green>
                  )}
            </ErrorMessageWrap>
          </Insert>
          <Insert>
            <InputDown
              placeholder="비밀번호"
              type="password"
              name="password"
              onChange={onChangeHandler}
            />
            <ErrorMessageWrap>
              {!PwValid
                ? !PwValid &&
                  join.password.length > 0 && (
                    <div>비밀번호 영문 숫자 특수기호 포함 8자~20자</div>
                  )
                : PwValid &&
                  join.password.length > 0 && (
                    <Green>사용 가능한 비밀번호 입니다.</Green>
                  )}
            </ErrorMessageWrap>
          </Insert>
          <Insert>
            <InputDown
              placeholder="비밀번호 확인"
              type="password"
              name="passwordCheck"
              onChange={onChangeHandler}
            />
            <ErrorMessageWrap>
              {
                !PwCValid
                  ? !PwCValid &&
                    join.passwordCheck.length > 0 && (
                      <div>비밀번호 영문 숫자 특수기호 포함 8자~20자</div>
                    )
                  : PwCValid &&
                    join.passwordCheck.length > 0 &&
                    (join.passwordCheck === join.password ? (
                      <Green>사용 가능한 비밀번호 입니다.</Green>
                    ) : (
                      <div>비밀번호가 일치하지 않습니다.</div>
                    ))
                //위에 비밀번호와 일치하는지 대조.
              }
            </ErrorMessageWrap>
          </Insert>
          <SignupButton onClick={onSubmitHandler}>회원가입</SignupButton>
        </InputBox>
        <LoginBox>
          {" "}
          이미 계정이 있으신가요?{" "}
          <span onClick={() => navigate("/")}>
            <span style={{ color: "#FD6E7F" }}>로그인</span>
          </span>
        </LoginBox>
      </SignupBox>
    </SignupContainer>
  );
};

export default SignUp;

const SignupContainer = styled.div`
  width: 360px;
  height: 640px;
  background-color: #f6f0ee;
  margin: auto;
`;

const SignupBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoGoSignUp1 = styled.span`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 38.19px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-direction: column;
`;

const InputTop = styled.input`
  width: 320px;
  height: 50px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 12px;
  border: 1px solid rgba(146, 146, 146, 0.95);
  border-radius: 3px;
  background: transparent;
  padding-left: 14.69px;
  margin: 9px -16.12px 9px 0px;
  z-index: 0;
  ::placeholder {
    color: #787878;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 19.09px;
  }
`;

const InputDown = styled.input`
  width: 320px;
  height: 50px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 12px;
  border: 1px solid rgba(146, 146, 146, 0.95);
  border-radius: 3px;
  background: transparent;
  padding-left: 14.69px;
  margin: 9px auto 9px;
  ::placeholder {
    color: #787878;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 19.09px;
  }
`;

const Insert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SignupButton = styled.button`
  width: 320px;
  height: 50px;
  margin: 24.41px auto 20px;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.87px;

  // 버튼 누르면 손모양 나오게 하는 마우스 커서
  cursor: pointer;
  background-color: #ed9071;
`;

const LogoBox = styled.div`
  width: 175px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const LoginBox = styled.div`
  span {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: bold;
    // 버튼 누르면 손모양 나오게 하는 마우스 커서
    cursor: pointer;
  }
`;

const CheckBtn = styled.button`
  width: 60.32px;
  height: 25px;
  border: none;
  border-radius: 3px;
  background-color: #d9d9d9;
  color: #7d7d7d;
  font-family: "Spuqa Han Sans Neo", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.32px;
  position: relative;
  z-index: 100;
  margin-left: -60px;
  margin-right: 16.12px;
`;

const Green = styled.div`
  color: green;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 12px;
  margin-bottom: 5px;
`;

const ErrorMessageWrap = styled.div`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  color: #ef0000;
  font-size: 12px;
  margin-bottom: 5px;
`;
