import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type Property1hType = {
  className?: string;

  /** Style props */
  property1hWidth?: CSSProperties["width"];
  property1hHeight?: CSSProperties["height"];
  property1hPosition?: CSSProperties["position"];
  property1hTop?: CSSProperties["top"];
  property1hRight?: CSSProperties["right"];

  /** Action props */
  onHomeTextClick?: () => void;
  onProjectsTextClick1?: () => void;
  onAboutUsTextClick1?: () => void;
  onContactTextClick?: () => void;
};

const Home = styled.b`
  position: relative;
  color: var(--bg);
  text-align: center;
`;
const Projects = styled.b`
  position: relative;
`;
const HomeParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-106xl);
`;
const Property1hRoot = styled.div<{
  property1hWidth?: CSSProperties["width"];
  property1hHeight?: CSSProperties["height"];
  property1hPosition?: CSSProperties["position"];
  property1hTop?: CSSProperties["top"];
  property1hRight?: CSSProperties["right"];
}>`width: 994px;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-15xl) var(--padding-160xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
  width: ${(p) => p.property1hWidth}
  height: ${(p) => p.property1hHeight}
  position: ${(p) => p.property1hPosition}
  top: ${(p) => p.property1hTop}
  right: ${(p) => p.property1hRight}
`;

const Property1h: NextPage<Property1hType> = ({
  className = "",
  property1hWidth,
  property1hHeight,
  property1hPosition,
  property1hTop,
  property1hRight,
  onHomeTextClick,
  onProjectsTextClick1,
  onAboutUsTextClick1,
  onContactTextClick,
}) => {
  return (
    <Property1hRoot
      property1hWidth={property1hWidth}
      property1hHeight={property1hHeight}
      property1hPosition={property1hPosition}
      property1hTop={property1hTop}
      property1hRight={property1hRight}
      className={className}
    >
      <HomeParent>
        <Home onClick={onHomeTextClick}>Home</Home>
        <Projects onClick={onProjectsTextClick1}>Projects</Projects>
        <Projects onClick={onAboutUsTextClick1}>About us</Projects>
        <Projects onClick={onContactTextClick}>Contact</Projects>
      </HomeParent>
    </Property1hRoot>
  );
};

export default Property1h;