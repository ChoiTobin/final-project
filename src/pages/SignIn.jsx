import React, { useState } from "react";
import styled from "styled-components";
import "../styles/SignIn.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __userLogin } from "../../src/redux/modules/userSlice";
import KakaoLogin from "../components/features/Login/KakaoLogin";

import { ReactComponent as Logo } from "../img/logoImg.svg";

const SignIn = () => {
  //확인용
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const account = useSelector((state) => state.account);
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
      <div className="LoginContainer">
        <div className="wrap">
          <div>
            <div className="LoginBox">
              <Logo />
              <span className="LogoLogin">LOGIN</span>
              <KakaoLogin />
              <input className="Input"
                placeholder="아이디"
                type="text"
                name="email"
                value={login.email}
                onChange={onChangeHandler}
              />
              <div className="ErrorMessageWrap">
                {!IdValid
                  ? !IdValid &&
                    login.email.length > 0 && (
                      <div className="Red">올바른 아이디를 입력해주세요.</div>
                    )
                  : IdValid &&
                    login.email.length > 0 && (
                      <div className="Green">올바른 아이디 형식입니다.</div>
                    )}
              </div>
              <input className="Input"
                placeholder="비밀번호"
                type="password"
                name="password"
                value={login.password}
                onChange={onChangeHandler}
              />
              <div className="ErrorMessageWrap">
                {!PwValid
                  ? !PwValid &&
                    login.password.length > 0 && (
                      <div className="Red">영문,숫자,특수문자 포함 8자 이상 입력해주세요</div>
                    )
                  : PwValid &&
                    login.password.length > 0 && (
                      <div className="Green">올바른 비밀번호 형식입니다.</div>
                    )}
              </div>
              <button className="LoginButton" onClick={onSubmitHandler}>로그인</button>
              <button className="SignButton" onClick={() => navigate("/signup")}>
                회원가입
              </button>
            </div>
            <p id="token-result"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


