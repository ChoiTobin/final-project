import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __userLogin } from "../../src/redux/modules/userSlice";
import KakaoLogin from "../components/features/Login/KakaoLogin";
import { ReactComponent as Logo } from "../img/signLogo.svg";
import "../style/sign.css"

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
    const {name, value} = event.target
    setLogin({...login, [name] : value})
    
    const regexId = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    
    if(regexId.test(login.email)){
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
    event.preventDefault()
    const obj = 
    {
      email: login.email,
      password: login.password,
    };
    dispatch(__userLogin(obj));
    //navigate('/postlist')
  };
  return (
    <div className="signin">
      <div>
        {/* <img src={require("../img/LogoImg.png")} width="90px" height="70px"/> */}
        <Logo style={{ width: "88.13px", height: "66.64px", margin: "0 0 0 27.86px" }} />
        <span className="font-s10 font-w3">LOGIN</span>

        <div>
          <input
            placeholder="아이디"
            type="text"
            name="email"
            value={login.email}
            onChange={onChangeHandler}
            className="form-11"
          />
          <div>
            {!IdValid
              ? !IdValid &&
                login.email.length > 0 && (
                  <span>올바른 아이디를 입력해주세요.</span>
                )
              : IdValid &&
                login.email.length > 0 && (
                  <span>올바른 아이디 형식입니다.</span>
                )}
          </div>
          <input
            placeholder="비밀번호"
            type="password"
            name="password"
            value={login.password}
            onChange={onChangeHandler}
          />
          <div>
            {!PwValid
              ? !PwValid &&
                login.password.length > 0 && (
                  <span>영문,숫자,특수문자 포함 8자 이상 입력해주세요</span>
                )
              : PwValid &&
                login.password.length > 0 && (
                  <span>올바른 비밀번호 형식입니다.</span>
                )}
          </div>
        </div>
      </div>
      <button onClick={onSubmitHandler}>로그인</button>
      <div>
        <span>또는</span>
        <div>
          <KakaoLogin />
        </div>
      </div>

      <hr />
      <button onClick={() => navigate("/")}>회원가입</button>
      <p id="token-result"></p>
    </div>
  );
};


export default SignIn;
