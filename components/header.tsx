import type { NextPage } from "next";
import { useCallback, type CSSProperties } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Property1h from "./property1h";

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

const VectorIcon = styled.img`
  width: 26px;
  position: relative;
  height: 35.5px;
`;
const KasraTorabi = styled.b`
  position: relative;
`;
const Logo = styled.div`
  width: 329px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-6xs) 0px;
  box-sizing: border-box;
  gap: var(--gap-3xl);
`;
const TopNavRoot = styled.div<{
  logoLeft?: CSSProperties["left"];
  logoWidth?: CSSProperties["width"];
  logoOverflow?: CSSProperties["overflow"];
  logoPadding?: CSSProperties["padding"];
  logoGap?: CSSProperties["gap"];
  logoPosition?: CSSProperties["position"];
  logoTop?: CSSProperties["top"];
}>`position: absolute;
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
  left: ${(p) => p.logoLeft}
  width: ${(p) => p.logoWidth}
  overflow: ${(p) => p.logoOverflow}
  padding: ${(p) => p.logoPadding}
  gap: ${(p) => p.logoGap}
  position: ${(p) => p.logoPosition}
  top: ${(p) => p.logoTop}
`;

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
    <TopNavRoot
      logoLeft={logoLeft}
      logoWidth={logoWidth}
      logoOverflow={logoOverflow}
      logoPadding={logoPadding}
      logoGap={logoGap}
      logoPosition={logoPosition}
      logoTop={logoTop}
      className={className}
    >
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
        onProjectsTextClick1={onProjectsTextClick1}
        onAboutUsTextClick1={onAboutUsTextClick1}
        onContactTextClick={onContactTextClick1}
      />
    </TopNavRoot>
  );
};

export default Header;