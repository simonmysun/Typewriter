(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Typewriter", [], factory);
	else if(typeof exports === 'object')
		exports["Typewriter"] = factory();
	else
		root["Typewriter"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Typewriter = function Typewriter(srcElement, cfg) {
  var self = this;
  var timeIntervalHandler = null;
  var defaultConfig = {
    interval: 30,
    skip: ':not(*)',
    hook: function hook(x, queue) {
      return true;
    }
  };

  self.config = Object.assign(defaultConfig, cfg);
  self.processQueue = [];

  var newElement = document.createElement('div');

  newElement.innerHTML = ' ';

  var travelNode = srcElement.firstChild;
  var targetNode = newElement.firstChild;

  while (true) {
    if (travelNode.nodeType === 1 && travelNode.matches(self.config.skip)) {
      self.processQueue.push({
        type: 'Node',
        data: travelNode.cloneNode(true)
      });
    } else {
      self.processQueue.push({
        type: 'Node',
        data: travelNode.cloneNode(false)
      });
    }

    if (travelNode.childNodes.length > 0 && !travelNode.matches(self.config.skip)) {
      self.processQueue.push({
        type: 'Operation',
        data: 'in'
      });
      travelNode = travelNode.firstChild;
      continue;
    }
    if (travelNode.nextSibling !== null) {
      travelNode = travelNode.nextSibling;
      continue;
    }

    self.processQueue.push({
      type: 'Operation',
      data: 'out'
    });
    travelNode = travelNode.parentNode;
    while (travelNode.nextSibling === null) {
      self.processQueue.push({
        type: 'Operation',
        data: 'out'
      });
      travelNode = travelNode.parentNode;
    }

    if (travelNode.isEqualNode(srcElement)) {
      break;
    }
    travelNode = travelNode.nextSibling;
  }

  srcElement.parentNode.insertBefore(newElement, srcElement.nextSibling);
  srcElement.parentNode.removeChild(srcElement);

  var animateText = function animateText(srcNode) {
    var len = srcNode.nodeValue.length;
    var newNode = srcNode.cloneNode(false);

    newNode.nodeValue = '';
    for (var i = 0; i < len; i += 1) {
      self.processQueue.unshift({
        type: 'Update',
        data: srcNode
      });
    }
    return newNode;
  };

  var process = function process() {
    if (self.processQueue.length === 0) {
      self.pause();
    }
    var op = self.processQueue.shift();

    if (!self.config.hook(op, self.processQueue)) {
      return;
    }
    if (op.type === 'Operation') {
      if (op.data === 'in') {
        var nxtOp = self.processQueue.shift();

        targetNode.appendChild(nxtOp.data.nodeType === 3 ? animateText(nxtOp.data) : nxtOp.data);
        targetNode = targetNode.firstChild;
      } else {
        targetNode = targetNode.parentNode;
      }
    } else if (op.type === 'Node') {
      if (op.data.nodeType === 3) {
        targetNode.parentNode.appendChild(animateText(op.data));
      } else {
        targetNode.parentNode.appendChild(op.data);
      }
      targetNode = targetNode.nextSibling;
    } else if (op.type === 'Update') {
      if (op.data.nodeValue.length > targetNode.nodeValue.length) {
        targetNode.nodeValue += op.data.nodeValue[targetNode.nodeValue.length];
      }
    } else if (op.type === 'Wait') {}
  };

  self.start = function () {
    timeIntervalHandler = setInterval(process, self.config.interval);
  };
  self.pause = function () {
    clearInterval(timeIntervalHandler);
  };
  self.resume = self.start;
};

exports.default = Typewriter;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=twjs.js.map