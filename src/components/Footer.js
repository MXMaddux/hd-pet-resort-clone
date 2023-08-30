import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import logo_sm from "../assets/img/cat_dog_ball_small.webp";
import logo_tiny from "../assets/img/cat_dog_ball_tiny.webp";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="columns">
          <div className="business-logo">
            <div className="logo-column">
              <Link to="/">
                {/* <img src={logo} alt="Pet Hotel" className="img-large" /> */}
                <img src={logo_sm} alt="Pet Hotel" className="img-small" />
                <img src={logo_tiny} alt="Pet Hotel" className="img-tiny" />
              </Link>
            </div>
          </div>
          <div className="contact-card">
            <div className="address">
              <a href="/" className="address-links">
                <h3 className="henderson-pet">Henderson Pet Resort</h3>

                <p>1450 W Horizon Ridge Pkwy</p>
                <p>Suite 425</p>
                <p>Henderson, NV 89012</p>
              </a>
            </div>
            <div className="phone-numbers">
              <Link to="tel:702-846-4970">
                <p>T: 702-846-4970</p>
              </Link>
              <Link to="tel:(702)847-5872">
                <p>F: 702-846-4970</p>
              </Link>
            </div>
          </div>
          <div className="hours-card">
            <h3 style={linkStyle}>Hours of Operation</h3>
            <div className="hours">
              <p className="day">Mon</p>
              <p className="time">
                <span content="6:00:00">6:00am-</span>
                <span content="19:00:00">7:00pm</span>
              </p>
            </div>
            <div className="hours">
              <p className="day">Tue</p>
              <p className="time">
                <span content="6:00:00">6:00am-</span>
                <span content="19:00:00">7:00pm</span>
              </p>
            </div>
            <div className="hours">
              <p className="day">Wed</p>
              <p className="time">
                <span content="6:00:00">6:00am-</span>
                <span content="19:00:00">7:00pm</span>
              </p>
            </div>
            <div className="hours">
              <p className="day">Thu</p>
              <p className="time">
                <span content="6:00:00">6:00am-</span>
                <span content="19:00:00">7:00pm</span>
              </p>
            </div>
            <div className="hours">
              <p className="day">Fri</p>
              <p className="time">
                <span content="6:00:00">6:00am-</span>
                <span content="19:00:00">7:00pm</span>
              </p>
            </div>
            <div className="hours">
              <p className="day">Sat</p>
              <p className="time">
                <span content="6:00:00">6:00am-</span>
                <span content="19:00:00">7:00pm</span>
              </p>
            </div>
            <div className="hours">
              <p className="day">Sun</p>
              <p className="time">
                <span content="6:00:00">6:00am-</span>
                <span content="19:00:00">7:00pm</span>
              </p>
            </div>
          </div>
          <div className="request-card">
            <button className="request-btn" type="button">
              Request a Reservation
            </button>
            <a href="/">
              <p>Dog Boarding</p>
            </a>
            <a href="/">
              <p>Cat Boarding</p>
            </a>
            <a href="/">
              <p>Dog Daycare</p>
            </a>
            <a href="/">
              <p>Grooming & Spa</p>
            </a>
            <a href="/">
              <p>Dog Training</p>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="links-container">
          <div className="copyright">
            <p>&copy; Copyright {new Date().getFullYear()}</p>
          </div>
          <div className="links">
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Accessability</a>
            </p>
            <p>
              <a href="/">Careers</a>
            </p>
          </div>
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/hendersonpetresort"
              target="_blank"
              style={socialLinkStyle}
            >
              <FaFacebook size="1x" />
            </Link>
            <Link
              to="https://www.instagram.com/hendersonpetresort/"
              target="_blank"
              style={socialLinkStyle}
            >
              <FaInstagram size="1x" />
            </Link>
          </div>
        </div>
        <div className="links-container-small">
          <div className="links-small">
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Accessability</a>
            </p>
            <p>
              <a href="/">Careers</a>
            </p>
          </div>
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/hendersonpetresort"
              target="_blank"
              style={socialLinkStyle}
            >
              <FaFacebook size="1x" />
            </Link>
            <Link
              to="https://www.instagram.com/hendersonpetresort/"
              target="_blank"
              style={socialLinkStyle}
            >
              <FaInstagram size="1x" />
            </Link>
          </div>
          <div className="copyright">
            <p>&copy; Copyright {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const linkStyle = {
  color: "gray",
};
const socialLinkStyle = {
  color: "#215792",
  gap: "1rem",
};

export default Footer;

const Wrapper = styled.section`
  .address:hover {
    color: var(--clr-primary-5);
  }
  .address-links {
    color: var(--clr-gray-8);
    text-decoration: none;
  }
  .address-links h3:hover {
    color: var(--clr-primary-5);
    text-decoration: underline;
  }
  .address-links p:hover {
    color: var(--clr-primary-5);
    text-decoration: underline;
  }
  .bottom {
    height: 100px;
    padding-bottom: 20px;
    margin-top: 40px;
  }
  .business-logo {
    border-left: 1px dashed var(--clr-primary-5);
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .contact-card .hours-card .request-card {
    display: block;
    width: 25%;
  }
  .contact-card a {
    color: var(--clr-gray-8);
    opacity: 0.6;
  }
  .contact-card a:hover {
    color: var(--clr-primary-5);
    opacity: 0.6;
    text-transform: underline;
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;
    padding: 0 2rem;
    background-color: var(--clr-white);
    box-sizing: border-box;
    margin: 0px auto;
    color: var(--clr-gray-5);
    .address {
      padding-left: 0.5rem;
    }
  }
  .contact-card {
    border-left: 1px dashed var(--clr-primary-5);
  }
  .copyright p {
    color: var(--clr-gray-5);
    opacity: 0.5;
    font-size: 13px;
  }
  .copyright {
    width: 185px;
    padding-left: 20px;
    margin-top: 3px;
  }
  .days {
    width: 100%;
    display: inline;
  }
  .hours {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0px;
  }
  .hours-card {
    border-left: 1px dashed var(--clr-primary-5);
    padding: 0px 0.75rem;
  }

  .img-tiny {
    display: none;
  }
  .links {
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: space-evenly;
  }
  .links a {
    color: var(--clr-gray-5);
    opacity: 0.5;
    text-decoration: none;
    font-size: 13px;
  }
  .links p:hover {
    color: var(--clr-primary-5);
    text-decoration: underline;
  }
  .links-container {
    display: flex;
    width: 100%;
    margin-top: 10px;
  }
  .links-container-small {
    display: none;
    margin-top: 40px;
  }
  .logo-column {
    display: flex;
    justify-content: center;
    width: 15rem;
    height: 100%;
  }
  .logo-column .img-small {
    /* width: auto */
    object-fit: contain;
  }
  .phone-numbers {
    padding-left: 10px;
  }
  .phone-numbers:hover {
    color: var(--clr-primary-5);
  }
  .phone-numbers a {
    text-decoration: none;
  }
  /* .phone-numbers p {
    color: var(--clr-gray-8);
    text-decoration: none;
  }  */
  .phone-numbers p:hover {
    color: var(--clr-primary-5);
    text-decoration: underline;
  }
  .request-card {
    padding: 0px 0.75rem;
    border-left: 1px dashed var(--clr-primary-5);
    border-right: 1px dashed var(--clr-primary-5);
  }
  .request-card a {
    text-decoration: none;
    color: var(--clr-secondary-5);
    opacity: 0.75;
    letter-spacing: var(--spacing);
  }
  .request-card a:hover {
    color: var(--clr-primary-5);
    text-decoration: underline;
  }
  .request-card p:hover {
    color: var(--clr-primary-5);
    text-decoration: underline;
  }
  .request-btn {
    background: var(--clr-secondary-5);
    padding: 0.25rem 0.75rem;
    color: var(--clr-white);
    width: 150.3px;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }
  .social-icons {
    display: flex;
    justify-content: space-evenly;
    width: 8rem;
    height: 35px;
    padding-right: 10px;
    color: var(--clr-primary-5);
  }
  h3 {
    color: var(--clr-gray-5);
  }
  @media (max-width: 992px) {
    .columns {
      display: block;
    }
    .container {
      margin-left: 40px;
    }
    .hours p {
      margin-bottom: 2px;
    }
    .request-btn {
      width: 100%;
      height: 40px;
    }
    .request-card {
      border: none;
    }
    .request-card a p{
      color: var(--clr-secondary-4);
      font-weight: 400;
      font-size: large;
    }
    .hours-card {
      border: none;
    }
    .contact-card {
      border: none;
    }
    .business-logo {
      border: none;
    }
    .links a {
      color: var(--clr-gray-8);
      text-decoration: none;
    }
    .links-container {
      display: none;
    }
    .links-container-small {
      display: block;
      margin-left: 40px;
    }
    .links-small {
      display: block;
    }
    .links-small a {
      color: var(--clr-gray-8);
      text-decoration: none;
      margin-left: 40px;
      opacity: 0.75;
      font-size: 13px;
    }
    .links-small a:hover {
      color: var(--clr-primary-5);
      text-decoration: underline;
    }
    .logo-column {
      justify-content: left;
      padding-left: 0.5rem;
    }
    .social-icons {
      display: flex;
      flex-direction: row;
      width: 15%;
      justify-content: space-around;
      margin: 0 auto;
    }
  }
`;
