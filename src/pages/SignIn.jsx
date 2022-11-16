import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __userLogin } from "../../src/redux/modules/userSlice";
import KakaoLogin from "../components/features/KakaoLogin";
import { useLocation } from "react-router-dom";
const SignIn = () => {
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
              <Input
                placeholder="사용자 이메일"
                type="text"
                name="email"
                value={login.email}
                onChange={onChangeHandler}
              />
              <ErrorMessageWrap>
                {!IdValid
                  ? !IdValid &&
                    login.email.length > 0 && (
                      <div>올바른 아이디를 입력해주세요.</div>
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
                onChange={onChangeHandler}
              />
              <ErrorMessageWrap>
                {!PwValid
                  ? !PwValid &&
                    login.password.length > 0 && (
                      <div>영문,숫자,특수문자 포함 8자 이상 입력해주세요</div>
                    )
                  : PwValid &&
                    login.password.length > 0 && (
                      <Green>올바른 비밀번호 형식입니다.</Green>
                    )}
              </ErrorMessageWrap>
              <LoginButton onClick={onSubmitHandler}>로그인</LoginButton>
            </LoginBox>
            <SignupBox>
              <p>계정이 없으신가요?</p>
              <SignupButton onClick={() => navigate("/signup")}>
                가입하기
              </SignupButton>
            </SignupBox>
              <p id="token-result"></p>
            <KakaoLogin>
            </KakaoLogin>
          </div>
        </Wrap>
      </LoginContainer>
    </div>
  );
};
export default SignIn;
const Green = styled.div`
  color: green;
`;
const ErrorMessageWrap = styled.div`
  margin: 4px;
  color: #ef0000;
  font-size: 6px;
`;
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Wrap = styled.div`
  display: flex;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 350px;
  height: 320px;
  border: 1px solid #eee;
  /* margin: 0 auto; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  width: 250px;
  height: 40px;
  margin-bottom: 7px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #FAFAFA;
  &:focus {
    outline: 1px solid #ADADAD;
  }
`;
const LoginButton = styled.button`
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  width: 250px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
  // 버튼 누르면 손모양 나오게 하는 마우스 커서
  cursor: pointer;
  &:disabled {
    background-color: #B2DFFC;
  }
`;
const SignupBox = styled.div`
  background-color: white;
  width: 350px;
  height: 80px;
  border: 1px solid #eee;
  margin-top: 20px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoBox = styled.div`
  width: 175px;
  height: 51px;
  margin-bottom: 36px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const SignupButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
`;
