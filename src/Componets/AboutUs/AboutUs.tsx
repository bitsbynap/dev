import styled, { keyframes } from "styled-components";
import ClientLogoScroll from "../Main/ClientLogoScroll/ClientLogoScroll";
import founderImage from "../../assets/founderImage.png";
import { COLORS } from "../../constants";

// Animation for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* Optional: Adds a slight upward movement */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  color: ${COLORS.secondary};
  text-align: center;
  width: 100%;
  // height: 1224px;
  margin-top: 50px;
  animation: ${fadeIn} 1.2s ease-out; /* Fade-in effect for the container */
`;

const AboutSection = styled.div`
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.2s ease-out; /* Adds fade-in effect */
`;

const Title = styled.h1`
  font-family: "Manrope", sans-serif;
  font-size: 51.12px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: -0.01em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.secondary};
  animation: ${fadeIn} 1s ease-out; /* Smoothly fades in */

  @media (max-width: 480px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const Subtitle = styled.h2`
  font-family: "Manrope", sans-serif;
  font-size: 51.12px;
  font-weight: 800;
  line-height: 58px;
  letter-spacing: -0.01em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.secondary};
  animation: ${fadeIn} 1.4s ease-out; /* Delayed fade-in effect */

  @media (max-width: 480px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const Paragraph = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  max-width: 800px;
  font-size: 18.7px;
  font-weight: 400;
  line-height: 35.72px;
  text-align: center;
  animation: ${fadeIn} 1.6s ease-out; /* Gradual fade-in for paragraphs */
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 290px;
  height: 346px;
  border-radius: 24px;
  background: linear-gradient(180deg, #eaf1ff 0%, ${COLORS.white} 100%);
  box-shadow: 0px 7px 10px ${COLORS.shadowBlack};
  overflow: hidden;
  transition: transform 0.4s ease-out;
  animation: ${fadeIn} 1.4s ease-out; /* Adds fade-in effect to the image container */
  margin-bottom: 2rem;
`;

const StyledImage = styled.img`
  position: relative;
  width: 237.82px;
  height: 350.29px;
  top: 48.08px;
  gap: 0px;
  opacity: 1;
  margin-right: 63px;
  transform: scaleX(-1); /* Default state is flipped */
  object-fit: cover;
  animation: fadeIn 1.4s ease-out; /* Adds fade-in effect without altering the flip */
`;

const StyledAboutUsText = styled.div`
  width: 856px;
  max-width: 90%;
  // height: 468px;
  font-family: "DM Sans", sans-serif;
  font-size: 18.7px;
  font-weight: 400;
  line-height: 35.72px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  animation: ${fadeIn} 1.6s ease-out; /* Fade-in effect with delay */
`;

// Mock Data
const mockData = {
  title: "Founded on Trust",
  subtitle: "Driven by Innovation",
  paragraphs: [
    "Founded in 2012, NU Skill Coaters LLP, is the Licensed applicator of the Magni Group Inc. Michigan, USA, with works at Rudrapur Industrial Area. The firm has been promoted by Late Shri Narendra Kumar Lihala. He had forty years of rich experience in industry having worked in all domains – planning, purchase, sales & marketing, finance & banking, joint ventures and general administration.",
    "We have multiple state-of-the-art facilities specifically designed to extend the life of metal products by preventing corrosion. Our highly automated facilities specialize in bulk applications of engineered coatings on fasteners and child components.",
    "We offer an extensive variety of coatings to meet any desired level of performance, including extreme corrosion durability, protection from galvanic corrosion, and friction modification for repeatable torque performance. Our high-performance coatings offer consistent appearance, shelf life, and quality, regardless of design & intricate shapes.",
  ],
  imageAlt: "Founder of NU Skill Coaters LLP",
};

function AboutUs() {
  return (
    <AboutUsContainer>
      <AboutSection>
        <Title>{mockData.title}</Title>
        <Subtitle>{mockData.subtitle}</Subtitle>
      </AboutSection>
      <StyledImageContainer>
        <StyledImage src={founderImage} alt={mockData.imageAlt} />
      </StyledImageContainer>
      <StyledAboutUsText>
        {mockData.paragraphs.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </StyledAboutUsText>
      <ClientLogoScroll />
    </AboutUsContainer>
  );
}

export default AboutUs;
                    