import styled from "styled-components";
import magniImage from "../../../assets/Products.png";
import { COLORS } from "../../../constants";

const magniData = {
  subheading: "// OUR BACKBONE",
  heading: "The Magni Experience",
  description:
    "Magni coatings are typically a combination of zinc and aluminum, with additional layers of topcoats to provide additional corrosion resistance and durability. The specific formulation and application of Magni coatings can vary depending on the specific product and application requirements.",
  buttonText: "Learn More",
  buttonLink: "https://www.magnicoatings.com/",
  imageAlt: "Magni Experience Visual",
};

const StyledMagniContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  padding: 50px 0 50px 126px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 820px) {
    padding: 30px 25px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 25px 20px;
    border-radius: 18px;
    gap: 20px;
    // flex-direction: column-reverse;
  }
`;

const StyledMagniContent = styled.div`
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

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const StyledHeading = styled.h2`
  font-family: "Manrope", sans-serif;
  font-size: 51.12px;
  font-weight: 400;
  line-height: 65px;
  color: ${COLORS.secondary};
  margin-bottom: 20px;

  letter-spacing: 0.01em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  
  @media (max-width: 820px) {
    font-size: 36px;
    line-height: 45px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 10px;
  }
`;

const StyledDescription = styled.p`
  font-family: "DM Sans", sans-serif;
  ont-size: 18.7px;
  font-weight: 400;
  line-height: 30.11px;
  color: ${COLORS.secondary};
  margin-bottom: 30px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
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
  display: flex; /* Use flexbox for alignment */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.lightBlue} 100%);
    transform: translateY(-3px);
  }

`;

const StyledMagniImage = styled.img`
  max-width: 40%;
  object-fit: contain;

  @media (max-width: 480px) {
    display: none
  }
  
`;

const StyledMagniImageMobile = styled.img`
  max-width: 40%;
  object-fit: contain;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    max-width: 100%;
    width: 100%;
    margin-top: 20px;
  }

  @media (min-width: 481px) {
    display: none; /* Hide on devices above 480px */
  }
`;

const StyledButtonText = styled.div`
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.02px;
  letter-spacing: -0.01em;
  text-align: center; /* Center the text horizontally */
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

function MagniComponent() {
  return (
    <StyledMagniContainer>
      <StyledMagniContent>
        <StyledSubheading>{magniData.subheading}</StyledSubheading>
        <StyledHeading>{magniData.heading}</StyledHeading>
        
        <StyledMagniImageMobile src={magniImage} alt={magniData.imageAlt} />
        
        <StyledDescription>{magniData.description}</StyledDescription>
        
        <StyledButton
          href={magniData.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledButtonText>{magniData.buttonText}</StyledButtonText>
        </StyledButton>
      </StyledMagniContent>
      <StyledMagniImage src={magniImage} alt={magniData.imageAlt} />
    </StyledMagniContainer>
  );
}

export default MagniComponent;
