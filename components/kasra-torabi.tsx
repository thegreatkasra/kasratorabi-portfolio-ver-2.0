import type { NextPage } from "next";
import styles from "./kasra-torabi.module.css";

export type KasraTorabiType = {
  className?: string;
};

const KasraTorabi: NextPage<KasraTorabiType> = ({ className = "" }) => {
  return (
    <div className={[styles.kasraTorabi, className].join(" ")}>
      Kasra Torabi
    </div>
  );
};

export default KasraTorabi;
