import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type ProjectCardsType = {
  className?: string;
  uberFood?: string;
  rectangle3?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

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
const ProjectCardsRoot = styled.div<{ propTop?: CSSProperties["top"] }>`
  position: absolute;
  top: 157px;
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
  top: ${(p) => p.propTop};
`;

const ProjectCards: NextPage<ProjectCardsType> = ({
  className = "",
  uberFood,
  rectangle3,
  propTop,
}) => {
  return (
    <ProjectCardsRoot propTop={propTop} className={className}>
      <UberFoodParent>
        <UberFood>{uberFood}</UberFood>
        <FrameChild alt="" src={rectangle3} />
      </UberFoodParent>
    </ProjectCardsRoot>
  );
};

export default ProjectCards;