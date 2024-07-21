import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Progress } from "antd";
import styles from "./projects1.module.css";

export type Projects1Type = {
  className?: string;
};

const Projects1: NextPage<Projects1Type> = ({ className = "" }) => {
  return (
    <Progress
      className={[styles.projects, className].join(" ")}
      percent={1}
      style={{ width: 1440 }}
      type="circle"
      size="small"
      showInfo={false}
    />
  );
};

export default Projects1;
