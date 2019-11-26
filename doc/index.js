module.exports =
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "vue"
var external__vue_ = __webpack_require__(4);
var external__vue__default = /*#__PURE__*/__webpack_require__.n(external__vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/MtDoc.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MtDoc = ({
  name: 'mt-doc',

  props: {
    lang: String,
    github: String,
    versions: Array,
    searchConfig: Object,
    currentSimulator: Number,
    simulator: String,
    config: {
      type: Object,
      required: true
    },
    simulators: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    base: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      nav: [],
      currentPath: null,
      leftNav: null,
      rightNav: null
    };
  },


  watch: {
    '$route.path': function $routePath() {
      this.setNav();
      this.updateNav();
    }
  },

  created: function created() {
    this.setNav();
    this.updateNav();
    this.keyboardHandler();
  },


  methods: {
    setNav: function setNav() {
      var nav = this.config.nav;
      for (var i = 0; i < nav.length; i++) {
        var navItem = nav[i];
        if (!navItem.groups) {
          this.nav.push(nav[i]);
        } else {
          for (var j = 0; j < navItem.groups.length; j++) {
            this.nav = this.nav.concat(navItem.groups[j].list);
          }
        }
      }
    },
    updateNav: function updateNav() {
      var currentIndex = void 0;
      this.currentPath = '/' + this.$route.path.split('/').pop();
      for (var i = 0, len = this.nav.length; i < len; i++) {
        if (this.nav[i].path === this.currentPath) {
          currentIndex = i;
          break;
        }
      }
      this.leftNav = this.nav[currentIndex - 1];
      this.rightNav = this.nav[currentIndex + 1];
    },
    handleNavClick: function handleNavClick(direction) {
      var nav = direction === 'prev' ? this.leftNav : this.rightNav;
      if (nav.path) {
        this.$router.push(this.base + nav.path);
      } else if (nav.link) {
        window.location.href = nav.link;
      }
    },
    keyboardHandler: function keyboardHandler() {
      var _this = this;

      window.addEventListener('keyup', function (event) {
        switch (event.keyCode) {
          case 37:
            // left
            _this.handleNavClick('prev');
            break;
          case 39:
            // right
            _this.handleNavClick('next');
            break;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-130c2152","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/MtDoc.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-doc"},[_c('mt-doc-header',{attrs:{"lang":_vm.lang,"github":_vm.github,"versions":_vm.versions,"config":_vm.config.header,"search-config":_vm.searchConfig},on:{"switch-version":function($event){_vm.$emit('switch-version', $event)}}}),_vm._v(" "),_c('mt-doc-nav',{attrs:{"nav-config":_vm.config.nav,"base":_vm.base}}),_vm._v(" "),_c('mt-doc-container',{attrs:{"has-simulator":!!(_vm.simulator || _vm.simulators.length)}},[_c('mt-doc-content',[_vm._t("default")],2)],1),_vm._v(" "),(_vm.simulator)?_c('mt-doc-simulator',{attrs:{"src":_vm.simulator}}):_vm._e(),_vm._v(" "),_vm._l((_vm.simulators),function(url,index){return _c('mt-doc-simulator',{directives:[{name:"show",rawName:"v-show",value:(index === _vm.currentSimulator),expression:"index === currentSimulator"}],key:url,attrs:{"src":url}})})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_MtDoc = (esExports);
// CONCATENATED MODULE: ./src/MtDoc.vue
function injectStyle (ssrContext) {
  __webpack_require__(5)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var MtDoc_Component = normalizeComponent(
  MtDoc,
  selectortype_template_index_0_src_MtDoc,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_MtDoc = (MtDoc_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component/NavLink.vue
//
//
//
//
//
//

/* harmony default export */ var NavLink = ({
  name: 'mt-doc-nav-link',

  props: {
    base: String,
    item: Object
  },

  computed: {
    itemName: function itemName() {
      var name = (this.item.title || this.item.name).split(' ');
      return name[0] + ' <span>' + name.slice(1).join(' ') + '</span>';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-acf6481e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component/NavLink.vue
var NavLink_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.item.path)?_c('router-link',{attrs:{"active-class":"active","to":_vm.base + _vm.item.path},domProps:{"innerHTML":_vm._s(_vm.itemName)}}):(_vm.item.link)?_c('a',{attrs:{"href":_vm.item.link},domProps:{"innerHTML":_vm._s(_vm.itemName)}}):_c('a',{domProps:{"innerHTML":_vm._s(_vm.itemName )}})}
var NavLink_staticRenderFns = []
var NavLink_esExports = { render: NavLink_render, staticRenderFns: NavLink_staticRenderFns }
/* harmony default export */ var component_NavLink = (NavLink_esExports);
// CONCATENATED MODULE: ./src/component/NavLink.vue
var NavLink_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var NavLink___vue_template_functional__ = false
/* styles */
var NavLink___vue_styles__ = null
/* scopeId */
var NavLink___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var NavLink___vue_module_identifier__ = null
var NavLink_Component = NavLink_normalizeComponent(
  NavLink,
  component_NavLink,
  NavLink___vue_template_functional__,
  NavLink___vue_styles__,
  NavLink___vue_scopeId__,
  NavLink___vue_module_identifier__
)

/* harmony default export */ var src_component_NavLink = (NavLink_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component/Nav.vue
var _components;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Nav = ({
  name: 'mt-doc-nav',

  components: (_components = {}, _components[src_component_NavLink.name] = src_component_NavLink, _components),

  props: {
    navConfig: Array,
    base: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      top: 60,
      bottom: 0
    };
  },


  computed: {
    style: function style() {
      return {
        top: this.top + 'px',
        bottom: this.bottom + 'px'
      };
    }
  },

  created: function created() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },


  methods: {
    onScroll: function onScroll() {
      var _window = window,
          offset = _window.pageYOffset;

      this.top = Math.max(0, 60 - offset);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d1d56752","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component/Nav.vue
var Nav_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-doc-nav",style:(_vm.style)},_vm._l((_vm.navConfig),function(item,index){return _c('div',{key:index,staticClass:"mt-doc-nav__item"},[_c('mt-doc-nav-link',{attrs:{"item":item,"base":_vm.base}}),_vm._v(" "),(item.children)?_c('div',_vm._l((item.children),function(navItem,index){return _c('div',{key:index,staticClass:"nav-item"},[_c('mt-doc-nav-link',{attrs:{"item":navItem,"base":_vm.base}})],1)})):_vm._e(),_vm._v(" "),_vm._l((item.groups),function(group,index){return (item.groups)?_c('div',{key:index},[_c('div',{staticClass:"mt-doc-nav__group-title"},[_vm._v(_vm._s(group.groupName))]),_vm._v(" "),_c('div',_vm._l((group.list),function(navItem,index){return (!navItem.disabled)?_c('div',{key:index,staticClass:"mt-doc-nav__subitem"},[_c('mt-doc-nav-link',{attrs:{"item":navItem,"base":_vm.base}})],1):_vm._e()}))]):_vm._e()})],2)}))}
var Nav_staticRenderFns = []
var Nav_esExports = { render: Nav_render, staticRenderFns: Nav_staticRenderFns }
/* harmony default export */ var component_Nav = (Nav_esExports);
// CONCATENATED MODULE: ./src/component/Nav.vue
function Nav_injectStyle (ssrContext) {
  __webpack_require__(8)
}
var Nav_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var Nav___vue_template_functional__ = false
/* styles */
var Nav___vue_styles__ = Nav_injectStyle
/* scopeId */
var Nav___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Nav___vue_module_identifier__ = null
var Nav_Component = Nav_normalizeComponent(
  Nav,
  component_Nav,
  Nav___vue_template_functional__,
  Nav___vue_styles__,
  Nav___vue_scopeId__,
  Nav___vue_module_identifier__
)

/* harmony default export */ var src_component_Nav = (Nav_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component/Block.vue
//
//
//
//
//
//

/* harmony default export */ var Block = ({
  name: 'mt-doc-block'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dc54e87e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component/Block.vue
var Block_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-doc-block"},[_vm._t("default")],2)}
var Block_staticRenderFns = []
var Block_esExports = { render: Block_render, staticRenderFns: Block_staticRenderFns }
/* harmony default export */ var component_Block = (Block_esExports);
// CONCATENATED MODULE: ./src/component/Block.vue
function Block_injectStyle (ssrContext) {
  __webpack_require__(10)
}
var Block_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var Block___vue_template_functional__ = false
/* styles */
var Block___vue_styles__ = Block_injectStyle
/* scopeId */
var Block___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Block___vue_module_identifier__ = null
var Block_Component = Block_normalizeComponent(
  Block,
  component_Block,
  Block___vue_template_functional__,
  Block___vue_styles__,
  Block___vue_scopeId__,
  Block___vue_module_identifier__
)

/* harmony default export */ var src_component_Block = (Block_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component/Header.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Header = ({
  name: 'mt-doc-header',

  props: {
    lang: String,
    config: Object,
    github: String,
    versions: Array,
    searchConfig: Object
  },

  data: function data() {
    return {
      showVersionPop: false
    };
  },


  computed: {
    langLink: function langLink() {
      var lang = this.config.nav.lang;

      return '#' + this.$route.path.replace(lang.from, lang.to);
    }
  },

  methods: {
    toggleVersionPop: function toggleVersionPop() {
      var val = !this.showVersionPop;

      var action = val ? 'add' : 'remove';
      document.body[action + 'EventListener']('click', this.checkHideVersionPop);

      this.showVersionPop = val;
    },
    checkHideVersionPop: function checkHideVersionPop(event) {
      if (!this.$refs.version.contains(event.target)) {
        this.showVersionPop = false;
      }
    },
    onSwitchLang: function onSwitchLang(lang) {
      this.$router.push(this.$route.path.replace(lang.from, lang.to));
    },
    onSwitchVersion: function onSwitchVersion(version) {
      this.$emit('switch-version', version);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-56a871ee","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component/Header.vue
var Header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-doc-header"},[_c('div',{staticClass:"mt-doc-row"},[_c('div',{staticClass:"mt-doc-header__top"},[_c('a',{staticClass:"mt-doc-header__logo",attrs:{"href":_vm.config.logo.href}},[_c('img',{attrs:{"src":_vm.config.logo.image}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.config.logo.title))])]),_vm._v(" "),_c('ul',{staticClass:"mt-doc-header__top-nav"},[(_vm.versions)?_c('li',{ref:"version",staticClass:"mt-doc-header__top-nav-item"},[_c('span',{staticClass:"mt-doc-header__cube mt-doc-header__version",on:{"click":_vm.toggleVersionPop}},[_vm._v("\n            "+_vm._s(_vm.versions[0])+"\n\n            "),_c('transition',{attrs:{"name":"mt-doc-dropdown"}},[(_vm.showVersionPop)?_c('div',{staticClass:"mt-doc-header__version-pop"},_vm._l((_vm.versions),function(item){return _c('div',{staticClass:"mt-doc-header__version-pop-item",on:{"click":function($event){_vm.onSwitchVersion(item)}}},[_vm._v("\n                  "+_vm._s(item)+"\n                ")])})):_vm._e()])],1)]):_vm._e(),_vm._v(" "),(_vm.config.nav.lang)?_c('li',{staticClass:"mt-doc-header__top-nav-item"},[_c('a',{staticClass:"mt-doc-header__cube",attrs:{"href":_vm.langLink}},[_vm._v("\n            "+_vm._s(_vm.config.nav.lang.text)+"\n          ")])]):_vm._e()])])])])}
var Header_staticRenderFns = []
var Header_esExports = { render: Header_render, staticRenderFns: Header_staticRenderFns }
/* harmony default export */ var component_Header = (Header_esExports);
// CONCATENATED MODULE: ./src/component/Header.vue
function Header_injectStyle (ssrContext) {
  __webpack_require__(12)
}
var Header_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var Header___vue_template_functional__ = false
/* styles */
var Header___vue_styles__ = Header_injectStyle
/* scopeId */
var Header___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Header___vue_module_identifier__ = null
var Header_Component = Header_normalizeComponent(
  Header,
  component_Header,
  Header___vue_template_functional__,
  Header___vue_styles__,
  Header___vue_scopeId__,
  Header___vue_module_identifier__
)

/* harmony default export */ var src_component_Header = (Header_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component/Content.vue
//
//
//
//
//
//

/* harmony default export */ var Content = ({
  name: 'mt-doc-content',

  computed: {
    currentPage: function currentPage() {
      var path = this.$route.path;

      if (path) {
        return path.split('/').slice(-1)[0];
      }
      return this.$route.name;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-65a6cead","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component/Content.vue
var Content_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['mt-doc-content', ("mt-doc-content--" + _vm.currentPage)]},[_vm._t("default")],2)}
var Content_staticRenderFns = []
var Content_esExports = { render: Content_render, staticRenderFns: Content_staticRenderFns }
/* harmony default export */ var component_Content = (Content_esExports);
// CONCATENATED MODULE: ./src/component/Content.vue
function Content_injectStyle (ssrContext) {
  __webpack_require__(14)
}
var Content_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var Content___vue_template_functional__ = false
/* styles */
var Content___vue_styles__ = Content_injectStyle
/* scopeId */
var Content___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Content___vue_module_identifier__ = null
var Content_Component = Content_normalizeComponent(
  Content,
  component_Content,
  Content___vue_template_functional__,
  Content___vue_styles__,
  Content___vue_scopeId__,
  Content___vue_module_identifier__
)

/* harmony default export */ var src_component_Content = (Content_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component/Container.vue
//
//
//
//
//
//

/* harmony default export */ var Container = ({
  name: 'mt-doc-container',

  props: {
    hasSimulator: Boolean
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5ed30bb5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component/Container.vue
var Container_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-doc-container mt-doc-row",class:{ 'mt-doc-container--with-simulator': _vm.hasSimulator }},[_vm._t("default")],2)}
var Container_staticRenderFns = []
var Container_esExports = { render: Container_render, staticRenderFns: Container_staticRenderFns }
/* harmony default export */ var component_Container = (Container_esExports);
// CONCATENATED MODULE: ./src/component/Container.vue
function Container_injectStyle (ssrContext) {
  __webpack_require__(16)
}
var Container_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var Container___vue_template_functional__ = false
/* styles */
var Container___vue_styles__ = Container_injectStyle
/* scopeId */
var Container___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Container___vue_module_identifier__ = null
var Container_Component = Container_normalizeComponent(
  Container,
  component_Container,
  Container___vue_template_functional__,
  Container___vue_styles__,
  Container___vue_scopeId__,
  Container___vue_module_identifier__
)

/* harmony default export */ var src_component_Container = (Container_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component/Simulator.vue
//
//
//
//
//
//

/* harmony default export */ var Simulator = ({
  name: 'mt-doc-simulator',

  props: {
    src: String
  },

  data: function data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('scroll', function () {
      _this.scrollTop = window.scrollY;
    });
    window.addEventListener('resize', function () {
      _this.windowHeight = window.innerHeight;
    });
  },


  computed: {
    isFixed: function isFixed() {
      return this.scrollTop > 60;
    },
    simulatorStyle: function simulatorStyle() {
      var height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + 'px'
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-32c8ec90","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component/Simulator.vue
var Simulator_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['mt-doc-simulator', { 'mt-doc-simulator-fixed': _vm.isFixed }]},[_c('iframe',{ref:"iframe",style:(_vm.simulatorStyle),attrs:{"src":_vm.src,"frameborder":"0"}})])}
var Simulator_staticRenderFns = []
var Simulator_esExports = { render: Simulator_render, staticRenderFns: Simulator_staticRenderFns }
/* harmony default export */ var component_Simulator = (Simulator_esExports);
// CONCATENATED MODULE: ./src/component/Simulator.vue
function Simulator_injectStyle (ssrContext) {
  __webpack_require__(18)
}
var Simulator_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var Simulator___vue_template_functional__ = false
/* styles */
var Simulator___vue_styles__ = Simulator_injectStyle
/* scopeId */
var Simulator___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Simulator___vue_module_identifier__ = null
var Simulator_Component = Simulator_normalizeComponent(
  Simulator,
  component_Simulator,
  Simulator___vue_template_functional__,
  Simulator___vue_styles__,
  Simulator___vue_scopeId__,
  Simulator___vue_module_identifier__
)

/* harmony default export */ var src_component_Simulator = (Simulator_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component/DemoBlock.vue
//
//
//
//
//
//
//

/* harmony default export */ var DemoBlock = ({
  name: 'mt-doc-demo-block',

  props: {
    title: String
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1a85af1e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component/DemoBlock.vue
var DemoBlock_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"mt-doc-demo-block"},[_c('h2',{staticClass:"mt-doc-demo-block__title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_vm._t("default")],2)}
var DemoBlock_staticRenderFns = []
var DemoBlock_esExports = { render: DemoBlock_render, staticRenderFns: DemoBlock_staticRenderFns }
/* harmony default export */ var component_DemoBlock = (DemoBlock_esExports);
// CONCATENATED MODULE: ./src/component/DemoBlock.vue
function DemoBlock_injectStyle (ssrContext) {
  __webpack_require__(20)
}
var DemoBlock_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var DemoBlock___vue_template_functional__ = false
/* styles */
var DemoBlock___vue_styles__ = DemoBlock_injectStyle
/* scopeId */
var DemoBlock___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DemoBlock___vue_module_identifier__ = null
var DemoBlock_Component = DemoBlock_normalizeComponent(
  DemoBlock,
  component_DemoBlock,
  DemoBlock___vue_template_functional__,
  DemoBlock___vue_styles__,
  DemoBlock___vue_scopeId__,
  DemoBlock___vue_module_identifier__
)

/* harmony default export */ var src_component_DemoBlock = (DemoBlock_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component/DemoSection.vue
//
//
//
//
//
//

/* harmony default export */ var DemoSection = ({
  name: 'mt-doc-demo-section',

  props: {
    name: String,
    title: String,
    background: String
  },

  computed: {
    demoName: function demoName() {
      return this.name || this.getParentName();
    },
    style: function style() {
      return {
        background: this.background
      };
    }
  },

  methods: {
    getParentName: function getParentName() {
      var $parent = this.$parent;

      if ($parent && $parent.$options.name) {
        return $parent.$options.name.replace('demo-', '');
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-875e7994","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component/DemoSection.vue
var DemoSection_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"mt-doc-demo-section",class:("demo-" + _vm.demoName),style:(_vm.style)},[_vm._t("default")],2)}
var DemoSection_staticRenderFns = []
var DemoSection_esExports = { render: DemoSection_render, staticRenderFns: DemoSection_staticRenderFns }
/* harmony default export */ var component_DemoSection = (DemoSection_esExports);
// CONCATENATED MODULE: ./src/component/DemoSection.vue
function DemoSection_injectStyle (ssrContext) {
  __webpack_require__(22)
}
var DemoSection_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var DemoSection___vue_template_functional__ = false
/* styles */
var DemoSection___vue_styles__ = DemoSection_injectStyle
/* scopeId */
var DemoSection___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DemoSection___vue_module_identifier__ = null
var DemoSection_Component = DemoSection_normalizeComponent(
  DemoSection,
  component_DemoSection,
  DemoSection___vue_template_functional__,
  DemoSection___vue_styles__,
  DemoSection___vue_scopeId__,
  DemoSection___vue_module_identifier__
)

/* harmony default export */ var src_component_DemoSection = (DemoSection_Component.exports);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (immutable) */ __webpack_exports__["default"] = install;
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Nav", function() { return src_component_Nav; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Header", function() { return src_component_Header; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MtDoc", function() { return src_MtDoc; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Block", function() { return src_component_Block; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Content", function() { return src_component_Content; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Container", function() { return src_component_Container; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Simulator", function() { return src_component_Simulator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DemoBlock", function() { return src_component_DemoBlock; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DemoSection", function() { return src_component_DemoSection; });











var components = [src_component_Nav, src_component_Header, src_MtDoc, src_component_Block, src_component_Content, src_component_Container, src_component_Simulator, src_component_DemoBlock, src_component_DemoSection];

function install() {
  components.forEach(function (Component) {
    external__vue__default.a.component(Component.name, Component);
  });
}



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0ecf3edc", content, true);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "body{color:#333;font-size:16px;min-width:1200px;overflow-x:auto;background-color:#f5f5f9;-webkit-font-smoothing:antialiased;font-family:PingFang SC,Helvetica Neue,Arial,sans-serif}body,p{margin:0}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit}ol,ul{margin:0;padding:0;list-style:none}a{text-decoration:none}.mt-doc-row{width:100%}@media (min-width:1680px){.mt-doc-row{width:1680px;margin:0 auto}}code{position:relative;margin-top:20px;display:block;font-size:13px;font-weight:400;overflow-x:auto;line-height:24px;word-break:break-all;white-space:pre-wrap;color:#455a64;font-family:Source Code Pro,Monaco,Inconsolata,monospace}pre{margin:0}.hljs{display:block;overflow-x:auto;padding:.5em;background:#fff}.hljs-subst{color:#455a64}.hljs-addition,.hljs-meta,.hljs-string,.hljs-symbol,.hljs-template-tag,.hljs-template-variable{color:#299cce}.hljs-comment,.hljs-quote{color:#999}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-regexp{color:#07c160}.hljs-deletion,.hljs-variable{color:#88f}.hljs-keyword{color:#6e70ff}.hljs-built_in,.hljs-doctag,.hljs-name,.hljs-section,.hljs-selector-class,.hljs-selector-id,.hljs-selector-tag,.hljs-strong,.hljs-tag,.hljs-title,.hljs-type{color:rgba(204,0,0,.81176)}.hljs-emphasis{font-style:italic}.hljs-attr{color:#690}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("647b342d", content, true);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".mt-doc-nav{left:0;top:60px;bottom:0;z-index:1;position:fixed;overflow-y:scroll;padding:25px 0 75px;background-color:#fff;min-width:220px;max-width:220px;-webkit-box-shadow:0 8px 12px #ebedf0;box-shadow:0 8px 12px #ebedf0;border-right:1px solid #f1f4f8}@media (min-width:1680px){.mt-doc-nav{left:50%;margin-left:-840px}}.mt-doc-nav::-webkit-scrollbar{height:6px;width:6px;background-color:transparent}.mt-doc-nav::-webkit-scrollbar-thumb{border-radius:6px;background-color:transparent}.mt-doc-nav:hover::-webkit-scrollbar-thumb{background-color:rgba(69,90,100,.2)}.mt-doc-nav__item a,.mt-doc-nav__subitem a{margin:0;display:block;color:#455a64;font-size:16px;padding:10px 10px 10px 30px;line-height:24px;-webkit-transition:all .3s;transition:all .3s}.mt-doc-nav__item a.active,.mt-doc-nav__subitem a.active{color:#1989fa;font-size:15px;font-weight:500}.mt-doc-nav__item>a{font-weight:700}.mt-doc-nav__subitem a{font-size:14px}.mt-doc-nav__subitem a:hover{color:#1989fa}.mt-doc-nav__subitem span{font-size:13px}.mt-doc-nav__group-title{font-size:12px;line-height:40px;padding-left:30px;color:rgba(69,90,100,.6)}@media (max-width:1300px){.mt-doc-nav{min-width:220px;max-width:220px}.mt-doc-nav__item a,.mt-doc-nav__subitem a{line-height:22px}.mt-doc-nav__subitem a{font-size:13px}}", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("fadc5bb4", content, true);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".mt-doc-block{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.mt-doc-block .highlight{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.mt-doc-block .highlight pre{word-break:break-all}", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a8918b3e", content, true);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".mt-doc-header{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-shadow:0 4px 12px #ebedf0;box-shadow:0 4px 12px #ebedf0}.mt-doc-header__top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#001938;padding:0 30px;height:60px;line-height:60px}.mt-doc-header__top-nav{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right}.mt-doc-header__top-nav>li{display:inline-block;position:relative;vertical-align:middle}.mt-doc-header__top-nav-item{margin-left:25px}.mt-doc-header__top-nav-title{display:block;font-size:15px}.mt-doc-header__cube{position:relative;cursor:pointer;padding:0 10px;font-size:14px;line-height:24px;display:block;border-radius:20px;text-align:center;color:#fff;border:1px solid hsla(0,0%,100%,.7);font-family:Helvetica Neue,Arial,sans-serif;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.mt-doc-header__version{padding-right:20px}.mt-doc-header__version:after{position:absolute;content:\"\";top:7px;right:7px;width:5px;height:5px;border:1px solid;color:hsla(0,0%,100%,.9);border-color:transparent transparent currentColor currentColor;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.mt-doc-header__version-pop{position:absolute;z-index:99;left:0;right:0;top:30px;color:#333;-webkit-transition:.2s cubic-bezier(.215,.61,.355,1);transition:.2s cubic-bezier(.215,.61,.355,1);text-align:left;line-height:36px;border-radius:3px;-webkit-transform-origin:top;transform-origin:top;background-color:#fff;-webkit-box-shadow:0 4px 12px #ebedf0;box-shadow:0 4px 12px #ebedf0}.mt-doc-header__version-pop-item{padding-left:7px;-webkit-transition:.2s;transition:.2s}.mt-doc-header__version-pop-item:hover{color:#1989fa}.mt-doc-header__logo{display:block}.mt-doc-header__logo img,.mt-doc-header__logo span{display:inline-block;vertical-align:middle}.mt-doc-header__logo img{width:26px;margin-right:5px}.mt-doc-header__logo span{color:#fff;font-size:22px}.mt-doc-dropdown-enter,.mt-doc-dropdown-leave-active{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("560400d4", content, true);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".mt-doc-content{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 0 75px}.mt-doc-content .card{margin-bottom:24px;padding:24px;background-color:#fff;border-radius:6px;-webkit-box-shadow:0 8px 12px #ebedf0;box-shadow:0 8px 12px #ebedf0}.mt-doc-content a{color:#1989fa}.mt-doc-content h1,.mt-doc-content h2,.mt-doc-content h3,.mt-doc-content h4,.mt-doc-content h5,.mt-doc-content h6{color:#333;font-weight:400;line-height:1.5;cursor:pointer}.mt-doc-content h1{margin:0 0 30px;font-size:30px;cursor:default}.mt-doc-content h2{font-size:22px;margin:45px 0 20px}.mt-doc-content h3{font-size:17px;font-weight:500;margin-bottom:12px}.mt-doc-content h4{font-size:15px;font-weight:500;margin:24px 0 12px}.mt-doc-content h5{font-size:14px;font-weight:500;margin:24px 0 12px}.mt-doc-content p{font-size:14px;line-height:26px;color:#34495e}.mt-doc-content table{width:100%;margin-top:12px;font-size:13px;line-height:1.5;border-radius:6px;border-collapse:collapse;color:#34495e}.mt-doc-content table th{padding:8px 10px;text-align:left;font-weight:500}.mt-doc-content table th:first-child{padding-left:0}.mt-doc-content table th:last-child{padding-right:0}.mt-doc-content table td{padding:8px;border-top:1px solid #f1f4f8}.mt-doc-content table td:first-child{padding-left:0}.mt-doc-content table td:last-child{padding-right:0}.mt-doc-content table code{font-size:13px;padding:0 8px;font-family:inherit;word-break:keep-all}.mt-doc-content table em{color:#a7419e;font-size:12px;font-family:Source Code Pro,Monaco,Inconsolata,monospace;font-style:normal}.mt-doc-content ol li,.mt-doc-content ul li{color:#34495e;font-size:14px;line-height:22px;margin:5px 0 5px 10px;padding-left:15px;position:relative}.mt-doc-content ol li:before,.mt-doc-content ul li:before{content:\"\";position:absolute;top:0;left:0;width:6px;height:6px;margin-top:8px;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #666}.mt-doc-content hr{border:0 none;margin:30px 0;border-top:1px solid #eee}.mt-doc-content li>code,.mt-doc-content p>code,.mt-doc-content table code{margin:2px 3px;padding:2px 5px;display:inline;-webkit-box-shadow:none;box-shadow:none;background-color:#f0f2f5}.mt-doc-content section{padding:30px;overflow:hidden}.mt-doc-content blockquote{padding:16px;margin:20px 0 0;font-size:14px;border-radius:4px;background-color:#ecf9ff;color:rgba(52,73,94,.8);border-left:5px solid #50bfff}.mt-doc-content img{width:100%;margin:15px 0;-webkit-box-shadow:0 2px 4px #ebedf0;box-shadow:0 2px 4px #ebedf0}.mt-doc-content--changelog strong{display:block;margin:12px 0;font-size:15px;font-weight:500}.mt-doc-content--changelog h3{font-size:20px}.mt-doc-content--changelog h3+p code{margin:0}.mt-doc-content--changelog h3 a{color:inherit}", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c03af612", content, true);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".mt-doc-container{overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:220px}.mt-doc-container--with-simulator{padding-right:390px}@media (max-width:1300px){.mt-doc-container--with-simulator{padding-right:350px}}", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5c04df79", content, true);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".mt-doc-simulator{z-index:1;overflow:hidden;position:absolute;border-radius:6px;background:#fafafa;-webkit-box-sizing:border-box;box-sizing:border-box;right:30px;width:360px;min-width:360px;top:90px;-webkit-box-shadow:#ebedf0 0 4px 12px;box-shadow:0 4px 12px #ebedf0}@media (max-width:1300px){.mt-doc-simulator{width:320px;min-width:320px}}@media (max-width:1200px){.mt-doc-simulator{left:850px;right:auto}}@media (min-width:1680px){.mt-doc-simulator{right:50%;margin-right:-800px}}.mt-doc-simulator-fixed{position:fixed;top:30px}.mt-doc-simulator iframe{width:100%;display:block}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1b37e650", content, true);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".mt-doc-demo-block__title{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:35px 15px 15px}.mt-doc-demo-block:first-of-type .mt-doc-demo-block__title{padding-top:20px}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("56377084", content, true);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".mt-doc-demo-section{min-height:100vh;padding-bottom:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.mt-doc-demo-section__title{margin:0;padding:15px;font-size:16px;line-height:1.5;font-weight:400;text-transform:capitalize}.mt-doc-demo-section__title+.mt-doc-demo-block .mt-doc-demo-block__title{padding-top:0}", ""]);

// exports


/***/ })
/******/ ]);
