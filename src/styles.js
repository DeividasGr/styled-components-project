import { css } from 'styled-components';

//reusable helper functions (mixins)

//object for colors
export const setColor = {
  primaryColor: '#af9a7d',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGrey: '#ececec',
  lightGrey: '#f7f7f7',
};

//object for f=different font styles
export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;",
};

//function for placing stuff in the middle
export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`;
};

//function for background image and overlay effect
export const setBackground = ({
  img = 'https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  color = 'rgba(0,0,0,0)',
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
     url(${img}) center/cover fixed no-repeat`;
};

//function for rem values
export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

//function for letter spacing
export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`;
};

//function for borders

export const setBorder = ({
  width = '2px',
  style = 'solid',
  color = 'black',
} = {}) => {
  return `border:${width} ${style} ${color}`;
};

//object for media query size
const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

//function for animation transitions
export const setTransition = ({
  property = 'all',
  time = '0.4s',
  timing = 'ease-in-out',
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};

//function for show setup on chosen elements
export const setShadow = {
  light: 'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)',
  dark: 'box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);',
  darkest: 'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);',
};
