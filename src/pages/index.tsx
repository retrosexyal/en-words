import React from "react";

import { Header } from "@/components/Header";
import styles from "./main.module.scss";
import { Main } from "@/containers/Main";

const index = () => {
  return (
    <div className={styles.wrapper}>
      <Header>en Words</Header>
      <Main />
      <Header>footer</Header>
    </div>
  );
};

export default index;
