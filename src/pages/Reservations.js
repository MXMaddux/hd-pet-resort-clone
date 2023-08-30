import React, { useState } from 'react';
import styled from "styled-components";
import {AiOutlineClose} from "react-icons/ai"

const Reservations = () => {
    

  return (
    <Wrapper>

    <div className="custom-reservation-banner">
        <h1>Henderson Pet Resort Reservations</h1>
        <h2>Tail wags and purrs guaranteed! Make your next reservation today.</h2>
        <h2>Are You A New Customer?</h2>
        <h2>Login or create an account to make your next reservation.</h2>
<h2>
    <a className='buttons' href="https://hpr.portal.gingrapp.com/#/public/new_customer" target='_blank'>New Customer</a>
    <a className='buttons' href="https://hpr.portal.gingrapp.com/#/public/login" target='_blank'>Existing Customer</a>
</h2>
    </div>
    </Wrapper>
  )
}

export default Reservations;

const Wrapper = styled.section`
height: 100vh;

.custom-reservation-banner {
    background-color: #ffffff;
    padding: 40px 20px;
    background-size: cover;
    text-align: center;
    margin: 0 auto;
    width: 60%;
}

.buttons {
    line-height: 18px;
    letter-spacing: 1.4px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    font-family: NunitoBold, sans-serif;
    font-size: 16px;
    padding: 15px 40px;
    background-color: rgb(63, 139, 162);
    border-radius: 3px;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(63, 139, 162);
    width: 250px;
    margin: 20px 10px;
}
.close-btn {
    display: flex;
    height: 30px;
    width: 60%;
    font-size: 2rem;
    font-weight: bolder;
    align-items: center;
    color: var(--clr-primary-5);
    margin: 0 auto;
}

`