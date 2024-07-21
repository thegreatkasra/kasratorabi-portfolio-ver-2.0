import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Property1h from "./property1h";

export type MainHeaderType = {
  className?: string;
};

const LogoIcon = styled.img`
  position: absolute;
  top: 24px;
  left: 83px;
  width: 185px;
  height: 49.5px;
`;
const TopRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 98px;
  overflow: hidden;
`;

const MainHeader: NextPage<MainHeaderType> = ({ className = "" }) => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contactus");
  }, [router]);

  return (
    <TopRoot className={className}>
      <LogoIcon alt="" src="/logo.svg" />
      <Property1h
        property1hWidth="1103px"
        property1hHeight="unset"
        property1hPosition="absolute"
        property1hTop="0px"
        property1hRight="0px"
        onHomeTextClick={onHomeTextClick}
        onProjectsTextClick1={onProjectsTextClick}
        onContactTextClick={onContactTextClick}
      />
    </TopRoot>
  );
};

export default MainHeader;