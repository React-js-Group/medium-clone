import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggle } from "store/fetchers/authSlice";

import styles from "./styles.module.scss";

interface ModalProps {
  children: React.ReactNode;
  setDisplayForm: any;
  displayForm: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  setDisplayForm,
  displayForm,
}): JSX.Element => {
  const dispatch = useDispatch();

  const handleHideModal = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    (event.target as HTMLDivElement).id === "modal" &&
      setDisplayForm(!displayForm);
    console.log(event);
  };

  return (
    <div
      className={styles.modal}
      id="modal"
      onClick={(e) => handleHideModal(e)}
    >
      <div className={styles.container}>
        <FaTimes
          onClick={() => setDisplayForm(!displayForm)}
          className={styles.times}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
