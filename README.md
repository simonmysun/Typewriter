# Typewriter
A better typewritter effect. Texts and elements appear one by one.

[Demo](http://simonmysun.github.io/Typewriter/test/)

## Install
* In-browser installization
```html
<script src="/path/to/twjs.min.js"></script>
```
* Install with yarn or npm
```
npm install twjs
```
or
```
yarn add twjs
```
Then,
```js
import Typewriter from 'twjs';
```
or
```js
var Typewriter = require('twjs');
```

## Usage
* Initiation
```js
const config = {
  interval: 30,                       // * Time interval for the animation, 30
                                      // milliseconds by default
  skip: '.MathJax',                   // * Specify a selector to skip. We let
                                      // the formulas shows entirely here
  hook: function(operation, queue) {  // * For advanced usage of the library;
    return true;                      // return false to skip default process of
  }                                   // current operation
};
const targetElement = document.getElementById('element-to-animate');
let tw = new Typewriter(targetElement, config);
```

`config` is optional.

* Start the animation
```js
tw.start();
```

* Pause the animation
```js
tw.pause();
```

* Resume the animation
```js
tw.resume(); // Currently it is just an alias of `tw.start`
```

* Reset the animation
```js
tw = tw.reset();
```

An example usage can be found [here](test/).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Feel free to pull requests. The bug fixes are left as exercises for the users.

## Acknowledgments
As a request from @haoyun.
