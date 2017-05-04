'use strict';

const schemeIndex = {
  // material-box schemes:
  // format: 'color-scheme-name': require('./scheme/color-scheme-name.js'),
  'base16-green-screen': require('./scheme/base16-green-screen.js'),
  'base16-ocean-dark': require('./scheme/base16-ocean-dark.js'),
  'base16-ocean-light': require('./scheme/base16-ocean-light.js'),
  'dracula': require('./scheme/dracula.js'),
  'material': require('./scheme/material.js'),
  'material-darker': require('./scheme/material-darker.js'),
  'material-lighter': require('./scheme/material-lighter.js'),
  'monokai': require('./scheme/monokai.js'),
  'predawn': require('./scheme/predawn.js'),
  'solarized-dark': require('./scheme/solarized-dark.js'),
  'solarized-light': require('./scheme/solarized-light.js'),
  'tomorrow': require('./scheme/tomorrow.js'),
  'tomorrow-night': require('./scheme/tomorrow-night.js'),
  'tomorrow-night-blue': require('./scheme/tomorrow-night-blue.js'),
  'tomorrow-night-bright': require('./scheme/tomorrow-night-bright.js'),
  'tomorrow-night-eighties': require('./scheme/tomorrow-night-eighties.js'),
};

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
        autoHideTitle: false,
        highlightActiveTab: false,
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
  schemeIndex.user = materialBox.user;

  // Get scheme
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
    case 'none':
      break;
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
    ${config.css || ''}
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
      border-radius: 2px;
    }
    .term_fit:not(.term_term) {
      opacity: 0.6;
    }
    .term_fit.term_active {
      opacity: 1;
      transition: opacity 0.12s ease-in-out;
      will-change: opacity;
    }
    ${
      materialBox.closeOnTheLeft === true ?
          '.tab_tab .tab_icon { left: 7px; right: initial; }' :
          ''
    }
    ${
      materialBox.autoHideTitle === true ?
          '.tabs_title { display: none !important; }' :
          ''
    }
    ${
      materialBox.highlightActiveTab === true ? `
      .tab_active {
        background-color: ${
                            colorJS(scheme.backgroundColor).dark() === true ?
                                colorJS(scheme.backgroundColor).lighten(0.3) :
                                colorJS(scheme.backgroundColor).darken(0.1)
                          };

      }` :
                                                ''
    }
    ${tabStyle}
    ${scheme.css || ''}
    `,
    termCSS: `
    ${config.termCSS || ''}
    .cursor-node[focus=true] {
      mix-blend-mode: difference;
    }
    ::-webkit-scrollbar {
      width: 2px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0px;
      background-color: ${scheme.accentColor};
    }
    x-screen x-row { font-variant-ligatures: contextual; }
    ${scheme.termCSS || ''}
    `,
  });
};
