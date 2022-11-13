import React, { useState } from "react";

import { DestinationMenuLinks } from "../data";

import styles from "../styles/componentStyles/DestinationMenu.module.scss";

export const DestinationMenu = () => {
  const [click, setClick] = useState("0");

  return {
    click,
    render: (
      <nav className={styles.container}>
        <ul data-click={click}>
          {DestinationMenuLinks.map((link, index) => {
            return (
              <li key={link}>
                <p onClick={() => setClick(index)}>{link}</p>
              </li>
            );
          })}
        </ul>
      </nav>
    ),
  };
};
