import styled from "styled-components";
import logo from "../../assets/NULogo.png";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";

const FooterContainer = styled.footer`
  height: 652px;
  background-color: ${COLORS.white};
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 480px) {
    height: auto;
    padding: 20px 15px;
  }
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  width: 90%;
  justify-content: space-between;
  // border: 1px solid red;
  @media (max-width: 480px) {
    width: 100%;
  }

`;

const FooterLogo = styled.img`
  width: 150px;
  height: auto;
  // margin-bottom: 10px;
  // margin-right: 100px;

  @media (max-width: 480px) {
    width: 100px; /* Even smaller logo on very small screens */
  }
`;

const FooterLinks = styled.nav`
  display: flex;
  gap: 30px;

  a {
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${COLORS.secondary};
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: ${COLORS.primary};
    }

    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${COLORS.primary};
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

const FooterBottom = styled.div`
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${COLORS.secondary};
  margin-top: 30px;
  text-align: center;
`;

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const CallToActionHeading = styled.h2`
  font-family: "Manrope", sans-serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 81px;
  color: ${COLORS.secondary};
  margin-bottom: 5px;
  letter-spacing: 0.02em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const CallToActionText = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  color: ${COLORS.secondary};
  margin-bottom: 20px;
`;

const CallToActionButton = styled.a`
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${COLORS.white};
  background: linear-gradient(90deg, ${COLORS.lightBlue} 0%, ${COLORS.primary} 100%);
  padding: 20px 50px;
  border-radius: 51px;
  text-decoration: none;
  box-shadow: 0px 3.76px 3.92px ${COLORS.shadowBlack},
    0px 16.56px 8.13px ${COLORS.shadowBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.lightBlue} 100%);
    transform: translateY(-3px);
    box-shadow: 0px 7px 10px ${COLORS.shadowBlack},
      0px 18px 14px ${COLORS.shadowBlack};
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0px 3px 6px ${COLORS.shadowBlack};
  }
`;

const HorizontalLine = styled.div`
  width: 90%;
  height: 0;
  border-top: 1.25px solid ${COLORS.borderGray};
  margin: 40px 0;
  opacity: 1;
  border: 1.25px solid ${COLORS.borderGray};

  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

function FooterComponent() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterContainer>
      <CallToActionContainer>
        <CallToActionHeading>Connect With Us</CallToActionHeading>
        <CallToActionText>To work together</CallToActionText>
        <CallToActionButton href="#contact">
          <Link
            to="/contact-us"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={handleScrollToTop}
          >
            Contact Us
          </Link>
        </CallToActionButton>
      </CallToActionContainer>
      <HorizontalLine />
      <FooterTop>
        <FooterLogo src={logo} alt="Company Logo" />
        <FooterLinks>
          <Link to="/" onClick={handleScrollToTop}>
            Home
          </Link>
          <Link to="/about-us" onClick={handleScrollToTop}>About us</Link>
        </FooterLinks>
      </FooterTop>
      <FooterBottom>
        © {new Date().getFullYear()} NU Skill Coaters LLP. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
}

export default FooterComponent;
