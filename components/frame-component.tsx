import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  rectangle4?: string;
  title?: string;

  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  rectangle4,
  title = "Title Name",
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDivStyle}
    >
      <img className={styles.componentChild} alt="" src={rectangle4} />
      <div className={styles.componentItem} />
      <b className={styles.titleName}>{title}</b>
    </div>
  );
};

export default FrameComponent;
