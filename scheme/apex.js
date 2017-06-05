'use strict';

module.exports = {
  colors: {
    black: '#495057',
    red: '#FF6D87',
    green: '#32F7C6',
    yellow: '#FFA924',
    blue: '#04A7D8',
    magenta: '#A79AFF',
    cyan: '#14C4D4',
    white: '#FFFFFF',
    lightBlack: '#CED4DA',
    lightRed: '#FF6D87',
    lightGreen: '#32F7C6',
    lightYellow: '#FFA924',
    lightBlue: '#04A7D8',
    lightMagenta: '#A79AFF',
    lightCyan: '#14C4D4',
    lightWhite: '#FFFFFF',
  },

  // Default
  backgroundColor: '#FFFFFF',
  foregroundColor: '#495057',
  cursorColor: '#00BAFF',
  borderColor: 'transparent',

  // Accent color
  accentColor: '#212529',

  // Other
  inactiveTabTitleColor: 'rgba(134, 142, 150, 0.2)',
  activeTabTitleColor: '#868e96',

  // css
  termCSS: `
  .cursor-node[focus=true] {
    mix-blend-mode: normal;
  }`,
};
