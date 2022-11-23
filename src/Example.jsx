import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __userLogin } from "../../src/redux/modules/userSlice";
import KakaoLogin from "../components/features/KakaoLogin";
import { useLocation } from "react-router-dom";
import { ReactComponent as Kakao } from "../img/kakao.svg";
import { ReactComponent as Naver } from "../img/naver.svg";
import Pet from "../img/pet.png";

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
      <Logo src={Pet} alt="logo" />
      <div>
        <Login>
          <div className="login-btn">
            <img src={Kakao} alt="" />
            <img src={Naver} alt="" />
          </div>
          <div className="login-input">
            <div className="input-id">
              <input
                placeholder="사용자 이메일"
                type="text"
                name="email"
                value={login.email}
                onChange={onChangeHandler}
              />
              <div className="valid">
                {!IdValid
                  ? !IdValid &&
                    login.email.length > 0 && (
                      <div>올바른 아이디를 입력해주세요.</div>
                    )
                  : IdValid &&
                    login.email.length > 0 && (
                      <Green>올바른 아이디 형식입니다.</Green>
                    )}
              </div>
            </div>
            <div className="input-pw">
              <input
                placeholder="비밀번호"
                type="password"
                name="password"
                value={login.password}
                onChange={onChangeHandler}
              />
              <div className="valid">
                {!PwValid
                  ? !PwValid &&
                    login.password.length > 0 && (
                      <div>영문,숫자,특수문자 포함 8자 이상 입력해주세요</div>
                    )
                  : PwValid &&
                    login.password.length > 0 && (
                      <Green>올바른 비밀번호 형식입니다.</Green>
                    )}
              </div>
            </div>
          </div>

          <button onClick={onSubmitHandler}>로그인</button>
        </Login>
      </div>

      <div>
        <p>계정이 없으신가요?</p>
        <button onClick={() => navigate("/signup")}>가입하기</button>
      </div>
      <p id="token-result"></p>
      <KakaoLogin></KakaoLogin>
    </div>
  );
};
export default SignIn;

const Layout = styled.div`
  /* background-color: #F6F0EE; */
  background-color: lightpink;
  max-width: 360px;
  min-height: 635px;
  height: 640px;
  margin: auto;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin: 20px auto 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Login = styled.div`
  background-color: red;
  width: 320px;
  height: 241.36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto 22.58px;
  top: 159.59px;
  /* 
  position: relative;
  z-index: 1; */
`;

const Green = styled.div`
  color: green;
`;
