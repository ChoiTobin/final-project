import React, { useState } from "react";
import MyModal from "./MyModal";
import ModalPortal from "./ModalPortal";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    modal: false
  });

  const handleOpenModal = () => {
    setState({
      modal: true
    });
  };
  const handleCloseModal = () => {
    setState({
      modal: false
    });
  };
  return (
    <div className="App">
      <h1>안녕하세요 리액트!</h1>
      <button onClick={handleOpenModal}>모달 열기</button>
      {state.modal && (
        <ModalPortal>
          <MyModal onClose={handleCloseModal} />
        </ModalPortal>
      )}
    </div>
  );
};

export default App;
