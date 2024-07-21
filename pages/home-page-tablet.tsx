import type { NextPage } from "next";
import styled from "styled-components";
import Property1H1 from "../components/property1-h";

const BgIcon = styled.img`
  position: absolute;
  top: -145px;
  left: -150px;
  width: 906px;
  height: 290px;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 7px;
  left: 0px;
  width: 26px;
  height: 35.5px;
`;
const KasraTorabi = styled.b`
  position: absolute;
  top: 11.8px;
  left: 38px;
`;
const Logo = styled.div`
  position: absolute;
  top: -6px;
  left: 50px;
  width: 183px;
  height: 50px;
`;
const NavTabletParent = styled.div`
  position: absolute;
  top: 38px;
  left: calc(50% - 512px);
  width: 1024px;
  height: 39px;
`;
const D = styled.div`
  position: absolute;
  top: 120px;
  left: calc(50% - 232px);
  width: 464px;
  height: 1246px;
  overflow: hidden;
`;
const Fresh = styled.div`
  position: relative;
  font-weight: 500;
`;
const Text1 = styled.div`
  position: absolute;
  bottom: 175px;
  left: calc(50% - 411px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-315xl);
  font-size: var(--font-size-xs);
`;
const UiDesignerUx = styled.b`
  width: 1024px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const Text2 = styled.div`
  position: absolute;
  bottom: 50.1px;
  left: calc(50% - 512px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-7xs-3) 0px;
  font-size: var(--font-size-49xl-2);
`;
const HomepageTabletRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1366px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const HomePageTablet: NextPage = () => {
  return (
    <HomepageTabletRoot>
      <BgIcon alt="" src="/bg3.svg" />
      <NavTabletParent>
        <Property1H1
          property1HPosition="absolute"
          property1HTop="-1px"
          property1HLeft="253px"
        />
        <Logo>
          <VectorIcon alt="" src="/vector.svg" />
          <KasraTorabi>Kasra Torabi</KasraTorabi>
        </Logo>
      </NavTabletParent>
      <D />
      <Text1>
        <Fresh>Fresh</Fresh>
        <Fresh>Modern</Fresh>
        <Fresh>High quality</Fresh>
      </Text1>
      <Text2>
        <UiDesignerUx>Ui Designer Ux Researcher</UiDesignerUx>
      </Text2>
    </HomepageTabletRoot>
  );
};

export default HomePageTablet;