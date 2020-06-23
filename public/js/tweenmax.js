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

// op effect
var ope = new TimelineMax();
ope.to('.opb', 1, {
  delay: 1,
  ease: 'elastic',
  top: '50%'
}).add('ope1').to('.opb', 0.5, {
  height: "30vh",
  width: "100vw",
  borderRadius: 0,
  backgroundImage: "linear-gradient(25deg, rgba(255, 0, 0, 0.418), rgba(82, 243, 255, 0.623)),url('/images/bluesky.jpg')"
}, 'ope1').add('.ope2').to('.opb p', 1, {
  ease: "power4",
  left: 0
}, 'ope2').add('ope3').to('.opb p', 0.3, {
  opacity: 0
}, 'ope3').add('ope4').to('.opb', 0.5, {
  height: "100vh"
}, 'ope4').add('ope5').to('.bbg', 0.1, {
  display: "none",
  top: "100vh"
}, 'ope5').add('ope6').to('.opb', 0.5, {
  opacity: 0
}, 'ope6').add('ope7').to('.opb', 0.1, {
  display: "none"
}, 'ope7'); // square 

var stl = new TimelineMax({
  repeat: -1
});
stl.to('.square', 8, {
  left: "calc(100% - 60px)"
}).add('scene1').to('.square', 8, {
  top: "calc(100% - 60px)"
}, 'scene1').add('scene2').to('.square', 8, {
  left: "0%"
}, 'scene2').add('scene3').to('.square', 8, {
  top: "0%"
}, 'scene3');
var ctl = new TimelineMax({
  repeat: -1,
  repeatDelay: 3.4
});
ctl.to('.circle', 1.5, {
  height: "800px",
  width: "800px",
  opacity: 0,
  ease: "power4"
});
$('.box').on({
  'click': function click() {
    stl.timeScale(0.8);
    ctl.timeScale(0.2);
    ctl.repeatDelay(0.1);
  }
});
$('.miniBoxes').on({
  'click': function click() {
    stl.timeScale(1);
    ctl.timeScale(1);
    ctl.repeatDelay(3.4);
  }
}); // title

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
}); // index window

