import styled, { keyframes } from "styled-components";
import truckImage from "../../assets/truckMain.svg";
import ClientLogoScroll from "./ClientLogoScroll/ClientLogoScroll";
import OurWayComponent from "./OurWayComponent/OurWayComponent";
import OurProcessComponent from "./OurProcessComponent/OurProcessComponent";
import MagniComponent from "./Magni/Magni";
import OurStory from "./OurStory/OurStory";
import { COLORS } from "../../constants";

// Animation keyframes
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledMainContent = styled.div`
  position: relative;
  width: calc(100vw - 140px);
  margin-top: 70px;
  gap: 33px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  /* Tablet view */
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    gap: 24px;
  }
  
  /* Mobile view */
  @media (max-width: 480px) {
    width: calc(100vw - 20px);
    margin-top: 40px;
    gap: 18px;
  }
`;

const StyledTextContent = styled.div`
  width: 762px;
  height: 126px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.secondary};
  animation: ${fadeIn} 2.5s ease-out;
  display: flex;
  flex-direction: column;
  gap: 15px;

   /* Tablet view */
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    gap: 5px
  }

`;

const StyledTitleText = styled.div`
  font-family: "Manrope", sans-serif;
  font-size: 51.12px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: -0.01em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  // border:1px solid red;
  /* Tablet view: Adjust font-size and line-height */
  @media (max-width: 820px) {
    font-size: 36px;
    line-height: 44px;
  }
  
  /* Mobile view */
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
    padding: 0 12px;
  }
`;

const StyledSubTitle = styled.div`
  font-family: "Manrope", sans-serif;
  font-size: 51.12px;
  font-weight: 800;
  line-height: 58px;
  letter-spacing: -0.01em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  
  // border: 1px solid black;
  /* Tablet view: Adjust font-size */
  @media (max-width: 820px) {
    font-size: 36px;
    line-height: 44px;
  }

  /* Mobile view */
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
    padding: 0 12px;
  }
`;

const StyledPartnerText = styled.div`
  width: 762px;
  height: 26px;
  font-family: "DM Sans", sans-serif;
  font-size: 18.7px;
  font-weight: 400;
  line-height: 24.35px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.secondary};
  animation: ${fadeIn} 2s ease-out;

  /* Tablet view */
  @media (max-width: 768px) {
    width: 90%;
    font-size: 16px;
    line-height: 22px;
  }

  /* Mobile view */
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
    padding: 0 12px;
    margin-bottom: 10px;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 6px;
  opacity: 0.72px;
  animation: ${fadeIn} 4.5s ease-out;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const mockData = {
  title: "We're here for your",
  subtitle: "Anti-corrosive coating needs",
  partnerGroup: "A licensed Applicator of The Magni Group Inc., Michigan USA",
};

function MainContent() {
  return (
    <>
      <StyledMainContent>
        <StyledTextContent>
          <StyledTitleText>{mockData.title}</StyledTitleText> 
          {/* <br /> */}
          <StyledSubTitle>{mockData.subtitle}</StyledSubTitle>
        </StyledTextContent>
        <StyledPartnerText>{mockData.partnerGroup}</StyledPartnerText>
        <StyledImageContainer>
          <StyledImage src={truckImage} alt="Truck Image" />
        </StyledImageContainer>
        <ClientLogoScroll />
        <OurWayComponent />
        <OurProcessComponent />
        <MagniComponent />
        <OurStory />
      </StyledMainContent>
    </>
  );
}

export default MainContent;
