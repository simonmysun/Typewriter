# Typewriter
A better typewritter effect. Texts and elements appear one by one.

[Demo](http://simonmysun.github.io/Typewriter/test/)

Drag <a href="javascript:(function(e,s){e.src=s;e.onload=()=>{new Typewriter(document.body).start();};document.head.appendChild(e);})(document.createElement('script'),'data:application/javascript;base64,IWZ1bmN0aW9uKGUsdCl7Im9iamVjdCI9PXR5cGVvZiBleHBvcnRzJiYib2JqZWN0Ij09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6ImZ1bmN0aW9uIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoIlR5cGV3cml0ZXIiLFtdLHQpOiJvYmplY3QiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlR5cGV3cml0ZXI9dCgpOmUuVHlwZXdyaXRlcj10KCl9KCJ1bmRlZmluZWQiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIHI9bltvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsdCksci5sPSEwLHIuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5kPWZ1bmN0aW9uKGUsbixvKXt0Lm8oZSxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om99KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBuPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQobiwiYSIsbiksbn0sdC5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSx0LnA9IiIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLHQsbil7InVzZSBzdHJpY3QiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbiBlKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxvPXRoaXMscj1udWxsLGE9e2ludGVydmFsOjMwLHNraXA6Ijpub3QoKikiLGhvb2s6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH19O28uY29uZmlnPU9iamVjdC5hc3NpZ24oYSxuKSxvLnByb2Nlc3NRdWV1ZT1bXTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQubm9kZU5hbWUpO2kuaW5uZXJIVE1MPSIgIjtmb3IodmFyIHU9dC5maXJzdENoaWxkLHM9aS5maXJzdENoaWxkOzspe2lmKDE9PT11Lm5vZGVUeXBlJiZ1Lm1hdGNoZXMoby5jb25maWcuc2tpcCk/by5wcm9jZXNzUXVldWUucHVzaCh7dHlwZToiTm9kZSIsZGF0YTp1LmNsb25lTm9kZSghMCl9KTpvLnByb2Nlc3NRdWV1ZS5wdXNoKHt0eXBlOiJOb2RlIixkYXRhOnUuY2xvbmVOb2RlKCExKX0pLCJTQ1JJUFQiPT09dS5ub2RlTmFtZSlvLnByb2Nlc3NRdWV1ZS5wb3AoKTtlbHNlIGlmKHUuY2hpbGROb2Rlcy5sZW5ndGg+MCYmIXUubWF0Y2hlcyhvLmNvbmZpZy5za2lwKSl7by5wcm9jZXNzUXVldWUucHVzaCh7dHlwZToiT3BlcmF0aW9uIixkYXRhOiJpbiJ9KSx1PXUuZmlyc3RDaGlsZDtjb250aW51ZX1pZihudWxsPT09dS5uZXh0U2libGluZyl7Zm9yKDtudWxsPT09dS5uZXh0U2libGluZyYmIXUuaXNFcXVhbE5vZGUodCk7KW8ucHJvY2Vzc1F1ZXVlLnB1c2goe3R5cGU6Ik9wZXJhdGlvbiIsZGF0YToib3V0In0pLHU9dS5wYXJlbnROb2RlO2lmKHUuaXNFcXVhbE5vZGUodCkpYnJlYWs7dT11Lm5leHRTaWJsaW5nfWVsc2UgdT11Lm5leHRTaWJsaW5nfXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaSx0KSx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCk7dmFyIHA9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlVmFsdWUubGVuZ3RoLG49ZS5jbG9uZU5vZGUoITEpO24ubm9kZVZhbHVlPSIiO2Zvcih2YXIgcj0wO3I8dDtyKz0xKW8ucHJvY2Vzc1F1ZXVlLnVuc2hpZnQoe3R5cGU6IlVwZGF0ZSIsZGF0YTplfSk7cmV0dXJuIG59LGQ9ZnVuY3Rpb24oKXtpZigwPT09by5wcm9jZXNzUXVldWUubGVuZ3RoKXJldHVybiB2b2lkIG8ucGF1c2UoKTt2YXIgZT1vLnByb2Nlc3NRdWV1ZS5zaGlmdCgpO2lmKG8uY29uZmlnLmhvb2soZSxvLnByb2Nlc3NRdWV1ZSkpaWYoIk9wZXJhdGlvbiI9PT1lLnR5cGUpaWYoImluIj09PWUuZGF0YSl7dmFyIHQ9by5wcm9jZXNzUXVldWUuc2hpZnQoKTtzLmFwcGVuZENoaWxkKDM9PT10LmRhdGEubm9kZVR5cGU/cCh0LmRhdGEpOnQuZGF0YSkscz1zLmZpcnN0Q2hpbGR9ZWxzZSBzPXMucGFyZW50Tm9kZTtlbHNlIk5vZGUiPT09ZS50eXBlPygzPT09ZS5kYXRhLm5vZGVUeXBlP3MucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChwKGUuZGF0YSkpOnMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlLmRhdGEpLHM9cy5uZXh0U2libGluZyk6IlVwZGF0ZSI9PT1lLnR5cGU/ZS5kYXRhLm5vZGVWYWx1ZS5sZW5ndGg+cy5ub2RlVmFsdWUubGVuZ3RoJiYocy5ub2RlVmFsdWUrPWUuZGF0YS5ub2RlVmFsdWVbcy5ub2RlVmFsdWUubGVuZ3RoXSk6ZS50eXBlfTtvLnN0YXJ0PWZ1bmN0aW9uKCl7bnVsbD09PXImJihyPXNldEludGVydmFsKGQsby5jb25maWcuaW50ZXJ2YWwpKX0sby5wYXVzZT1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwocikscj1udWxsfSxvLnJlc3VtZT1vLnN0YXJ0LG8ucmVzZXQ9ZnVuY3Rpb24oKXtmb3Ioby5wYXVzZSgpO28ucHJvY2Vzc1F1ZXVlLmxlbmd0aD4wOylkKCk7cmV0dXJuIG5ldyBlKGksT2JqZWN0LmFzc2lnbih7fSxvLmNvbmZpZykpfX07dC5kZWZhdWx0PW8sZS5leHBvcnRzPXQuZGVmYXVsdH1dKX0pOw==');//">this</a> to your bookmarks, try it on your favourate website\* and wait for the magic.

<small>\*:  Cross-origin policy may apply and leads to failure here. </small>

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
