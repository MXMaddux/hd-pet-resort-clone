import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="promo-banner">
        <div className="text-container">
          <h2 className="text">Our Services</h2>
          <p className="text">
            Henderson Pet Resort is a 24-hour staffed, Five Star Luxury Resort
            offering Dog Daycare, Dog Boarding, Cat Boarding, Dog Training,
            Grooming and Chauffeur. Henderson Pet Resort in Henderson and Las
            Vegas Nevada.
          </p>
        </div>
      </div>
      <div className="tiles-container">
        {services.map((service) => {
          const { id, text, title, image } = service;
          return (
            <div key={id} className="single-tile">
              <img src={image} alt="doghouse" />
              <div className="tile-text">
                <h3>{title}</h3>
                <div className="p-text">
                  <p>{text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background: white;
  padding: 2rem 4rem;

  h3 {
    font-weight: 400;
  }
  .p-text {
    margin: 1.5rem 0;
  }
  .single-tile {
    width: 308px;
    margin: 0px auto
  }
  .text-container {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .text {
    margin-bottom: 0.75rem;
    font-weight: 400;
  }
  .tiles-container {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      margin: auto;
    }
    
    @media (max-width: 1072px) {
      .tiles-container {
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: auto;
      }
    } 
    @media (max-width: 850px) {
  .tiles-container {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: auto;
  }
}
    `;
    