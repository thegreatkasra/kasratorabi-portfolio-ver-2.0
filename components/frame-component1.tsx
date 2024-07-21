import type { NextPage } from "next";
import styled from "styled-components";

export type FrameComponent1Type = {
  className?: string;
};

const Nikafilm = styled.p`
  margin: 0;
`;
const UberFood = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  display: -webkit-inline-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 533px;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: var(--br-3xs);
  width: 283px;
  height: 204px;
  object-fit: cover;
`;
const UberFoodParent = styled.div`
  align-self: stretch;
  position: relative;
  height: 204px;
`;
const ProjectsTabletInnerRoot = styled.div`
  position: absolute;
  top: 661px;
  left: calc(50% - 462px);
  width: 924px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <ProjectsTabletInnerRoot className={className}>
      <UberFoodParent>
        <UberFood>
          <Nikafilm>3.NikaFilm</Nikafilm>
        </UberFood>
        <FrameChild alt="" src="/rectangle-32@2x.png" />
      </UberFoodParent>
    </ProjectsTabletInnerRoot>
  );
};

export default FrameComponent1;