import styled, { keyframes } from "styled-components";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";
// import { ReactComponent as Logo } from "../../assets/logoNuSkill.svg";

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px); /* Start above the viewport */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Final position */
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${slideDown} 1.2s ease-in-out;
  // padding: 0px 20px;
  @media (max-width: 820px) {
    padding: 0px 20px;
  }
  @media (max-width: 480px) {
    padding: 0px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  color: ${COLORS.secondary};
  width: 152.26px;
  height: 49.19px;
  top: 46px;
  left: 70px;
  gap: 0px;
  opacity: 1px;
  img {
    width: 100%; /* Ensure the logo fits properly */
    height: auto;
    animation: ${slideDown} 1.5s ease-in-out; /* Logo-specific animation */
  };

  @media (max-width: 768px) {
    width: 120px;
    height: auto;
    justify-content: center;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  color: ${COLORS.secondary};
  width: Hug (243px) px;
  height: Hug (16px) px;
  top: 62px;
  left: 599px;
  gap: 40px;
  opacity: 0px;
  animation: ${slideDown} 1.4s ease-in-out;
  // border: 1px solid green;
`;

// const MiddleSectionText = styled.div`
//   font-family: "Sofia Pro Regular", sans-serif;
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 16px;
//   text-align: center;
//   text-underline-position: from-font;
//   text-decoration-skip-ink: none;
//   color: #2c396c;
//   cursor: pointer;
//   transition: color 0.3s ease, transform 0.3s ease, font-size 0.3s ease;

//   &:hover {
//     color: #5556f5;
//     transform: scale(1.1); /* Slight zoom effect */
//     font-family: Manrope; /* Change font */
//     font-size: 24px; /* Increase font size */
//     font-weight: 600; /* Increase font weight */
//     line-height: 28px; /* Adjust line height */
//     letter-spacing: -0.01em;
//   }
// `;

const RightSection = styled.div`
  color: ${COLORS.primary};
  width: 126px px;
  height: 48px px;
  top: 46px;
  left: 1244px;
  padding: 16px 24px;
  gap: 10px;
  border-radius: 50px;
  border: 1px solid ${COLORS.primary};
  opacity: 0px;
  cursor: pointer;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, background-color 0.3s ease;
  animation: ${slideDown} 1.6s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
    text-align: center;
  }
`;

const StyledContactUsText = styled.div`
  width: 126px;
  height: 16px;
  font-family: "Sofia Pro Medium", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: inherit;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    // margin-top: 10px;
  }
`;

function NavBar() {
  return (
    <StyledHeader>
      <LeftSection>
        <Link to="/">
          <img src={logo} />
        </Link>
      </LeftSection>
      <MiddleSection>
        {/* <MiddleSectionText>
          <Link
            to="/about-us"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About Us
          </Link>
        </MiddleSectionText> */}
        {/* <MiddleSectionText>
          <Link
            to="/about-us"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Magni
          </Link>
        </MiddleSectionText> */}
      </MiddleSection>
      <RightSection>
        <StyledContactUsText>
          <Link
            to="/contact-us"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact Us
          </Link>
        </StyledContactUsText>
      </RightSection>
    </StyledHeader>
  );
}

export default NavBar;
