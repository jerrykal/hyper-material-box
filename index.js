'use strict';

const schemeIndex = {
  // material-box schemes:
  // format: 'color-scheme-name': require('./scheme/color-scheme-name.js'),
  '80rave': require('./scheme/80rave.js'),
  'apex': require('./scheme/apex.js'),
  'base16-green-screen': require('./scheme/base16-green-screen.js'),
  'base16-ocean-dark': require('./scheme/base16-ocean-dark.js'),
  'base16-ocean-light': require('./scheme/base16-ocean-light.js'),
  'dracula': require('./scheme/dracula.js'),
  'gruvbox-dark-hard': require('./scheme/gruvbox-dark-hard.js'),
  'gruvbox-dark-medium': require('./scheme/gruvbox-dark-medium.js'),
  'gruvbox-dark-soft': require('./scheme/gruvbox-dark-soft.js'),
  'gruvbox-light-hard': require('./scheme/gruvbox-light-hard.js'),
  'gruvbox-light-medium': require('./scheme/gruvbox-light-medium.js'),
  'gruvbox-light-soft': require('./scheme/gruvbox-light-soft.js'),
  'material': require('./scheme/material.js'),
  'material-darker': require('./scheme/material-darker.js'),
  'material-lighter': require('./scheme/material-lighter.js'),
  'material-palenight': require('./scheme/material-palenight.js'),
  'monokai': require('./scheme/monokai.js'),
  'nord': require('./scheme/nord.js'),
  'one-dark': require('./scheme/one-dark.js'),
  'one-light': require('./scheme/one-light.js'),
  'predawn': require('./scheme/predawn.js'),
  'seti': require('./scheme/seti.js'),
  'snazzy': require('./scheme/snazzy.js'),
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
        selectedTabFlavor: 'underline',
        displayBorder: false,
        hideTrafficLights: false,
        lightEffect: false,
        autoHideTitle: false,
        highlightSelectedTab: false,
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
        tabTitleColor: config.tabTitleColor ||
            colorJS(config.foregroundColor).alpha(0.3).string(),
        selectedTabTitleColor:
            config.selectedTabTitleColor || config.foregroundColor,
      },
      (config.materialBox ? config.materialBox.user : {}));
  schemeIndex.user = materialBox.user;

  // Get Color Scheme
  const scheme = Object.assign(
      schemeIndex[materialBox.scheme.toLowerCase()] ||
          schemeIndex['solarized-dark'],
      (config.materialBox ? config.materialBox.user : {}));

  // Background Opacity
  scheme.backgroundColor = colorJS(scheme.backgroundColor)
                               .alpha(materialBox.backgroundOpacity)
                               .string();
  // Background Vibrancy
  if (materialBox.backgroundVibrancy === true) {
    if (colorJS(scheme.backgroundColor).light() === true) {
      exports.onWindow = browserWindow => browserWindow.setVibrancy('light');
    } else {
      exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');
    }
  }

  // Hide Traffic-Lights
  if (materialBox.hideTrafficLights === true) {
    exports.decorateBrowserOptions = config => {
      return Object.assign({}, config, {
        titleBarStyle: '',
        frame: false,
      });
    };
  }

  // Selected Tab Flavor
  const lightEffect =
      (materialBox.lightEffect ? `box-shadow: 0 0 10px ${scheme.accentColor};` :
                                 '');
  let tabFlavor = '';
  switch (materialBox.selectedTabFlavor.toLowerCase()) {
    case 'none': {
      break;
    }
    case 'preline': {
      tabFlavor = `
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
    }
    case 'overline': {
      tabFlavor = `
        .tab_tab.tab_active {
          border-top: 2px solid ${scheme.accentColor} !important;
        }`;
      break;
    }
    case 'filled': {
      tabFlavor = `
        .tab_tab.tab_active,
        .tabs_title {
          background: ${scheme.accentColor};
          ${lightEffect}
        }`;
      break;
    }
    default: {
      tabFlavor = `
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
        color: ${scheme.tabTitleColor};
      }
      .tab_tab.tab_active {
        color: ${scheme.selectedTabTitleColor};
      }
      .tabs_title {
        color: ${scheme.selectedTabTitleColor};
      }
      .hyper_main {
        border: none;
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
        opacity: 1.0;
      }
      .term_fit.term_active {
        opacity: 1;
        transition: opacity 0.12s ease-in-out;
        will-change: opacity;
      }
      ${
        // Left Close Button
        materialBox.closeOnTheLeft === true ?
            '.tab_tab .tab_icon { left: 7px; right: initial; }' :
            ''
      }
      ${
        // Auto Hide Title
        materialBox.autoHideTitle === true ?
            '.tabs_title { display: none !important; }' :
            ''
      }
      ${
        // Highlight Selected Tab
        materialBox.highlightSelectedTab === true ? `
          .tab_active {
            background-color: ${
                                colorJS(scheme.backgroundColor).dark() ===
                                        true ?
                                    colorJS(scheme.backgroundColor)
                                        .lighten(0.3) :
                                    colorJS(scheme.backgroundColor).darken(0.1)
                              };

          }` :
                                                    ''
      }
      ${
        // Display Border
        materialBox.displayBorder === false ? `
          .tab_tab {
            border: none;
          }
          .tabs_borderShim {
            display: none;
          }` :
                                              ''
      }
      ${
        // Hide Traffic Lights
        materialBox.hideTrafficLights === true ? `
          .tabs_borderShim { display: none; }
          .tabs_list { margin-left: -1px; }` :
                                                 ''
      }
      ${tabFlavor}
      ${scheme.css || ''}
      `,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node[focus=true] {
        mix-blend-mode: difference;
      }
      x-screen x-row { font-variant-ligatures: contextual; }
      ${scheme.termCSS || ''}
      `,
  });
};
