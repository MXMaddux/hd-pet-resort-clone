import React from "react";
import {
  GoogleMap,
  MarkerF,
  useLoadScript,
  InfoWindowF,
} from "@react-google-maps/api";
import { useMemo } from "react";
import styled from "styled-components";
import { FaArrowsSplitUpAndLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Maps = () => {
  const center = useMemo(
    () => ({ lat: 36.02259826660156, lng: -115.05028533935547 }),
    []
  );
  const { isLoaded } = useLoadScript({
    id: "google-map-script",

    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Replace with your API key
  });

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
    <Wrapper>
      {/* <h3>My Google Maps Demo</h3> */}
      <div id="map">
        <div className="app-map">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={18}
            >
              <MarkerF
                position={center}
                // label={{
                //   text: "Fake Henderson et Resort",
                //   color: "red",
                //   anchor: { x: 0.5, y: 9 },
                // }}
              />
              <div className="place-card">
                <div className="place-desc-large">
                  <div className="place-name">
                    <p>Fake Henderson Pet Resort</p>
                  </div>
                  <div className="address">
                    <p>
                      1450 W Horizon Ridge Pkwy Ste. 425, Henderson, NV 89012
                    </p>
                  </div>
                  <div className="review-box">
                    <div className="rating">
                      <h6>4.8</h6>
                    </div>
                    <div className="rating-stars">
                      <p>
                        <FaStar />
                      </p>
                      <p>
                        <FaStar />
                      </p>
                      <p>
                        <FaStar />
                      </p>
                      <p>
                        <FaStar />
                      </p>
                      <p>
                        <FaStar />
                      </p>
                      <div className="reviews">
                        <a href="https://www.google.com/search?hl=en-US&gl=us&q=Henderson+Pet+Resort,+1450+W+Horizon+Ridge+Pkwy+Ste.+425,+Henderson,+NV+89012&ludocid=9208684445915483558&lsig=AB86z5WUHi4t-sBNn5vqkVCdXDHP&hl=en&gl=US#lrd=0x80c8d19c2ff18989:0x7fcbd1b6bf750da6,1">
                          791 reviews
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navigate">
                  <div className="direction-arrow">
                    <h5>
                      <FaArrowsSplitUpAndLeft />
                    </h5>
                  </div>
                  <div className="directions">
                    <a
                      href="https://www.google.com/maps/dir//Henderson+Pet+Resort+1450+W+Horizon+Ridge+Pkwy+Ste.+425+Henderson,+NV+89012/@36.0223972,-115.0503733,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c8d19c2ff18989:0x7fcbd1b6bf750da6!2m2!1d-115.0503733!2d36.0223972?entry=ttu"
                      target="_blank"
                    >
                      <p>Directions</p>
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="marker-label">
                <h6>Fake Henderson Pet Resort</h6>
              </div>
            </GoogleMap>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Maps;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  h5 {
    color: var(--clr-secondary-6);
  }
  .app-map {
    height: 100vh;
    width: 100vw;
  }
  .direction-arrow {
    width: 40px;
    margin: 0 auto;
  }

  .map-container {
    height: 500px;
    width: 100%;
  }
  .marker-label {
    padding: 9px 4px 9px 11px;
    color: red;
    font-family: Roboto, Arial;
    font-size: 12px;
    width: 30%;
    position: absolute;
    top: 35%;
    left: 40%;
    z-index: 999;
    background: transparent;
    display: flex;
  }
  .navigate {
    width: 33.3%;
    text-align: center;
    display: block;
  }
  .place-card {
    padding: 9px 4px 9px 11px;
    color: #5b5b5b;
    font-family: Roboto, Arial;
    font-size: 12px;
    width: 30%;
    position: absolute;
    top: 10px;
    left: 20px;
    z-index: 999;
    background: white;
    display: flex;
  }
  .place-desc-large {
    width: 66.6%;
  }
  .place-name {
    color: #5b5b5b;
    font-size: larger;
  }
  .rating-stars {
    display: flex;
    margin-left: 0.5rem;
  }
  .rating-stars p {
    font-size: 10px;
    color: var(--clr-primary-5);
    margin-right: 0.1rem;
  }
  .review-box {
    display: flex;
    width: 100%;
  }
  .reviews {
    display: flex;
    margin-left: 0.5rem;
  }
  
`;
