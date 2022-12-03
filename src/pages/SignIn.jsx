import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __userLogin } from "../../src/redux/modules/userSlice";
import KakaoLogin from "../components/features/Login/KakaoLogin";


import { ReactComponent as Logo } from "../img/logoImg.svg";


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

      <div>
        <LoginContainer>
          <Wrap>
            <div>

              <LoginBox>
                {/* <img src={require("../img/LogoImg.png")} width="90px" height="70px"/> */}
                <Logo/>
                  <LogoLogin>LOGIN</LogoLogin>

                <KakaoLogin/>

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
                  onChange={onChangeHandler}
                />
                <ErrorMessageWrap>
                  {!PwValid
                    ? !PwValid &&
                      login.password.length > 0 && (
                        <Red>영문,숫자,특수문자 포함 8자 이상 입력해주세요</Red>
                      )
                    : PwValid &&
                      login.password.length > 0 && (
                        <Green>올바른 비밀번호 형식입니다.</Green>
                      )}
                </ErrorMessageWrap>
              </InputBox>
            </LoginBox>
            <LoginButton onClick={onSubmitHandler}>로그인</LoginButton>
            <Hr />
            <SignButton onClick={() => navigate("/signup")}>
              회원가입
            </SignButton>
            <p id="token-result"></p>
          </div>
        </Wrap>
      </LoginContainer>
    </Layout>
  );
};


export default SignIn;

const Layout = styled.div`
  width: 360px;
  height: 638px;
  max-height: 640px;
  background-color: #f6f0ee;
  margin: auto;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  display: flex;
`;

const LogoLogin = styled.span`
  /* font-family: "Spoqa Han Sans Neo", sans-serif; */
  font-family: "Pretendard", sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 38.19px;
  margin: 5.57px auto 30.75px;
`;

const LogoBtns = styled.div`
  width: 117.99px;
  height: 44.52px;
  margin-bottom: 14px;
`;
const InputBox = styled.div`
  justify-content: left;
`;

const Input = styled.input`
  border: 1px solid #929292;
  width: 320px;
  height: 50px;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  border-radius: 3px;
  background: transparent;
  padding-left: 14.69px;
  margin: 9px auto 9px;
  ::placeholder {
    color: rgba(120, 120, 120, 1);
    font-family: "Pretendard", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.09px;
  }
`;

const Red = styled.div`
  color: #fd6e7f;
  font-family: "Pretendard", sans-serif;
  font-size: 10.5px;
  line-height: 11.93px;
  font-weight: 700;
  text-align: left;
  width: 270px;
  padding: 5px;
`;

const Green = styled.div`
  color: #4db173;
  font-family: "Pretendard", sans-serif;
  font-size: 10.5px;
  line-height: 11.93px;
  font-weight: 700;
  text-align: left;
  padding: 5px;
`;

const ErrorMessageWrap = styled.div`
  color: #fd6e7f;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  width: 320px;
  height: 50px;
  border: none;
  border-radius: 3px;
  background-color: #ed9071;
  color: #fff;
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 22.58px auto 36px 14px;
`;

const Hr = styled.hr`
  border: 1px solid rgba(153, 153, 153, 0.54);
  margin-bottom: 36px;
`;

const SignButton = styled.button`
  width: 320px;
  height: 50px;
  border: none;
  border-radius: 3px;
  background-color: #838383;
  color: #fff;
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto 36px 14px;
`;