TweenMax.staggerTo('.box', 1.5, {
  delay: 4,
  rotationX: -360
}, 0.1);
$('.box').on({
  'mouseenter': function mouseenter() {
    TweenMax.set(this, {
      className: "+=active",
      onComplete: function onComplete() {
        TweenMax.to('.active .text', 0.1, {
          display: "inline-block",
          opacity: 1
        });
      }
    });
    TweenMax.to('.box', 0.25, {
      opacity: 0.3
    });
    TweenMax.to('.active', 0.25, {
      width: 350,
      height: 350,
      y: -10,
      z: 60,
      zIndex: 1
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
    TweenMax.to('.text', 0.1, {
      display: "none",
      opacity: 0
    });
  }
}); // Jump to another page

if (!navigator.userAgent.match(/(iPhone|iPad|Andoroid)/)) {
  $('.box').on({
    'click': function click() {
      var pageId = $(this).attr('id');
      var page = '.' + pageId;
      TweenMax.to('.bbg', 0.2, {
        display: "block",
        top: "0vh"
      });
      TweenMax.to('.index', {
        display: "none"
      });
      TweenMax.to('body', {
        delay: 0.2,
        backgroundImage: "url('/images/ocean.jpg')"
      });
      TweenMax.to(page, {
        delay: 0.2,
        display: "block",
        onComplete: function onComplete() {
          TweenMax.to('.miniBoxes', {
            display: "block"
          });
          TweenMax.to('.bbg', 0.3, {
            opacity: 0,
            display: "none",
            onComplete: function onComplete() {
              TweenMax.to('.bbg', {
                top: "100vh",
                opacity: 1
              });
            }
          });
        }
      });
    }
  });
}

if (navigator.userAgent.match(/(iPhone|iPad|Andoroid)/)) {
  $('.text').on({
    'click': function click() {
      var pageId = $('.active').attr('id');
      var page = '.' + pageId;
      TweenMax.to('.bbg', 0.2, {
        display: "block",
        top: "0vh"
      });
      TweenMax.to('.index', {
        display: "none"
      });
      TweenMax.to('body', {
        delay: 0.2,
        backgroundImage: "url('/images/ocean.jpg')"
      });
      TweenMax.to(page, {
        delay: 0.2,
        display: "block",
        onComplete: function onComplete() {
          TweenMax.to('.miniBoxes', {
            display: "block"
          });
          TweenMax.to('.bbg', 0.3, {
            opacity: 0,
            display: "none",
            onComplete: function onComplete() {
              TweenMax.to('.bbg', {
                top: "100vh",
                opacity: 1
              });
            }
          });
        }
      });
    }
  });
} // back index


TweenMax.staggerTo('.miniBox', 4, {
  ease: "expo",
  repeat: -1,
  rotationX: -180
}, 0.1);
$('.miniBoxes').on({
  'click': function click() {
    TweenMax.to('.bbg', 0.2, {
      display: "block",
      top: "0vh"
    });
    TweenMax.to('#content', {
      display: "none"
    });
    TweenMax.to('.miniBoxes', {
      delay: 0.2,
      display: "none"
    });
    TweenMax.to('body', {
      delay: 0.2,
      backgroundImage: "linear-gradient(25deg, rgba(255, 0, 0, 0.418), rgba(82, 243, 255, 0.623)),url('/images/bluesky.jpg')"
    });
    TweenMax.to('.index', {
      delay: 0.2,
      display: "block",
      onComplete: function onComplete() {
        TweenMax.to('.bbg', 0.3, {
          opacity: 0,
          display: "none",
          onComplete: function onComplete() {
            TweenMax.to('.bbg', {
              top: "100vh",
              opacity: 1
            });
          }
        });
      }
    });
  }
}); // about page

$('.myPhoto').on({
  'mouseenter': function mouseenter() {
    TweenMax.to('.myPhoto', 0.5, {
      borderRadius: 0,
      backgroundImage: "url('/images/live.jpg')",
      backgroundSize: "800px"
    });
  },
  'mouseleave': function mouseleave() {
    TweenMax.to('.myPhoto', 0.5, {
      borderRadius: "50%",
      backgroundImage: "url('/images/kaiyu.jpg')",
      backgroundSize: "550px"
    });
  }
}); // skill page

$('.icon i').on({
  'mouseenter': function mouseenter() {
    $(this).attr('id', "iconA");
    TweenMax.to('#iconA', 0.5, {
      ease: "elastic",
      scale: 1.5
    });
  },
  'mouseleave': function mouseleave() {
    TweenMax.to('#iconA', 0.5, {
      scale: 1
    });
    $(this).removeAttr('id', "iconA");
  }
}); // work page

if (!navigator.userAgent.match(/(iPhone|iPad|Andoroid)/)) {
  $('.rotateBox').on({
    'mouseenter': function mouseenter() {
      $(this).attr('id', "workA");
      TweenMax.to('#workA .workText', 0.5, {
        opacity: 0
      });
      TweenMax.to('#workA .workPhoto', 0.5, {
        opacity: 1
      });
    },
    'mouseleave': function mouseleave() {
      TweenMax.to('#workA .workPhoto', 0.5, {
        opacity: 0
      });
      TweenMax.to('#workA .workText', 0.5, {
        opacity: 1
      });
      $(this).removeAttr('id', "workA");
    }
  });
} //blog page


if (!navigator.userAgent.match(/(iPhone|iPad|Andoroid)/)) {
  $('.blogBox').on({
    'mouseenter': function mouseenter() {
      $(this).attr('id', "blogA");
      TweenMax.to('#blogA .blogTitle', 0.2, {
        opacity: 0
      });
      TweenMax.to('#blogA .blogTagBox', 0.2, {
        opacity: 0
      });
      TweenMax.to('#blogA', {
        backgroundImage: "url('/images/qiitalogo.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      });
    },
    'mouseleave': function mouseleave() {
      TweenMax.to('#blogA .blogTitle', 0.2, {
        opacity: 1
      });
      TweenMax.to('#blogA .blogTagBox', 0.2, {
        opacity: 1
      });
      TweenMax.to('#blogA', {
        backgroundImage: "none"
      });
      $(this).removeAttr('id', "blogA");
    }
  });
} // contact page


if (!navigator.userAgent.match(/(iPhone|iPad|Andoroid)/)) {
  $('.contactIcons i').on({
    'mouseenter': function mouseenter() {
      $(this).attr('id', "iconA");
      TweenMax.to('#iconA', 0.2, {
        color: "rgb(245, 245, 245)"
      });
    },
    'mouseleave': function mouseleave() {
      TweenMax.to('#iconA', 0.2, {
        color: " rgb(146, 146, 146)"
      });
      $(this).removeAttr('id', "iconA");
    }
  });
}

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