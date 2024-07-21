import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Property1h from "./property1h";
import styles from "./header-top.module.css";

export type HeaderTopType = {
  className?: string;

  /** Action props */
  onProjectsTextClick?: () => void;
  onAboutUsTextClick?: () => void;
  onContactTextClick?: () => void;
};

const HeaderTop: NextPage<HeaderTopType> = ({
  className = "",
  onProjectsTextClick,
  onAboutUsTextClick,
  onContactTextClick,
}) => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/home-page-h-d");
  }, [router]);

  const onProjectsTextClick1 = useCallback(() => {
    router.push("/projects-h-d");
  }, [router]);

  const onAboutUsTextClick1 = useCallback(() => {
    router.push("/aboutme-h-d");
  }, [router]);

  return (
    <div className={[styles.topNav, className].join(" ")}>
      <div className={styles.logo}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.kasraTorabi}>Kasra Torabi</b>
      </div>
      <Property1h
        property1hWidth="1431px"
        property1hHeight="89px"
        property1hPosition="unset"
        property1hTop="unset"
        property1hRight="unset"
        onHomeTextClick={onHomeTextClick}
        onProjectsTextClick1={onProjectsTextClick1}
        onAboutUsTextClick1={onAboutUsTextClick1}
      />
    </div>
  );
};

export default HeaderTop;
