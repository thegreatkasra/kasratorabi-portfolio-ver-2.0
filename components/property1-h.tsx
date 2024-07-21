import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-h.module.css";

export type Property1H1Type = {
  className?: string;

  /** Style props */
  property1HPosition?: CSSProperties["position"];
  property1HTop?: CSSProperties["top"];
  property1HLeft?: CSSProperties["left"];
};

const Property1H1: NextPage<Property1H1Type> = ({
  className = "",
  property1HPosition,
  property1HTop,
  property1HLeft,
}) => {
  const property1HStyle: CSSProperties = useMemo(() => {
    return {
      position: property1HPosition,
      top: property1HTop,
      left: property1HLeft,
    };
  }, [property1HPosition, property1HTop, property1HLeft]);

  return (
    <div
      className={[styles.property1h, className].join(" ")}
      style={property1HStyle}
    >
      <b className={styles.home}>Home</b>
      <b className={styles.projects}>Projects</b>
      <b className={styles.projects}>About us</b>
      <b className={styles.projects}>Contact</b>
    </div>
  );
};

export default Property1H1;
