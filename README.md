# hyper-material-box [![npm](https://img.shields.io/npm/v/hyper-material-box.svg?style=flat-square)](https://www.npmjs.com/package/hyper-material-box) [![npm](https://img.shields.io/npm/dm/hyper-material-box.svg?style=flat-square)](https://www.npmjs.com/package/hyper-material-box)

The most hackable theme for your favorite terminal **Hyper**

[![top](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/top.gif)](assets/scheme)

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

You can add the following scripts to your `.hyper.js`, if you like what you see.

#### :wrench: Color scheme

> The default color scheme is `solarized-dark`.

Currently, we provide our user over **28** beautiful color schemes (click the name to see the screenshot):

* [80rave](assets/scheme/80rave.png)
* [base16-green-screen](assets/scheme/base16-green-screen.png)
* [base16-ocean-dark](assets/scheme/base16-ocean-dark.png)
* [base16-ocean-light](assets/scheme/base16-ocean-light.png)
* [dracula](assets/scheme/dracula.png)
* [gruvbox-dark-hard](assets/scheme/gruvbox-dark-hard.png)
* [gruvbox-dark-medium](assets/scheme/gruvbox-dark-medium.png)
* [gruvbox-dark-soft](assets/scheme/gruvbox-dark-soft.png)
* [gruvbox-light-hard](assets/scheme/gruvbox-light-hard.png)
* [gruvbox-light-medium](assets/scheme/gruvbox-light-medium.png)
* [gruvbox-light-soft](assets/scheme/gruvbox-light-soft.png)
* [material-darker](assets/scheme/material-darker.png)
* [material-lighter](assets/scheme/material-lighter.png)
* [material-palenight](assets/scheme/material-palenight.png)
* [material](assets/scheme/material.png)
* [monokai](assets/scheme/monokai.png)
* [nord](assets/scheme/nord.png)
* [one-dark](assets/scheme/one-dark.png)
* [one-light](assets/scheme/one-light.png)
* [predawn](assets/scheme/predawn.png)
* [seti](assets/scheme/seti.png)
* [solarized-dark](assets/scheme/solarized-dark.png)
* [solarized-light](assets/scheme/solarized-light.png)
* [tomorrow-night-blue](assets/scheme/tomorrow-night-blue.png)
* [tomorrow-night-bright](assets/scheme/tomorrow-night-bright.png)
* [tomorrow-night-eighties](assets/scheme/tomorrow-night-eighties.png)
* [tomorrow-night](assets/scheme/tomorrow-night.png)
* [tomorrow](assets/scheme/tomorrow.png)

For example, if you like the `material` color scheme, you can add the following script:

```javascript
module.exports = {
  config: {
    materialBox: {
      scheme: 'material',
    }
  }
}
```

![material](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/scheme/material.png)

##### :wrench: User

> You can override the default color scheme with the `user` section.

If your favorite color scheme isn't in the list, you can create a new scheme by yourself,  
for example you can add the following script instead adding `scheme: 'material'`:

