// 모달 입력 예시

// import React, { useEffect, useCallback } from 'react';
// import styled from 'styled-components';

// import Modal from "./components/Modal";
// import useModal from './components/Modal/useModal';

// const Form = () => {
//   return (
//     <form>
//       <input placeholder="입력바람" />
//     </form>
//   )
// }

// function App() {
//   const [modalOption, showModal] = useModal();

//   const onClick = useCallback(() => {
//     showModal(
//       true, 
//       "안녕하세요", 
//       () => console.log("모달 on"),
//       null,
//       <Form />
//     )
//   }, [modalOption])

//   return (
//     <div className="App">
//       <button onClick={onClick}>모달버튼</button>
//       <Modal modalOption={modalOption} />     
//     </div>
//   );
// }

// export default App;