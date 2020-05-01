import React from 'react';
import { IntroAnimate } from './ResultFadeIn';
import styled from 'styled-components';

const IntroAn = styled.div`
   position: relative;
   opacity:0;
   top: 40px;
   animation: ${IntroAnimate} 0.8s 0.1s forwards;
`;

const style = {
    "fontSize":"60px",
    "fontFamily":"Trebuchet MS,Arial, Helvetica, sans-serif",
    "color":"rgb(253, 51, 88)"
}
const styleb = {"textAlign":"center","marginTop":"40px"}

const Intro = () => {
    return(
        <IntroAn>
        <div style = {styleb}>
        <h2 style = {style}>Search above for the movies</h2>
        </div>
        </IntroAn>
    );
}
export default Intro;