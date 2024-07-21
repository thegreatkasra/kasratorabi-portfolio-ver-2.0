import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import styled from "styled-components";

const D = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 361px);
  width: 722px;
  height: 917px;
  overflow: hidden;
`;
const Fresh = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;
const Text1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 632px;
`;
const UiDesignerUx = styled.b`
  flex: 1;
  position: relative;
`;
const Text2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  font-size: var(--font-size-109xl);
`;
const Text1Parent = styled.div`
  position: absolute;
  bottom: 0px;
  left: calc(50% - 960px);
  width: 1922px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;
const HomepagehdRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const HomePageHD: NextPage = () => {
  const router = useRouter();

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects-h-d");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme-h-d");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-h-d");
  }, [router]);

  return (
    <HomepagehdRoot>
      <Header
        onProjectsTextClick={onProjectsTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onContactTextClick={onContactTextClick}
      />
      <D />
      <Text1Parent>
        <Text1>
          <Fresh>Fresh</Fresh>
          <Fresh>Modern</Fresh>
          <Fresh>High quality</Fresh>
        </Text1>
        <Text2>
          <UiDesignerUx>Ui Designer Ux Researcher</UiDesignerUx>
        </Text2>
      </Text1Parent>
    </HomepagehdRoot>
  );
};

export default HomePageHD;