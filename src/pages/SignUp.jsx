import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { __userSignUp,__userCheck } from '../../src/redux/modules/userSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {account} = useSelector((state) => state.account)
  const initialState = {
    userId: "",
    nickname: "",
    password: "",
    passwordConfirm:"",    
  };

  const [join, setJoin] = useState(initialState);
  const [IdValid, setIdValid] = useState(false);
  const [nickValid, setNickValid] = useState(false);
  const [PwValid, setPwValid] = useState(false);
  const [PwCValid, setPwCValid] = useState(false);

  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setJoin({...join, [name] : value})
    //red 시작
    const regexId = /^[A-za-z0-9]{3,11}$/g;
    if(regexId.test(join.userId)){
      setIdValid(true);
    }else{
      setIdValid(false);
    }

    const regexNick = /^[가-힣ㄱ-ㅎa-zA-Z0-9._-]{1,19}$/;
    if(regexNick.test(join.nickname)){
      setNickValid(true);
    }else{
      setNickValid(false);
    }

    const regexPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
    if(regexPw.test(join.password)){
      setPwValid(true);
    }else{
      setPwValid(false);
    }

    const regexPwC = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
    if(regexPwC.test(join.passwordConfirm)){
      setPwCValid(true);
    }else{
      setPwCValid(false);
    }
  }

  const obj = {
    userId: join.userId,
    nickname: join.nickname,
    password: join.password,
    passwordConfirm: join.passwordConfirm,
  }

  const userIdCheck =  /^[A-za-z0-9]{4,12}$/g;
  //아이디:대/소문자,숫자 모두 사용 가능 4-12자. 아이디중복확인
  const usernicknameCheck = /^[가-힣ㄱ-ㅎa-zA-Z0-9._-]{1,19}$/;
  //글자수만제한 2~20
  const passwordCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
  //if (!regPass.test(password)) alert("영문, 숫자, 특수기호 조합으로 8-20자리 이상 입력해주세요.")

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if(!userIdCheck.test(obj.userId)){
      return alert("아이디 양식에 맞춰주세요")
    }
    //중복아이디체크들어가야함 true이면 넘어가게 


    if(!usernicknameCheck.test(obj.nickname)){
      return alert("닉네임 양식에 맞춰주세요")
    }
    if(!passwordCheck.test(obj.password)){
      return alert("비밀번호 양식에 맞춰주세요")
    }
    if(!passwordCheck.test(obj.passwordConfirm)){
      return alert("비밀번호 양식에 맞춰주세요")
    }
    if(obj.userId === "" || obj.userId === undefined) {
      return alert("빈칸을 입력해주세요.")
    }

    if(obj.nickname === "" || obj.nickname === undefined) {
      return alert("빈칸을 입력해주세요.")
    }

    if(obj.password === "" || obj.password === undefined) {
      return alert("빈칸을 입력해주세요.")
    }

    if(obj.passwordConfirm === "" || obj.passwordConfirm === undefined) {
      return alert("빈칸을 입력해주세요.")
    }

    //일단 여기 이렇게 두고 나중에 받았을때 useEffect부분사용하기
    dispatch(__userSignUp(obj))
    alert("회원가입이 완료되었습니다.")
    window.location.replace("/SignIn")
  }
  
    useEffect(() => {
      
      if(account.statusCode === 200){
        alert("회원가입이 완료되었습니다.")
        setJoin({
          userId : "",
          nickname: "",
          password: "",
          passwordConfirm: "",
        })
          window.location.replace("/SignIn")
      }
    },[account])

  return (
    <SignupContainer>
      <SignupBox onSubmit={onSubmitHandler}>
        <LogoBox>

        </LogoBox>
          <InputBox>
          <FlexInput>
              <Input
                name='userId'
                placeholder='아이디 영문 또는 숫자 4자~12자 '
                onChange={onChangeHandler}
              /> 
              <button onClick={() => dispatch(__userCheck({userId:join.userId}))}
                >중복확인</button>
              <ErrorMessageWrap>
              {
                  !IdValid && join.userId.length > 0 && (
                    <div>아이디 영문 또는 숫자 4자~12자.</div>
                  )
              }  
              </ErrorMessageWrap>
          </FlexInput>
          <FlexInput>
              <Input
                name='nickname'
                placeholder='닉네임 영문,한글,숫자,기호 특수문자(_) 2자~20자 '
                onChange={onChangeHandler}
              />
              <ErrorMessageWrap>
                {
                  !nickValid && join.nickname.length > 0 && (
                  <div>닉네임 영문,한글,숫자,기호 특수문자(_) 2자~20자</div>
                  )
                }  
                </ErrorMessageWrap>
            </FlexInput>

            <FlexInput>
                <Input
                  placeholder='비밀번호 영문 숫자 특수기호 포함 8자~20자 '
                  type='password'
                  name='password'
                  onChange={onChangeHandler}
                />
                  <ErrorMessageWrap>
                {
                  !PwValid && join.password.length > 0 && (
                  <div>비밀번호 영문 숫자 특수기호 포함 8자~20자</div>
                  )
                }  
                </ErrorMessageWrap>
            </FlexInput>
            
            <FlexInput>
              <Input
                placeholder='비밀번호 영문 숫자 특수기호 포함 8자~20자 '
                type='password'
                name='passwordConfirm'
                onChange={onChangeHandler}
              />
              <ErrorMessageWrap>
                  {
                    !PwCValid && join.passwordConfirm.length > 0 && (
                    <div>비밀번호 영문 숫자 특수기호 포함 8자~20자</div>
                    )
                  }  
              </ErrorMessageWrap>

            </FlexInput>
            <SignupButton onClick={onSubmitHandler}>회원가입</SignupButton>
          </InputBox>
      </SignupBox>
      <LoginBox> 이미 계정이 있으신가요?{' '}
        <span onClick={() => navigate('/SignIn')}>로그인</span>
      </LoginBox>
    </SignupContainer>
  );
};

export default SignUp;

const ErrorMessageWrap =styled.div`
margin:4px;
color:#ef0000;
font-size:6px;
`

const FlexInput = styled.span``

const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignupBox = styled.form`
  background-color: white;
  width: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 36px;
`;

const InputBox = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;

  width: 250px;
  height: 40px;
  margin-bottom: 8px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #fafafa;
  &:focus {
    outline: 1px solid #adadad;
  }
`;

const SignupButton = styled.button`

  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  width: 250px;
  height: 30px;
  margin-top: 40px;
  &:disabled {
    background-color: #b2dffc;
  }
`;

const LogoBox = styled.div`
  width: 175px;
  height: 51px;
  margin-top: 36px;
  margin-bottom: 12px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SignupText = styled.div`
  width: 200px;
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;

`;


const LoginBox = styled.div`
  background-color: white;
  width: 350px;
  padding: 20px;

  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {

    margin-left: 4px;
    font-weight: bold;
    cursor: pointer;
  }
`;