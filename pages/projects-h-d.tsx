import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import HeaderTop from "../components/header-top";

const BgIcon = styled.img`
  width: 1353px;
  position: relative;
  height: 433px;
`;
const Bg = styled.div`
  position: absolute;
  top: -255px;
  left: 134px;
  width: 1353px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const UberFood = styled.b`
  align-self: stretch;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const UberFoodParent = styled.div`
  position: absolute;
  top: 199px;
  left: 79px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`;
const FrameChild = styled.img`
  width: 115px;
  position: relative;
  height: 115px;
  cursor: pointer;
`;
const ProjectshdInner = styled.div`
  position: absolute;
  bottom: 101px;
  left: 0px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 21px var(--padding-61xl);
`;
const ProjectshdRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-45xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const ProjectsHD: NextPage = () => {
  const router = useRouter();

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme-h-d");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-h-d");
  }, [router]);

  const onFrameClick = useCallback(() => {
    window.open("https://www.behance.net/kasratorabi1");
  }, []);

  return (
    <ProjectshdRoot>
      <Bg>
        <BgIcon alt="" src="/bg.svg" />
      </Bg>
      <HeaderTop
        onAboutUsTextClick={onAboutUsTextClick}
        onContactTextClick={onContactTextClick}
      />
      <UberFoodParent>
        <UberFood>1.Uber Food</UberFood>
        <UberFood>2.Fenty Beauty Redesign</UberFood>
        <UberFood>3.NikaFilm</UberFood>
      </UberFoodParent>
      <ProjectshdInner>
        <FrameChild alt="" src="/frame-6.svg" onClick={onFrameClick} />
      </ProjectshdInner>
    </ProjectshdRoot>
  );
};

export default ProjectsHD;