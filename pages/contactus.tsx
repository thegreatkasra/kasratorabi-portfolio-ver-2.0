import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Property1h from "../components/property1h";
import styles from "./contactus.module.css";

const Contactus: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme");
  }, [router]);

  const onFrameClick = useCallback(() => {
    window.open("https://www.behance.net/kasratorabi1");
  }, []);

  return (
    <div className={styles.contactus}>
      <div className={styles.bg}>
        <div className={styles.bgChild} />
        <div className={styles.bgItem} />
      </div>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.kasraTorabi}>Kasra Torabi</div>
        </div>
        <Property1h
          property1hWidth="1103px"
          property1hHeight="unset"
          property1hPosition="unset"
          property1hTop="unset"
          property1hRight="unset"
          onHomeTextClick={onHomeTextClick}
          onProjectsTextClick1={onProjectsTextClick}
          onAboutUsTextClick1={onAboutUsTextClick}
        />
      </div>
      <div className={styles.contactusInner}>
        <div className={styles.frameChild} onClick={onFrameClick} />
      </div>
    </div>
  );
};

export default Contactus;
