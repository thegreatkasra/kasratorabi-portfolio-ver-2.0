import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import KasraTorabi from "../components/kasra-torabi";
import Property1h from "../components/property1h";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  const router = useRouter();

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contactus");
  }, [router]);

  return (
    <div className={styles.homePage}>
      <div className={styles.bg}>
        <div className={styles.bgChild} />
        <div className={styles.bgItem} />
      </div>
      <div className={styles.d} />
      <div className={styles.top}>
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <KasraTorabi />
        </div>
        <Property1h
          property1hWidth="1103px"
          property1hHeight="unset"
          property1hPosition="unset"
          property1hTop="unset"
          property1hRight="unset"
          onProjectsTextClick1={onProjectsTextClick}
          onAboutUsTextClick1={onAboutUsTextClick}
          onContactTextClick={onContactTextClick}
        />
      </div>
      <div className={styles.text}>
        <b className={styles.uiUxDesigner}>Ui Ux Designer Front-end(react)</b>
        <div className={styles.freshParent}>
          <div className={styles.fresh}>Fresh</div>
          <div className={styles.modern}>Modern</div>
          <div className={styles.highQuility}>High Quility</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
