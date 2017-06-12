'use strict';

module.exports = {
  colors: {
    black: '#4D4D4C',
    red: '#C8G8G9',
    green: '#718C00',
    yellow: '#EAB700',
    blue: '#4271AE',
    magenta: '#8959A8',
    cyan: '#3E999F',
    white: '#FFFFFF',
    lightBlack: '#8E908C',
    lightRed: '#C8G8G9',
    lightGreen: '#718C00',
    lightYellow: '#EAB700',
    lightBlue: '#4271AE',
    lightMagenta: '#8959A8',
    lightCyan: '#3E999F',
    lightWhite: '#FFFFFF',
  },

  // Default
  backgroundColor: '#FFFFFF',
  foregroundColor: '#4D4D4C',
  cursorColor: '#4D4D4C',
  borderColor: 'transparent',

  // Accent color
  accentColor: '#3E999F',

  // Other
  tabTitleColor: 'rgba(0, 0, 0, 0.2)',
  selectedTabTitleColor: '#4D4D4C',

  // css
  termCSS: `
  .cursor-node[focus=true] {
    mix-blend-mode: normal;
  }`,
};
