import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/componentStyles/Header.module.scss";
import Logo from "../assets/svg-icons/logo.svg";
import BurgerIcon from "../assets/svg-icons/burger.svg";
import CloseIcon from "../assets/svg-icons/close.svg";

export const Header = () => {
  // Logic for active link marker
  const router = useRouter();
  let homeLink = "false";
  let destinationLink = "false";
  let crewLink = "false";
  let technologyLink = "false";

  if (router.asPath == "/") {
    homeLink = "true";
    destinationLink = "false";
    crewLink = "false";
    technologyLink = "false";
  }

  if (router.asPath == "/destination") {
    homeLink = "false";
    destinationLink = "true";
    crewLink = "false";
    technologyLink = "false";
  }

  if (router.asPath == "/crew") {
    homeLink = "false";
    destinationLink = "false";
    crewLink = "true";
    technologyLink = "false";
  }

  if (router.asPath == "/technology") {
    homeLink = "false";
    destinationLink = "false";
    crewLink = "false";
    technologyLink = "true";
  }

  // Logic for mobile menu Open/Close
  const [click, setClick] = useState(false);

  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <img className={styles.logo} src={Logo.src} alt="Logo" />
        </Link>
      </div>

      <div className={styles.menuIcons}></div>
      <img
        onClick={() => setClick(!click)}
        className={styles.burgerIcon}
        src={BurgerIcon.src}
        alt="Burger Icon"
        data-click={click ? "true" : "false"}
      />
      <img
        onClick={() => setClick(!click)}
        className={styles.closeIcon}
        src={CloseIcon.src}
        alt="Close Icon"
        data-click={click ? "false" : "true"}
      />
      <nav data-click={click}>
        <ul>
          <li data-active-link={homeLink}>
            <Link href="/" onClick={() => setClick(!click)}>
              <span>00 </span>HOME
            </Link>
          </li>
          <li data-active-link={destinationLink}>
            <Link href="/destination" onClick={() => setClick(!click)}>
              <span>01 </span>DESTINATION
            </Link>
          </li>
          <li data-active-link={crewLink}>
            <Link href="/crew" onClick={() => setClick(!click)}>
              <span>02 </span>CREW
            </Link>
          </li>
          <li data-active-link={technologyLink}>
            <Link href="/technology" onClick={() => setClick(!click)}>
              <span>03 </span>TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
