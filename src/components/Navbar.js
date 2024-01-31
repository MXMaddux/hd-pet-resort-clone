import React, { useState } from "react";
import { FaBars, FaPhoneAlt, FaSms } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FaComment, FaCalendarDays } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/cat_dog_ball.webp";
import logo_small from "../assets/img/cat_dog_ball_small.webp";
import styled from "styled-components";
import Reservations from "../pages/Reservations";
import Contact from "../pages/Contact";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const openContactModal = () => {
  //   setIsContactModalOpen(true);
  // };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <NavContainer>
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="Pet Hotel" className="responsive" />
        </Link>
      </div>
      <div className="middle-container">
        <div className="nav-contacts">
          <div className="icon-links-small">
            <Link
              to="https://www.google.com/maps/place/1450+W+Horizon+Ridge+Pkwy+Ste.+425,+Henderson,+NV+89012/@36.0214114,-115.0509462,16z/data=!4m6!3m5!1s0x80c8d19c30798de7:0xe43deb5fe52705f0!8m2!3d36.0222579!4d-115.0502855!16s%2Fg%2F11q_66jm47?entry=ttu"
              className="icon-link"
              target="_blank"
            >
              <MdLocationOn className="icon" /> <p>Map</p>
            </Link>
            <Link to="tel:702-849-6991" className="icon-link">
              <FaPhoneAlt className="icon" /> <p>Call</p>
            </Link>
            <Link to="tel:702-849-6991" className="icon-link">
              <FaComment className="icon" /> <p>Text</p>
            </Link>
            <Link to="/reservations" className="icon-link">
              <FaCalendarDays className="icon" /> <p>Book</p>
            </Link>
          </div>

          <div className="numbers-container">
            <div className="number-single">
              <Link to="tel:702-849-6991" className="number-link">
                <p className="number-link-p">
                  Phone: <span className="phone-numbers">702-849-6991</span>
                </p>
              </Link>
            </div>
            <div className="number-single">
              <Link to="tel:702-849-6991" className="number-link">
                <p className="number-link-p">
                  Text: <span className="phone-numbers">855-905-5858</span>
                </p>
              </Link>
            </div>
          </div>
          <div className="address">
            <p className="number-link-address">
              <p className="number-link-p">
                Address:{" "}
                <span className="phone-numbers">
                  1450 W Horizon Ridge Pkwy, Ste. 425, Henderson, NV, 89012
                </span>
              </p>
            </p>
          </div>
        </div>
        <div className="links-container">
          <div className="img-small-container">
            <img src={logo_small} alt="Pet Hotel" className="img-small" />
          </div>
          <ul className="nav-links">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Rates
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="contact"
                onClick={navigate("/contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="request-btn-container">
            <button className="request-btn" type="button" onClick={openModal}>
              Request a Reservation
            </button>
            <button className="nav-toggle" type="button" onClick={openModal}>
              <FaBars />
            </button>
          </div>
          {isModalOpen && (
            <ModalWrapper>
              <div className="modal-overlay" onClick={closeModal}></div>
              <div className="modal-container">
                <Reservations />
                <button className="close-modal" onClick={closeModal}>
                  <AiOutlineClose />
                </button>
              </div>
            </ModalWrapper>
          )}
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 10rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  padding: 2rem;
  background-color: var(--clr-white);
  box-sizing: border-box;
  margin: 0px auto;

  a {
    color: var(--clr-primary-5);
  }
  .address {
    width: 100%;
    margin-top: 0.25rem;
  }
  .base-color {
    color: var(--clr-primary-5);
  }
  .icon {
    margin-right: 5px;
  }
  .icon-links-small {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
  }
  .icon-link {
    display: flex;
    flex-direction: row;
    color: var(--clr-gray-5);
  }
  .image-small-container {
    display: none;
  }
  .links-container {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 65%;
    align-items: center;
  }
  .middle-container {
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .responsive {
    max-width: 100%;
    height: auto;
  }

  .header-container {
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-right: 1px dashed var(--clr-primary-5);
    padding-right: 4rem;
  }
  .icon {
    margin-right: 5px;
  }
  .icon-link:hover {
    color: var(--clr-primary-5);
  }

  .img-small-container {
    display: none;
  }
  .link_text {
    color: var(--clr-gray-5);
  }
  .nav-contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .nav-link {
    color: var(--clr-gray-3);
    width: auto;
  }
  .nav-link:hover {
    color: var(--clr-primary-5);
  }
  .navbar-nav {
    color: var(--clr-primary-5);
  }
  .nav-contacts {
    height: 35%;
    width: 100%;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    align-items: center; /* Center vertically */
    padding-bottom: 1rem;
    margin-left: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .nav-phone,
  .nav-text {
    line-height: 15px;
    margin-right: 1rem; /* Add some spacing between Phone and Text */
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-gray-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
    display: none;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .nav-link:hover {
    color: var(--clr-primary-5);
  }

  .nav-item {
    margin: 0 1rem;
  }
  .numbers-container {
    width: 100%;
    height: 100%;
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .number-link {
    margin-right: 2rem;
  }
  .number-link-p {
    color: var(--clr-primary-5);
    font-size: small;
    font-weight: 400;
  }
  .number-link-address {
    margin-top: -1rem;
  }
  /* .number-single {
    align-items: center;
    margin-top: 1rem;
  } */
  .phone-numbers:hover {
    text-decoration: underline;
  }
  .number-single {
    margin-right: 3rem;
    margin-top: -1.5rem;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    height: 1rem;
  }
  .request-container {
    display: flex;
    height: 100%;
    width: 20rem;
    align-items: center;
  }
  .request-btn {
    background: var(--clr-secondary-5);
    padding: 0.75rem;
    color: var(--clr-white);
    width: 192.3px;
    margin-top: 1rem;
  }

  @media (max-width: 1024px) {
    .nav-links {
      display: none;
    }

    .nav-toggle {
      display: flex;
    }
    .request-btn {
      display: none;
    }
    .request-btn-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .responsive {
      display: none;
    }
    .numbers-container {
      display: none;
    }
    .address {
      display: none;
    }
    .header-container {
      display: none;
    }
    .img-small-container {
      display: contents;
    }
    .links-container {
      width: 100%;
    }
    .numbers-container {
      display: none;
    }
    .address {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .nav-links {
      display: flex;
    }
    .header-container {
      justify-content: space-between;
      border-bottom: none;
    }
    .icon-links-small {
      display: none;
    }
  }
`;

export default Navbar;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  .modal-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
    width: 80%;
    max-width: 800px;
    margin-top: 3rem;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--clr-primary-5);
  }
`;

const ContactModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .modal-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
    width: 100%;
    margin-top: 3rem;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--clr-primary-5);
  }
`;