``` javascript
module.exports = {
  config: {
    materialBox: {
      user: {
        colors: {
          black: '#263238',
          red: '#FF5370',
          green: '#C3E88D',
          yellow: '#FFCB6B',
          blue: '#82AAFF',
          magenta: '#F07178',
          cyan: '#89DDFF',
          white: '#EEFFFF',
          lightBlack: '#546E7A',
          lightRed: '#FF5370',
          lightGreen: '#C3E88D',
          lightYellow: '#FFCB6B',
          lightBlue: '#82AAFF',
          lightMagenta: '#F07178',
          lightCyan: '#89DDFF',
          lightWhite: '#EEFFFF',
        },

        // Default
        backgroundColor: '#263238',
        foregroundColor: '#CCCCCC',
        cursorColor: '#EEFFFF',
        borderColor: 'transparent',

        // Accent color
        accentColor: '#80CBC4',

        // Other (optional, it will be override by foregroundColor)
        inactiveTabTitleColor: 'rgba(255, 255, 255, 0.2)',
        activeTabTitleColor: '#EEFFFF',

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

![preline_tab_style](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/preline_tab_style.png)

``` javascript
module.exports = {
  config: {
    materialBox: {
      activeTabStyle: 'overline',
    }
  }
}
```

![overline_tab_style](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/overline_tab_style.png)

``` javascript
module.exports = {
  config: {
    materialBox: {
      activeTabStyle: 'filled',
    }
  }
}
```

![filled_tab_style](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/filled_tab_style.png)

``` javascript
module.exports = {
  config: {
    materialBox: {
      activeTabStyle: 'none',
    }
  }
}
```

![none_tab_style](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/none_tab_style.png)

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

![highlight_active_tab](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/highlight_active_tab.png)

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

![accent_color_red](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/accent_color_red.png)

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

![light_effect](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/light_effect.png)

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

![background_opacity](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/background_opacity.png)

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

![background_vibrancy](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/background_vibrancy.png)

### :wrench: Auto hide title

> auto hide title is disable by default

You can set the `autoHideTitle` to `true`, it will hide the title when the window only has one tab:

``` javascript
module.exports = {
  config: {
    materialBox: {
      autoHideTitle: true,
    }
  }
}
```

![auto_hide_title](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/auto_hide_title.png)

### :wrench: Hide traffic-lights

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

![hide_traffic_lights](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/assets/hide_traffic_lights.png)

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

## :heart: Contributing to hyper-material-box

You can contribute your own color scheme to this project, see the [CONTRIBUTING.md](.github/CONTRIBUTING.md) for more details.

## :zap: Credit

:zap: The `80rave` color scheme contributed by [**@PetrBarborka**](https://github.com/PetrBarborka)  
:zap: The `auto hide title` inspired by [sindresorhus/hyper-hide-title](https://github.com/sindresorhus/hyper-hide-title)  
:zap: The `base16` color scheme family inspired by [Base16](https://chriskempson.github.io/base16/)  
:zap: The `dracula` color scheme inspired by [Dracula — A dark theme for Atom, Alfred, Brackets, Emacs, iTerm ...](https://draculatheme.com/)  
:zap: The `gruvbox` color scheme family inspired by [Briles/gruvbox-atom](https://github.com/Briles/gruvbox-atom)  
:zap: The `hide traffic-lights` inspired by [albinekb/hyperclean](https://github.com/albinekb/hyperclean)  
:zap: The `left close button` inspired by [jhen0409/hyperterm-close-on-left](https://github.com/jhen0409/hyperterm-close-on-left)  
:zap: The `light effect` inspired by [simeydotme/hyperterm-gooey](https://github.com/simeydotme/hyperterm-gooey)  
:zap: The `material` color scheme family inspired by [equinusocio/material-theme](https://github.com/equinusocio/material-theme)  
:zap: The `material` UI inspired by [equinusocio/hyper-material-theme](https://github.com/equinusocio/hyper-material-theme)  
:zap: The `matrix` color scheme inspired by [giuseppeg/hyperterm-green](https://github.com/giuseppeg/hyperterm-green)  
:zap: The `monokai` color scheme inspired by the most popular color scheme for Sublime Text  
:zap: The `nord` color scheme inspired by [arcticicestudio/nord-hyper](https://github.com/arcticicestudio/nord-hyper)  
:zap: The `one-dark` color scheme inspired by [atom/one-dark-syntax](https://github.com/atom/one-dark-syntax/)  
:zap: The `one-light` color scheme inspired by [atom/one-light-syntax](https://github.com/atom/one-light-syntax/)  
:zap: The `overline` active tab style inspired by [pauldariye/hyper-midnight](https://github.com/pauldariye/hyper-midnight).  
:zap: The `predawn` color scheme inspired by [jamiewilson/predawn-hyperterm](https://github.com/jamiewilson/predawn-hyperterm)  
:zap: The `preline` active tab style inspired by [Kikobeats/hyper-flat](https://github.com/kikobeats/hyper-flat).  
:zap: The `seti` color scheme inspired by [jesseweed/seti-syntax](https://github.com/jesseweed/seti-syntax)  
:zap: The `solarized` color scheme faimly inspired by [Solarized - Ethan Schoonover](http://ethanschoonover.com/solarized)  
:zap: The `tomorrow` color scheme family inspired by [chriskempson/tomorrow-theme](https://github.com/chriskempson/tomorrow-theme)  

:heart: **Thank you guys, you guys are all amazing !!!** :heart:

## :page_facing_up: License

This project is licensed under the MIT License, please see the :page_facing_up:[LICENSE.md](LICENSE.md) for more details :+1:
