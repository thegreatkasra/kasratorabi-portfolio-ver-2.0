import type { NextPage } from "next";
import styled from "styled-components";

export type KasraTorabiType = {
  className?: string;
};

const KasraTorabiRoot = styled.div`
  position: relative;
`;

const KasraTorabi: NextPage<KasraTorabiType> = ({ className = "" }) => {
  return <KasraTorabiRoot className={className}>Kasra Torabi</KasraTorabiRoot>;
};

export default KasraTorabi;