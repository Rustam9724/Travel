/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pop-up.scss":
/*!*************************!*\
  !*** ./src/pop-up.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/bike.png":
/*!*****************************!*\
  !*** ./src/assets/bike.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b0a4c7496014da9cc59.png";

/***/ }),

/***/ "./src/assets/calendar.png":
/*!*********************************!*\
  !*** ./src/assets/calendar.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01b88777667e9a69a32b.png";

/***/ }),

/***/ "./src/assets/carousel-arrow.png":
/*!***************************************!*\
  !*** ./src/assets/carousel-arrow.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc24b74f7633029ca7bf.png";

/***/ }),

/***/ "./src/assets/carousel-image_1.png":
/*!*****************************************!*\
  !*** ./src/assets/carousel-image_1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "567061871566e5ce9368.png";

/***/ }),

/***/ "./src/assets/carousel-image_2.png":
/*!*****************************************!*\
  !*** ./src/assets/carousel-image_2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e54fb8d9fa620ccb02f8.png";

/***/ }),

/***/ "./src/assets/carousel-image_3.png":
/*!*****************************************!*\
  !*** ./src/assets/carousel-image_3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8e4a50515371e7c9f38.png";

/***/ }),

/***/ "./src/assets/cross.png":
/*!******************************!*\
  !*** ./src/assets/cross.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "327a588c67daea821842.png";

/***/ }),

/***/ "./src/assets/facebook-logo.png":
/*!**************************************!*\
  !*** ./src/assets/facebook-logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ebc3620b86c470a440a.png";

/***/ }),

/***/ "./src/assets/fly.png":
/*!****************************!*\
  !*** ./src/assets/fly.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05c86dce7ad764f71560.png";

/***/ }),

/***/ "./src/assets/google-logo.png":
/*!************************************!*\
  !*** ./src/assets/google-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b37b9ac627201c132129.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.scss */ "./src/style.scss");
/* harmony import */ var _src_pop_up_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/pop-up.scss */ "./src/pop-up.scss");
/* harmony import */ var _assets_bike_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/bike.png */ "./src/assets/bike.png");
/* harmony import */ var _assets_calendar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/calendar.png */ "./src/assets/calendar.png");
/* harmony import */ var _assets_fly_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/fly.png */ "./src/assets/fly.png");
/* harmony import */ var _assets_carousel_image_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/carousel-image_1.png */ "./src/assets/carousel-image_1.png");
/* harmony import */ var _assets_carousel_image_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/carousel-image_2.png */ "./src/assets/carousel-image_2.png");
/* harmony import */ var _assets_carousel_image_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/carousel-image_3.png */ "./src/assets/carousel-image_3.png");
/* harmony import */ var _assets_facebook_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/facebook-logo.png */ "./src/assets/facebook-logo.png");
/* harmony import */ var _assets_google_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/google-logo.png */ "./src/assets/google-logo.png");
/* harmony import */ var _assets_carousel_arrow_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/carousel-arrow.png */ "./src/assets/carousel-arrow.png");
/* harmony import */ var _assets_cross_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/cross.png */ "./src/assets/cross.png");












