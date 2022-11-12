import React from "react";

import styles from "../styles/componentStyles/PageMessage.module.scss";

export const PageMessage = (props) => {
  return (
    <h5 className={styles.heading}>
      <span>{props.number}</span>
      {props.text}
    </h5>
  );
};
