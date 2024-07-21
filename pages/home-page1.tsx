import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/header";

const D = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 361px);
  width: 722px;
  height: 1024px;
  overflow: hidden;
`;
const Fresh = styled.div`
  position: relative;
  font-weight: 500;
`;
const Text1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 473.5px;
`;
const UiDesignerUx = styled.b`
  flex: 1;
  position: relative;
`;
const Text2 = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7.5px 0px;
  box-sizing: border-box;
  font-size: 95.9px;
`;
const Text1Parent = styled.div`
  position: absolute;
  bottom: 27.1px;
  left: calc(50% - 720px);
  width: 1440px;
  height: 161.8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const Frame = styled.div`
  position: absolute;
  top: 12px;
  left: 0px;
  width: 1439.9px;
  height: 89px;
  overflow: hidden;
`;
const HomepageRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-4xs);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const HomePage1: NextPage = () => {
  return (
    <HomepageRoot>
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
      <Frame>
        <Header
          logoLeft="50px"
          logoWidth="unset"
          logoOverflow="unset"
          logoPadding="unset"
          logoGap="67px"
          logoPosition="absolute"
          logoTop="0px"
        />
      </Frame>
    </HomepageRoot>
  );
};

export default HomePage1;