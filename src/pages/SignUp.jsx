import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __userLogin } from "../../src/redux/modules/userSlice";
import KakaoLogin from "../components/features/Login/KakaoLogin";

import { ReactComponent as Logo } from "../img/logoImg.svg";
import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { __userSignUp,__userCheck,__NickCheck } from '../../src/redux/modules/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Logo } from '../img/signLogo.svg'


const SignIn = () => {
  //확인용
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const initialState = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initialState);
  const [IdValid, setIdValid] = useState(false);
  const [PwValid, setPwValid] = useState(false);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });

    const regexId =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

    if (regexId.test(login.email)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
    const regexPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
    if (regexPw.test(login.password)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  //유효성검사 red 체크
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const obj = {
      email: login.email,
      password: login.password,
    };
    dispatch(__userLogin(obj));
    //navigate('/postlist')
  };

  return (
    <div>
      <LoginContainer>
        <Wrap>
          <div>
            <LoginBox>
              {/* <img src={require("../img/LogoImg.png")} width="90px" height="70px"/> */}
              <Logo />
              <LogoLogin>LOGIN</LogoLogin>

              <KakaoLogin />
              <Input
                placeholder="아이디"
                type="text"
                name="email"
                value={login.email}
                onChange={onChangeHandler}
              />
              <ErrorMessageWrap>
                {!IdValid
                  ? !IdValid &&
                    login.email.length > 0 && (
                      <Red>올바른 아이디를 입력해주세요.</Red>
                    )
                  : IdValid &&
                    login.email.length > 0 && (
                      <Green>올바른 아이디 형식입니다.</Green>
                    )}
              </ErrorMessageWrap>
              <Input
                placeholder="비밀번호"
                type="password"
                name="password"
                value={login.password}

      <SignupContainer>
        <SignupBox onSubmit={onSubmitHandler}>
          <LogoBox>
            <div>
                {/* <img src={require("../img/LogoImg.png")} width="90px" height="70px"/> */}
                <Logo/>
            </div>
            <LoGoSignUp1>
              SIGN UP
            </LoGoSignUp1>
        </LogoBox>

        <InputBox>
          <Insert>
            <Duplicate>
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
            </Duplicate>
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
            <Duplicate>
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
            </Duplicate>
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
                    <Red>비밀번호 영문 숫자 특수기호 포함 8자~20자</Red>
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
            <span style={{ color: "#FD6E7F" }}>&nbsp;로그인</span>
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
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 38.19px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15.84px;
`;

const InputBox = styled.div`
  /* margin-top: 17.84px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputTop = styled.input`
  background-color: lightgreen;
  width: 320px;
  height: 50px;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  border: 1px solid rgba(146, 146, 146, 0.95);
  border-radius: 3px;
  background: transparent;
  padding-left: 14.69px;
  margin: 4.5px -16.12px 4.5px 0px;
  z-index: 0;
  ::placeholder {
    color: rgba(120, 120, 120, 1);
    font-family: "Pretendard", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.09px;
  }
`;

const InputDown = styled.input`
  width: 320px;
  height: 50px;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  border: 1px solid rgba(146, 146, 146, 0.95);
  border-radius: 3px;
  background: transparent;
  padding-left: 14.69px;
  margin: 4.5px auto 4.5px;
  ::placeholder {
    color: rgba(120, 120, 120, 1);
    font-family: "Pretendard", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.09px;
  }
`;

const Insert = styled.div`
  display: flex;
  text-align: left;
  justify-content: left;
  flex-direction: column;
`;

const SignupButton = styled.button`
  width: 320px;
  height: 50px;
  margin: 24.41px auto 20px;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 600;
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
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  span {
    font-family: "Pretendard", sans-serif;
    font-weight: 700;
    // 버튼 누르면 손모양 나오게 하는 마우스 커서
    cursor: pointer;
  }
`;

const Duplicate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CheckBtn = styled.button`
  width: 60.32px;
  height: 25px;
  border: none;
  border-radius: 3px;
  background-color: #d9d9d9;
  color: #7d7d7d;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.32px;
  position: relative;
  z-index: 100;
  margin-left: -60px;
  margin-right: 16.12px;
`;

const Green = styled.div`
  color: #4db173;
  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  margin-bottom: 5px;
  font-weight: 700;
  /* text-align: left; */
`;

const Red = styled.div`
  color: #fd6e7f;
  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  margin-bottom: 5px;
  font-weight: 700;
  /* text-align: left; */
`;

const ErrorMessageWrap = styled.div`
  font-family: "Pretendard", sans-serif;
  color: #fd6e7f;
  font-size: 11px;
  margin-bottom: 5px;
  font-weight: 700;
`;
