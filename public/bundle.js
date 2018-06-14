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
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danniliu/Projects/mathildapurr.github.io/node_modules/process/browser.js'");

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(127);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Routes = __webpack_require__(213);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Routes2.default, null), document.getElementById('root'));

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danniliu/Projects/mathildapurr.github.io/node_modules/react-dom/index.js'");

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(214);

var _reactRouterDom = __webpack_require__(221);

var _history = __webpack_require__(233);

var _history2 = _interopRequireDefault(_history);

var _components = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**`
 * COMPONENT
 */
var Routes = function Routes(props) {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _history2.default },
    _react2.default.createElement(
      _components.Main,
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _components.Content })
      )
    )
  );
};

exports.default = Routes;

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danniliu/Projects/mathildapurr.github.io/node_modules/react-router/es/index.js'");

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danniliu/Projects/mathildapurr.github.io/node_modules/react-router-dom/es/index.js'");

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(234);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createMemoryHistory = __webpack_require__(236);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = process.env.NODE_ENV === 'test' ? (0, _createMemoryHistory2.default)() : (0, _createBrowserHistory2.default)();

exports.default = history;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danniliu/Projects/mathildapurr.github.io/node_modules/history/createBrowserHistory.js'");

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danniliu/Projects/mathildapurr.github.io/node_modules/history/createMemoryHistory.js'");

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav(props) {
  return _react2.default.createElement(
    "header",
    null,
    _react2.default.createElement(
      "div",
      { className: "container-fluid " },
      _react2.default.createElement(
        "ul",
        { className: "nav justify-content-end white-grey" },
        _react2.default.createElement(
          "li",
          { className: "nav-item" },
          _react2.default.createElement(
            "a",
            { className: "nav-link nav-link-style", href: "#" },
            "Home"
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "nav-item" },
          _react2.default.createElement(
            "a",
            { className: "nav-link nav-link-style", href: "#" },
            "About"
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "nav-item" },
          _react2.default.createElement(
            "a",
            { className: "nav-link nav-link-style", href: "#" },
            "Contact"
          )
        )
      )
    )
  );
};

exports.default = Nav;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main(props) {
  var children = props.children;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_components.Nav, null),
    _react2.default.createElement(
      'main',
      null,
      children
    )
  );
};
exports.default = Main;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function Intro(props) {
  return _react2.default.createElement(
    "section",
    { className: "white-grey p-5" },
    _react2.default.createElement(
      "div",
      { className: "container text-center" },
      _react2.default.createElement(
        "h1",
        { className: "display-1" },
        "Danni Liu"
      ),
      _react2.default.createElement(
        "p",
        { className: "text-muted" },
        "FULL STACK SOFTWARE ENGINEER"
      ),
      _react2.default.createElement(
        "div",
        { className: "P-2" },
        "some icons"
      ),
      _react2.default.createElement(
        "div",
        { className: "p-2" },
        _react2.default.createElement(
          "a",
          null,
          _react2.default.createElement(
            "button",
            { type: "button", className: "btn btn-secondary" },
            "Info"
          )
        )
      )
    )
  );
};

exports.default = Intro;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Project = function Project(props) {
  return _react2.default.createElement(
    "div",
    { className: "card mb-4 box-shadow" },
    _react2.default.createElement("img", { className: "card-img-top", src: "http://via.placeholder.com/250x150" }),
    _react2.default.createElement(
      "div",
      { className: "card-body" },
      _react2.default.createElement(
        "h5",
        { "class": "card-title" },
        "Tiny Kitchen"
      ),
      _react2.default.createElement(
        "p",
        { className: "card-text" },
        "Full stack web app for cooking with AI and web scraping Chrome extension"
      )
    )
  );
};
exports.default = Project;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_components.Intro, null),
    _react2.default.createElement(_components.Skills, null),
    _react2.default.createElement(_components.Projects, null),
    _react2.default.createElement(_components.About, null),
    _react2.default.createElement(_components.Footer, null)
  );
};
exports.default = Content;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skills = function Skills(props) {
  return _react2.default.createElement(
    "div",
    { className: "white-grey p-5" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "d-flex flex-column justify-content-center align-items-center" },
        _react2.default.createElement(
          "div",
          { className: "p-2" },
          _react2.default.createElement(
            "h2",
            { className: "display-3" },
            "Skills"
          )
        ),
        _react2.default.createElement(
          "ul",
          { className: "d-flex flex-row justify-content-center p-0 flex-wrap" },
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (el) {
            return _react2.default.createElement(
              "li",
              { className: "icon-list p-2 d-inline-flex flex-column align-items-center m-2", key: el.toString() },
              _react2.default.createElement("i", { className: "devicon-nodejs-plain icon" }),
              _react2.default.createElement(
                "p",
                { className: "icon-caption p-2" },
                "Node"
              )
            );
          })
        )
      )
    )
  );
};
exports.default = Skills;

//to add: mysql, c, java, django, heroku, express, webpack, git, babel, Jasmine
// <i className="devicon-react-original-wordmark colored"></i>
//       <i className="devicon-javascript-plain colored"></i>
//       <i className="devicon-sequelize-plain-wordmark colored"></i>
//       <i className="devicon-postgresql-plain-wordmark colored"></i>
//       <i className="devicon-python-plain-wordmark colored"></i>
//       <i className="devicon-css3-plain-wordmark colored"></i>
//       <i className="devicon-html5-plain-wordmark colored"></i>
//       <i className="devicon-c-line"></i>

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = function Projects(props) {
  return _react2.default.createElement(
    'div',
    { className: 'p-5 light-grey' },
    _react2.default.createElement(
      'div',
      { className: 'container d-flex flex-column' },
      _react2.default.createElement(
        'div',
        { className: 'row p-3' },
        _react2.default.createElement(
          'h1',
          null,
          'Featured Projects'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row p-3' },
        _react2.default.createElement(
          'p',
          { className: 'text-muted' },
          'this is just a place holder for some real text on projects'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 col-sm-12' },
          _react2.default.createElement(_components.Project, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 col-sm-12' },
          _react2.default.createElement(_components.Project, null)
        )
      )
    )
  );
};
exports.default = Projects;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About(props) {
  return _react2.default.createElement(
    "div",
    { className: "p-5 white-grey" },
    _react2.default.createElement(
      "div",
      { className: "container d-flex flex-column" },
      _react2.default.createElement(
        "div",
        { className: "row p-3" },
        _react2.default.createElement(
          "h1",
          null,
          "About me"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "row p-3" },
        _react2.default.createElement(
          "p",
          { className: "text-muted" },
          "I'm a person person person"
        )
      )
    )
  );
};

exports.default = About;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    "footer",
    { className: "p-5 text-muted" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "p",
        null,
        "I'm at the foot of this page"
      ),
      _react2.default.createElement(
        "p",
        null,
        "I contain copyright info"
      )
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danniliu/Projects/mathildapurr.github.io/node_modules/react/react.js'");

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Nav = __webpack_require__(237);

Object.defineProperty(exports, 'Nav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Nav).default;
  }
});

var _Main = __webpack_require__(238);

Object.defineProperty(exports, 'Main', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Main).default;
  }
});

var _Intro = __webpack_require__(239);

Object.defineProperty(exports, 'Intro', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Intro).default;
  }
});

var _Project = __webpack_require__(240);

Object.defineProperty(exports, 'Project', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Project).default;
  }
});

var _Content = __webpack_require__(241);

Object.defineProperty(exports, 'Content', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Content).default;
  }
});

var _Skills = __webpack_require__(242);

Object.defineProperty(exports, 'Skills', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Skills).default;
  }
});

var _Projects = __webpack_require__(243);

Object.defineProperty(exports, 'Projects', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Projects).default;
  }
});

var _About = __webpack_require__(244);

Object.defineProperty(exports, 'About', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_About).default;
  }
});

var _Footer = __webpack_require__(245);

Object.defineProperty(exports, 'Footer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Footer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map