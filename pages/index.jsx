import Link from "next/link";

import { HeadComponent } from "../components";

import BGImageDesktop from "../assets/background-images/index/bg-image-desktop.webp";
import BGImageTablet from "../assets/background-images/index/bg-image-tablet.webp";
import BGImageMobile from "../assets/background-images/index/bg-image-mobile.webp";

import styles from "../styles/pagesStyles/Index.module.scss";

export default function Home() {
  return (
    <>
      <HeadComponent
        title="Space Tourism | Homes"
        description="A practice website for portfolio"
      />
      <picture>
        <source srcSet={BGImageMobile.src} media="(max-width: 550px)" />
        <source srcSet={BGImageTablet.src} media="(max-width: 850px)" />
        <source srcSet={BGImageDesktop.src} media="(min-width: 851px)" />
        <img
          className={styles.backgroundImage}
          src={BGImageDesktop.src}
          alt="Background"
        />
      </picture>
      <main className={styles.container}>
        <div className={styles.description}>
          <div className={styles.descriptionWrapper}>
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href="/destination">
            <button>EXPLORE</button>
          </Link>
        </div>
      </main>
    </>
  );
}
