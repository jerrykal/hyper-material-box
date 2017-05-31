# Contributing to hyper-material-box

Thank you for contributing on [hyper-material-box](https://github.com/ooJerryLeeoo/hyper-material-box), before you submit a new pull request,  
here's some tips and tricks you need to know :sunglasses:  
If you have any problem, feel free to [submit a new issue](https://github.com/ooJerryLeeoo/hyper-material-box/issues/new).

## Let's jump in

### How to submit a pull request

1. Fork this repository
2. Create a new branch with the new feature name (Ex. add-some-color-scheme or fix-#000)
3. Make your changes
4. Commit your changes (use [gitmoji](https://gitmoji.carloscuesta.me/))
5. Push your commits
6. Submit you pull request, and drink some :tea:

### How to share my color scheme

If you want to share your Amazing color scheme on [hyper-material-box](https://github.com/ooJerryLeeoo/hyper-material-box), you need to make sure you've done the following steps:

1. Create a new file name `your-scheme-name.js` under [scheme](https://github.com/ooJerryLeeoo/hyper-material-box/tree/master/scheme) folder
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

  // Other (optional, it will be override by foregroundColor)
  inactiveTabTitleColor: '...',
  activeTabTitleColor: '...',

  // css (optional)
  css: '...',
  termCSS: '...',
};
```
3. Add your color scheme to the :point_right: [schemeIndex](https://github.com/ooJerryLeeoo/hyper-material-box/blob/master/index.js#L3) (**ALPHABETICAL** order)
4. Add your color scheme to the :point_right: [README.md](https://github.com/ooJerryLeeoo/hyper-material-box#wrench-color-scheme) list (**ALPHABETICAL** order), and update the color scheme count
5. Add your GitHub username to the :point_right: [Credit section](https://github.com/ooJerryLeeoo/hyper-material-box#zap-credit) with this format (**ALPHABETICAL** order, *and don't forget to add __2__ space at the end*)
```
:zap: The `your-scheme-name` color scheme contributed by [@**yourGitHubUserName**](https://github.com/yourGitHubUserName)  
```
6. Add your color scheme to the :point_right: [keywords](https://github.com/ooJerryLeeoo/hyper-material-box/blob/master/package.json#L6) (**ALPHABETICAL** order)

Cheers :beers:
