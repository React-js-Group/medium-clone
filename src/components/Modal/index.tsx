import React from "react";

import styles from "./styles.module.scss";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }): JSX.Element => {
  return <div className={styles.modal}>{children}</div>;
};

export default Modal;
