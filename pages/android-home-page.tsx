import type { NextPage } from "next";
import styled from "styled-components";
import Menu from "../components/menu";

const BgIcon = styled.img`
  position: absolute;
  top: -36px;
  left: -165px;
  width: 430px;
  height: 138px;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 4.9px;
  left: 0px;
  width: 18px;
  height: 24.7px;
`;
const KasraTorabi = styled.b`
  position: absolute;
  top: 8.2px;
  left: 26.4px;
`;
const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 127px;
  height: 34.7px;
`;
const Top1 = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 312px;
  height: 34.7px;
`;
const D = styled.div`
  position: absolute;
  top: 77px;
  left: 24px;
  width: 312px;
  height: 723px;
  overflow: hidden;
`;
const UiUx = styled.b`
  flex: 1;
  position: relative;
`;
const Text1 = styled.div`
  position: absolute;
  bottom: 24px;
  left: calc(50% - 176px);
  width: 352px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-xs);
  box-sizing: border-box;
  font-size: var(--font-size-15xl-1);
`;
const Fresh = styled.div`
  position: relative;
  font-weight: 500;
`;
const Text2 = styled.div`
  position: absolute;
  top: 697px;
  left: calc(50% - 129px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 58px;
  opacity: 0.8;
  font-size: var(--font-size-3xs);
`;
const AndroidhomepageRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 800px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-sm-9);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const AndroidHomePage: NextPage = () => {
  return (
    <AndroidhomepageRoot>
      <BgIcon alt="" src="/bg1.svg" />
      <Top1>
        <Logo>
          <VectorIcon alt="" src="/vector1.svg" />
          <KasraTorabi>Kasra Torabi</KasraTorabi>
        </Logo>
      </Top1>
      <D />
      <Text1>
        <UiUx>Ui / Ux Designer</UiUx>
      </Text1>
      <Text2>
        <Fresh>Fresh</Fresh>
        <Fresh>High quality</Fresh>
        <Fresh>Modern</Fresh>
      </Text2>
      <Menu />
    </AndroidhomepageRoot>
  );
};

export default AndroidHomePage;