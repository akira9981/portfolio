/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/tweenmax.js":
/*!**********************************!*\
  !*** ./resources/js/tweenmax.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

TweenMax.to('.opb', 1.25, {
  delay: 0.5,
  ease: 'elastic',
  top: '50%',
  onComplete: function onComplete() {
    TweenMax.to('.opb', 0.5, {
      delay: 0.2,
      height: "100%",
      width: "100%",
      onComplete: function onComplete() {
        TweenMax.to('.bbg', {
          top: "100vh",
          display: "none"
        });
        TweenMax.to('.opb', 1, {
          delay: 0.5,
          opacity: 0,
          ease: 'power1',
          onComplete: function onComplete() {
            TweenMax.to('.opb', {
              display: "none"
            });
          }
        });
      }
    });
  }
});
TweenMax.staggerTo('.miniBox', 5, {
  ease: "expo",
  repeat: -1,
  rotationX: -180
}, 0.1);
$('.obj').on({
  'mouseenter': function mouseenter() {
    TweenMax.to('#bgc', 0.25, {
      width: "100%"
    });
    TweenMax.to('.obj', 0.25, {
      border: "1px solid gray",
      color: "gray"
    });
    TweenMax.staggerTo('.objt', 0.25, {
      rotationX: 360
    }, 0.07);
  },
  'mouseleave': function mouseleave() {
    TweenMax.to('#bgc', 0.25, {
      width: "0%"
    });
    TweenMax.to('.obj', 0.25, {
      border: "1px solid white",
      color: "white"
    });
    TweenMax.staggerTo('.objt', 0.25, {
      rotationX: -360
    }, 0.07);
  }
});
TweenMax.staggerTo('.box', 1.5, {
  delay: 3,
  rotationX: -360
}, 0.1);
$('.box').on({
  'mouseenter': function mouseenter() {
    TweenMax.set(this, {
      className: "+=active"
    });
    TweenMax.to('.active', 0.25, {
      width: 350,
      height: 350,
      y: -10,
      z: 60,
      zIndex: 1
    });
    TweenMax.to('.box', 0.25, {
      opacity: 0.3
    });
    TweenMax.to('.active #text', 0.1, {
      opacity: 1
    });
  },
  'mouseleave': function mouseleave() {
    TweenMax.set('.active', {
      className: "+=box"
    });
    TweenMax.to('.box', 0.25, {
      width: 100,
      height: 300,
      y: 10,
      z: 0,
      zIndex: 0,
      opacity: 1
    });
    TweenMax.to('#text', 0.1, {
      opacity: 0
    });
  }
});
$('.box').on({
  'click': function click() {
    var pageId = $(this).attr('id');
    var page = '#' + pageId;
    console.log(page);
    TweenMax.to('.bbg', 1, {
      display: "block",
      ease: "bounce",
      top: "0vh"
    });
    TweenMax.to('.index', {
      display: "none"
    });
    TweenMax.to(page, {
      delay: 1,
      display: "block",
      onComplete: function onComplete() {
        TweenMax.to('.bbg', 1, {
          opacity: 0,
          display: "none"
        });
      }
    });
  }
});

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./resources/js/tweenmax.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akirayamashita/myapp/portfolio/resources/js/tweenmax.js */"./resources/js/tweenmax.js");


/***/ })

/******/ });