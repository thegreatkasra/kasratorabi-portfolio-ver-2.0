import type { NextPage } from "next";
import styled from "styled-components";
import Property1H1 from "../components/property1-h";
import ContactBtn from "../components/contact-btn";

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
const ContactBtnParent = styled.div`
  position: absolute;
  top: 847px;
  left: calc(50% - 159px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 38px;
`;
const ContactTabletChild = styled.img`
  position: absolute;
  top: calc(50% + 27px);
  left: calc(50% - 399px);
  width: 797px;
  height: 15px;
  object-fit: contain;
`;
const EmailRequired = styled.b`
  align-self: stretch;
  position: relative;
`;
const FrameChild = styled.div`
  width: 400px;
  position: relative;
  border-radius: var(--br-xs);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  height: 45px;
`;
const EmailRequiredParent = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FullNameRequiredParent = styled.div`
  width: 401px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameInner = styled.div`
  align-self: stretch;
  position: relative;
  border-radius: var(--br-xs);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  height: 45px;
`;
const Message = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  display: inline-block;
  width: 373px;
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 29px;
  left: 0px;
  border-radius: var(--br-xs);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  width: 893px;
  height: 85px;
`;
const MessageParent = styled.div`
  width: 893px;
  position: relative;
  height: 114px;
`;
const Send = styled.b`
  position: relative;
  letter-spacing: 0.65em;
`;
const SendWrapper = styled.div`
  width: 893px;
  border-radius: var(--br-base);
  background-color: var(--color-2);
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2xs) var(--padding-169xl);
  box-sizing: border-box;
  font-size: var(--font-size-5xl);
`;
const Form = styled.div`
  position: absolute;
  top: 177px;
  left: calc(50% - 447px);
  width: 893px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 39px 92px;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const ContactTabletRoot = styled.div`
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

const ContactTablet: NextPage = () => {
  return (
    <ContactTabletRoot>
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
      <ContactBtnParent>
        <ContactBtn telegram="Email" contactBtnAlignSelf="stretch" />
        <ContactBtn telegram="Telegram" contactBtnAlignSelf="stretch" />
        <ContactBtn telegram="Instagram" contactBtnAlignSelf="stretch" />
      </ContactBtnParent>
      <ContactTabletChild alt="" src="/frame-10@2x.png" />
      <Form>
        <EmailRequiredParent>
          <EmailRequired>Email: (Required)</EmailRequired>
          <FrameChild />
        </EmailRequiredParent>
        <FullNameRequiredParent>
          <EmailRequired>Full Name: (Required)</EmailRequired>
          <FrameChild />
        </FullNameRequiredParent>
        <EmailRequiredParent>
          <EmailRequired>Company:</EmailRequired>
          <FrameInner />
        </EmailRequiredParent>
        <EmailRequiredParent>
          <EmailRequired>Subject:</EmailRequired>
          <FrameInner />
        </EmailRequiredParent>
        <MessageParent>
          <Message>Message:</Message>
          <FrameChild1 />
        </MessageParent>
        <SendWrapper>
          <Send>SEND</Send>
        </SendWrapper>
      </Form>
    </ContactTabletRoot>
  );
};

export default ContactTablet;