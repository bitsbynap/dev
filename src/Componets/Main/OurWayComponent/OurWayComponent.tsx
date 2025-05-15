import styled from "styled-components";
import clientFirstImg from "../../../assets/ClientFirst.png";
import environmentImg from "../../../assets/Environment.jpg";
import qualityImg from "../../../assets/Quality.webp";
import { COLORS } from "../../../constants";

const mockData = {
  title: "Client-First, Eco-Friendly,",
  subtile: "Premium Zinc Aluminum Coating",
  way: "// OUR WAY",
  content: [
    {
      img: clientFirstImg,
      heading: "Client First",
      description:
        "Putting client first ensures customer satisfaction with best in industry quality without compromising on environment.",
    },
    {
      img: environmentImg,
      heading: "Environment",
      description:
        "Zinc Aluminum Flake coating is chrome-free, which is environmentally friendly.",
    },
    {
      img: qualityImg,
      heading: "Quality",
      description:
        "We are committed to provide world-class high-quality Zinc Aluminum Flake Coating from Magni USA. An ISO 9001:2015 certified company.",
    },
  ],
};

const StyledContainer = styled.div`
  width: 100%;
  // height: 1641px;
  background-color: ${COLORS.white};
  padding: 50px 126px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;

  /* Tablet view: adjust padding */
  @media (max-width: 820px) {
    padding: 25px;
  }

`;

const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  // flex-direction: row;  // reduntant
  align-items: flex-start;
  flex-direction: column;

  /* Tablet view */
  @media (max-width: 820px) {
    text-align: left;
  }
`;

const StyledContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledContentBlock = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  gap: 109px;
  // height: 349px;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  
  @media (max-width: 820px) {
    gap: 50px;   
  }

  /* Mobile view */
  @media (max-width: 480px) {
    gap: 24px;   
    flex-direction: column;
    padding: 0 12px;
  }
  
`;

// const StyledImage = styled.img`
//   width: 524px;
//   border-radius: 12px;
//   object-fit: cover;
// `;

const StyledImage = styled.img`
    width: 100%;
    max-width: 524px;
    max-height: 350px;
    border-radius: 12px;
    object-fit: cover;

    @media (max-width: 820px) {
      // max-width: 100%; // Let it scale down fully on tablets/mobiles
      max-width: 320px;
      max-height: 250px;
    }
`;

const StyledText = styled.div`
  h3 {
    font-family: "Manrope", sans-serif;
    font-size: 34px;
    font-weight: 500;
    color: ${COLORS.primary};
    margin-bottom: 10px;
    line-height: 58px;
    letter-spacing: -0.01em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 36px;
    }
  }

  p {
    font-family: "DM Sans", sans-serif;
    font-size: 19px;
    font-weight: 400;
    color: ${COLORS.secondary};
    line-height: 30.11px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 24px;
    }
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

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

const StyledTitleText = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 51px;
  line-height: 65px;
  color: ${COLORS.secondary};

  /* Tablet view */
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

function OurWayComponent() {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledSubtileText>{mockData.way}</StyledSubtileText>
        <StyledTitleText>{mockData.title}</StyledTitleText>
        <StyledTitleText>{mockData.subtile}</StyledTitleText>
      </StyledHeader>
      <StyledContentGrid>
        {mockData.content.map((block, index) => (
          <StyledContentBlock
            key={index}
            reverse={block.heading === "Environment"}
          >
            <StyledImage src={block.img} alt={block.heading} />
             
            <StyledText>
              <h3>{block.heading}</h3>
              <p>{block.description}</p>
            </StyledText>
          </StyledContentBlock>
        ))}
      </StyledContentGrid>
    </StyledContainer>
  );
}

export default OurWayComponent;
