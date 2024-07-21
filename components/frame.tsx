import type { NextPage } from "next";
import styles from "./frame.module.css";

export type FrameType = {
  className?: string;
};

const Frame: NextPage<FrameType> = ({ className = "" }) => {
  return <div className={[styles.frame, className].join(" ")} />;
};

export default Frame;
