# hyper-material-box [![npm](https://img.shields.io/npm/v/hyper-material-box.svg?style=flat-square)](https://www.npmjs.com/package/hyper-material-box) [![npm](https://img.shields.io/npm/dm/hyper-material-box.svg?style=flat-square)](https://www.npmjs.com/package/hyper-material-box)

The most hackable theme for your favorite terminal **Hyper**

![solarized_dark](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/solarized_dark.png)

## :checkered_flag: Let's jump right in

All you need is two simple steps !!

### :inbox_tray: Installation

Just add the following script to your `.hyper.js`:

``` javascript
module.exports = {
  plugins: [ 'hyper-material-box' ],
}
```

Restart your `Hyper.app`.  
Done :tada:

### :wrench: Config

You can add the following scripts to your `.hyper.js`, if you like what you :eyes:.

#### :wrench: Color scheme

> The default color scheme is `solarized-dark`.

Currently, we provide our user over **18** beautiful color scheme:

* `base16-green-screen`
* `base16-ocean-dark`
* `base16-ocean-light`
* `dracula`
* `material-darker`
* `material-lighter`
* `material`
* `monokai`
* `nord`
* `one-dark`
* `one-light`
* `predawn`
* `solarized-dark`
* `solarized-light`
* `tomorrow-night-blue`
* `tomorrow-night-bright`
* `tomorrow-night-eighties`
* `tomorrow-night`
* `tomorrow`

For example, if you like the `tomorrow-night` color scheme, you can add the following script:

```javascript
module.exports = {
  config: {
    materialBox: {
      scheme: 'tomorrow-night',
    }
  }
}
```

![tomorrow_night](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/tomorrow_night.png)

##### :wrench: User

> You can override the default color scheme with the `user` section.

If your favorite color scheme isn't in the list, you can create a new scheme by yourself,  
for example you can add the following script instead adding `scheme: 'tomorrow-night'`:

``` javascript
module.exports = {
  config: {
    materialBox: {
      user: {
        colors : {
          black : '#1D1F21',
          red : '#CC6666',
          green : '#B5BD68',
          yellow : '#F0C674',
          blue : '#81A2BE',
          magenta : '#B294BB',
          cyan : '#8ABEB7',
          white : '#C5C8C6',
          lightBlack : '#969896',
          lightRed : '#CC6666',
          lightGreen : '#B5BD68',
          lightYellow : '#F0C674',
          lightBlue : '#81A2BE',
          lightMagenta : '#B294BB',
          lightCyan : '#8ABEB7',
          lightWhite : '#C5C8C6',
        },

        // Default
        backgroundColor : '#1D1F21',
        foregroundColor : '#C5C8C6',
        cursorColor : '#C5C8C6',
        borderColor : 'transparent',

        // Accent color
        accentColor : '#F2777A',

        // Other (optional, it will be override by foregroundColor)
        inactiveTabTitleColor : 'rgba(255, 255, 255, 0.2)',
        activeTabTitleColor : '#C5C8C6',

        // css (optional)
        css: '',
        termCSS: '',
      }
    }
  }
}
```

#### :wrench: Active tab style

> The default active tab style is `underline`.

You can change the Active tab style by set the `activeTabStyle` to `preline`, `overline`, `filled` or `none`:

``` javascript
module.exports = {
  config: {
    materialBox: {
      activeTabStyle: 'preline',
    }
  }
}
```

![preline_tab_style](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/preline_tab_style.png)

``` javascript
module.exports = {
  config: {
    materialBox: {
      activeTabStyle: 'overline',
    }
  }
}
```

![overline_tab_style](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/overline_tab_style.png)

``` javascript
module.exports = {
  config: {
    materialBox: {
      activeTabStyle: 'filled',
    }
  }
}
```

![filled_tab_style](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/filled_tab_style.png)

``` javascript
module.exports = {
  config: {
    materialBox: {
      activeTabStyle: 'none',
    }
  }
}
```

![none_tab_style](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/none_tab_style.png)

##### :wrench: Highlight active tab

> highlight active tab is disable by default

You can enable the highlight active tab by set `highlightActiveTab` to `true`:

``` javascript
module.exports = {
  config: {
    materialBox: {
      highlightActiveTab: true,
    }
  }
}
```

![highlight_active_tab](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/highlight_active_tab.png)

##### :wrench: Accent color

You can change the accent color by set the `user: { accentColor }` to another color:

``` javascript
module.exports = {
  config: {
    materialBox: {
      user: {
        accentColor: 'red',
      }
    }
  }
}
```

![accent_color_red](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/accent_color_red.png)

##### :wrench: Light effect

