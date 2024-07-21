import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type Property1H1Type = {
  className?: string;

  /** Style props */
  property1HPosition?: CSSProperties["position"];
  property1HTop?: CSSProperties["top"];
  property1HLeft?: CSSProperties["left"];
};

const Home = styled.b`
  position: relative;
  color: var(--bg);
  text-align: center;
`;
const Projects = styled.b`
  position: relative;
`;
const Property1hRoot = styled.div<{
  property1HPosition?: CSSProperties["position"];
  property1HTop?: CSSProperties["top"];
  property1HLeft?: CSSProperties["left"];
}>`width: 741px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-4xs) var(--padding-71xl);
  box-sizing: border-box;
  gap: var(--gap-81xl);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
  position: ${(p) => p.property1HPosition}
  top: ${(p) => p.property1HTop}
  left: ${(p) => p.property1HLeft}
`;

const Property1H1: NextPage<Property1H1Type> = ({
  className = "",
  property1HPosition,
  property1HTop,
  property1HLeft,
}) => {
  return (
    <Property1hRoot
      property1HPosition={property1HPosition}
      property1HTop={property1HTop}
      property1HLeft={property1HLeft}
      className={className}
    >
      <Home>Home</Home>
      <Projects>Projects</Projects>
      <Projects>About us</Projects>
      <Projects>Contact</Projects>
    </Property1hRoot>
  );
};

export default Property1H1;