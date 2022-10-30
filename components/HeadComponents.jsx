import React from "react";
import Head from "next/head";
import Favicon from "../assets/favicon.svg";

export const HeadComponents = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href={Favicon.src} />
    </Head>
  );
};
