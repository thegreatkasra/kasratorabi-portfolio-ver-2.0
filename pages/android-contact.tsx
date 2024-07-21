import type { NextPage } from "next";
import styled from "styled-components";
import Menu from "../components/menu";

const BgIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 265px;
  height: 81px;
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
  width: 127px;
  height: 35px;
  font-size: var(--font-size-sm-9);
`;
const EmailRequired = styled.b`
  align-self: stretch;
  position: relative;
`;
const FrameChild = styled.div`
  width: 312px;
  position: relative;
  border-radius: var(--br-xs);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  height: 40px;
`;
const EmailRequiredParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FullNameRequiredParent = styled.div`
  position: absolute;
  top: 82px;
  left: 0px;
  width: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const CompanyParent = styled.div`
  position: absolute;
  top: 164px;
  left: 0px;
  width: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const SubjectParent = styled.div`
  position: absolute;
  top: 246px;
  left: 0px;
  width: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameChild1 = styled.div`
  width: 312px;
  position: relative;
  border-radius: var(--br-xs);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  height: 105px;
`;
const MessageParent = styled.div`
  position: absolute;
  top: 328px;
  left: 0px;
  width: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Send = styled.b`
  position: relative;
  letter-spacing: 0.65em;
`;
const SendWrapper = styled.div`
  position: absolute;
  top: 483px;
  left: 0px;
  border-radius: var(--br-base);
  background-color: var(--color-2);
  width: 312px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2xs) 0px;
  box-sizing: border-box;
  font-size: var(--font-size-base);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 180px;
  left: 24px;
  width: 312px;
  height: 523px;
  font-size: var(--font-size-sm);
`;
const IfYouAre = styled.b`
  position: absolute;
  top: 89px;
  left: 24px;
  font-size: 13px;
  display: inline-block;
  width: 312px;
  height: 72px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 10.5px;
  left: calc(50% - 156.5px);
  border-top: 1px solid var(--full-white);
  box-sizing: border-box;
  width: 136px;
  height: 1px;
  opacity: 0.5;
`;
const FrameChild2 = styled.div`
  position: absolute;
  top: 10.5px;
  left: calc(50% + 20.5px);
  border-top: 1px solid var(--full-white);
  box-sizing: border-box;
  width: 136px;
  height: 1px;
  opacity: 0.5;
`;
const Or = styled.b`
  position: absolute;
  top: 0px;
  left: calc(50% - 10px);
`;
const LineParent = styled.div`
  position: absolute;
  top: 751px;
  left: 24px;
  width: 312px;
  height: 21px;
  color: rgba(255, 255, 255, 0.5);
`;
const Email = styled.b`
  position: relative;
`;
const ContactBtn = styled.div`
  position: absolute;
  top: 820px;
  left: 76px;
  border-radius: var(--br-28xl);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  width: 207px;
  height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg) var(--padding-75xl);
`;
const ContactBtn1 = styled.div`
  position: absolute;
  top: 876px;
  left: 76px;
  border-radius: var(--br-28xl);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  width: 207px;
  height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg) var(--padding-75xl);
  text-align: center;
`;
const ContactBtn2 = styled.div`
  position: absolute;
  top: 932px;
  left: 76px;
  border-radius: var(--br-28xl);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  width: 207px;
  height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg) var(--padding-75xl);
  text-align: center;
`;
const AndroidcontactRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1021px;
  overflow-y: auto;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const AndroidContact: NextPage = () => {
  return (
    <AndroidcontactRoot>
      <BgIcon alt="" src="/bg2.svg" />
      <Top1>
        <Logo>
          <VectorIcon alt="" src="/vector1.svg" />
          <KasraTorabi>Kasra Torabi</KasraTorabi>
        </Logo>
      </Top1>
      <FrameParent>
        <EmailRequiredParent>
          <EmailRequired>Email: (Required)</EmailRequired>
          <FrameChild />
        </EmailRequiredParent>
        <FullNameRequiredParent>
          <EmailRequired>Full Name: (Required)</EmailRequired>
          <FrameChild />
        </FullNameRequiredParent>
        <CompanyParent>
          <EmailRequired>Company:</EmailRequired>
          <FrameChild />
        </CompanyParent>
        <SubjectParent>
          <EmailRequired>Subject:</EmailRequired>
          <FrameChild />
        </SubjectParent>
        <MessageParent>
          <EmailRequired>Message:</EmailRequired>
          <FrameChild1 />
        </MessageParent>
        <SendWrapper>
          <Send>SEND</Send>
        </SendWrapper>
      </FrameParent>
      <IfYouAre>
        If you are interested in collaborating with me and like my work, you can
        contact me through one of the methods below :
      </IfYouAre>
      <LineParent>
        <LineDiv />
        <FrameChild2 />
        <Or>OR</Or>
      </LineParent>
      <ContactBtn>
        <Email>Email</Email>
      </ContactBtn>
      <ContactBtn1>
        <Email>Telegram</Email>
      </ContactBtn1>
      <ContactBtn2>
        <Email>Instagram</Email>
      </ContactBtn2>
      <Menu contactTop="39px" />
    </AndroidcontactRoot>
  );
};

export default AndroidContact;