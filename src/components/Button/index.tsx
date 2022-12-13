import React from "react";

import styles from "./styles.module.scss";

interface ButtonProps {
  content: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  style?: {};
}

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  type,
  style,
}): JSX.Element => {
  return (
    <button
      type={type}
      className={styles.button}
      style={style}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