> The `overline` active tab styles doesn't support light effect.

You can enable the light effect by set the `lightEffect` to `true`:

``` javascript
module.exports = {
  config: {
    materialBox: {
      lightEffect: true,
    }
  }
}
```

![light_effect](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/light_effect.png)

#### :wrench: Background opacity

> The default background opacity is `1.0`.

You can change the background opacity by set the `backgroundOpacity` to `0.1` ~ `0.9`:

``` javascript
module.exports = {
  config: {
    materialBox: {
      backgroundOpacity: 0.5,
    }
  }
}
```

![background_opacity](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/background_opacity.png)

##### :wrench: Background Vibrancy

> Background vibrancy only available when background opacity value is between 0.1 ~ 0.9

You can enable the background vibrancy by set the `backgroundVibrancy` to `true`:

``` javascript
module.exports = {
  config: {
    materialBox: {
      backgroundVibrancy: true,
    }
  }
}
```

![background_vibrancy](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/background_vibrancy.png)

### :wrench: Other

#### :wrench: Left close button

> left close button is disable by default

If you like the left close button, you can set the `closeOnTheLeft` to `true`:

```javascript
module.exports = {
  config: {
    materialBox: {
      closeOnTheLeft: true,
    }
  }
}
```

#### :wrench: Auto hide title

> auto hide title is disable by default

Hide title when the window only has one tab:

``` javascript
module.exports = {
  config: {
    materialBox: {
      autoHideTitle: true,
    }
  }
}
```

#### :wrench: Hide traffic-lights

> hide traffic light is disable by default

If you want to hide the traffic-lights, you can set the `hideTrafficLights` to `true`:

``` javascript
module.exports = {
  config: {
    materialBox: {
      hideTrafficLights: true,
    }
  }
}
```

## :heart: Contributing to hyper-material-box

You can contribute your own color scheme to this project, see the [CONTRIBUTING.md](.github/CONTRIBUTING.md) for more details.

## :zap: Credit

:zap: The `material` UI inspired by [equinusocio/hyper-material-theme](https://github.com/equinusocio/hyper-material-theme)  
:zap: The `base16` color scheme family inspired by [Base16](https://chriskempson.github.io/base16/)  
:zap: The `dracula` color scheme inspired by [Dracula — A dark theme for Atom, Alfred, Brackets, Emacs, iTerm ...](https://draculatheme.com/)  
:zap: The `material` color scheme inspired by [equinusocio/material-theme](https://github.com/equinusocio/material-theme)  
:zap: The `matrix` color scheme inspired by [giuseppeg/hyperterm-green](https://github.com/giuseppeg/hyperterm-green)  
:zap: The `monokai` color scheme inspired by the most popular color scheme for Sublime Text  
:zap: The `nord` color scheme inspired by [arcticicestudio/nord-hyper](https://github.com/arcticicestudio/nord-hyper)  
:zap: The `one-dark` color scheme inspired by [atom/one-dark-syntax](https://github.com/atom/one-dark-syntax/)  
:zap: The `one-light` color scheme inspired by [atom/one-light-syntax](https://github.com/atom/one-light-syntax/)  
:zap: The `predawn` color scheme inspired by [jamiewilson/predawn-hyperterm](https://github.com/jamiewilson/predawn-hyperterm)  
:zap: The `solarized` color scheme inspired by [Solarized - Ethan Schoonover](http://ethanschoonover.com/solarized)  
:zap: The `Tomorrow` color scheme inspired by [chriskempson/tomorrow-theme](https://github.com/chriskempson/tomorrow-theme)  
:zap: The `preline` active tab style inspired by [Kikobeats/hyper-flat](https://github.com/kikobeats/hyper-flat).  
:zap: The `overline` active tab style inspired by [pauldariye/hyper-midnight](https://github.com/pauldariye/hyper-midnight).  
:zap: The `light effect` inspired by [simeydotme/hyperterm-gooey](https://github.com/simeydotme/hyperterm-gooey)  
:zap: The `left close button` inspired by [jhen0409/hyperterm-close-on-left](https://github.com/jhen0409/hyperterm-close-on-left)  
:zap: The `auto hide title` inspired by [sindresorhus/hyper-hide-title](https://github.com/sindresorhus/hyper-hide-title)  
:zap: The `hide traffic-lights` inspired by [albinekb/hyperclean](https://github.com/albinekb/hyperclean)  

:heart: **Thank you guys, you guys are all amazing !!!** :heart:

## :page_facing_up: License

This project is licensed under the MIT License, please see the :page_facing_up:[LICENSE.md](LICENSE.md) for more details :+1:
