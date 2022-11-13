import React, { useState } from 'react'
import styled from 'styled-components';
import ValidBtnInput from '../components/element/ValidBtnInput';
import ValidInput from '../components/element/ValidInput';
import regex from '../shared/regex';

const SignUp = () => {
  const [value, setValue] = useState("")
  const [isCheck, setIsCheck] = useState(false)
  const [password, setPassword] = useState("")

  return (
    <div>
      <h2>크멍 회원가입하기</h2>
      <div>
        <label>닉네임</label>
        <ValidBtnInput
          label="닉네임"
          value={value}
          setValue={setValue}
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          handleValueCheck={() => {
            alert("인증완료!");
            setIsCheck(true);
          }}
          regexCheck={regex.email}
          defaultText="닉네임을 입력해주세요"
          successText="사용할 수 있는 닉네임입니다"
          errorText="닉네임 형식을 다시 확인해주세요"
        />
        <label>아이디</label>
        <ValidBtnInput
          label="아이디"
          value={value}
          setValue={setValue}
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          handleValueCheck={() => {
            alert("인증완료!");
            setIsCheck(true);
          }}
          regexCheck={regex.email}
          defaultText="아이디를 입력해주세요"
          successText="사용할 수 있는 아이디입니다"
          errorText="아이디 형식을 다시 확인해주세요"
        />
        <label>비밀번호</label>
        <ValidInput
          label="비밀번호"
          type="password"
          value={password}
          setValue={password}
          maxValue={30}
          regexCheck={regex.password}
          defaultText="비밀번호를 입력해주세요"
          successText="사용할 수 있는 비밀번호입니다"
          errorText="비밀번호 형식을 다시 확인해주세요"
        />
        <label>비밀번호 확인</label>
        <ValidInput
          label="비밀번호 확인"
          type="password"
          value={password}
          setValue={password}
          maxValue={30}
          regexCheck={regex.password}
          defaultText="비밀번호를 입력해주세요"
          successText="사용할 수 있는 비밀번호입니다"
          errorText="비밀번호 형식을 다시 확인해주세요"
        />
      </div>
      <div>
        <button>회원가입 완료</button>
        <button>로그인하기</button>
      </div>
    </div>
  );
}

export default SignUp ;

