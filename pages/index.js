import { HeadComponent } from "../components";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <HeadComponent
        title="Space Tourism Website"
        description="A practice website for portfolio"
      />
      <p className={styles.heading}>Hello Eshu</p>
    </>
  );
}
