import styled, { keyframes } from "styled-components";
import logo1 from "../../../assets/clientlogo1.png";
import logo2 from "../../../assets/clientlogo2.png";
import logo3 from "../../../assets/clientlogo3.png";
import logo4 from "../../../assets/clientlogo4.png";
import logo5 from "../../../assets/clientlogo5.png";
import logo6 from "../../../assets/clientlogo6.png";
import logo7 from "../../../assets/clientlogo7.png";
import logo8 from "../../../assets/clientlogo8.png";
import logo9 from "../../../assets/clientlogo8.png";
import logo10 from "../../../assets/clientlogo8.png";

const StyledWrapperContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 47px;
  margin: 50px 0;
  overflow: hidden;
  cursor: none;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%; /* Match parent height */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  user-select: none;
  overflow: hidden;
  width: 100%;
  gap: 5px;
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  // width: 100%;
  animation: ${scrollX} 10s linear infinite;
  gap: 5px;

  @media (max-width: 768px) {
    animation-duration: 20s; /* slower on mobile */
  }
`;

const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Match container height */
  padding: 0 10px; /* Add spacing between images */
`;

const Image = styled.img`
  object-fit: contain;
  width: auto; /* Scale width proportionally */
  height: 100%; /* Match the height of the container */
`;

function ClientLogoScroll() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

  return (
    <StyledWrapperContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {logos.map((el) => {
              return (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              );
            })}
          </MarqueeGroup>
          <MarqueeGroup>
            {logos.map((el) => {
              return (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              );
            })}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </StyledWrapperContainer>
  );
}

export default ClientLogoScroll;
