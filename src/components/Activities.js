import React from "react";
import styled from "styled-components";

const Activities = () => {
  return (
    <Wrapper>
    <div className="section">
      <div className="text-card">
        <h2>Activities Review</h2>
        <p>
          <span>
            At Henderson Pet Resort, we recognize that all fur babies are
            unique.{" "}
          </span>
          We get to know your baby’s unique personality traits, behavior, and
          needs, to provide a fun-filled and customized day. Our services
          include overnight lodging, suites with comfortable beds and TVs,
          classic doggie daycare of larger playgroups, enrichment daycare of
          smaller playgroups, one-on-one play for those that prefer human time,
          enrichment activities including themed parties, brain games, agility
          skills and treadmill sessions. We also specialize in day school and
          boarding school dog training programs, full-service grooming, basic
          bathing services and chauffeur service to your door.
        </p>
        <button className="contact-btn" type="button" href="/">
              Contact Us
            </button>
      </div>
      <div className="video-card">
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/HwBW-gQXao4"
          frameborder="0"
        ></iframe>
      </div>
      </div>
    </Wrapper>
  );
};

export default Activities;

const Wrapper = styled.section`
  display: grid;
  /* box-sizing: border-box;
  grid-template-columns: 1fr 2fr; */
  background-color: white;
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;

  * {
    box-sizing: border-box;
  }
  .contact-btn {
    background: var(--clr-secondary-5);
    padding: 0.25rem 0.75rem;
    color: var(--clr-white);
    width: 150.3px;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    padding: 0.75rem 1rem;
  }
  .section {
    display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 2fr;
  background-color: white;
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  }
  span {
    font-weight: bold;
  }
  .text-card {
    display: block;
    background: "#ffffff";
    width: 100%;
    float: left;
    padding-left: 2rem;
  }
  .video-card {
    display: flex;
    justify-content: end;
    width: 100%;
    height: auto;
    float: right;
  }
  .youtube-video {
    aspect-ratio: 16 / 9;
    width: 80%;
    height: auto;
    padding-right: 2rem;
  }
  @media (max-width: 992px) {
    .section {
      display: flex;
      flex-direction: column-reverse;
    }
    .video-card {
      justify-content: start;
      margin: 0px auto;
    }
    .text-card {
      padding-left: 2.5rem;
      width: 80%;
    }
    .youtube-video {
      width: 80%;
      margin-left: 2rem;
    }
  }
`;
