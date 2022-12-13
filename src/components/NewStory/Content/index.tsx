import React, { useEffect, useReducer, useRef, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import Options from "./Options";

import styles from "./styles.module.scss";

interface InitialInfo {
  title: string;
  description: string;
  plusPosition: string;
  option: boolean;
  formType: string;
}

interface ActionInfo {
  type: string;
  payload?: string;
  condition?: boolean;
}

const initial: InitialInfo = {
  title: "",
  description: "",
  formType: "",
  plusPosition: "",
  option: false,
};

const reducer = (state: InitialInfo, action: ActionInfo) => {
  const { type, payload, condition } = action;
  switch (type) {
    case "TITLE":
      return { ...state, title: payload };
    case "DESCRIPTION":
      return { ...state, description: payload };
    case "PLUSPOSITION":
      return { ...state, plusPosition: payload };
    case "OPTION":
      return { ...state, option: condition };
  }
};

const Content: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initial);
  const [formType, setFormType] = useState<string>("");

  const DescRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    DescRef.current?.focus();
  }, []);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "TITILE", payload: event.target.value });
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: "DESCRIPTION", payload: event.target.value });
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="عنوان"
          value={state?.title}
          type="text"
          onChange={handleChangeTitle}
          onFocus={() => {
            dispatch({ type: "TITILE", payload: "title" });
            dispatch({ type: "PLUSPOSITION", payload: "title" });
            dispatch({ type: "OPTION", condition: false });
          }}
        />
      </div>
      <span
        className={`${styles.Plus} ${
          state?.plusPosition === "title" && styles.plusPosition
        }`}
        onClick={() => dispatch({ type: "OPTION", condition: !state?.option })}
      >
        <BsPlusCircle
          className={`${state?.option ? styles.rotate : styles.rotateBack}`}
        />
      </span>
      <Options plusPosition={state?.plusPosition} options={state?.option} />
      <div>
        <input
          type="text"
          placeholder="توضیحات"
          ref={DescRef}
          value={state?.description}
          onChange={handleChangeDescription}
          onFocus={() => {
            dispatch({ type: "TITILE", payload: "description" });
            dispatch({ type: "OPTIONS", condition: false });
          }}
        />
      </div>
    </div>
  );
};

export default Content;
