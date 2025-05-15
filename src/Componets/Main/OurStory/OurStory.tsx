import styled from "styled-components";
import founderImage from "../../../assets/founderImage.png";
import { COLORS } from "../../../constants";

const aboutUsData = {
  subheading: "// OUR STORY",
  heading: "Founded on Trust, Driven by Innovation",
  description:
    "Founded in 2012, NU Skill Coaters LLP, is the Licensed applicator of the Magni Group Inc. Michigan, USA, with works at Rudrapur Industrial Area. The firm has been promoted by Late Shri Narendra Kumar Lihala. He had forty years of rich experience in the industry.",
  buttonText: "About Us",
  buttonLink: "about-us",
  imageAlt: "Founder of NU Skill Coaters LLP",
};

const StyledAboutUsContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  padding: 50px 0 50px 126px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 820px) {
    padding: 30px 25px;
    gap: 30px;
  }
`;

const StyledAboutUsContent = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
    max-width: 100%;
    width: 100%;
  }
`;

const StyledSubheading = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.5px;
  color: ${COLORS.primary};
  text-transform: uppercase;
  margin-bottom: 10px;

`;

const StyledHeading = styled.h2`
  font-family: "Manrope", sans-serif;
  font-size: 51px;
  font-weight: 400;
  line-height: 65px;
  color: ${COLORS.secondary};
  // margin-bottom: 20px;

  @media (max-width: 820px) {
    font-size: 36px;
    line-height: 45px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 12px;
    // border: 1px solid black
  }
`;

const StyledDescription = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 18.7px;
  font-weight: 400;
  line-height: 30.11px;
  color: ${COLORS.secondary};
  margin-bottom: 30px;
  margin-top: 20px;
`;

const StyledButton = styled.a`
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${COLORS.white};
  width: 199px;
  height: 57px;
  background: linear-gradient(90deg, ${COLORS.lightBlue} 0%, ${COLORS.primary} 100%);
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 12px rgba(93, 124, 246, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.lightBlue} 100%);
    transform: translateY(-3px);
  }
`;

const StyledButtonText = styled.div`
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.02px;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 338px;
  // height: 403px;
  padding: 10px;
  border-radius: 12px;
  background: linear-gradient(180deg, #eaf1ff 0%, ${COLORS.white} 100%);
  // box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.4s ease-out;

  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledImageContainerMobile = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 338px;
  height: 403px;
  border-radius: 12px;
  background: linear-gradient(180deg, #eaf1ff 0%, ${COLORS.white} 100%);
  // box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.4s ease-out;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 10px;
    height: auto
  }

  @media (min-width: 481px) {
    display: none; /* Hide on devices above 480px */
  } 
`;

const StyledImage = styled.img`
  width: 227px;
  // height: 408px;
  object-fit: contain;

  @media (max-width: 820px) {
    width: 100%;
    max-width: 200px;
    height: auto;
    align-self: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    
  }
`;

function OurStory() {
  return (
    <StyledAboutUsContainer>
      <StyledAboutUsContent>
        <StyledSubheading>{aboutUsData.subheading}</StyledSubheading>
        <StyledHeading>{aboutUsData.heading}</StyledHeading>
        <StyledImageContainerMobile>
          <StyledImage src={founderImage} alt={aboutUsData.imageAlt} />
        </StyledImageContainerMobile>
        <StyledDescription>{aboutUsData.description}</StyledDescription>
        <StyledButton
          href={aboutUsData.buttonLink}
          target="_self"
          rel="noopener noreferrer"
        >
          <StyledButtonText>{aboutUsData.buttonText}</StyledButtonText>
        </StyledButton>
      </StyledAboutUsContent>
      <StyledImageContainer>
        <StyledImage src={founderImage} alt={aboutUsData.imageAlt} />
      </StyledImageContainer>
    </StyledAboutUsContainer>
  );
}

export default OurStory;
