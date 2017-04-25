'use strict';

const colorJS = require('color');

exports.decorateConfig = config => {
  const materialBox = Object.assign(
      {
        scheme: 'solarized dark',
        backgroundOpacity: 1,
        backgroundVibrancy: false,
        closeOnTheLeft: false,
      },
      config.materialBox);

  materialBox.user = Object.assign(
      {
        colors: config.colors,
        backgroundColor: config.backgroundColor,
        foregroundColor: config.foregroundColor,
        borderColor: config.borderColor,
        cursorColor: config.cursorColor,
        accentColor: config.colors.blue,
        inactiveTabTitleColor: config.inactiveTabTitleColor ||
            colorJS(config.foregroundColor).alpha(0.3).string(),
        activeTabTitleColor:
            config.activeTabTitleColor || config.foregroundColor,
      },
      (config.materialBox ? config.materialBox.user : {}));

  // Get scheme
  const schemeIndex = {
    'user': materialBox.user,
    'solarized dark': require('./scheme/solarized_dark.js'),
    'solarized light': require('./scheme/solarized_light.js'),
  };
  const scheme =
      schemeIndex[materialBox.scheme] || schemeIndex['solarized dark'];

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
    ${
      materialBox.closeOnTheLeft === true ?
          '.tab_tab .tab_icon { left: 7px; right: initial; }' :
          ''
    }
    ${config.css || ''}
    `,
    termCSS: `
    .cursor-node[focus=true]:not([moving]) {
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
    ${config.termCSS || ''}
    `,
  });
};
