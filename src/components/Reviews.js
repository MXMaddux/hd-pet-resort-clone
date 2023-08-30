import React from "react";
import styled from "styled-components";
import SimpleSlider from "./SimpleSlider";

const Reviews = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="client-text">
          <h2>Client Reviews & Testimonials</h2>
        </div>
        <div className="value-text">
          <div>
            <p>
              We value our clients’ experience at Henderson Pet Resort. Here’s
              what some of your neighbors are saying about us.
            </p>
          </div>
        </div>
        <SimpleSlider />
      </div>
      <div className="reviews-anchor">
          <button type="button" className="review-btn">
            <div className="btn-text">
              <p>Write a Review</p>
            </div>
          </button>
          <button type="button" className="review-btn">
            <div className="btn-text">
              <p>Read More Reviews</p>
            </div>
          </button>
      </div>
    </Wrapper>
  );
};

export default Reviews;

const Wrapper = styled.section`
  width: 100%;
  padding: 80px 20px;
  text-align: center;
  position: relative;
  background-color: rgb(27, 116, 188);
  color: white;
  p {
    color: white;
  }
  .btn-text {
    display: flex;
    margin-top: -5px;
  }
  .client-text,
  .value-text {
    display: flex;
    justify-content: center;
  }
  .container {
    width: 100%;
    margin-left: auto;
  }
  .reviews-anchor {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.25rem;
  }
  .review-bird {
    height: 200px;
  }
  .reviewer-block {
    display: flex;
    flex-direction: column;
    width: 120px;
    margin-left: 5rem;
    padding-right: 20px;
    justify-content: center;
    align-items: center;
  }
  .review-btn {
    background: rgb(33, 96, 148);
    margin: 0px 0.75rem;
    padding-top: 18px;
    padding-left: 30px;
    padding-right: 30px;
    height: 48px;
    border: none;
  }
  .review-btn:hover {
    background: rgb(22, 65, 100);
  }

  .review-card-block {
    display: flex;
    min-height: 100%;
    width: 95%;
  }
  .review-comments {
    display: flex;
    width: 75%;
  }
  .stars {
    display: flex;
    margin-top: -1.25rem;
  }
  .stars-section {
    margin-bottom: 1.5rem;
  }
`;
