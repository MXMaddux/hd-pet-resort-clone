import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import contact from "../assets/img/Contact_US.webp";
import exclamation from "../assets/img/exclamation-octagon.png";
import { GoTriangleUp } from "react-icons/go";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const captchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    navigate(-1)
    if (name && email && phoneNum) {
      setName(name);
      setEmail(email);
      setPhoneNum(phoneNum);
      setMessage(message);
    } else setError("This field is required.");
  };

  const handleBackButtonClick = () => {
    // Call the function to close the Contact modal in Navbar
    navigate(-1);
  };

  return (
    <Wrapper>
      <div className="tile-image">
        <div className="image-container">
          <img src={contact} alt="Contact" />
        </div>
      </div>
      <h1>Contact Us</h1>
      <div className="blue-box">
        <div className="promo-banner">
          <h3 className="heading">We’d Love To Hear From You!</h3>
          <div className="container">
            <p>Our Friendly Staff can be reached Monday-Sunday 6 am-7 pm.</p>
            <p>Thank You!</p>
            <button
              type="button"
              onClick={handleBackButtonClick}
              className="button"
            >
              <p>Back</p>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="form-section">
        <p>All fields marked with * are required and must be filled.</p>
        <div className="form">
          <label htmlFor="">
            NAME <span>*</span>
          </label>
          <input type="text" className="inputs" />
          <div className="form-error-message">
          <p className="triangle">
              <GoTriangleUp />
            </p>
            <img src={exclamation} alt="exclamation" className="exclamation" />
            <p className="error-text">This field is required.</p>
          </div>
        </div>
        <div className="form">
          <label htmlFor="">
            PHONE <span>*</span>
          </label>
          <input type="text" className="inputs phone" />
          <p className="light-font">PLEASE ENTER A VALID PHONE NUMBER</p>
          <div className="form-error-message">
            <p className="triangle-2">
              <GoTriangleUp />
            </p>
            <img src={exclamation} alt="exclamation" className="exclamation" />
            <p className="error-text">This field is required.</p>
          </div>
        </div>
        <div className="form">
          <label htmlFor="">
            EMAIL <span>*</span>
          </label>
          <input type="text" className="inputs phone" />
          <p className="light-font">EXAMPLE@EXAMPLE.COM</p>
          <div className="form-error-message">
          <p className="triangle-3">
              <GoTriangleUp />
            </p>
            <img src={exclamation} alt="exclamation" className="exclamation" />
            <p className="error-text">This field is required.</p>
          </div>
        </div>
        <div className="form">
          <label htmlFor="">PERSONAL MESSAGE (OPTIONAL)</label>
          <input type="textarea" rows="4" className="inputs text-area" />
        </div>
        <div className="captcha">
          <label htmlFor="">
            ARE YOU A ROBOT? <span>*</span>
          </label>
          <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef}  />
          <div className="form-error-message captcha-container">
          <p className="triangle-4">
              <GoTriangleUp />
            </p>
            <img src={exclamation} alt="exclamation" className="exclamation" />
            <p className="error-text">This field is required.</p>
          </div>
          <div className="submit-btn-container">
            <button className="submit-btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: rgb(250, 250, 250);
  z-index: 1000;

  li p {
    font-weight: bolder;
  }

  span {
    color: var(--clr-primary-5);
    font-weight: bold;
  }

  .blue-box {
    background-color: rgb(27, 116, 188);
    padding: 40px 20px;
    background-size: cover;
    width: 100%;
    /* height: 400px; */
    position: absolute;
    top: 25rem;
  }
  .button {
    background: transparent;
    border: transparent;
  }
  button p {
    font-weight: bolder;
  }
  button p:hover {
    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .captcha {
    text-align: left;
    padding-left: 40px;
    height: 200px;
  }
 
  .container {
    max-width: 964px;
  }
  .container p {
    color: white;
  }
  .error-text {
    color: white;
    margin-top: 14px;
    margin-left: 20px;
    font-size: 12px;
    font-style: italic;
  }
  .exclamation {
    height: 20px;
    margin-bottom: 2px;
    margin-left: 1px;
  }
  .form {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 40px;
  }
  .form-error-message {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #ff4e5d;
    color: #fff;
    padding: 5px;
    height: 25px;
    margin-top: 25px;
  }

  .form-section {
    position: relative;
    top: 0;
    background: white;
    z-index: 1000;
    width: 100%;
    text-align: center;
    padding-top: 40px;
  }
  .form-section p {
    font-weight: bolder;
    font-style: italic;
  }
  .inputs {
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
  }
  .light-font {
    font-weight: 200; /* Adjust the value as needed */
    font-size: 12px; /* Optional: Adjust the font size */
    color: gray; /* Optional: Customize the text color */
    letter-spacing: var(--spacing);
  }
  .phone {
    width: 40%;
  }
  .promo-banner {
    text-align: center;
    color: white;
  }
  .submit-btn {
    background: var(--clr-secondary-5);
    padding: 0.5rem 0.75rem;
    color: var(--clr-white);
    margin-top: 1rem;
    margin-bottom: 20px;
    width: 140px;
  }
  .submit-btn-container {
      width: 100%;
      display: flex;
      padding-top: 10px 0;
      margin-top: 10px;
    }
  .text-area {
    border: 2px solid black;
    height: 80px;
  }
  .tile-image {
    margin: 0px;
    overflow: hidden;
    height: calc((100vw - 15px) * 0.65625);
  }
  .triangle {
    position: absolute;
    top: 11.25rem;
    left: 2.75rem;
    font-size: x-large;
    color: #ff4e5d;
  }
  .triangle-2 {
    position: absolute;
    top: 25.15rem;
    left: 2.75rem;
    font-size: x-large;
    color: #ff4e5d;
  }
  .triangle-3 {
    position: absolute;
    top: 39.15rem;
    left: 2.75rem;
    font-size: x-large;
    color: #ff4e5d;
  }
  .triangle-4 {
    position: absolute;
    top: 63.62rem;
    left: 2.75rem;
    font-size: x-large;
    color: #ff4e5d;
  }
  .image-container {
    position: relative;
    width: 100%;
  }
`;
