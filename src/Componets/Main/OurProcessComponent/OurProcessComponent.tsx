import styled from "styled-components";
import preTreatmentImg from "../../../assets/machine1.png";
import dipSpinImg from "../../../assets/machine2.png";
import coatingThermalImg from "../../../assets/machine3.png";
import { COLORS } from "../../../constants";

const processData = {
  title: "Streamlined Process for",
  subtitle: "Exceptional Quality",
  process: "// OUR PROCESS",
  steps: [
    {
      img: preTreatmentImg,
      heading: "Pre-Treatment- Shot Blasting",
      text: "This step ensures all surfaces are clean, free of rust, and prepared for optimal adhesion during the coating process.",
      link: "https://www.ervin.eu/shot-blasting-guide/",
    },
    {
      img: dipSpinImg,
      heading: "Dip-Spin Line",
      text: "Our advanced dip-spin line provides uniform coating coverage, ensuring durability and protection against corrosion.",
      link: "https://coatingsystems.com/dip-spin-coating-work/",
    },
    {
      img: coatingThermalImg,
      heading: "Coating Thermal Conveyor Line",
      text: "The thermal conveyor line applies a heat-cured coating, enhancing the strength and longevity of your materials.",
      link: "https://totalfinishingsystems.com/conveyor-systems-1",
    },
  ],
};

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  padding: 50px 126px;
  display: flex;
  flex-direction: column;

  // border: 1px solid red;
  @media (max-width: 820px) {
    padding: 25px;
  }
`;

const StyledHeader = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
    text-align: left;
  }
`;

const StyledSubtileText = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.5px;
  letter-spacing: 0.01em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.primary} !important;

  /* Mobile view */
  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 10px;
  }
`;

const StyledTitle = styled.h2`
  font-family: "Manrope", sans-serif;
  font-size: 51px;
  font-weight: 400;
  line-height: 65px;
  color: ${COLORS.secondary};
  // margin-bottom: 10px;

  @media (max-width: 820px) {
    font-size: 36px;
    line-height: 45px;
  }

  /* Mobile view */
  @media (max-width: 480px) {
    font-size: 26px;
    line-height: 34px;
  }
`;

const StyledGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  // flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: column;  /* Stack items vertically */
  }
`;

const StyledCard = styled.div`
  width: 338px;
  height: 402px;
  background: linear-gradient(180deg, #eaf1ff 0%, ${COLORS.white} 100%);
  border-radius: 12px;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease-out;

  &:hover {
    transform: translateY(-10px);

    &:before {
      opacity: 0.5;
    }

    .card-content {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  // border: 1px solid red;

  /* Tablet view */
  @media (max-width: 820px) {
    height: 320px;
  }
  
  /* Mobile view */
  @media (max-width: 480px) {
    width: 100%;
    height: 250px;  /* Reduced height for mobile */
    margin-bottom: 12px;
  }
`;

const StyledCardContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 3;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  text-align: left;
`;

const StyledCardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-family: "Manrope", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${COLORS.white};
`;

const StyledCardText = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.white};
  margin: 0 0 15px 0;
`;

const StyledLearnMoreButton = styled.a`
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 34.83px;
  border: 0.9px;
  border-image-source: radial-gradient(
      53.33% 100% at 49.14% 0%,
      rgba(255, 255, 255, 0.24) 0%,
      rgba(0, 0, 0, 0.24) 100%
    )
  background: linear-gradient(180deg, #5d7cf6 0%, ${COLORS.primary} 100%);
  cursor: pointer;
  transition: transform 0.3s ease;
   &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  
`;

function OurProcessComponent() {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledSubtileText>{processData.process}</StyledSubtileText>
        <StyledTitle>{processData.title}</StyledTitle>
        <StyledTitle>{processData.subtitle}</StyledTitle>
      </StyledHeader>
      <StyledGrid>
        {processData.steps.map((step, index) => (
          <StyledCard key={index}>
            <StyledImage src={step.img} alt={step.heading} />
            <StyledCardContent className="card-content">
              <StyledCardTitle>{step.heading}</StyledCardTitle>
              <StyledCardText>{step.text}</StyledCardText>
              <StyledLearnMoreButton
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </StyledLearnMoreButton>
            </StyledCardContent>
          </StyledCard>
        ))}
      </StyledGrid>
    </StyledContainer>
  );
}

export default OurProcessComponent;
