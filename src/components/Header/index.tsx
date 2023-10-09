import React from "react";
import { Wrapper } from "../Wrapper";
import styles from "./header.module.scss";

interface IProps {
  children?: React.ReactNode;
}

export const Header: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
