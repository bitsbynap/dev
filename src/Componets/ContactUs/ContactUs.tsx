import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import ClientLogoScroll from "../Main/ClientLogoScroll/ClientLogoScroll";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { COLORS } from "../../constants";

// Mock Data
const contactInfo = {
  companyName: "NU Skill Coaters LLP",
  contacts: [
    {
      icon: <FaPhoneAlt />,
      text: "+91 5844 240 173, +91 9760088889",
    },
    {
      icon: <FaEnvelope />,
      text: "nuskillcoatersllp@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "Plot No. 162, Industrial Area, Kichha Road, Rudrapur (U.S. Nagar), Uttarakhand 263153 India",
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "Head Office: 11, Crooked Lane, Ground Floor, Kolkata, West Bengal 700069 India",
    },
  ],
  socialLinks: [
    { icon: <AiFillInstagram />, url: "#" },
    { icon: <AiFillLinkedin />, url: "#" },
  ],
};

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  font-family: "Manrope", sans-serif;

  @media (max-width: 480px) {
    padding: 50px 10px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: ${COLORS.secondary};

  span {
    color: ${COLORS.primary};
  }
`;

const ContactUsWrapper = styled.div`
  display: flex;
  width: 1196px;
  top: 384px;
  left: 122px;
  gap: 0px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;
  box-shadow: 0px 0px 60px 30px ${COLORS.shadowBlack};

  background: ${COLORS.white};
  border-radius: 16px;
  box-shadow: 0px 4px 10px ${COLORS.shadowBlack};
  margin-bottom: 50px;

  overflow: hidden;

  @media (max-width: 820px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  background: linear-gradient(180deg, ${COLORS.lightBlue} 0%, ${COLORS.primary} 100%);
  color: ${COLORS.white};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 491px;
  height: 647px;
  gap: 0px;
  opacity: 0px;
  box-shadow: 0 8px 20px ${COLORS.shadowBlack};
  

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: flex-start;
      font-size: 1rem;
      margin-bottom: 15px;
      line-height: 1.5;

      svg {
        margin-right: 10px;
        margin-top: 3px;
      }
    }
  }
  
  @media (max-width: 820px){
    width: 100%;
    margin: 0px;
  }
  

  
  .social-icons {
    display: flex;
    gap: 15px;

    a {
      color: ${COLORS.white};
      font-size: 1.5rem;
      transition: color 0.3s;

      &:hover {
        color: ${COLORS.hoverGray};
      }
    }
  }
`;

const FormSection = styled.div`
  flex: 2;
  padding: 40px;

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 820px) {
      flex-direction: column;
    }

    .form-group {
      flex: 1;
      min-width: 250px;

      label {
        display: block;
        font-size: 0.9rem;
        font-weight: 600;
        color: ${COLORS.secondary};
        margin-bottom: 8px;
      }

      input,
      textarea {
        width: 100%;
        font-size: 1rem;
        padding: 10px;
        border: 1px solid ${COLORS.borderGray};
        border-radius: 8px;
        outline: none;

        &:focus {
          border-color: ${COLORS.primary};
          box-shadow: 0px 0px 4px ${COLORS.shadowBlue};
        }
      }

      textarea {
        resize: none;
        height: 100px;
      }
    }

    button {
      margin-top: 20px;
      padding: 12px 20px;
      font-size: 1rem;
      font-weight: 600;
      color: ${COLORS.white};
      background: linear-gradient(90deg, ${COLORS.lightBlue} 0%, ${COLORS.primary} 100%);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.lightBlue} 100%);
      }

      @media(max-width: 480px){
        margin-top: 10px;
      }
    }
  }
  @media(max-width: 480px){
    padding: 30px 20px;
  }
`;

const StyledContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 199px;
  height: 56.86px;
  padding: 15.71px 41.06px 16.15px 40.77px;
  gap: 9.61px;
  border-radius: 34.83px;
  border: 0.9px;
  border-image-source: radial-gradient(
      53.33% 100% at 49.14% 0%,
      rgba(255, 255, 255, 0.24) 0%,
      rgba(0, 0, 0, 0.24) 100%
    );
  background: linear-gradient(180deg, ${COLORS.lightBlue} 0%, ${COLORS.primary} 100%);
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: 3.5s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledContactUsText = styled.div`
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.02px;
  letter-spacing: -0.01em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${COLORS.white} !important;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    emailjs
      .send(
        "service_egsv68f", // Replace with your service ID
        "template_p458lnf", // Replace with your template ID
        {
          name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "qFQnmxp4t_P67O2NF" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
          alert("Message Sent Successfully!")
      },
        (error: { text: string; }) =>{
          setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
          alert("Failed to send message: " + error.text)
  }

      );
  };
  return (
    <ContactUsContainer>
      <Title>
        Contact <span>Us</span>
      </Title>
      <ContactUsWrapper>
        <InfoSection>
          <h2>{contactInfo.companyName}</h2>
          <ul>
            {contactInfo.contacts.map((contact, index) => (
              <li key={index}>
                {contact.icon} {contact.text}
              </li>
            ))}
          </ul>
          <div className="social-icons">
            {contactInfo.socialLinks.map((social, index) => (
              <a key={index} href={social.url}>
                {social.icon}
              </a>
            ))}
          </div>
        </InfoSection>

        <FormSection>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text" name = "firstName" placeholder="John" onChange={handleChange} value={formData.firstName}/>
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text"  name = "lastName" placeholder="Doe" onChange={handleChange} value={formData.lastName}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="youremail@example.com"
                onChange={handleChange}
                name = "email"
                value={formData.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" name = "phone" placeholder="+91 012 3456 789" onChange={handleChange} value={formData.phone}/>
            </div>
            <div className="form-group" style={{ flex: "100%" }}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name = "message" placeholder="Write your message..." onChange={handleChange} value={formData.message}/>
            </div>
            <StyledContactButton type="submit">
              <StyledContactUsText >Send Message</StyledContactUsText>{" "}
            </StyledContactButton>
          </form>
        </FormSection>
      </ContactUsWrapper>
      <ClientLogoScroll />
    </ContactUsContainer>
  );
};

export default ContactUs;
