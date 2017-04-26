# Contributing to hyper-material-box

Thank you for contributing on [hyper-material-box](https://github.com/ooJerryLeeoo/hyper-material-box), before you submit a new pull request,  
here's some tips and tricks you need to know :sunglasses:  
If you have any problem, feel free to [submit a new issue]((https://github.com/ooJerryLeeoo/hyper-material-box/issues/new).

## Let's jump in

### How to submit a pull request

1. Fork this repository
2. Create a new branch with the new feature name (Ex. add-some-color-scheme or fix-#000)
3. Make your changes
4. Commit your changes (please use the [gitmoji](https://gitmoji.carloscuesta.me/) for the commit message)
5. Push your commits
6. Submit you pull request, and drink some :tea:

### How to share my color scheme

If you want to share your Amazing color scheme on [hyper-material-box](https://github.com/ooJerryLeeoo/hyper-material-box), you need to make sure you've done the following steps:

1. Create a new file name `your_scheme_name.js` under `scheme` folder
2. Write your color scheme with the following format:
``` javascript
'use strict';

module.exports = {
  colors: {
    black: '...',
    red: '...',
    green: '...',
    yellow: '...',
    blue: '...',
    magenta: '...',
    cyan: '...',
    white: '...',
    lightBlack: '...',
    lightRed: '...',
    lightGreen: '...',
    lightYellow: '...',
    lightBlue: '...',
    lightMagenta: '...',
    lightCyan: '...',
    lightWhite: '...',
  },

  // Default
  backgroundColor: '...',
  foregroundColor: '...',
  cursorColor: '...',
  borderColor: '...',

  // Accent color
  accentColor: '...',

  // Other
  inactiveTabTitleColor: 'rgba(255, 255, 255, 0.2)',
  activeTabTitleColor: '...',
};
```
3. Add your color scheme to the `schemeIndex` under `index.js` (Please insert it according to the **ALPHABETICAL** order, and don't move the user section)

Cheers :beers:
