import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import KasraTorabi from "../components/kasra-torabi";
import Property1h from "../components/property1h";

const BgChild = styled.div`
  position: absolute;
  top: 73px;
  left: 0px;
  filter: blur(39.6px);
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  width: 1440px;
  height: 1024px;
`;
const BgItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  filter: blur(200px);
  border-radius: 50%;
  background-color: var(--color-goldenrod);
  width: 1143px;
  height: 237px;
`;
const Bg = styled.div`
  position: absolute;
  top: -73px;
  left: 0px;
  width: 1440px;
  height: 1097px;
`;
const D = styled.div`
  position: absolute;
  top: 98px;
  left: calc(50% - 512px);
  width: 1025px;
  height: 926px;
  overflow: hidden;
`;
const VectorIcon = styled.img`
  width: 26px;
  position: relative;
  height: 35.5px;
`;
const Logo = styled.div`
  width: 185px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-6xs) 0px;
  box-sizing: border-box;
  gap: var(--gap-xs);
`;
const Top1 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 720px);
  width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const UiUxDesigner = styled.b`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
const Fresh = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
`;
const Modern = styled.div`
  position: absolute;
  top: 0px;
  left: 544px;
  font-weight: 500;
`;
const HighQuility = styled.div`
  position: absolute;
  top: 0px;
  left: 1085px;
  font-weight: 500;
`;
const FreshParent = styled.div`
  position: absolute;
  top: 0px;
  left: 372px;
  width: 1201px;
  height: 21px;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const Text1 = styled.div`
  position: absolute;
  bottom: 64px;
  left: calc(50% - 972px);
  width: 2384px;
  height: 218px;
  font-size: var(--font-size-109xl);
  font-family: var(--font-roboto-mono);
`;
const HomePageRoot = styled.div`
  width: 100%;
  position: relative;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--full-white);
  font-family: var(--font-lexend);
`;

const HomePage: NextPage = () => {
  const router = useRouter();

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contactus");
  }, [router]);

  return (
    <HomePageRoot>
      <Bg>
        <BgChild />
        <BgItem />
      </Bg>
      <D />
      <Top1>
        <Logo>
          <VectorIcon alt="" src="/vector.svg" />
          <KasraTorabi />
        </Logo>
        <Property1h
          property1hWidth="1103px"
          property1hHeight="unset"
          property1hPosition="unset"
          property1hTop="unset"
          property1hRight="unset"
          onProjectsTextClick1={onProjectsTextClick}
          onAboutUsTextClick1={onAboutUsTextClick}
          onContactTextClick={onContactTextClick}
        />
      </Top1>
      <Text1>
        <UiUxDesigner>Ui Ux Designer Front-end(react)</UiUxDesigner>
        <FreshParent>
          <Fresh>Fresh</Fresh>
          <Modern>Modern</Modern>
          <HighQuility>High Quility</HighQuility>
        </FreshParent>
      </Text1>
    </HomePageRoot>
  );
};

export default HomePage;