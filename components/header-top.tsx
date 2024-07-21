import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Property1h from "./property1h";

export type HeaderTopType = {
  className?: string;

  /** Action props */
  onProjectsTextClick?: () => void;
  onAboutUsTextClick?: () => void;
  onContactTextClick?: () => void;
};

const VectorIcon = styled.img`
  width: 26px;
  position: relative;
  height: 35.5px;
`;
const KasraTorabi = styled.b`
  position: relative;
`;
const Logo = styled.div`
  flex: 1;
  height: 49.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-6xs) 0px;
  box-sizing: border-box;
  gap: var(--gap-xs);
`;
const TopNavRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--padding-61xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

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
    <TopNavRoot className={className}>
      <Logo>
        <VectorIcon alt="" src="/vector.svg" />
        <KasraTorabi>Kasra Torabi</KasraTorabi>
      </Logo>
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
    </TopNavRoot>
  );
};

export default HeaderTop;