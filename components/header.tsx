import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import Property1h from "./property1h";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;

  /** Style props */
  logoLeft?: CSSProperties["left"];
  logoWidth?: CSSProperties["width"];
  logoOverflow?: CSSProperties["overflow"];
  logoPadding?: CSSProperties["padding"];
  logoGap?: CSSProperties["gap"];
  logoPosition?: CSSProperties["position"];
  logoTop?: CSSProperties["top"];

  /** Action props */
  onProjectsTextClick?: () => void;
  onAboutUsTextClick?: () => void;
  onContactTextClick?: () => void;
};

const Header: NextPage<HeaderType> = ({
  className = "",
  logoLeft,
  logoWidth,
  logoOverflow,
  logoPadding,
  logoGap,
  logoPosition,
  logoTop,
  onProjectsTextClick,
  onAboutUsTextClick,
  onContactTextClick,
}) => {
  const topNavStyle: CSSProperties = useMemo(() => {
    return {
      left: logoLeft,
      width: logoWidth,
      overflow: logoOverflow,
      padding: logoPadding,
      gap: logoGap,
      position: logoPosition,
      top: logoTop,
    };
  }, [
    logoLeft,
    logoWidth,
    logoOverflow,
    logoPadding,
    logoGap,
    logoPosition,
    logoTop,
  ]);

  const router = useRouter();

  const onProjectsTextClick1 = useCallback(() => {
    router.push("/projects-h-d");
  }, [router]);

  const onAboutUsTextClick1 = useCallback(() => {
    router.push("/aboutme-h-d");
  }, [router]);

  const onContactTextClick1 = useCallback(() => {
    router.push("/contact-h-d");
  }, [router]);

  return (
    <div className={[styles.topNav, className].join(" ")} style={topNavStyle}>
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
        onProjectsTextClick1={onProjectsTextClick1}
        onAboutUsTextClick1={onAboutUsTextClick1}
        onContactTextClick={onContactTextClick1}
      />
    </div>
  );
};

export default Header;
