# Typewriter
A better typewritter effect. 

## Install
* In-browser installization
```html
<script src="/path/to/twjs.min.js"></script>
```
* Install with yarn or npm
```
npm install twjs
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
var config = {
  interval: 30,                       // * Time interval for the animation, 30 by
                                      // default
  skipMathJax: true,                  // * Whether to skip Math formulas so that
                                      // the formulas shows entirely
  mathShock: 0,                       // * Wait x ticks after a formula is shown;
                                      // invalid when skipMathJax is false
  hook: function(operation, queue) {  // * For advanced usage of the library;
    return true;                      // return false to skip default process of
  }                                   // current operation
};
var tw = new Typewriter(document.getElementById('element-to-animate'), config);
```

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
tw.resume();
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Feel free to pull requests. The bug fixes are left as exercises for the users. 

## Acknowledgments
As a request from @haoyun. 