import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
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
const VectorIcon = styled.img`
  width: 26px;
  position: relative;
  height: 35.5px;
`;
const KasraTorabi = styled.div`
  position: relative;
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
  font-size: var(--font-size-5xl);
  font-family: var(--font-lexend);
`;
const UberFood = styled.b`
  position: absolute;
  bottom: 762px;
  left: 77px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 639px;
`;
const FentyBeautyRedesign = styled.b`
  position: absolute;
  bottom: 611px;
  left: 77px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 1280px;
`;
const Nikafilm = styled.b`
  position: absolute;
  bottom: 460px;
  left: 77px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 1280px;
`;
const ProjectsChild = styled.img`
  position: absolute;
  top: 802px;
  left: calc(50% - 720px);
  width: 1440px;
  height: 158px;
  overflow: hidden;
`;
const ProjectsRoot = styled.div`
  width: 100%;
  position: relative;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-45xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const Projects: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contactus");
  }, [router]);

  return (
    <ProjectsRoot>
      <Bg>
        <BgChild />
        <BgItem />
      </Bg>
      <Top1>
        <Logo>
          <VectorIcon alt="" src="/vector.svg" />
          <KasraTorabi>Kasra Torabi</KasraTorabi>
        </Logo>
        <Property1h
          property1hWidth="1103px"
          property1hHeight="unset"
          property1hPosition="unset"
          property1hTop="unset"
          property1hRight="unset"
          onHomeTextClick={onHomeTextClick}
          onAboutUsTextClick1={onAboutUsTextClick}
          onContactTextClick={onContactTextClick}
        />
      </Top1>
      <UberFood>1.Uber Food</UberFood>
      <FentyBeautyRedesign>2.Fenty Beauty Redesign</FentyBeautyRedesign>
      <Nikafilm>3.NikaFilm</Nikafilm>
      <ProjectsChild alt="" src="/frame-5.svg" />
    </ProjectsRoot>
  );
};

export default Projects;