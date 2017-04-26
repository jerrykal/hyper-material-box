# hyper-material-box

The most hackable theme for your favorite terminal :zap:**Hyper**:zap:

![solarized_dark](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/solarized_dark.png)

## Let's jump right in

All you need is two simple steps !!

### Installation

Just add this script into your `.hyper.js`:

``` javascript
plugins: [ 'hyper-material-box' ],
```

Restart your `Hyper.app`.  
Done :tada:

### Config

You can add following config to your `module.exports = { config: { materialBox: { ... } } }` section.

#### Color cheme

> The default color scheme is `solarized-dark`.

Currently, we provide our user over **12** beautiful color scheme:

* `solarized-dark` and `solarized-light`
* `tomorrow`, `tomorrow-night`, `tomorrow-night-eighties`, `tomorrow-night-bright` and `tomorrow-night-blue`
* `material`, `material-darker`, `material-lighter`
* `monokai`
* `dracula`

For example, if you like the `tomorrow-night` color scheme, you can add the following script:

```javascript
scheme: 'tomorrow-night',
```

![tomorrow_night](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/tomorrow_night.png)

##### User

If your favorite color scheme isn't in the list, you can create a new scheme by yourself,  
for example you can add the following script instead adding `scheme: 'tomorrow-night'`:

``` javascript
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

 // Other
 inactiveTabTitleColor : 'rgba(255, 255, 255, 0.2)',
 activeTabTitleColor : '#C5C8C6',
};
```

#### Active tab style

> The default active tab style is `underline`.

You can change the Active tab style by set the `activeTabStyle` to `preline`, `overline` or `filled`:

``` javascript
activeTabStyle: 'preline',
```

![preline_tab_style](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/preline_tab_style.png)

#### Accent color

You can change the accent color by set the `user: { accentColor }` to another color:

``` javascript
// for example if you like read accent color:
user: {
  accentColor: 'red',
}
```

![accent_color_red](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/accent_color_red.png)

##### Light effect

> The `overline` active tab styles doesn't support light effect.

You can enable the light effect by set the `lightEffect` to `true`:

``` javascript
lightEffect: true,
```

![light_effect](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/light_effect.png)

#### Background opacity

> The default background opacity is `1.0`.

You can enable the background opacity by set the `backgroundOpacity` to `0.1` ~ `0.9`:

``` javascript
backgroundOpacity: 0.5,
```

![background_opacity](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/background_opacity.png)

##### Background Vibrancy

> Background vibrancy only available when background opacity is enabled

You can enable the background vibrancy by set the `backgroundVibrancy` to `true`:

``` javascript
backgroundVibrancy: true,
```

![background_vibrancy](https://raw.githubusercontent.com/ooJerryLeeoo/hyper-material-box/master/screenshot/background_vibrancy.png)

### Other

#### Close on the left

If you like left close button more than right close button, you can set the `closeOnTheLeft` to `true`:

```javascript
closeOnTheLeft: true,
```

## Contributing to hyper-material-box

You can contribute your own color scheme to this project, see the [CONTRIBUTING.md](.github/CONTRIBUTING.md) for more details.

## Credit

:zap: The `material` UI inspired by [equinusocio/hyper-material-theme](https://github.com/equinusocio/hyper-material-theme)  
:zap: The `material` color scheme inspired by [equinusocio/material-theme](https://github.com/equinusocio/material-theme)  
:zap: The `solarized` color scheme inspired by [Solarized - Ethan Schoonover](http://ethanschoonover.com/solarized)  
:zap: The `Tomorrow` color scheme inspired by [chriskempson/tomorrow-theme](https://github.com/chriskempson/tomorrow-theme)  
:zap: The `dracula` color scheme inspired by [Dracula — A dark theme for Atom, Alfred, Brackets, Emacs, iTerm ...](https://draculatheme.com/)  
:zap: The `monokai` color scheme inspired by the most popular color scheme for Sublime Text  
:zap: The `preline` active tab style inspired by [Kikobeats/hyper-flat](https://github.com/kikobeats/hyper-flat).  
:zap: The `overline` active tab style inspired by [pauldariye/hyper-midnight](https://github.com/pauldariye/hyper-midnight).  
:zap: The `light effect` inspired by [simeydotme/hyperterm-gooey](https://github.com/simeydotme/hyperterm-gooey)  
:zap: The `left close button` inspired by [jhen0409/hyperterm-close-on-left](https://github.com/jhen0409/hyperterm-close-on-left)  

:heart: **Thank you guys, you guys are all amazing !!!** :heart:

## License

This project is licensed under the MIT License, please see the :page_facing_up:[LICENSE.md](LICENSE.md) for more details :+1:
