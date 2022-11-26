import { useState } from "react";

const useInput = (init = {}) => {
  // 2. value는 useState로 관리하고,
  const [value, setValue] = useState(init);

  // 3. 핸들러 로직도 구현합니다.

  //useState의 setUseState를 쓰기위한 함수
  const valueSetValue = (e) => {
    setValue({ ...e });
  };

  //onChange에서 사용할 함수
  const handler = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // 1. 이 훅은 [ ] 을 반환하는데, 첫번째는 value, 두번째는 핸들러를 반환합니다.
  return [value, valueSetValue, handler];
};

export default useInput;
