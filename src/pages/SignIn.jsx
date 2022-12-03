import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __userLogin } from "../../src/redux/modules/userSlice";
import KakaoLogin from "../components/features/Login/KakaoLogin";
import { ReactComponent as Logo } from "../img/signLogo.svg";


const SignIn = () => {
  //확인2
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

      <Layout>
        <LoginContainer>
          <Wrap>
            <div>

              <LoginBox>
                {/* <img src={require("../img/LogoImg.png")} width="90px" height="70px"/> */}
                <Logo/>
                  <LogoLogin>LOGIN</LogoLogin>

                <KakaoLogin/>

                <Input
                  placeholder='아이디'
                  type='text'
                  name='email'
                  value={login.email}
                  onChange={onChangeHandler}
                />
                <ErrorMessageWrap>
                {
                  !IdValid ?

                !IdValid && login.email.length > 0 && 
                (
                <Red>올바른 아이디를 입력해주세요.</Red>
                )
                :
                IdValid && login.email.length > 0 && 
                (
                <Green>올바른 아이디 형식입니다.</Green>
                )
                }  
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
            </LoginBox>
      
              <p id="token-result"></p>
          </div>
        </Wrap>
      </LoginContainer>
    </div>
  );
};


export default SignIn;
const LogoLogin = styled.span`
color:#ED9071;
font-size:30px;
margin-bottom:50px;

`
const Red = styled.div`
color: #ef0000;
font-size:12px;
text-align:left;
width:270px;
padding:5px;
`;

const Green = styled.div`
  color: green;
  font-size:12px;
  text-align:left;
  width:270px;
  padding:5px;


`;
/*const Green2 = styled.div`
  color: green;
  font-size:12px;
  margin-bottom: 5px;
  margin-right:100px;
  margin-top:5px;
`;
*/

const ErrorMessageWrap = styled.div`
  color:#ef0000;


  `;
/*const ErrorMessageWrap2 = styled.div`
  color:#ef0000;
  font-size:12px;
  margin-right:20px;
  margin-top:5px;
  margin-bottom: 5px;

  `;
  */
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
  width: 350px;
  /* margin: 0 auto; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  border: 1px solid #929292;
  width: 260px;
  height: 40px;
  font-size: 12px;
  border-radius: 2px;
  padding:10px;
  background: #FAFAFA;
  &:focus {
    outline: 1px solid #ADADAD;
  }
  border-radius:3px;
`;
const LoginButton = styled.button`
font-size:18px;
color: white;
border: none;
border-radius: 3px;
font-weight: bold;
width: 253px;
height: 40px;
margin-top: 30px;
margin-bottom: 70px;
// 버튼 누르면 손모양 나오게 하는 마우스 커서
cursor: pointer;
background-color: #ED9071;
`;
const SignButton = styled.button`
font-size:18px;
color: white;
border: none;
border-radius: 3px;
font-weight: bold;
width: 253px;
height: 40px;
margin-top: 10px;
margin-bottom: 20px;
// 버튼 누르면 손모양 나오게 하는 마우스 커서
cursor: pointer;
  background-color: #838383;
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
