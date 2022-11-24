import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { __userSignUp,__userCheck,__NickCheck } from '../../src/redux/modules/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,useState } from 'react'

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const initialState = {
    email: "",
    nickname: "",
    password: "",
    passwordCheck:"",    
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
    if(regexId.test(join.email)){
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
  }


  const obj = {
    email: join.email,
    nickname: join.nickname,
    password: join.password,
    passwordCheck: join.passwordCheck,
  }

  const userIdCheck =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
  //이메일 체크
  //https://velog.io/@gym/React-721
  const usernicknameCheck = /^[가-힣ㄱ-ㅎa-zA-Z0-9._]{1,19}$/;
  //글자수만제한 2~20
  const passwordCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
  //if (!regPass.test(password)) alert("영문, 숫자, 특수기호 조합으로 8-20자리 이상 입력해주세요.")



  const onSubmitHandler = (event) => {
    event.preventDefault()
    
    if(!userIdCheck.test(obj.email)){
      return alert("아이디 양식에 맞춰주세요")
    }

    if(!usernicknameCheck.test(obj.nickname)){
      return alert("닉네임 양식에 맞춰주세요")
    }
    if (!passwordCheck.test(obj.passwordCheck)) {
      return alert("비밀번호 양식에 맞춰주세요");
    }
    
    if(obj.email === "" || obj.email === undefined) {
      return alert("빈칸을 입력해주세요.")
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
    if( account.nickCheck.status !== 200){
    alert("닉네임 중복확인을 해주세요")
    }
    if(account.idCheck.status !== 200 ){
      alert("아이디 중복확인을 해주세요")
      }
    // 중복확인이 true이고 true일때 그리고 dispatch를 보내서
    // account statusCode 회원가입이 response로 왔을때 가입됨. 
    
    dispatch(__userSignUp(obj))
    if(account.idCheck.status ===200 && account.nickCheck.status === 200 &&obj.password === obj.passwordCheck){
      alert("회원가입이 완료되었습니다.")  
    window.location.replace("/SignIn")
    }
  }
  
    // useEffect(() => {
      
    //   if(account.statusCode === 200){
    //     alert("회원가입이 완료되었습니다.")
    //     setJoin({
    //       email : "",
    //       nickname: "",
    //       password: "",
    //       passwordCheck: "",
    //     })
    //       window.location.replace("/SignIn")
    //   }
    // },[account])

  return (
    <SignupContainer>
      <SignupBox onSubmit={onSubmitHandler}>
        <LogoBox>
          <LoGoSignUp>
              <img src={require("../img/LogoImg.png")} width="90px" height="70px"/>
          </LoGoSignUp>
          <LoGoSignUp1>
            SIGN UP
          </LoGoSignUp1>
        </LogoBox>
        <InputBox>
          <FlexInput>
              <Input
                name='email'
                placeholder='아이디'
                onChange={onChangeHandler}
              /> 
              <DuplicateCheckEmail type='button' onClick={()=>{dispatch(__userCheck({email:join.email}))}}
                >중복확인
              </DuplicateCheckEmail>
              <ErrorMessageWrap>
              { !IdValid ?
                  !IdValid && join.email.length > 0 && (
                    <div>이메일 형식을 입력해주세요</div>
                  )
                  :
                  IdValid && join.email.length > 0 && (
                    <Green>올바른 이메일 형식 입니다.</Green>
                  )
              }  
              </ErrorMessageWrap>
          </FlexInput>
          <FlexInput2>
              <Input2
                name='nickname'
                placeholder='닉네임'
                onChange={onChangeHandler}
              >
              </Input2>
              <DuplicateCheckNick type='button'  onClick={()=>{dispatch(__NickCheck({nickname:join.nickname}))}}
                >중복확인
              </DuplicateCheckNick>
              <ErrorMessageWrap>
                {
                  !nickValid ?
                  !nickValid && join.nickname.length > 0 && (
                  <div>닉네임 영문,한글,숫자,기호 특수문자(_) 2자~20자</div>
                  )
                : nickValid &&
                  join.nickname.length > 0 && (
                    <Green>올바른 닉네임 형식 입니다.</Green>
                    )
                  
                }  
                </ErrorMessageWrap>
            </FlexInput2>
            <FlexInput3>
                <Input3
                  placeholder='비밀번호'
                  type='password'
                  name='password'
                  onChange={onChangeHandler}
                />
                  <ErrorMessageWrap>
                {
                  !PwValid?

                  !PwValid && join.password.length > 0 && (
                  <div>비밀번호 영문 숫자 특수기호 포함 8자~20자</div>
                  )
                : PwValid &&
                  join.password.length > 0 && (
                    <Green>사용 가능한 비밀번호 입니다.</Green>
                    )

                }  
                </ErrorMessageWrap>
            </FlexInput3>
            <FlexInput4>
              <Input4
                placeholder='비밀번호 확인'
                type='password'
                name='passwordCheck'
                onChange={onChangeHandler}
              />
              <ErrorMessageWrap>
                  {
                    !PwCValid ? 
                    !PwCValid && join.passwordCheck.length > 0 && (
                    <div>비밀번호 영문 숫자 특수기호 포함 8자~20자</div>
                    )
                    :
                    PwCValid && join.passwordCheck.length > 0  && (
                      
                      join.passwordCheck === join.password? 
                      <Green>사용 가능한 비밀번호 입니다.</Green>
                      :
                      <div>비밀번호가 일치하지 않습니다.</div>
                      //위에 비밀번호와 일치하는지 대조.
                    )

                  }  
              </ErrorMessageWrap>
            </FlexInput4>
            <SignupButton onClick={onSubmitHandler}>회원가입</SignupButton>
          </InputBox>
          <LoginBox>
        {" "}
        이미 계정이 있으신가요?{" "}
        <span onClick={() => navigate("/")}>로그인</span>
      </LoginBox>
      </SignupBox>

    </SignupContainer>
  );
};

export default SignUp;


const DuplicateCheckEmail = styled.button`
position:absolute;
width:75px;
font-size:15px;
right:10px;
top:7px;
border: 1px solid #929292;
border-radius: 4px;
background: #FAFAFA;
color:#929292;
&:focus {
  outline: 1px solid #ADADAD;
}
`
const DuplicateCheckNick = styled.button`
position:absolute;
width:75px;
font-size:15px;
right:10px;
top:7px;
border: 1px solid #929292;
border-radius: 4px;
background: #FAFAFA;
color:#929292;
&:focus {
  outline: 1px solid #ADADAD;
}
`


const LoGoSignUp = styled.span`
margin-left:40px;
color:#ED9071;
`
const LoGoSignUp1 = styled.span`
margin-left:30px;
color:#ED9071;
font-weight:500;
font-size:30px;
`

const Green = styled.div`
color:green;
font-size:12px;
margin-bottom: 5px;
`

const ErrorMessageWrap =styled.div`
color:#ef0000;
font-size:12px;
margin-bottom: 5px;
`

const FlexInput = styled.span`
position:relative;
`
const FlexInput2 = styled.span`
position:relative;
`
const FlexInput3 = styled.span`
`
const FlexInput4 = styled.span`
`

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
  margin-bottom:0px;
`;

const InputBox = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position:relative
`;

const Input = styled.input`
  border: 1px solid #929292;
  width: 250px;
  height: 40px;
  margin-bottom:5px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #FAFAFA;
  &:focus {
    outline: 1px solid #ADADAD;
  }
`;
const Input2 = styled.input`
  border: 1px solid #929292;
  width: 250px;
  height: 40px;
  margin-bottom:10px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #FAFAFA;
  &:focus {
    outline: 1px solid #ADADAD;
  }
`;
const Input3 = styled.input`
  border: 1px solid #929292;
  width: 250px;
  height: 40px;
  margin-bottom:10px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #FAFAFA;
  &:focus {
    outline: 1px solid #ADADAD;
  }
`;
const Input4 = styled.input`
  border: 1px solid #929292;
  width: 250px;
  height: 40px;
  margin-bottom:10px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #FAFAFA;
  &:focus {
    outline: 1px solid #ADADAD;
  }
`;

const SignupButton = styled.button`
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
background-color: #ED9071;
`;

const LogoBox = styled.div`
  width: 175px;
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
  span {
    margin-left: 4px;
    font-weight: bold;
    // 버튼 누르면 손모양 나오게 하는 마우스 커서
    cursor: pointer;
  }
`;