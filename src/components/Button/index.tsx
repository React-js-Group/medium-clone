import React from "react";

import styles from "./styles.module.scss";

interface ButtonProps {
  content: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick: () => void;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  color,
  type,
}): JSX.Element => {
  return (
    <button
      type={type}
      className={styles.button}
      style={{ background: color }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
