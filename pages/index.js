import { HeadComponent } from "../components";

import BGImageDesktop from "../assets/background-images/bg-image-desktop.webp";
import BGImageTablet from "../assets/background-images/bg-image-tablet.webp";
import BGImageMobile from "../assets/background-images/bg-image-mobile.webp";

import styles from "../styles/pagesStyles/Index.module.scss";

export default function Home() {
  return (
    <>
      <HeadComponent
        title="Space Tourism | Homes"
        description="A practice website for portfolio"
      />
      <main className={styles.container}>
        <picture>
          <source srcSet={BGImageMobile.src} media="(max-width: 480px)" />
          <source srcSet={BGImageTablet.src} media="(max-width: 800px)" />
          <source srcSet={BGImageDesktop.src} media="(min-width: 801px)" />
          <img
            className={styles.image}
            src={BGImageDesktop.src}
            alt="Background"
          />
        </picture>
      </main>
    </>
  );
}
