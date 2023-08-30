import React from "react";
import styled from "styled-components";

const Welcome = () => {
  return (
    <Wrapper>
      <div className="promo-banner">
        <div className="text-container">
          <h2 className="text">Welcome to Henderson Pet Resort</h2>
          <h6 className="text">PROUDLY SERVING THE COMMUNITIES OF HENDERSON & LAS VEGAS</h6>
          <p className="text">Henderson Pet Resort specializes within the pet hospitality industry by offering only experiences of exceptional quality.</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #1062bd;
  padding: 80px 114px;
  
h6 {
  font-weight: 400;
}
  .text-container {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .text {
    color: white;
    margin-bottom: 0.75rem;
  }
`;
