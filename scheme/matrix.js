'use strict';

module.exports = {
  colors: {
    black: '#00FF00',
    red: '#00FF00',
    green: '#00FF00',
    yellow: '#00FF00',
    blue: '#00FF00',
    magenta: '#00FF00',
    cyan: '#00FF00',
    white: '#00FF00',
    lightBlack: '#00FF00',
    lightRed: '#00FF00',
    lightGreen: '#00FF00',
    lightYellow: '#00FF00',
    lightBlue: '#00FF00',
    lightMagenta: '#00FF00',
    lightCyan: '#00FF00',
    lightWhite: '#00FF00',
  },

  // Default
  backgroundColor: '#000000',
  foregroundColor: '#00FF00',
  cursorColor: '#00FF00',
  borderColor: 'transparent',

  // Accent color
  accentColor: '#00FF00',

  // Other
  inactiveTabTitleColor: 'rgba(0, 255, 0, 0.3)',
  activeTabTitleColor: '#00FF00',

  // css
  css: `
  body {
    background-image: linear-gradient(rgba(0, 255, 0, .15) 7%, transparent 0%);
    background-size: 100% 5px;
  }`,
  termCSS: `
  x-screen {
    background-color: transparent !important;
    text-shadow: 0 0 5px rgb(0, 255, 0);
  }`,
};
