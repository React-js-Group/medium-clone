import React from "react";

import styles from "./styles.module.scss";

interface ButtonProps {
  content: any;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  style?: {};
  className?: any;
}

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  type,
  style,
  className,
}): JSX.Element => {
  return (
    <button
      type={type}
      className={`styles.button ${className}`}
      style={style}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
