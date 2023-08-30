import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Wrapper>
        <Slider {...settings}>
            <div className="slick-slide">
              <section className="media-card-block">
                <div className="media-block">
                  <p>{name}</p>
                  <section className="stars-section">
                  <div className="stars">
                    <div className="clip-star">
                      <FaStar style={starStyle} />
                    </div>
                    <div className="clip-star">
                      <FaStar style={starStyle} />
                    </div>
                    <div className="clip-star">
                      <FaStar style={starStyle} />
                    </div>
                    <div className="clip-star">
                      <FaStar style={starStyle} />
                    </div>
                    <div className="clip-star">
                      <FaStar style={starStyle} />
                    </div>
                  </div>
                </section>
                <p>On Google</p>
                </div>
                <div className="media-comments">
                  <p>{review}</p>
                </div>
              </section>
            </div>
          
        </Slider>
      </Wrapper>
    );
  }
}

const starStyle = {
  color: "rgb(221, 186, 41)",
};



const Wrapper = styled.div`
  color: white;

  li {
    margin: 0px -0.15rem;
    height: 20px;
    width: 20px;
    color: white;
  }

  .slick-arrow {
    background: white;
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }

  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-primary-5);
    font-size: 73px;
    font-weight: bold;
    border-radius: 50%;
    position: absolute;
    left: -0.42rem;
    top: 0.01rem;
    opacity: 1;
  }

  .slick-dots li {
    margin: 0px -0.15rem;
    height: 24px; /* Increase the height for larger dots */
    width: 24px; /* Increase the width for larger dots */
  }

  .slick-dots li button:before {
    height: 10px; /* Match the increased height */
    width: 10px; /* Match the increased width */
    border-radius: 50%;
    margin-top: 4px;
    margin-left: 4px;
    opacity: 1;
    z-index: 1;
    color: var(--clr-secondary-9);
    opacity: 0.75;
  }

  .slick-slide {
    display: block; /* Display all slides */
  }

  .slick-dots li.slick-active button:before {
    color: var(--clr-secondary-3);
  }

  @media (max-width: 992px) {
    .slick-arrow {
        display: none;
        background: var(--clr-secondary-5);

    }
    .slick-prev:before {
        display: none;
    }
    .slick-next:before {
        display: none;
    }
  }
  @media (min-width: 992) {
    .slick-arrow,
    .slick-prev:before,
    .slick-next:before {
        margin: 0px 2rem;
    }
  }
`;


