import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "store/fetchers/authSlice";

import styles from "./styles.module.scss";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }): JSX.Element => {
  const dispatch = useDispatch();

  const handleHideModal = (event: React.MouseEvent<HTMLDivElement>) => {
    (event.target as HTMLDivElement).id === "modal" && dispatch(toggle());
  };

  return (
    <div className={styles.modal} id="modal" onClick={handleHideModal}>
      {children}
    </div>
  );
};

export default Modal;
