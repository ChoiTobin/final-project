// yarn add react-responsive-modal
// https://codesandbox.io/s/9jxp669j2o?file=/index.js

import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const ResModal = ({props}) => {
  const [state, setState] = useState({
    open: false,
  });

  const onOpenModal = () => {
    setState({ open: true });
  };

  const onCloseModal = () => {
    setState({ open: false });
  };

  const { open } = state;

  useEffect(() => {
    console.log('modal state changed');
  }, [state])

    return (
      <div style={styles}>
        <h2>react-responsive-modal</h2>
        <button onClick={onOpenModal}>Open modal</button>
        <Modal open={open} onClose={onCloseModal}>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div>
    );
}

export default ResModal;
