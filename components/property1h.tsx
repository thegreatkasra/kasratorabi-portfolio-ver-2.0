import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1h.module.css";

export type Property1hType = {
  className?: string;

  /** Style props */
  property1hWidth?: CSSProperties["width"];
  property1hHeight?: CSSProperties["height"];
  property1hPosition?: CSSProperties["position"];
  property1hTop?: CSSProperties["top"];
  property1hRight?: CSSProperties["right"];

  /** Action props */
  onHomeTextClick?: () => void;
  onProjectsTextClick1?: () => void;
  onAboutUsTextClick1?: () => void;
  onContactTextClick?: () => void;
};

const Property1h: NextPage<Property1hType> = ({
  className = "",
  property1hWidth,
  property1hHeight,
  property1hPosition,
  property1hTop,
  property1hRight,
  onHomeTextClick,
  onProjectsTextClick1,
  onAboutUsTextClick1,
  onContactTextClick,
}) => {
  const property1hStyle: CSSProperties = useMemo(() => {
    return {
      width: property1hWidth,
      height: property1hHeight,
      position: property1hPosition,
      top: property1hTop,
      right: property1hRight,
    };
  }, [
    property1hWidth,
    property1hHeight,
    property1hPosition,
    property1hTop,
    property1hRight,
  ]);

  return (
    <div
      className={[styles.property1h, className].join(" ")}
      style={property1hStyle}
    >
      <div className={styles.homeParent}>
        <b className={styles.home} onClick={onHomeTextClick}>
          Home
        </b>
        <b className={styles.projects} onClick={onProjectsTextClick1}>
          Projects
        </b>
        <b className={styles.projects} onClick={onAboutUsTextClick1}>
          About us
        </b>
        <b className={styles.projects} onClick={onContactTextClick}>
          Contact
        </b>
      </div>
    </div>
  );
};

export default Property1h;
