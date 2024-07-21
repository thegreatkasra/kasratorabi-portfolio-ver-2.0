import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Property1h from "./property1h";
import styles from "./main-header.module.css";

export type MainHeaderType = {
  className?: string;
};

const MainHeader: NextPage<MainHeaderType> = ({ className = "" }) => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contactus");
  }, [router]);

  return (
    <div className={[styles.top, className].join(" ")}>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <Property1h
        property1hWidth="1103px"
        property1hHeight="unset"
        property1hPosition="absolute"
        property1hTop="0px"
        property1hRight="0px"
        onHomeTextClick={onHomeTextClick}
        onProjectsTextClick1={onProjectsTextClick}
        onContactTextClick={onContactTextClick}
      />
    </div>
  );
};

export default MainHeader;
