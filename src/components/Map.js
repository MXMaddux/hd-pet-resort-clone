import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from "styled-components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    
      return (
        <Wrapper>
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={36.022290}
              lng={-115.050930}
              text="Henderson Pet Resort"
            />
          </GoogleMapReact>
        </div>
        </Wrapper>
      );
}

export default Map;

const Wrapper = styled.section`
height: 100%;
width: 100%;

`