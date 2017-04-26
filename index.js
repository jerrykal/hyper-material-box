'use strict';

const colorJS = require('color');

exports.decorateConfig = config => {
  const materialBox = Object.assign(
      {
        scheme: 'solarized-dark',
        backgroundOpacity: 1,
        backgroundVibrancy: false,
        closeOnTheLeft: false,
        activeTabStyle: 'underline',
        lightEffect: false,
      },
      config.materialBox);

  materialBox.user = Object.assign(
      {
        colors: config.colors,
        backgroundColor: config.backgroundColor,
        foregroundColor: config.foregroundColor,
        cursorColor: config.cursorColor,
        borderColor: config.borderColor,
        accentColor: config.colors.blue,
        inactiveTabTitleColor: config.inactiveTabTitleColor ||
            colorJS(config.foregroundColor).alpha(0.3).string(),
        activeTabTitleColor:
            config.activeTabTitleColor || config.foregroundColor,
      },
      (config.materialBox ? config.materialBox.user : {}));

  // Get scheme
  const schemeIndex = {
    // material-box schemes
    'dracula': require('./scheme/dracula.js'),
    'material-darker': require('./scheme/material-darker.js'),
    'material-lighter': require('./scheme/material-lighter.js'),
    'material': require('./scheme/material.js'),
    'monokai': require('./scheme/monokai.js'),
    'solarized-dark': require('./scheme/solarized_dark.js'),
    'solarized-light': require('./scheme/solarized_light.js'),
    'tomorrow-night-blue': require('./scheme/tomorrow-night-blue.js'),
    'tomorrow-night-bright': require('./scheme/tomorrow-night-bright.js'),
    'tomorrow-night-eighties': require('./scheme/tomorrow-night-eighties.js'),
    'tomorrow-night': require('./scheme/tomorrow-night.js'),
    'tomorrow': require('./scheme/tomorrow.js'),

    // user-defined scheme
    'user': materialBox.user,
  };
  const scheme = Object.assign(
      schemeIndex[materialBox.scheme.toLowerCase()] ||
          schemeIndex['solarized-dark'],
      (config.materialBox ? config.materialBox.user : {}));

  // Background opacity
  scheme.backgroundColor = colorJS(scheme.backgroundColor)
                               .alpha(materialBox.backgroundOpacity)
                               .string();
  // Background vibrancy
  if (materialBox.backgroundVibrancy === true) {
    if (colorJS(scheme.backgroundColor).light() === true) {
      exports.onWindow = browserWindow => browserWindow.setVibrancy('light');
    } else {
      exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');
    }
  }

  // Active tab style
  const lightEffect =
      (materialBox.lightEffect ? `box-shadow: 0 0 10px ${scheme.accentColor};` :
                                 '');
  let tabStyle = '';
  switch (materialBox.activeTabStyle.toLowerCase()) {
    case 'preline':
      tabStyle = `
        .tab_tab::after {
          content: "";
          position: absolute;
          pointer-events: none;
          top: 0;
          bottom: -1px;
          left: 0;
          width: 2px;
          height: inherit;
          background: ${scheme.accentColor};
          opacity: 0;
          transition: opacity .16s;
          z-index: 1;
          ${lightEffect}
        }
        .tab_tab.tab_active::after {
          opacity: 1;
          transition-duration: .32s;
          ${lightEffect}
        }`;
      break;
    case 'overline':
      tabStyle = `
      .tab_tab.tab_active {
        border-top: 2px solid ${scheme.accentColor} !important;
      }`;
      break;
    case 'filled':
      tabStyle = `
        .tab_tab.tab_active,
        .tabs_title {
          background: ${scheme.accentColor};
          ${lightEffect}
        }`;
      break;
    default:
      tabStyle = `
        .tab_tab::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: ${scheme.accentColor};
          transform: scaleX(0);
          transition: none;
          ${lightEffect}
        }`;
      break;
  }

  return Object.assign({}, config, {
    colors: scheme.colors,
    backgroundColor: scheme.backgroundColor,
    foregroundColor: scheme.foregroundColor,
    borderColor: scheme.borderColor,
    cursorColor: scheme.cursorColor,
    css: `
    .tab_tab {
      border: none;
      color: ${scheme.inactiveTabTitleColor};
    }
    .tab_tab.tab_active {
      color: ${scheme.activeTabTitleColor};
    }
    .tabs_title {
      color: ${scheme.activeTabTitleColor};
    }
    .hyper_main {
      border: none;
    }
    .tabs_borderShim {
      display: none;
    }
    .tab_tab.tab_active::before {
      transform: scaleX(1);
      transition: all 300ms cubic-bezier(0.0, 0.0, 0.2, 1)
    }
    .tab_textInner {
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100%;
      padding: 0px 24px 0 8px;
    }
    .tabs_nav .tab_tab .tab_icon {
      left: 5px;
      right: auto;
      top: 4px;
      border-radius: 2px;
    }
    ${tabStyle}
    ${
      materialBox.closeOnTheLeft === true ?
          '.tab_tab .tab_icon { left: 7px; right: initial; }' :
          ''
    }
    ${config.css || ''}
    `,
    termCSS: `
    ::-webkit-scrollbar {
      width: 2px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0px;
      background-color: ${scheme.accentColor};
    }
    x-screen x-row { font-variant-ligatures: contextual; }
    ${config.termCSS || ''}
    `,
  });
};
