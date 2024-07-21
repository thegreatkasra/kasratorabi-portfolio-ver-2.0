import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import styles from "./home-page-h-d.module.css";

const HomePageHD: NextPage = () => {
  const router = useRouter();

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects-h-d");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme-h-d");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-h-d");
  }, [router]);

  return (
    <div className={styles.homepagehd}>
      <Header
        onProjectsTextClick={onProjectsTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onContactTextClick={onContactTextClick}
      />
      <div className={styles.d} />
      <div className={styles.text1Parent}>
        <div className={styles.text1}>
          <div className={styles.fresh}>Fresh</div>
          <div className={styles.fresh}>Modern</div>
          <div className={styles.fresh}>High quality</div>
        </div>
        <div className={styles.text2}>
          <b className={styles.uiDesignerUx}>Ui Designer Ux Researcher</b>
        </div>
      </div>
    </div>
  );
};

export default HomePageHD;
