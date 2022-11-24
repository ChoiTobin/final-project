import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __userLogin } from "../redux/modules/userSlice";
import Logo from "../img/pet.png";
import { ReactComponent as Naver } from "../img/naver.svg";
import { ReactComponent as Kakao } from "../img/kakao.svg";
import KakaoLogin from "../components/features/KakaoLogin";

const Login = () => {
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

  // 유효성검사 red 체크
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const obj = {
      email: login.email,
      password: login.password,
    };
    dispatch(__userLogin(obj));
    // navigate('/postList')
  };

  return (
    <Layout>
      <LogoPic src={Logo} alt="logo"/>

      <div>
        <Title>LOGIN</Title>

        <Social>
          <Naver/>
          <Kakao/>
        </Social>

        <OR>또는</OR>

        <div>
          <div>
            <Input
              type="text"
              name="email"
              value={login.email}
              onChange={onChangeHandler}
              placeholder="이메일"
            />
            <span>
              {!IdValid
                ? !IdValid &&
                  login.email.length > 0 && (
                    <Red>올바른 아이디를 입력해주세요</Red>
                  )
                : IdValid &&
                  login.email.length > 0 && <Green>올바른 아이디 형식입니다</Green>}
            </span>
          </div>

          <div>
            <Input
              type="password"
              name="password"
              value={login.password}
              onChange={onChangeHandler}
              placeholder="비밀번호"
            />
            <span>
              {!PwValid
                ? !PwValid &&
                  login.password.length > 0 && (
                    <Red>영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요</Red>
                  )
                : PwValid &&
                  login.password.length > 0 && (
                    <Green>올바른 비밀번호 형식입니다</Green>
                  )}
            </span>
          </div>
        </div>
        

        <LoginBtn onClick={onSubmitHandler}>로그인</LoginBtn>
        <hr style={{color: "#C4C1C0"}}/>

        <div>
          {/* <span>계정이 없으신가요?</span> */}
          <SignupBtn onClick={() => navigate("/signup")}>가입하기</SignupBtn>
        </div>
        <p id="token-result" />
        {/* <KakaoLogin /> */}
      </div>
    </Layout>
  );
};

export default Login;

const Layout = styled.div`
  width: 360px;
  min-height: 635px;
  height: 640px;

  background-color: #f6f0ee;
  margin: auto;
  padding-top: 20px;
`;

const LogoPic = styled.img`
  width: 60px;
  height: 60px;
  margin: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  font-size: 32px;
  color: #ed9071;
  margin: 5.19px auto 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: "SFPro", sans-serif;
  font-weight: medium;
`;

const Social = styled.div`
  width: 117.99px;
  height: 44.52px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 39.66px auto 0;
  gap: 19.72px;
`;

const OR = styled.span`
  color: #787878;
  font-size: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 14px auto 4px;
  font-family: "SFPro", sans-serif;
`;

const Input = styled.input`
  width: 320px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #929292;
  border-radius: 3px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 9px auto 9px;
  padding-left: 14.69px;

  font-family: "SFPro", sans-serif;
  font-weight: medium;

  ::placeholder {
    font-size: 18px;
    color: #787878;
    font-family: "SFPro", sans-serif;
  }
`;


const Red = styled.span`
  color: #fd6e7f;
  font-size: 10px;
  font-weight: bold;
  margin: 9px 0 0 20px;
  font-family: "SFPro", sans-serif;
  font-weight: medium;
`;

const Green = styled.span`
  color: #4db173;
  font-size: 10px;
  font-weight: bold;
  margin: 9px 0 9px 20px;
  font-family: "SFPro", sans-serif;
  font-weight: medium;
`;

const LoginBtn = styled.button`
  width: 320px;
  height: 50px;

  font-size: 20px;
  font-weight: 600;
  color: #fff;
  background-color: #ed9071;
  border: none;
  border-radius: 3px;

  margin: 22.58px auto 34.21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SignupBtn = styled.button`
  width: 320px;
  height: 50px;

  font-size: 20px;
  font-weight: 600;
  color: #fff;
  background-color: #838383;
  border: none;
  border-radius: 3px;

  margin: 22.58px auto 34.21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: "SFPro", sans-serif;
  font-weight: medium;
`;