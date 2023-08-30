import React from "react";
import styled from "styled-components";
import frontDesk from "../assets/img/frontDesk.jpg";
import pawPhone from "../assets/img/pawPhone.png";
import ramps from "../assets/img/ramps.jpg";
import puppyKisses from "../assets/img/puppyKisses.jpg";

const BootstrapSlider = () => {
  return (
    <Wrapper>
      <div className="media-text-carousel">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner" style={{ height: 567 }}>
            <div class="carousel-item active">
              <img src={pawPhone} class="d-block w-100" alt="pawPhone" />
              <section className="card-text-container">
                <div className="text-left">
                  <div className="card-rich-text">
                    <h2>
                      Introducing our new mobile app for convenient 24/7
                      booking.
                    </h2>
                    <p>
                      1) Download the Gingr for Pet Parents app
                      <br />
                      2) Enter invite code: 934249
                      <br />
                      3) Register with your email address on file
                      <br />
                      4) START BOOKING!
                    </p>
                    <button className="download-btn" type="button">
                      <p>Download Now</p>
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div class="carousel-item">
              <img src={frontDesk} class="d-block w-100 " alt="frontDesk" />
              <section className="card-text-container">
                <div className="text-left-b">
                  {/* <div className="card-rich-text-b"> */}
                  <div className="headline-div">
                    <h1>"Pets Go Where They're Treated Well"</h1>
                  </div>
                  <p>
                    Five Star Luxury Resort offers Dog Daycare, Dog Boarding,
                    Cat Boarding, Dog Training, Grooming and Chauffeur in
                    Henderson and Las Vegas Nevada.
                  </p>
                  <button className="download-btn" type="button">
                    <p>Request a Reservation</p>
                  </button>
                </div>
                {/* </div> */}
              </section>
            </div>
            <div class="carousel-item">
              <img src={ramps} class="d-block w-100 " alt="ramps" />
              <section className="card-text-container">
                <div className="text-left">
                  <div className="card-rich-text">
                    <div className="headline-div">
                      <h2>Our large indoor play yard</h2>
                    </div>
                    <p>
                      Climate Controlled, Custom Antimicrobial K9 Grass. Safe
                      for your furry loved one to run, jump and play on!
                    </p>
                    <button className="download-btn" type="button">
                      <p>Dog Daycare</p>
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div class="carousel-item">
              <img src={puppyKisses} class="d-block w-100 " alt="puppyKisses" />
              <section className="card-text-container">
                <div className="text-left">
                  <div className="card-rich-text">
                    <div className="headline-div">
                      <h2>ReFUR A Friend and Share The Fun! </h2>
                    </div>
                    <h4>
                    Give $30. Get $30.
                    </h4>
                    <button className="download-btn" type="button">
                      <p>Refer Now</p>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default BootstrapSlider;

const Wrapper = styled.section`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card-rich-text h4 {
    margin-bottom: 40px;
  }
  .carousel-control-next {
    height: 60px;
    width: 60px;
    padding: 12px;
    background-color: var(--clr-primary-5);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 1.5rem;
    opacity: 1;
  }
  .carousel-control-next:hover,
  .carousel-control-prev:hover {
    background-color: var(--clr-primary-3);
  }
  .carousel-control-prev {
    height: 60px;
    width: 60px;
    padding: 12px;
    background-color: var(--clr-primary-5);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 1.5rem;
    opacity: 1;
  }

  .carousel-indicators .active {
    background-color: var(--clr-primary-5);
  }
  .carousel-indicators button {
    width: 80px;
    margin: 0 1rem;
    height: 5px;
    opacity: 0.35;
    border-radius: 11px;
  }
  .carousel-item {
    height: 100%;
  }
  .download-btn {
    height: 3rem;
    background: #1062bd;
    color: white;
    padding: 20px 35px;
  }
  .download-btn p {
    margin-top: -10px;
  }
  .headline-div {
    margin-bottom: 40px;
  }
  
  .text-left {
    width: 50%;
    position: absolute;
    top: 12rem;
    left: 7rem;
    color: white;
  }
  .text-left p,
  .text-left-b p{
    color: white;
    margin-bottom: 40px;
  }
  .text-left-b {
    width: 50%;
    height: 600px;
    position: absolute;
    top: 8rem;
    left: 7rem;
    color: white;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 50px;
      line-height: 60px;
    }
    h4 {
      margin-bottom: 80px;
    }
    .card-text-container {
      position: absolute;
      top: 0px;
      height: 100%;
      width: 100%;
    }

    .text-left {
      position: absolute;
      top: 35%;
    }
    .card-rich-text {
      margin-bottom: 40px;
    }
    .headline-div {
      margin-bottom: 40px;
    }
  }
`;
