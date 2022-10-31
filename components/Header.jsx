import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/componentStyles/Header.module.scss";
import Logo from "../assets/favicon.svg";

export const Header = () => {
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

  return (
    <header className={styles.header}>
      <Image src={Logo} height={48} width={48} alt="Logo" />
      <nav>
        <ul>
          <li data-active-link={homeLink}>
            <Link href="/">
              <span>00</span> HOME
            </Link>
          </li>
          <li data-active-link={destinationLink}>
            <Link href="/destination">
              <span>01</span> DESTINATION
            </Link>
          </li>
          <li data-active-link={crewLink}>
            <Link href="/crew">
              <span>02</span> CREW
            </Link>
          </li>
          <li data-active-link={technologyLink}>
            <Link href="/technology">
              <span>03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