// Работа с регистрацией
var loginButton = document.querySelector('.login-button');
var loginPopUp = document.querySelector('.login-pop-up');
var signInButton = document.querySelector('.sign-in-button');
var loginEmailInput = document.querySelector('#login-email');
var loginPasswordInput = document.querySelector('#login-password');
var userData = [];
var substrates = document.querySelectorAll('.substrate');
var registerLink = document.querySelector('.register-link');
var createAccountPopUp = document.querySelector('.create-account-pop-up');
var signUpButton = document.querySelector('.sign-up-button');
var logInLink = document.querySelector('.log-in-link');
loginButton.addEventListener('click', function () {
    loginPopUp.classList.add('visible');
    substrates.forEach(function (elem) {
        elem.classList.add('visible');
    });
});
loginEmailInput.addEventListener('change', function (event) {
    userData[0] = event.target.value;
});
loginPasswordInput.addEventListener('change', function (event) {
    userData[1] = event.target.value;
});
signInButton.addEventListener('click', function () {
    alert("User e-mail is ".concat(userData[0], "\nUser password is ").concat(userData[1]));
});
substrates.forEach(function (elem) {
    elem.addEventListener('click', function () {
        loginPopUp.classList.remove('visible');
        createAccountPopUp.classList.remove('visible');
        substrates.forEach(function (e) {
            e.classList.remove('visible');
        });
    });
});
registerLink.addEventListener('click', function () {
    loginPopUp.classList.remove('visible');
    createAccountPopUp.classList.add('visible');
});
signUpButton.addEventListener('click', function () {
    createAccountPopUp.classList.remove('visible');
    substrates.forEach(function (e) {
        e.classList.remove('visible');
    });
});
logInLink.addEventListener('click', function () {
    createAccountPopUp.classList.remove('visible');
    loginPopUp.classList.add('visible');
});
// Карусель
var carouselImagesBlock = document.querySelector('.carousel-images');
var carouselSwitches = document.querySelectorAll('.carousel-switch');
var carouselImages = document.querySelectorAll('.carousel-image');
var carouselArrowLeft = document.querySelector('.carousel-arrow-left');
var carouselArrowRight = document.querySelector('.carousel-arrow-right');
carouselSwitches.forEach(function (swtch) {
    swtch.addEventListener('click', function () {
        carouselImagesBlock.className = "carousel-images ".concat(swtch.dataset.number, "-image");
    });
});
carouselImages.forEach(function (image) {
    image.addEventListener('click', function () {
        carouselImagesBlock.className = "carousel-images ".concat(image.dataset.number, "-image");
        if (image.dataset.number === 'first') {
            carouselSwitches[0].checked = true;
        }
        else if (image.dataset.number === 'second') {
            carouselSwitches[1].checked = true;
        }
        else {
            carouselSwitches[2].checked = true;
        }
    });
});
carouselArrowLeft.addEventListener('click', function () {
    if (carouselImagesBlock.className === 'carousel-images second-image') {
        carouselImagesBlock.className = 'carousel-images first-image';
        carouselSwitches[0].checked = true;
    }
    else if (carouselImagesBlock.className === 'carousel-images third-image') {
        carouselImagesBlock.className = 'carousel-images second-image';
        carouselSwitches[1].checked = true;
    }
});
carouselArrowRight.addEventListener('click', function () {
    if (carouselImagesBlock.className === 'carousel-images' || carouselImagesBlock.className === 'carousel-images first-image') {
        carouselImagesBlock.className = 'carousel-images second-image';
        carouselSwitches[1].checked = true;
    }
    else if (carouselImagesBlock.className === 'carousel-images second-image') {
        carouselImagesBlock.className = 'carousel-images third-image';
        carouselSwitches[2].checked = true;
    }
});
// Работа с бургер-меню
var burgerButton = document.querySelector('.burger-button');
var burgerPopUp = document.querySelector('.burger-pop-up');
var cross = document.querySelector('.burger-pop-up img');
var burgerLinks = document.querySelectorAll('.burger-pop-up a');
var accountLink = document.querySelector('.account-link');
burgerButton.addEventListener('click', function () {
    burgerPopUp.style.display = 'flex';
});
cross.addEventListener('click', function () {
    burgerPopUp.style.display = 'none';
});
burgerLinks.forEach(function (burgerLink) {
    burgerLink.addEventListener('click', function () {
        burgerPopUp.style.display = 'none';
    });
});
accountLink.addEventListener('click', function () {
    burgerPopUp.style.display = 'none';
    loginPopUp.classList.add('visible');
    substrates.forEach(function (elem) {
        elem.classList.add('visible');
    });
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map