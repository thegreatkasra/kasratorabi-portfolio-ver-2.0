import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Property1h from "../components/property1h";
import styles from "./projects.module.css";

const Projects: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contactus");
  }, [router]);

  return (
    <div className={styles.projects}>
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
          onAboutUsTextClick1={onAboutUsTextClick}
          onContactTextClick={onContactTextClick}
        />
      </div>
      <b className={styles.uberFood}>1.Uber Food</b>
      <b className={styles.fentyBeautyRedesign}>2.Fenty Beauty Redesign</b>
      <b className={styles.nikafilm}>3.NikaFilm</b>
      <img className={styles.projectsChild} alt="" src="/frame-5.svg" />
    </div>
  );
};

export default Projects;
