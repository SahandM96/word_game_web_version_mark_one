module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/hello-world","2":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("47e11b22", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("63c8e9a2", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0fa8cc05", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/_nuxt/icons/icon_64x64.5f6a36.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.5f6a36.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.fac9d667.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-material");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(39);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("71f83a6d", content, true)

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Bootstrap v4.6.1 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(.focus-visible),[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus:not(.focus-visible),button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-1,.display-2{font-weight:300;line-height:1.2}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-3,.display-4{font-weight:300;line-height:1.2}.display-4{font-size:3.5rem}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer:before{content:\"\\2014\\00A0\"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:hsla(0,0%,100%,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.form-row>.col>.valid-tooltip,.form-row>[class*=col-]>.valid-tooltip{left:5px}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated select.form-control:valid,select.form-control.is-valid{padding-right:3rem!important;background-position:right 1.5rem center}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem)!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{border-color:#28a745}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-row>.col>.invalid-tooltip,.form-row>[class*=col-]>.invalid-tooltip{left:5px}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated select.form-control:invalid,select.form-control.is-invalid{padding-right:3rem!important;background-position:right 1.5rem center}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem)!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{border-color:#dc3545}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{display:flex;align-items:center;margin-bottom:0}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary.focus,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success.focus,.btn-success:focus,.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info.focus,.btn-info:focus,.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning.focus,.btn-warning:focus,.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger.focus,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light.focus,.btn-light:focus,.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark.focus,.btn-dark:focus,.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3}.btn-link.focus,.btn-link:focus,.btn-link:hover{text-decoration:underline}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropleft .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label,.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label:after,.input-group.has-validation>.custom-select:nth-last-child(n+3),.input-group.has-validation>.form-control:nth-last-child(n+3),.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label,.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label:after,.input-group:not(.has-validation)>.custom-select:not(:last-child),.input-group:not(.has-validation)>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.btn,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.input-group-text,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.5rem;padding-left:1.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label:before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label:before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label:before{pointer-events:none;background-color:#fff;border:1px solid #adb5bd}.custom-control-label:after,.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\"}.custom-control-label:after{background:50%/50% 50% no-repeat}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label:after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label:after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label:after{background-color:#fff;transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(1.5em + .75rem + 2px)}.custom-file-input{z-index:2;margin:0;overflow:hidden;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]:after{content:attr(data-browse)}.custom-file-label{left:0;z-index:1;height:calc(1.5em + .75rem + 2px);overflow:hidden;font-weight:400;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label,.custom-file-label:after{position:absolute;top:0;right:0;padding:.375rem .75rem;line-height:1.5;color:#495057}.custom-file-label:after{bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label:before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label:before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem 1rem}.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:50%/100% 100% no-repeat}.navbar-nav-scroll{max-height:75vh;overflow-y:auto}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;grid-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{float:left;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;z-index:2;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{height:1rem;line-height:0;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{flex-basis:350px;max-width:350px;font-size:.875rem;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);height:-webkit-min-content;height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem);height:-webkit-min-content;height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}[dir=ltr] .tooltip{text-align:left}[dir=rtl] .tooltip{text-align:right}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}[dir=ltr] .popover{text-align:left}[dir=rtl] .popover{text-align:right}.popover{top:0;left:0;z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover,.popover .arrow{position:absolute;display:block}.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{top:0;border-width:0 .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:50%/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{transform:rotate(1turn)}}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid;border-right:.25em solid transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;animation-duration:1.5s}}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.857143%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;-ms-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030}.fixed-bottom{bottom:0}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.stretched-link:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:transparent}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd}blockquote,img,pre,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("32df6d42", content, true)

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.org)\n */.bv-no-focus-ring:focus{outline:none}@media (max-width:575.98px){.bv-d-xs-down-none{display:none!important}}@media (max-width:767.98px){.bv-d-sm-down-none{display:none!important}}@media (max-width:991.98px){.bv-d-md-down-none{display:none!important}}@media (max-width:1199.98px){.bv-d-lg-down-none{display:none!important}}.bv-d-xl-down-none{display:none!important}.form-control.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-avatar{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;flex-shrink:0;width:2.5rem;height:2.5rem;font-size:inherit;font-weight:400;line-height:1;max-width:100%;max-height:auto;text-align:center;overflow:visible;position:relative;transition:color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out}.b-avatar:focus{outline:0}.b-avatar.btn,.b-avatar[href]{padding:0;border:0}.b-avatar.btn .b-avatar-img img,.b-avatar[href] .b-avatar-img img{transition:transform .15s ease-in-out}.b-avatar.btn:not(:disabled):not(.disabled),.b-avatar[href]:not(:disabled):not(.disabled){cursor:pointer}.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img,.b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img{transform:scale(1.15)}.b-avatar.disabled,.b-avatar:disabled,.b-avatar[disabled]{opacity:.65;pointer-events:none}.b-avatar .b-avatar-custom,.b-avatar .b-avatar-img,.b-avatar .b-avatar-text{border-radius:inherit;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;-webkit-mask-image:radial-gradient(#fff,#000);mask-image:radial-gradient(#fff,#000)}.b-avatar .b-avatar-text{text-transform:uppercase;white-space:nowrap}.b-avatar[href]{text-decoration:none}.b-avatar>.b-icon{width:60%;height:auto;max-width:100%}.b-avatar .b-avatar-img img{width:100%;height:100%;max-height:auto;border-radius:inherit;-o-object-fit:cover;object-fit:cover}.b-avatar .b-avatar-badge{position:absolute;min-height:1.5em;min-width:1.5em;padding:.25em;line-height:1;border-radius:10em;font-size:70%;font-weight:700;z-index:1}.b-avatar-sm{width:1.5rem;height:1.5rem}.b-avatar-sm .b-avatar-text{font-size:.6rem}.b-avatar-sm .b-avatar-badge{font-size:.42rem}.b-avatar-lg{width:3.5rem;height:3.5rem}.b-avatar-lg .b-avatar-text{font-size:1.4rem}.b-avatar-lg .b-avatar-badge{font-size:.98rem}.b-avatar-group .b-avatar-group-inner{display:flex;flex-wrap:wrap}.b-avatar-group .b-avatar{border:1px solid #dee2e6}.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled),.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled){z-index:1}.b-calendar{display:inline-flex}.b-calendar .b-calendar-inner{min-width:250px}.b-calendar .b-calendar-header,.b-calendar .b-calendar-nav{margin-bottom:.25rem}.b-calendar .b-calendar-nav .btn{padding:.25rem}.b-calendar output{padding:.25rem;font-size:80%}.b-calendar output.readonly{background-color:#e9ecef;opacity:1}.b-calendar .b-calendar-footer{margin-top:.5rem}.b-calendar .b-calendar-grid{padding:0;margin:0;overflow:hidden}.b-calendar .b-calendar-grid .row{flex-wrap:nowrap}.b-calendar .b-calendar-grid-caption{padding:.25rem}.b-calendar .b-calendar-grid-body .col[data-date] .btn{width:32px;height:32px;font-size:14px;line-height:1;margin:3px auto;padding:9px 0}.b-calendar .btn.disabled,.b-calendar .btn:disabled,.b-calendar .btn[aria-disabled=true]{cursor:default;pointer-events:none}.card-img-left{border-top-left-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-img-right{border-top-right-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret:before,.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret:after{display:none!important}.dropdown .dropdown-menu:focus{outline:none}.b-dropdown-form{display:inline-block;padding:.25rem 1.5rem;width:100%;clear:both;font-weight:400}.b-dropdown-form:focus{outline:1px dotted!important;outline:5px auto -webkit-focus-ring-color!important}.b-dropdown-form.disabled,.b-dropdown-form:disabled{outline:0!important;color:#adb5bd;pointer-events:none}.b-dropdown-text{display:inline-block;padding:.25rem 1.5rem;margin-bottom:0;width:100%;clear:both;font-weight:lighter}.custom-checkbox.b-custom-control-lg,.input-group-lg .custom-checkbox{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-checkbox.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-checkbox .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:.3rem}.custom-checkbox.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-checkbox .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background-size:50% 50%}.custom-checkbox.b-custom-control-sm,.input-group-sm .custom-checkbox{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-checkbox.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-checkbox .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:.2rem}.custom-checkbox.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-checkbox .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background-size:50% 50%}.custom-switch.b-custom-control-lg,.input-group-lg .custom-switch{padding-left:2.8125rem}.custom-switch.b-custom-control-lg .custom-control-label,.input-group-lg .custom-switch .custom-control-label{font-size:1.25rem;line-height:1.5}.custom-switch.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-switch .custom-control-label:before{top:.3125rem;height:1.25rem;left:-2.8125rem;width:2.1875rem;border-radius:.625rem}.custom-switch.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-switch .custom-control-label:after{top:calc(.3125rem + 2px);left:calc(-2.8125rem + 2px);width:calc(1.25rem - 4px);height:calc(1.25rem - 4px);border-radius:.625rem;background-size:50% 50%}.custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after,.input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.9375rem)}.custom-switch.b-custom-control-sm,.input-group-sm .custom-switch{padding-left:1.96875rem}.custom-switch.b-custom-control-sm .custom-control-label,.input-group-sm .custom-switch .custom-control-label{font-size:.875rem;line-height:1.5}.custom-switch.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-switch .custom-control-label:before{top:.21875rem;left:-1.96875rem;width:1.53125rem;height:.875rem;border-radius:.4375rem}.custom-switch.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-switch .custom-control-label:after{top:calc(.21875rem + 2px);left:calc(-1.96875rem + 2px);width:calc(.875rem - 4px);height:calc(.875rem - 4px);border-radius:.4375rem;background-size:50% 50%}.custom-switch.b-custom-control-sm .custom-control-input:checked~.custom-control-label:after,.input-group-sm .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.65625rem)}.input-group>.input-group-append:last-child>.btn-group:not(:last-child):not(.dropdown-toggle)>.btn,.input-group>.input-group-append:not(:last-child)>.btn-group>.btn,.input-group>.input-group-prepend>.btn-group>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn-group>.btn,.input-group>.input-group-prepend:first-child>.btn-group:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.btn-group>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.b-form-btn-label-control.form-control{display:flex;align-items:stretch;height:auto;padding:0;background-image:none}.input-group .b-form-btn-label-control.form-control{padding:0}.b-form-btn-label-control.form-control[dir=rtl],[dir=rtl] .b-form-btn-label-control.form-control{flex-direction:row-reverse}.b-form-btn-label-control.form-control[dir=rtl]>label,[dir=rtl] .b-form-btn-label-control.form-control>label{text-align:right}.b-form-btn-label-control.form-control>.btn{line-height:1;font-size:inherit;box-shadow:none!important;border:0}.b-form-btn-label-control.form-control>.btn:disabled{pointer-events:none}.b-form-btn-label-control.form-control.is-valid>.btn{color:#28a745}.b-form-btn-label-control.form-control.is-invalid>.btn{color:#dc3545}.b-form-btn-label-control.form-control>.dropdown-menu{padding:.5rem}.b-form-btn-label-control.form-control>.form-control{height:auto;min-height:calc(1.5em + .75rem);padding-left:.25rem;margin:0;border:0;outline:0;background:transparent;word-break:break-word;font-size:inherit;white-space:normal;cursor:pointer}.b-form-btn-label-control.form-control>.form-control.form-control-sm{min-height:calc(1.5em + .5rem)}.b-form-btn-label-control.form-control>.form-control.form-control-lg{min-height:calc(1.5em + 1rem)}.input-group.input-group-sm .b-form-btn-label-control.form-control>.form-control{min-height:calc(1.5em + .5rem);padding-top:.25rem;padding-bottom:.25rem}.input-group.input-group-lg .b-form-btn-label-control.form-control>.form-control{min-height:calc(1.5em + 1rem);padding-top:.5rem;padding-bottom:.5rem}.b-form-btn-label-control.form-control[aria-disabled=true],.b-form-btn-label-control.form-control[aria-readonly=true]{background-color:#e9ecef;opacity:1}.b-form-btn-label-control.form-control[aria-disabled=true]{pointer-events:none}.b-form-btn-label-control.form-control[aria-disabled=true]>label{cursor:default}.b-form-btn-label-control.btn-group>.dropdown-menu{padding:.5rem}.custom-file-label{white-space:nowrap;overflow-x:hidden}.b-custom-control-lg.custom-file,.b-custom-control-lg .custom-file-input,.b-custom-control-lg .custom-file-label,.input-group-lg.custom-file,.input-group-lg .custom-file-input,.input-group-lg .custom-file-label{font-size:1.25rem;height:calc(1.5em + 1rem + 2px)}.b-custom-control-lg .custom-file-label,.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label,.input-group-lg .custom-file-label:after{padding:.5rem 1rem;line-height:1.5}.b-custom-control-lg .custom-file-label,.input-group-lg .custom-file-label{border-radius:.3rem}.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label:after{font-size:inherit;height:calc(1.5em + 1rem);border-radius:0 .3rem .3rem 0}.b-custom-control-sm.custom-file,.b-custom-control-sm .custom-file-input,.b-custom-control-sm .custom-file-label,.input-group-sm.custom-file,.input-group-sm .custom-file-input,.input-group-sm .custom-file-label{font-size:.875rem;height:calc(1.5em + .5rem + 2px)}.b-custom-control-sm .custom-file-label,.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label,.input-group-sm .custom-file-label:after{padding:.25rem .5rem;line-height:1.5}.b-custom-control-sm .custom-file-label,.input-group-sm .custom-file-label{border-radius:.2rem}.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label:after{font-size:inherit;height:calc(1.5em + .5rem);border-radius:0 .2rem .2rem 0}.form-control.is-invalid,.form-control.is-valid,.was-validated .form-control:invalid,.was-validated .form-control:valid{background-position:right calc(.375em + .1875rem) center}input[type=color].form-control{height:calc(1.5em + .75rem + 2px);padding:.125rem .25rem}.input-group-sm input[type=color].form-control,input[type=color].form-control.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.125rem .25rem}.input-group-lg input[type=color].form-control,input[type=color].form-control.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.125rem .25rem}input[type=color].form-control:disabled{background-color:#adb5bd;opacity:.65}.input-group>.custom-range{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-range,.input-group>.custom-range+.custom-file,.input-group>.custom-range+.custom-range,.input-group>.custom-range+.custom-select,.input-group>.custom-range+.form-control,.input-group>.custom-range+.form-control-plaintext,.input-group>.custom-select+.custom-range,.input-group>.form-control+.custom-range,.input-group>.form-control-plaintext+.custom-range{margin-left:-1px}.input-group>.custom-range:focus{z-index:3}.input-group>.custom-range:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-range:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-range{padding:0 .75rem;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;height:calc(1.5em + .75rem + 2px);border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.input-group>.custom-range{transition:none}}.input-group>.custom-range:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.input-group>.custom-range:disabled,.input-group>.custom-range[readonly]{background-color:#e9ecef}.input-group-lg>.custom-range{height:calc(1.5em + 1rem + 2px);padding:0 1rem;border-radius:.3rem}.input-group-sm>.custom-range{height:calc(1.5em + .5rem + 2px);padding:0 .5rem;border-radius:.2rem}.input-group .custom-range.is-valid,.was-validated .input-group .custom-range:valid{border-color:#28a745}.input-group .custom-range.is-valid:focus,.was-validated .input-group .custom-range:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-range.is-valid:focus::-webkit-slider-thumb,.was-validated .custom-range:valid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-moz-range-thumb,.was-validated .custom-range:valid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-ms-thumb,.was-validated .custom-range:valid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid::-webkit-slider-thumb,.was-validated .custom-range:valid::-webkit-slider-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-webkit-slider-thumb:active,.was-validated .custom-range:valid::-webkit-slider-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-webkit-slider-runnable-track,.was-validated .custom-range:valid::-webkit-slider-runnable-track{background-color:rgba(40,167,69,.35)}.custom-range.is-valid::-moz-range-thumb,.was-validated .custom-range:valid::-moz-range-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-moz-range-thumb:active,.was-validated .custom-range:valid::-moz-range-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-moz-range-track,.was-validated .custom-range:valid::-moz-range-track{background:rgba(40,167,69,.35)}.custom-range.is-valid~.valid-feedback,.custom-range.is-valid~.valid-tooltip,.was-validated .custom-range:valid~.valid-feedback,.was-validated .custom-range:valid~.valid-tooltip{display:block}.custom-range.is-valid::-ms-thumb,.was-validated .custom-range:valid::-ms-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-ms-thumb:active,.was-validated .custom-range:valid::-ms-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-ms-track-lower,.custom-range.is-valid::-ms-track-upper,.was-validated .custom-range:valid::-ms-track-lower,.was-validated .custom-range:valid::-ms-track-upper{background:rgba(40,167,69,.35)}.input-group .custom-range.is-invalid,.was-validated .input-group .custom-range:invalid{border-color:#dc3545}.input-group .custom-range.is-invalid:focus,.was-validated .input-group .custom-range:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-range.is-invalid:focus::-webkit-slider-thumb,.was-validated .custom-range:invalid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-moz-range-thumb,.was-validated .custom-range:invalid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-ms-thumb,.was-validated .custom-range:invalid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid::-webkit-slider-thumb,.was-validated .custom-range:invalid::-webkit-slider-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-webkit-slider-thumb:active,.was-validated .custom-range:invalid::-webkit-slider-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-webkit-slider-runnable-track,.was-validated .custom-range:invalid::-webkit-slider-runnable-track{background-color:rgba(220,53,69,.35)}.custom-range.is-invalid::-moz-range-thumb,.was-validated .custom-range:invalid::-moz-range-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-moz-range-thumb:active,.was-validated .custom-range:invalid::-moz-range-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-moz-range-track,.was-validated .custom-range:invalid::-moz-range-track{background:rgba(220,53,69,.35)}.custom-range.is-invalid~.invalid-feedback,.custom-range.is-invalid~.invalid-tooltip,.was-validated .custom-range:invalid~.invalid-feedback,.was-validated .custom-range:invalid~.invalid-tooltip{display:block}.custom-range.is-invalid::-ms-thumb,.was-validated .custom-range:invalid::-ms-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-ms-thumb:active,.was-validated .custom-range:invalid::-ms-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-ms-track-lower,.custom-range.is-invalid::-ms-track-upper,.was-validated .custom-range:invalid::-ms-track-lower,.was-validated .custom-range:invalid::-ms-track-upper{background:rgba(220,53,69,.35)}.custom-radio.b-custom-control-lg,.input-group-lg .custom-radio{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-radio.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-radio .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:50%}.custom-radio.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-radio .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background:no-repeat 50%/50% 50%}.custom-radio.b-custom-control-sm,.input-group-sm .custom-radio{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-radio.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-radio .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:50%}.custom-radio.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-radio .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background:no-repeat 50%/50% 50%}.b-rating{text-align:center}.b-rating.d-inline-flex{width:auto}.b-rating .b-rating-star,.b-rating .b-rating-value{padding:0 .25em}.b-rating .b-rating-value{min-width:2.5em}.b-rating .b-rating-star{display:inline-flex;justify-content:center;outline:0}.b-rating .b-rating-star .b-rating-icon{display:inline-flex;transition:all .15s ease-in-out}.b-rating.disabled,.b-rating:disabled{background-color:#e9ecef;color:#6c757d}.b-rating:not(.disabled):not(.readonly) .b-rating-star{cursor:pointer}.b-rating:not(.disabled):not(.readonly) .b-rating-star:hover .b-rating-icon,.b-rating:not(.disabled):not(.readonly):focus:not(:hover) .b-rating-star.focused .b-rating-icon{transform:scale(1.5)}.b-rating[dir=rtl] .b-rating-star-half{transform:scaleX(-1)}.b-form-spinbutton{text-align:center;overflow:hidden;background-image:none;padding:0}.b-form-spinbutton[dir=rtl]:not(.flex-column),[dir=rtl] .b-form-spinbutton:not(.flex-column){flex-direction:row-reverse}.b-form-spinbutton output{font-size:inherit;outline:0;border:0;background-color:transparent;width:auto;margin:0;padding:0 .25rem}.b-form-spinbutton output>bdi,.b-form-spinbutton output>div{display:block;min-width:2.25em;height:1.5em}.b-form-spinbutton.flex-column{height:auto;width:auto}.b-form-spinbutton.flex-column output{margin:0 .25rem;padding:.25rem 0}.b-form-spinbutton:not(.d-inline-flex):not(.flex-column){output-width:100%}.b-form-spinbutton.d-inline-flex:not(.flex-column){width:auto}.b-form-spinbutton .btn{line-height:1;box-shadow:none!important}.b-form-spinbutton .btn:disabled{pointer-events:none}.b-form-spinbutton .btn:hover:not(:disabled)>div>.b-icon{transform:scale(1.25)}.b-form-spinbutton.disabled,.b-form-spinbutton.readonly{background-color:#e9ecef}.b-form-spinbutton.disabled{pointer-events:none}.b-form-tags.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.b-form-tags.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.b-form-tags.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-form-tags.disabled{background-color:#e9ecef}.b-form-tags-list{margin-top:-.25rem}.b-form-tags-list .b-form-tag,.b-form-tags-list .b-form-tags-field{margin-top:.25rem}.b-form-tags-input{color:#495057}.b-form-tag{font-size:75%;font-weight:400;line-height:1.5;margin-right:.25rem}.b-form-tag.disabled{opacity:.75}.b-form-tag>button.b-form-tag-remove{color:inherit;font-size:125%;line-height:1;float:none;margin-left:.25rem}.form-control-lg .b-form-tag,.form-control-sm .b-form-tag{line-height:1.5}.media-aside{display:flex;margin-right:1rem}.media-aside-right{margin-right:0;margin-left:1rem}.modal-backdrop{opacity:.5}.b-pagination-pills .page-item .page-link{border-radius:50rem!important;margin-left:.25rem;line-height:1}.b-pagination-pills .page-item:first-child .page-link{margin-left:0}.popover.b-popover{display:block;opacity:1;outline:0}.popover.b-popover.fade:not(.show){opacity:0}.popover.b-popover.show{opacity:1}.b-popover-primary.popover{background-color:#cce5ff;border-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-primary.bs-popover-top>.arrow:before{border-top-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-primary.bs-popover-top>.arrow:after{border-top-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-primary.bs-popover-right>.arrow:before{border-right-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-primary.bs-popover-right>.arrow:after{border-right-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-primary.bs-popover-bottom>.arrow:before{border-bottom-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-primary.bs-popover-bottom .popover-header:before,.b-popover-primary.bs-popover-bottom>.arrow:after{border-bottom-color:#bdddff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-primary.bs-popover-left>.arrow:before{border-left-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-primary.bs-popover-left>.arrow:after{border-left-color:#cce5ff}.b-popover-primary .popover-header{color:#212529;background-color:#bdddff;border-bottom-color:#a3d0ff}.b-popover-primary .popover-body{color:#004085}.b-popover-secondary.popover{background-color:#e2e3e5;border-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-secondary.bs-popover-top>.arrow:before{border-top-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-secondary.bs-popover-top>.arrow:after{border-top-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-secondary.bs-popover-right>.arrow:before{border-right-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-secondary.bs-popover-right>.arrow:after{border-right-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-secondary.bs-popover-bottom>.arrow:before{border-bottom-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-secondary.bs-popover-bottom .popover-header:before,.b-popover-secondary.bs-popover-bottom>.arrow:after{border-bottom-color:#dadbde}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-secondary.bs-popover-left>.arrow:before{border-left-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-secondary.bs-popover-left>.arrow:after{border-left-color:#e2e3e5}.b-popover-secondary .popover-header{color:#212529;background-color:#dadbde;border-bottom-color:#ccced2}.b-popover-secondary .popover-body{color:#383d41}.b-popover-success.popover{background-color:#d4edda;border-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-success.bs-popover-top>.arrow:before{border-top-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-success.bs-popover-top>.arrow:after{border-top-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-success.bs-popover-right>.arrow:before{border-right-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-success.bs-popover-right>.arrow:after{border-right-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-success.bs-popover-bottom>.arrow:before{border-bottom-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-success.bs-popover-bottom .popover-header:before,.b-popover-success.bs-popover-bottom>.arrow:after{border-bottom-color:#c9e8d1}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-success.bs-popover-left>.arrow:before{border-left-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-success.bs-popover-left>.arrow:after{border-left-color:#d4edda}.b-popover-success .popover-header{color:#212529;background-color:#c9e8d1;border-bottom-color:#b7e1c1}.b-popover-success .popover-body{color:#155724}.b-popover-info.popover{background-color:#d1ecf1;border-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-info.bs-popover-top>.arrow:before{border-top-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-info.bs-popover-top>.arrow:after{border-top-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-info.bs-popover-right>.arrow:before{border-right-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-info.bs-popover-right>.arrow:after{border-right-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-info.bs-popover-bottom>.arrow:before{border-bottom-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-info.bs-popover-bottom .popover-header:before,.b-popover-info.bs-popover-bottom>.arrow:after{border-bottom-color:#c5e7ed}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-info.bs-popover-left>.arrow:before{border-left-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-info.bs-popover-left>.arrow:after{border-left-color:#d1ecf1}.b-popover-info .popover-header{color:#212529;background-color:#c5e7ed;border-bottom-color:#b2dfe7}.b-popover-info .popover-body{color:#0c5460}.b-popover-warning.popover{background-color:#fff3cd;border-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-warning.bs-popover-top>.arrow:before{border-top-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-warning.bs-popover-top>.arrow:after{border-top-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-warning.bs-popover-right>.arrow:before{border-right-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-warning.bs-popover-right>.arrow:after{border-right-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-warning.bs-popover-bottom>.arrow:before{border-bottom-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-warning.bs-popover-bottom .popover-header:before,.b-popover-warning.bs-popover-bottom>.arrow:after{border-bottom-color:#ffefbe}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-warning.bs-popover-left>.arrow:before{border-left-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-warning.bs-popover-left>.arrow:after{border-left-color:#fff3cd}.b-popover-warning .popover-header{color:#212529;background-color:#ffefbe;border-bottom-color:#ffe9a4}.b-popover-warning .popover-body{color:#856404}.b-popover-danger.popover{background-color:#f8d7da;border-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-danger.bs-popover-top>.arrow:before{border-top-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-danger.bs-popover-top>.arrow:after{border-top-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-danger.bs-popover-right>.arrow:before{border-right-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-danger.bs-popover-right>.arrow:after{border-right-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-danger.bs-popover-bottom>.arrow:before{border-bottom-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-danger.bs-popover-bottom .popover-header:before,.b-popover-danger.bs-popover-bottom>.arrow:after{border-bottom-color:#f6cace}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-danger.bs-popover-left>.arrow:before{border-left-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-danger.bs-popover-left>.arrow:after{border-left-color:#f8d7da}.b-popover-danger .popover-header{color:#212529;background-color:#f6cace;border-bottom-color:#f2b4ba}.b-popover-danger .popover-body{color:#721c24}.b-popover-light.popover{background-color:#fefefe;border-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-light.bs-popover-top>.arrow:before{border-top-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-light.bs-popover-top>.arrow:after{border-top-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-light.bs-popover-right>.arrow:before{border-right-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-light.bs-popover-right>.arrow:after{border-right-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-light.bs-popover-bottom>.arrow:before{border-bottom-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-light.bs-popover-bottom .popover-header:before,.b-popover-light.bs-popover-bottom>.arrow:after{border-bottom-color:#f6f6f6}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-light.bs-popover-left>.arrow:before{border-left-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-light.bs-popover-left>.arrow:after{border-left-color:#fefefe}.b-popover-light .popover-header{color:#212529;background-color:#f6f6f6;border-bottom-color:#eaeaea}.b-popover-light .popover-body{color:#818182}.b-popover-dark.popover{background-color:#d6d8d9;border-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-dark.bs-popover-top>.arrow:before{border-top-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-dark.bs-popover-top>.arrow:after{border-top-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-dark.bs-popover-right>.arrow:before{border-right-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-dark.bs-popover-right>.arrow:after{border-right-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-dark.bs-popover-bottom>.arrow:before{border-bottom-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-dark.bs-popover-bottom .popover-header:before,.b-popover-dark.bs-popover-bottom>.arrow:after{border-bottom-color:#ced0d2}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-dark.bs-popover-left>.arrow:before{border-left-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-dark.bs-popover-left>.arrow:after{border-left-color:#d6d8d9}.b-popover-dark .popover-header{color:#212529;background-color:#ced0d2;border-bottom-color:#c1c4c5}.b-popover-dark .popover-body{color:#1b1e21}.b-sidebar-outer{position:fixed;top:0;left:0;right:0;height:0;overflow:visible;z-index:1035}.b-sidebar-backdrop{left:0;z-index:-1;width:100vw;opacity:.6}.b-sidebar,.b-sidebar-backdrop{position:fixed;top:0;height:100vh}.b-sidebar{display:flex;flex-direction:column;width:320px;max-width:100%;max-height:100%;margin:0;outline:0;transform:translateX(0)}.b-sidebar.slide{transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.b-sidebar.slide{transition:none}}.b-sidebar:not(.b-sidebar-right){left:0;right:auto}.b-sidebar:not(.b-sidebar-right).slide:not(.show){transform:translateX(-100%)}.b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close{margin-left:auto}.b-sidebar.b-sidebar-right{left:auto;right:0}.b-sidebar.b-sidebar-right.slide:not(.show){transform:translateX(100%)}.b-sidebar.b-sidebar-right>.b-sidebar-header .close{margin-right:auto}.b-sidebar>.b-sidebar-header{font-size:1.5rem;padding:.5rem 1rem;display:flex;flex-direction:row;flex-grow:0;align-items:center}[dir=rtl] .b-sidebar>.b-sidebar-header{flex-direction:row-reverse}.b-sidebar>.b-sidebar-header .close{float:none;font-size:1.5rem}.b-sidebar>.b-sidebar-body{flex-grow:1;height:100%;overflow-y:auto}.b-sidebar>.b-sidebar-footer{flex-grow:0}.b-skeleton-wrapper{cursor:wait}.b-skeleton{position:relative;overflow:hidden;background-color:rgba(0,0,0,.12);cursor:wait;-webkit-mask-image:radial-gradient(#fff,#000);mask-image:radial-gradient(#fff,#000)}.b-skeleton:before{content:\" \"}.b-skeleton-text{height:1rem;margin-bottom:.25rem;border-radius:.25rem}.b-skeleton-button{width:75px;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.b-skeleton-avatar{width:2.5em;height:2.5em;border-radius:50%}.b-skeleton-input{height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;line-height:1.5;border:1px solid #ced4da;border-radius:.25rem}.b-skeleton-icon-wrapper svg{color:rgba(0,0,0,.12)}.b-skeleton-img{height:100%;width:100%}.b-skeleton-animate-wave:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.4),transparent);-webkit-animation:b-skeleton-animate-wave 1.75s linear infinite;animation:b-skeleton-animate-wave 1.75s linear infinite}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-wave:after{background:none;-webkit-animation:none;animation:none}}@-webkit-keyframes b-skeleton-animate-wave{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes b-skeleton-animate-wave{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}.b-skeleton-animate-fade{-webkit-animation:b-skeleton-animate-fade .875s ease-in-out infinite alternate;animation:b-skeleton-animate-fade .875s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-fade{-webkit-animation:none;animation:none}}@-webkit-keyframes b-skeleton-animate-fade{0%{opacity:1}to{opacity:.4}}@keyframes b-skeleton-animate-fade{0%{opacity:1}to{opacity:.4}}.b-skeleton-animate-throb{-webkit-animation:b-skeleton-animate-throb .875s ease-in infinite alternate;animation:b-skeleton-animate-throb .875s ease-in infinite alternate}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-throb{-webkit-animation:none;animation:none}}@-webkit-keyframes b-skeleton-animate-throb{0%{transform:scale(1)}to{transform:scale(.975)}}@keyframes b-skeleton-animate-throb{0%{transform:scale(1)}to{transform:scale(.975)}}.table.b-table.b-table-fixed{table-layout:fixed}.table.b-table.b-table-no-border-collapse{border-collapse:separate;border-spacing:0}.table.b-table[aria-busy=true]{opacity:.55}.table.b-table>tbody>tr.b-table-details>td{border-top:none!important}.table.b-table>caption{caption-side:bottom}.table.b-table.b-table-caption-top>caption{caption-side:top!important}.table.b-table>tbody>.table-active,.table.b-table>tbody>.table-active>td,.table.b-table>tbody>.table-active>th{background-color:rgba(0,0,0,.075)}.table.b-table.table-hover>tbody>tr.table-active:hover td,.table.b-table.table-hover>tbody>tr.table-active:hover th{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table>tbody>.bg-active,.table.b-table>tbody>.bg-active>td,.table.b-table>tbody>.bg-active>th{background-color:hsla(0,0%,100%,.075)!important}.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover td,.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover th{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}.b-table-sticky-header,.table-responsive,[class*=table-responsive-]{margin-bottom:1rem}.b-table-sticky-header>.table,.table-responsive>.table,[class*=table-responsive-]>.table{margin-bottom:0}.b-table-sticky-header{overflow-y:auto;max-height:300px}@media print{.b-table-sticky-header{overflow-y:visible!important;max-height:none!important}}@supports ((position:-webkit-sticky) or (position:sticky)){.b-table-sticky-header>.table.b-table>thead>tr>th{position:-webkit-sticky;position:sticky;top:0;z-index:2}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{position:-webkit-sticky;position:sticky;left:0}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{z-index:5}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{z-index:2}.table.b-table>tbody>tr>.table-b-table-default,.table.b-table>tfoot>tr>.table-b-table-default,.table.b-table>thead>tr>.table-b-table-default{color:#212529;background-color:#fff}.table.b-table.table-dark>tbody>tr>.bg-b-table-default,.table.b-table.table-dark>tfoot>tr>.bg-b-table-default,.table.b-table.table-dark>thead>tr>.bg-b-table-default{color:#fff;background-color:#343a40}.table.b-table.table-striped>tbody>tr:nth-of-type(odd)>.table-b-table-default{background-image:linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05));background-repeat:no-repeat}.table.b-table.table-striped.table-dark>tbody>tr:nth-of-type(odd)>.bg-b-table-default{background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,.05));background-repeat:no-repeat}.table.b-table.table-hover>tbody>tr:hover>.table-b-table-default{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table.table-hover.table-dark>tbody>tr:hover>.bg-b-table-default{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}}.table.b-table>tfoot>tr>[aria-sort],.table.b-table>thead>tr>[aria-sort]{cursor:pointer;background-image:none;background-repeat:no-repeat;background-size:.65em 1em}.table.b-table>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .375rem center;padding-right:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .375rem center;padding-left:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort=none],.table.b-table>thead>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=ascending],.table.b-table>thead>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=descending],.table.b-table>thead>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=none],.table.b-table.table-dark>thead>tr>[aria-sort=none],.table.b-table>.thead-dark>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=ascending],.table.b-table.table-dark>thead>tr>[aria-sort=ascending],.table.b-table>.thead-dark>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=descending],.table.b-table.table-dark>thead>tr>[aria-sort=descending],.table.b-table>.thead-dark>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=none],.table.b-table>thead>tr>.table-dark[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=ascending],.table.b-table>thead>tr>.table-dark[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=descending],.table.b-table>thead>tr>.table-dark[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-sm>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table.table-sm>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .15rem center;padding-right:calc(.3rem + .65em)}.table.b-table.table-sm>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table.table-sm>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .15rem center;padding-left:calc(.3rem + .65em)}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click)>tbody>tr{cursor:pointer}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range>tbody>tr{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:575.98px){.table.b-table.b-table-stacked-sm{display:block;width:100%}.table.b-table.b-table-stacked-sm>caption,.table.b-table.b-table-stacked-sm>tbody,.table.b-table.b-table-stacked-sm>tbody>tr,.table.b-table.b-table-stacked-sm>tbody>tr>td,.table.b-table.b-table-stacked-sm>tbody>tr>th{display:block}.table.b-table.b-table-stacked-sm>tfoot,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-sm>thead,.table.b-table.b-table-stacked-sm>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-sm>caption{caption-side:top!important}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr.bottom-row,.table.b-table.b-table-stacked-sm>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-sm>tbody>tr>:first-child,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:767.98px){.table.b-table.b-table-stacked-md{display:block;width:100%}.table.b-table.b-table-stacked-md>caption,.table.b-table.b-table-stacked-md>tbody,.table.b-table.b-table-stacked-md>tbody>tr,.table.b-table.b-table-stacked-md>tbody>tr>td,.table.b-table.b-table-stacked-md>tbody>tr>th{display:block}.table.b-table.b-table-stacked-md>tfoot,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-md>thead,.table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-md>caption{caption-side:top!important}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-md>tbody>tr.bottom-row,.table.b-table.b-table-stacked-md>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-md>tbody>tr>:first-child,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:991.98px){.table.b-table.b-table-stacked-lg{display:block;width:100%}.table.b-table.b-table-stacked-lg>caption,.table.b-table.b-table-stacked-lg>tbody,.table.b-table.b-table-stacked-lg>tbody>tr,.table.b-table.b-table-stacked-lg>tbody>tr>td,.table.b-table.b-table-stacked-lg>tbody>tr>th{display:block}.table.b-table.b-table-stacked-lg>tfoot,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-lg>thead,.table.b-table.b-table-stacked-lg>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-lg>caption{caption-side:top!important}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr.bottom-row,.table.b-table.b-table-stacked-lg>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-lg>tbody>tr>:first-child,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:1199.98px){.table.b-table.b-table-stacked-xl{display:block;width:100%}.table.b-table.b-table-stacked-xl>caption,.table.b-table.b-table-stacked-xl>tbody,.table.b-table.b-table-stacked-xl>tbody>tr,.table.b-table.b-table-stacked-xl>tbody>tr>td,.table.b-table.b-table-stacked-xl>tbody>tr>th{display:block}.table.b-table.b-table-stacked-xl>tfoot,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-xl>thead,.table.b-table.b-table-stacked-xl>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-xl>caption{caption-side:top!important}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr.bottom-row,.table.b-table.b-table-stacked-xl>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-xl>tbody>tr>:first-child,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+th{border-top-width:3px}}.table.b-table.b-table-stacked{display:block;width:100%}.table.b-table.b-table-stacked>caption,.table.b-table.b-table-stacked>tbody,.table.b-table.b-table-stacked>tbody>tr,.table.b-table.b-table-stacked>tbody>tr>td,.table.b-table.b-table-stacked>tbody>tr>th{display:block}.table.b-table.b-table-stacked>tfoot,.table.b-table.b-table-stacked>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked>thead,.table.b-table.b-table-stacked>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked>caption{caption-side:top!important}.table.b-table.b-table-stacked>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked>tbody>tr.bottom-row,.table.b-table.b-table-stacked>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked>tbody>tr>:first-child,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+th{border-top-width:3px}.b-time{min-width:150px}.b-time[aria-disabled=true] output,.b-time[aria-readonly=true] output,.b-time output.disabled{background-color:#e9ecef;opacity:1}.b-time[aria-disabled=true] output{pointer-events:none}[dir=rtl] .b-time>.d-flex:not(.flex-column){flex-direction:row-reverse}.b-time .b-time-header{margin-bottom:.5rem}.b-time .b-time-header output{padding:.25rem;font-size:80%}.b-time .b-time-footer{margin-top:.5rem}.b-time .b-time-ampm{margin-left:.5rem}.b-toast{display:block;position:relative;max-width:350px;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-clip:padding-box;z-index:1;border-radius:.25rem}.b-toast .toast{background-color:hsla(0,0%,100%,.85)}.b-toast:not(:last-child){margin-bottom:.75rem}.b-toast.b-toast-solid .toast{background-color:#fff}.b-toast .toast{opacity:1}.b-toast .toast.fade:not(.show){opacity:0}.b-toast .toast .toast-body{display:block}.b-toast-primary .toast{background-color:rgba(230,242,255,.85);border-color:rgba(184,218,255,.85);color:#004085}.b-toast-primary .toast .toast-header{color:#004085;background-color:rgba(204,229,255,.85);border-bottom-color:rgba(184,218,255,.85)}.b-toast-primary.b-toast-solid .toast{background-color:#e6f2ff}.b-toast-secondary .toast{background-color:rgba(239,240,241,.85);border-color:rgba(214,216,219,.85);color:#383d41}.b-toast-secondary .toast .toast-header{color:#383d41;background-color:rgba(226,227,229,.85);border-bottom-color:rgba(214,216,219,.85)}.b-toast-secondary.b-toast-solid .toast{background-color:#eff0f1}.b-toast-success .toast{background-color:rgba(230,245,233,.85);border-color:rgba(195,230,203,.85);color:#155724}.b-toast-success .toast .toast-header{color:#155724;background-color:rgba(212,237,218,.85);border-bottom-color:rgba(195,230,203,.85)}.b-toast-success.b-toast-solid .toast{background-color:#e6f5e9}.b-toast-info .toast{background-color:rgba(229,244,247,.85);border-color:rgba(190,229,235,.85);color:#0c5460}.b-toast-info .toast .toast-header{color:#0c5460;background-color:rgba(209,236,241,.85);border-bottom-color:rgba(190,229,235,.85)}.b-toast-info.b-toast-solid .toast{background-color:#e5f4f7}.b-toast-warning .toast{background-color:rgba(255,249,231,.85);border-color:rgba(255,238,186,.85);color:#856404}.b-toast-warning .toast .toast-header{color:#856404;background-color:rgba(255,243,205,.85);border-bottom-color:rgba(255,238,186,.85)}.b-toast-warning.b-toast-solid .toast{background-color:#fff9e7}.b-toast-danger .toast{background-color:rgba(252,237,238,.85);border-color:rgba(245,198,203,.85);color:#721c24}.b-toast-danger .toast .toast-header{color:#721c24;background-color:rgba(248,215,218,.85);border-bottom-color:rgba(245,198,203,.85)}.b-toast-danger.b-toast-solid .toast{background-color:#fcedee}.b-toast-light .toast{background-color:hsla(0,0%,100%,.85);border-color:rgba(253,253,254,.85);color:#818182}.b-toast-light .toast .toast-header{color:#818182;background-color:hsla(0,0%,99.6%,.85);border-bottom-color:rgba(253,253,254,.85)}.b-toast-light.b-toast-solid .toast{background-color:#fff}.b-toast-dark .toast{background-color:rgba(227,229,229,.85);border-color:rgba(198,200,202,.85);color:#1b1e21}.b-toast-dark .toast .toast-header{color:#1b1e21;background-color:rgba(214,216,217,.85);border-bottom-color:rgba(198,200,202,.85)}.b-toast-dark.b-toast-solid .toast{background-color:#e3e5e5}.b-toaster{z-index:1100}.b-toaster .b-toaster-slot{position:relative;display:block}.b-toaster .b-toaster-slot:empty{display:none!important}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right,.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{position:fixed;left:.5rem;right:.5rem;margin:0;padding:0;height:0;overflow:visible}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{position:absolute;max-width:350px;width:100%;left:0;right:0;padding:0;margin:0}.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-top-full .b-toaster-slot .toast{width:100%;max-width:100%}.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{top:0}.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{top:.5rem}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right{bottom:0}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot{bottom:.5rem}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{margin-left:auto}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot{margin-right:auto}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-move,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-move{transition:transform .175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade{transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active{position:absolute;transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade{transition-delay:0s}.tooltip.b-tooltip{display:block;opacity:.9;outline:0}.tooltip.b-tooltip.fade:not(.show){opacity:0}.tooltip.b-tooltip.show{opacity:.9}.tooltip.b-tooltip.noninteractive{pointer-events:none}.tooltip.b-tooltip .arrow{margin:0 .25rem}.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.bs-tooltip-left .arrow,.tooltip.b-tooltip.bs-tooltip-right .arrow{margin:.25rem 0}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-top .arrow:before{border-top-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-right .arrow:before{border-right-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow:before{border-bottom-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-left .arrow:before{border-left-color:#007bff}.tooltip.b-tooltip-primary .tooltip-inner{color:#fff;background-color:#007bff}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow:before{border-top-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow:before{border-right-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow:before{border-bottom-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow:before{border-left-color:#6c757d}.tooltip.b-tooltip-secondary .tooltip-inner{color:#fff;background-color:#6c757d}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-top .arrow:before{border-top-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-right .arrow:before{border-right-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow:before{border-bottom-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-left .arrow:before{border-left-color:#28a745}.tooltip.b-tooltip-success .tooltip-inner{color:#fff;background-color:#28a745}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-top .arrow:before{border-top-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-right .arrow:before{border-right-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow:before{border-bottom-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-left .arrow:before{border-left-color:#17a2b8}.tooltip.b-tooltip-info .tooltip-inner{color:#fff;background-color:#17a2b8}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-top .arrow:before{border-top-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-right .arrow:before{border-right-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow:before{border-bottom-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-left .arrow:before{border-left-color:#ffc107}.tooltip.b-tooltip-warning .tooltip-inner{color:#212529;background-color:#ffc107}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-top .arrow:before{border-top-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-right .arrow:before{border-right-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow:before{border-bottom-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-left .arrow:before{border-left-color:#dc3545}.tooltip.b-tooltip-danger .tooltip-inner{color:#fff;background-color:#dc3545}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-top .arrow:before{border-top-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-right .arrow:before{border-right-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow:before{border-bottom-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-left .arrow:before{border-left-color:#f8f9fa}.tooltip.b-tooltip-light .tooltip-inner{color:#212529;background-color:#f8f9fa}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-top .arrow:before{border-top-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-right .arrow:before{border-right-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow:before{border-bottom-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-left .arrow:before{border-left-color:#343a40}.tooltip.b-tooltip-dark .tooltip-inner{color:#fff;background-color:#343a40}.b-icon.bi{display:inline-block;overflow:visible;vertical-align:-.15em}.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{transform-origin:center;-webkit-animation:b-icon-animation-cylon .75s ease-in-out infinite alternate;animation:b-icon-animation-cylon .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{transform-origin:center;-webkit-animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate;animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{transform-origin:center;-webkit-animation:b-icon-animation-fade .75s ease-in-out infinite alternate;animation:b-icon-animation-fade .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{transform-origin:center;-webkit-animation:b-icon-animation-spin 2s linear infinite normal;animation:b-icon-animation-spin 2s linear infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{transform-origin:center;animation:b-icon-animation-spin 2s linear infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{transform-origin:center;-webkit-animation:b-icon-animation-spin 1s steps(8) infinite normal;animation:b-icon-animation-spin 1s steps(8) infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{transform-origin:center;animation:b-icon-animation-spin 1s steps(8) infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{transform-origin:center;-webkit-animation:b-icon-animation-throb .75s ease-in-out infinite alternate;animation:b-icon-animation-throb .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{-webkit-animation:none;animation:none}}@-webkit-keyframes b-icon-animation-cylon{0%{transform:translateX(-25%)}to{transform:translateX(25%)}}@keyframes b-icon-animation-cylon{0%{transform:translateX(-25%)}to{transform:translateX(25%)}}@-webkit-keyframes b-icon-animation-cylon-vertical{0%{transform:translateY(25%)}to{transform:translateY(-25%)}}@keyframes b-icon-animation-cylon-vertical{0%{transform:translateY(25%)}to{transform:translateY(-25%)}}@-webkit-keyframes b-icon-animation-fade{0%{opacity:.1}to{opacity:1}}@keyframes b-icon-animation-fade{0%{opacity:.1}to{opacity:1}}@-webkit-keyframes b-icon-animation-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes b-icon-animation-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@-webkit-keyframes b-icon-animation-throb{0%{opacity:.5;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes b-icon-animation-throb{0%{opacity:.5;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.btn .b-icon.bi,.dropdown-item .b-icon.bi,.dropdown-toggle .b-icon.bi,.input-group-text .b-icon.bi,.nav-link .b-icon.bi{font-size:125%;vertical-align:text-bottom}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("3e7ab538", content, true)

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(31);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"IRANSans\";font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\")}.default-btn-b-color{border-radius:5px;background-color:#3e8bff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/IRANSans.e2b0436.woff2";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_nvm_versions_node_v14_17_5_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".md-app-container{min-height:100vh}.md-title,span{font-family:\"IRANSans\"}.links{padding-top:15px;border:1px solid green;border-radius:5px}.links p{color:green}.links .md-app{min-height:350px;border:1px solid rgba(0,0,0,.12)}.links .md-drawer{width:230px;max-width:calc(100vw - 125px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("d45f5c36", content, true)

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * vue-material v1.0.0-beta-15\n * Made with <3 by marcosmoura 2020\n * Released under the MIT License.\n */*,:after,:before{box-sizing:inherit}html{height:100%;box-sizing:border-box;transition:background-color .3s cubic-bezier(.25,.8,.25,1)}body{min-height:100%;margin:0;position:relative;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,Noto Sans,-apple-system,BlinkMacSystemFont,sans-serif}a:not(.md-button){transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:color,background-color,opacity}audio,canvas,embed,iframe,img,object,video{max-width:100%;font-style:italic;vertical-align:middle}audio:not(.md-image),canvas:not(.md-image),embed:not(.md-image),iframe:not(.md-image),img:not(.md-image),object:not(.md-image),video:not(.md-image){height:auto}[tabindex=\"-1\"]:focus{outline:none!important}.md-scrollbar::-webkit-scrollbar{width:8px;height:8px;border-radius:8px}.md-scrollbar::-webkit-scrollbar-thumb{border-radius:8px}.md-scrollbar::-webkit-scrollbar-button{display:none}.md-caption{font-size:12px;font-weight:400;letter-spacing:.02em;line-height:17px}.md-body-1,body{font-weight:400;line-height:20px}.md-body-1,.md-body-2,body{font-size:14px;letter-spacing:.01em}.md-body-2{font-weight:500;line-height:24px}.md-subheading{font-size:16px;font-weight:400;letter-spacing:.01em;line-height:24px}.md-title{font-size:20px;font-weight:500;letter-spacing:.005em;line-height:26px}.md-headline{font-size:24px;line-height:32px}.md-display-1,.md-headline{font-weight:400;letter-spacing:0}.md-display-1{font-size:34px;line-height:40px}.md-display-2{font-size:45px;font-weight:400;letter-spacing:0;line-height:48px}.md-display-3{font-size:56px;font-weight:400;letter-spacing:-.005em;line-height:58px}.md-display-4{font-size:112px;font-weight:300;letter-spacing:-.01em;line-height:112px}a:not(.md-button){text-decoration:none}a:not(.md-button):hover{text-decoration:underline}button:focus{outline:none}.md-app{display:flex;overflow:hidden;position:relative}.md-app.md-fixed .md-app-scroller{overflow:auto}.md-app.md-fixed-last,.md-app.md-flexible,.md-app.md-overlap,.md-app.md-reveal{transform:translateZ(0)}.md-app.md-fixed-last .md-app-toolbar,.md-app.md-flexible .md-app-toolbar,.md-app.md-overlap .md-app-toolbar,.md-app.md-reveal .md-app-toolbar{position:absolute;top:0}.md-app.md-flexible .md-app-toolbar,.md-app.md-overlap .md-app-toolbar{min-height:0}.md-app.md-flexible .md-toolbar-row:first-child{z-index:2}.md-app.md-flexible .md-toolbar-row:last-child{position:fixed;bottom:0;z-index:1}.md-app.md-flexible .md-display-1{position:fixed}.md-app.md-overlap .md-app-toolbar{z-index:1}.md-app.md-overlap .md-app-content{margin:-64px 24px 24px;position:relative;z-index:2}.md-app-content{padding:16px}.md-app-content>p:first-child{margin-top:0}.md-app-content>p:last-child{margin-bottom:0}.md-app-container{flex:1;display:flex;overflow:auto;transform:translateZ(0);transition:padding-left .4s cubic-bezier(.4,0,.2,1),padding-right .4s cubic-bezier(.4,0,.2,1);will-change:padding-left,padding-right}.md-app-scroller{flex:1}@media (max-width:960px){.md-app.md-overlap .md-app-content{margin:-64px 16px 16px}}@media (max-width:600px){.md-app.md-overlap .md-app-content{margin:-64px 8px 8px}}@media (min-width:600px){.md-app-drawer.md-permanent-card+.md-app-scroller .md-content{padding-left:0;padding-right:0;border-left:none;border-right:none}.md-app-content{border-left:1px solid transparent;border-right:1px solid transparent}}.md-app-internal-drawer,.md-app-side-drawer .md-app-container{flex-direction:column}.md-app-internal-drawer .md-app-scroller{overflow:auto}.md-no-elevation{box-shadow:none!important}.md-fixed-last .md-reveal-active,.md-flexible .md-reveal-active,.md-overlap .md-reveal-active,.md-reveal .md-reveal-active{transform:translate3d(0,calc(100% + 10px),0);transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow,transform;will-change:height,box-shadow,transform}.md-app-toolbar{min-height:64px}.md-overlap .md-app-toolbar{height:196px}.md-fixed-last-active{transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow,transform;will-change:height,box-shadow,transform}.md-overlap-off{z-index:3!important}.md-app-content{min-height:100%}.md-app-content .md-card{margin-right:16px;margin-left:16px;overflow:visible}.md-badge-content{position:relative;display:inline-block}.md-badge-content .md-position-top{top:-4px}.md-badge-content .md-position-bottom{bottom:-4px}.md-badge{position:absolute;transition:.3s cubic-bezier(.4,0,.2,1);display:flex;align-items:center;justify-content:center;right:-4px;font-size:10px;font-style:normal;width:22px;height:22px;border-radius:50%;color:#fff;pointer-events:none;z-index:6}.md-list-item-content .md-badge{position:relative;top:0;bottom:0;right:0}.md-badge.md-dense{width:18px;height:18px;font-size:8px}.md-badge.md-square{width:auto;border-radius:3px;height:18px;padding:0 4px}.md-autocomplete .md-menu{width:100%;display:flex}.md-autocomplete-loading{display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10}.md-field.md-inline.md-autocomplete-box{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);padding-top:2px;border-radius:2px}.md-field.md-inline.md-autocomplete-box.md-focused{z-index:13}.md-field.md-inline.md-autocomplete-box:after,.md-field.md-inline.md-autocomplete-box:before{display:none}.md-toolbar .md-field.md-inline.md-autocomplete-box{min-height:40px;height:40px;margin:0;box-shadow:none}.md-field.md-inline.md-autocomplete-box .md-menu{align-items:center}.md-field.md-inline.md-autocomplete-box .md-input{padding-left:16px}.md-field.md-inline.md-autocomplete-box.md-focused label,.md-field.md-inline.md-autocomplete-box .md-input-action,.md-field.md-inline.md-autocomplete-box label{top:50%;transform:translateY(-50%)}.md-field.md-inline.md-autocomplete-box .md-input-action{right:8px}.md-field.md-inline.md-autocomplete-box.md-focused label,.md-field.md-inline.md-autocomplete-box label{margin-top:2px;left:16px}.md-autocomplete-box-content:after{height:6px;position:absolute;top:-6px;right:0;left:0;z-index:13;border-bottom:1px solid;content:\"\"}.md-avatar{width:40px;min-width:40px;height:40px;margin:auto;display:inline-flex;justify-content:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;position:relative;border-radius:40px;transition:.4s cubic-bezier(.4,0,.2,1);transition-property:color,background-color;will-change:color,background-color;font-size:24px;letter-spacing:-.05em;vertical-align:middle}.md-avatar.md-large{min-width:64px;min-height:64px;border-radius:64px;font-size:32px}.md-avatar.md-large .md-icon{font-size:40px!important}.md-avatar.md-small{width:24px;min-width:24px;height:24px;border-radius:24px;font-size:14px}.md-avatar.md-small .md-icon{font-size:16px!important}.md-avatar .md-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-avatar img{width:100%;height:100%;display:block}.md-avatar .md-ripple{cursor:pointer;display:inline-flex;justify-content:center;align-items:center;border-radius:50%}.md-bottom-bar{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);width:100%;transition:background-color .5s cubic-bezier(.4,0,.2,1)}.md-bottom-bar>.md-ripple{display:flex;flex-wrap:wrap}.md-bottom-bar.md-type-fixed{justify-content:center}.md-bottom-bar.md-type-fixed .md-bottom-bar-item{min-width:80px;max-width:168px;transition:.4s cubic-bezier(.4,0,.2,1);transition-property:color;will-change:color}.md-bottom-bar.md-type-fixed .md-bottom-bar-item .md-bottom-bar-label{transform:scale(.8571) translate3D(0,4px,0)}.md-bottom-bar.md-type-fixed .md-bottom-bar-item.md-active .md-ripple{padding-top:6px}.md-bottom-bar.md-type-fixed .md-bottom-bar-item.md-active .md-bottom-bar-icon{transform:translate3d(0,-2px,0)}.md-bottom-bar.md-type-fixed .md-bottom-bar-item.md-active .md-bottom-bar-label{transform:translate3D(0,3px,0)}.md-bottom-bar.md-type-shift{justify-content:center}.md-bottom-bar.md-type-shift>.md-ripple .md-ripple-enter-active{transition-duration:1.1s!important}.md-bottom-bar.md-type-shift>.md-ripple .md-ripple-enter{opacity:1}.md-bottom-bar.md-type-shift .md-bottom-bar-item{min-width:56px;max-width:96px;flex:1 1 32px;transition:.3s cubic-bezier(.4,0,.2,1);transition-property:padding,min-width,max-width,flex,color;will-change:padding,min-width,max-width,flex,color}.md-bottom-bar.md-type-shift .md-bottom-bar-item .md-ripple{padding:16px}.md-bottom-bar.md-type-shift .md-bottom-bar-item .md-bottom-bar-icon{transform:translate3d(0,8px,0)}.md-bottom-bar.md-type-shift .md-bottom-bar-item .md-bottom-bar-label{opacity:0;transform:scale(.7) translate3d(0,6px,0)}.md-bottom-bar.md-type-shift .md-bottom-bar-item.md-active{min-width:96px;max-width:168px;flex:1 1 72px}.md-bottom-bar.md-type-shift .md-bottom-bar-item.md-active .md-ripple{padding:6px 0 10px}.md-bottom-bar.md-type-shift .md-bottom-bar-item.md-active .md-bottom-bar-icon{transform:translateZ(0)}.md-bottom-bar.md-type-shift .md-bottom-bar-item.md-active .md-bottom-bar-label{opacity:1;transform:translate3d(0,3px,0)}.md-bottom-bar .md-bottom-bar-item{height:56px;margin:0;flex:1;cursor:pointer;border-radius:0;font-size:14px;font-weight:400;line-height:1em;text-transform:none}.md-bottom-bar .md-bottom-bar-item .md-ripple{padding:8px 12px 10px;transition:padding .3s cubic-bezier(.25,.8,.25,1);will-change:padding}.md-bottom-bar .md-bottom-bar-item .md-button-content{position:static;display:flex;flex-direction:column;align-items:center}.md-bottom-bar .md-bottom-bar-item .md-bottom-bar-icon,.md-bottom-bar .md-bottom-bar-item .md-bottom-bar-label{transition:.3s cubic-bezier(.4,0,.2,1);transition-property:transform,opacity;will-change:transform,opacity}.md-ripple{width:100%;height:100%;position:relative;z-index:5;overflow:hidden;-webkit-mask-image:radial-gradient(circle,#fff 100%,#000 0)}.md-ripple-wave{position:absolute;z-index:1;pointer-events:none;background:currentColor;border-radius:50%;opacity:0;transform:scale(2) translateZ(0)}.md-ripple-wave.md-centered{animation-duration:1.2s;top:50%;left:50%}.md-ripple-wave~:not(.md-ripple-wave){position:relative;z-index:2}.md-ripple-enter-active{transition:.8s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform;will-change:opacity,transform}.md-ripple-enter-active.md-centered{transition-duration:1.2s}.md-ripple-enter{opacity:.26;transform:scale(.26) translateZ(0)}.md-button,.md-button-clean{margin:0;padding:0;display:inline-block;position:relative;overflow:hidden;outline:none;background:transparent;border:0;border-radius:0;transition:.4s cubic-bezier(.4,0,.2,1);font-family:inherit;line-height:normal;text-decoration:none;vertical-align:top;white-space:nowrap}.md-button{min-width:88px;height:36px;margin:6px 8px;-webkit-user-select:none;user-select:none;border-radius:2px;font-size:14px;font-weight:500;text-transform:uppercase}.md-button:active{outline:none}.md-button[disabled]{pointer-events:none}.md-button:not([disabled]){cursor:pointer}.md-button:not([disabled]).md-focused:before,.md-button:not([disabled]):active:before,.md-button:not([disabled]):hover:before{background-color:currentColor;opacity:.12}.md-button:not([disabled]).md-focused.md-accent:before,.md-button:not([disabled]).md-focused.md-primary:before,.md-button:not([disabled]):active:before{opacity:.2}.md-button:not([disabled]).md-ripple-off:active:before{opacity:.26}.md-button.md-plain.md-button.md-raised:not([disabled]){color:rgba(0,0,0,.87);background-color:#fff}.md-button.md-plain.md-button.md-raised:not([disabled]) .md-icon-font{color:rgba(0,0,0,.87)}.md-button.md-plain.md-button.md-raised:not([disabled]) .md-icon-image{fill:rgba(0,0,0,.87)}.md-button::-moz-focus-inner{padding:0;border:0}.md-button:before{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;opacity:0;transition:.4s cubic-bezier(.4,0,.2,1);will-change:background-color,opacity;content:\" \"}.md-button.md-dense{height:32px;font-size:13px}.md-button.md-raised:not([disabled]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.md-button.md-raised:not([disabled]):active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-button.md-raised:not([disabled]).md-ripple-off:active:before{opacity:.2}.md-button+.md-button{margin-left:0}.md-button .md-ripple{padding:0 8px;display:flex;justify-content:center;align-items:center}.md-button-spaced .md-ripple{padding:0 16px}.md-fab,.md-icon-button{border-radius:50%;z-index:5}.md-fab .md-ripple,.md-fab:before,.md-icon-button .md-ripple,.md-icon-button:before{border-radius:50%}.md-fab.md-dense .md-ripple-wave,.md-fab.md-mini .md-ripple-wave,.md-icon-button .md-ripple-wave{top:0!important;right:0!important;bottom:0!important;left:0!important}.md-icon-button{width:40px;min-width:40px;height:40px;margin:0 6px}.md-icon-button.md-dense{width:32px;min-width:32px;height:32px}.md-icon-button .md-ripple-enter-active{transition-duration:1.2s}.md-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);width:56px;height:56px;min-width:0;overflow:hidden}.md-fab:active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-fab.md-dense,.md-fab.md-mini{width:40px;height:40px}.md-fab.md-fab-top-left,.md-fab.md-fab-top-right{position:absolute;top:24px}.md-fab.md-fab-bottom-left,.md-fab.md-fab-bottom-right{position:absolute;bottom:24px}.md-fab.md-fab-bottom-center,.md-fab.md-fab-top-center{position:absolute;left:50%;transform:translateX(-50%)}.md-fab.md-fab-top-center{top:24px}.md-fab.md-fab-bottom-center{bottom:24px}.md-fab.md-fab-bottom-right,.md-fab.md-fab-top-right{right:24px}.md-fab.md-fab-bottom-left,.md-fab.md-fab-top-left{left:24px}.md-fab.md-fixed{position:fixed}.md-fab .md-ripple{padding:0}.md-button-content{position:relative;z-index:2}.md-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;z-index:1;border-radius:2px;transition:.3s cubic-bezier(.4,0,.2,1);transition-property:color,background-color;will-change:color,background-color}.md-card.md-with-hover{cursor:pointer;transition:background-color .3s cubic-bezier(.4,0,.2,1),box-shadow .4s cubic-bezier(.25,.8,.25,1);will-change:background-color,box-shadow}.md-card.md-with-hover:hover{z-index:2;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-card.md-expand-active .md-card-expand-trigger.md-icon-button{transform:rotate(180deg)}.md-card .md-subhead,.md-card .md-subheading,.md-card .md-title{margin:0;font-weight:400}.md-card .md-subhead{opacity:.54;font-size:14px;letter-spacing:.01em;line-height:20px}.md-card .md-subhead+.md-title{margin-top:4px}.md-card .md-title{font-size:24px;letter-spacing:0;line-height:32px}.md-card-area,.md-card>.md-card-area:not(:last-child){position:relative}.md-card>.md-card-area:not(:last-child):after{height:1px;position:absolute;bottom:0;content:\" \"}.md-card>.md-card-area:not(:last-child):not(.md-inset):after{right:0;left:0}.md-card>.md-card-area:not(:last-child).md-inset:after{right:16px;left:16px}.md-card-header{padding:16px}.md-card-header:first-child>.md-card-header-text>.md-title:first-child,.md-card-header:first-child>.md-title:first-child{margin-top:8px}.md-card-header:last-child{margin-bottom:8px}.md-card-header.md-card-header-flex{display:flex;justify-content:space-between}.md-card-header+.md-card-content{padding-top:0}.md-card-header+.md-card-actions:not(:last-child){padding:0 8px}.md-card-header>img{border-radius:50%}.md-card-header .md-avatar,.md-card-header>img{margin-right:16px;float:left}.md-card-header .md-avatar~.md-title,.md-card-header>img~.md-title{font-size:14px}.md-card-header .md-avatar~.md-subhead,.md-card-header .md-avatar~.md-title,.md-card-header>img~.md-subhead,.md-card-header>img~.md-title{font-weight:500;line-height:20px}.md-card-header .md-button{margin:0}.md-card-header .md-button:last-child{margin-right:-4px}.md-card-header .md-button+.md-button{margin-left:8px}.md-card-header .md-card-header-text{flex:1}.md-card-header .md-card-media{width:80px;height:80px;margin-left:16px;flex:0 0 80px}.md-card-header .md-card-media.md-medium{width:120px;height:120px;flex:0 0 120px}.md-card-header .md-card-media.md-big{width:160px;height:160px;flex:0 0 160px}.md-card-media{position:relative}.md-card-media.md-ratio-16-9{overflow:hidden}.md-card-media.md-ratio-16-9:before{width:100%;padding-top:56.25%;display:block;content:\" \"}.md-card-media.md-ratio-16-9 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card-media.md-ratio-4-3{overflow:hidden}.md-card-media.md-ratio-4-3:before{width:100%;padding-top:75%;display:block;content:\" \"}.md-card-media.md-ratio-4-3 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card-media.md-ratio-1-1{overflow:hidden}.md-card-media.md-ratio-1-1:before{width:100%;padding-top:100%;display:block;content:\" \"}.md-card-media.md-ratio-1-1 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card-media+.md-card-header{padding-top:24px}.md-card-media+.md-card-content:last-child{padding-bottom:16px}.md-card-media img{width:100%}.md-card-media-actions{padding:16px;display:flex;justify-content:space-between}.md-card-media-actions .md-card-media{max-width:240px;max-height:240px;flex:1}.md-card-media-actions .md-card-actions{margin-left:16px;flex-direction:column;justify-content:flex-start;align-items:center}.md-card-media-actions .md-card-actions .md-button+.md-button{margin:8px 0 0}.md-card-media-cover{position:relative;color:#fff}.md-card-media-cover.md-solid .md-card-area{background-color:rgba(0,0,0,.54)}.md-card-media-cover.md-text-scrim .md-card-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1}.md-card-media-cover .md-card-area{display:flex;flex-direction:column;position:absolute;right:0;bottom:0;left:0;z-index:2}.md-card-media-cover .md-card-header{display:flex;flex-direction:column}.md-card-media-cover .md-card-header+.md-card-actions{padding-top:0}.md-card-media-cover .md-subhead{opacity:1}.md-card-media-cover .md-card-actions .md-button:not(.md-primary):not(.md-accent),.md-card-media-cover .md-card-actions .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon,.md-card-media-cover .md-card-header .md-button:not(.md-primary):not(.md-accent),.md-card-media-cover .md-card-header .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon{color:#fff!important}.md-card-content{padding:16px;font-size:14px;line-height:22px}.md-card-content:last-of-type{padding-bottom:24px}.md-card-expand{overflow:hidden}.md-card-expand .md-card-actions{position:relative;z-index:2}.md-card-expand .md-card-expand-content{position:relative;z-index:1}.md-card-expand-trigger.md-icon-button{transition:transform .4s cubic-bezier(.25,.8,.25,1);will-change:transform}.md-card-expand-content{overflow:hidden;transform:translateZ(0);transition:.4s cubic-bezier(.4,0,.2,1);transition-property:opacity,margin-top;will-change:opacity,margin-top}.md-card-actions{padding:8px;display:flex;align-items:center}.md-card-actions.md-alignment-right{justify-content:flex-end}.md-card-actions.md-alignment-left{justify-content:flex-start}.md-card-actions.md-alignment-space-between{justify-content:space-between}.md-card-actions .md-button{margin:0}.md-card-actions .md-button:first-child{margin-left:0}.md-card-actions .md-button:last-child{margin-right:0}.md-card-actions .md-button+.md-button{margin-left:4px}.md-checkbox{width:auto;margin:16px 16px 16px 0;display:inline-flex;position:relative}.md-checkbox:not(.md-disabled),.md-checkbox:not(.md-disabled) .md-checkbox-label{cursor:pointer}.md-checkbox .md-checkbox-container{width:20px;min-width:20px;height:20px;position:relative;border-radius:2px;border:2px solid transparent;transition:.4s cubic-bezier(.25,.8,.25,1)}.md-checkbox .md-checkbox-container:focus{outline:none}.md-checkbox .md-checkbox-container:after,.md-checkbox .md-checkbox-container:before{position:absolute;transition:.4s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container:before{width:48px;height:48px;top:50%;left:50%;z-index:6;border-radius:50%;transform:translate(-50%,-50%)}.md-checkbox .md-checkbox-container:after{width:6px;height:13px;top:0;left:5px;z-index:7;border:2px solid transparent;border-top:0;border-left:0;opacity:0;transform:rotate(45deg) scale3D(.15,.15,1)}.md-checkbox .md-checkbox-container .md-ripple{width:48px!important;height:48px!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%);border-radius:50%}.md-checkbox .md-checkbox-container input{position:absolute;left:-999em}.md-checkbox .md-checkbox-label{height:20px;padding-left:16px;position:relative;line-height:20px}.md-checkbox.md-indeterminate .md-checkbox-container:after{width:12px;height:2px;top:50%;left:50%;z-index:4;border-style:solid;border-width:0 0 2px;opacity:0;transform:translate(-50%,-50%)!important}.md-checkbox.md-checked .md-checkbox-container:after{opacity:1;transform:rotate(45deg) scaleX(1);transition:.4s cubic-bezier(.25,.8,.25,1)}.md-checkbox.md-disabled.md-checked .md-checkbox-container{border-color:transparent!important}.md-checkbox.md-required label:after{position:absolute;top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";line-height:1em;vertical-align:top}.md-chips.md-field{padding-top:12px;flex-wrap:wrap}.md-chips.md-field.md-has-value label{top:-6px}.md-chips.md-field .md-chip{margin-bottom:4px}.md-chips.md-field .md-chip:last-of-type{margin-right:8px}.md-chips.md-field .md-input{min-width:128px}.md-field{width:100%;min-height:48px;margin:4px 0 24px;padding-top:16px;display:flex;position:relative;font-family:inherit}.md-field:after,.md-field:before{position:absolute;bottom:0;right:0;left:0;z-index:1;transition:border .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),transform 0s cubic-bezier(.4,0,.2,1) .3s;will-change:border,opacity,transform;content:\" \"}.md-field:after{height:1px}.md-field:before{height:2px;z-index:2;opacity:0;transform:scaleX(.12)}.md-field label{position:absolute;top:23px;left:0;pointer-events:none;transition:.4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s;font-size:16px;line-height:20px}.md-field .md-prefix,.md-field .md-suffix{font-size:16px;line-height:32px;align-self:center;justify-self:center}.md-field .md-prefix{display:none;padding-right:4px}.md-field.md-focused .md-prefix,.md-field.md-has-value .md-prefix{display:block}.md-field .md-input,.md-field .md-textarea{height:32px;padding:0;display:block;flex:1;border:none;background:none;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:font-size,padding-top,color;font-family:inherit;font-size:16px;line-height:32px}.md-field .md-input[type=date],.md-field .md-textarea[type=date]{font-size:16px}.md-field .md-input[disabled],.md-field .md-textarea[disabled]{cursor:default}.md-field .md-input:focus,.md-field .md-textarea:focus{outline:none}.md-field .md-input::-webkit-input-placeholder,.md-field .md-textarea::-webkit-input-placeholder{font-size:16px;text-shadow:none;-webkit-text-fill-color:initial;-webkit-transition:.4s cubic-bezier(.25,.8,.25,1);transition:.4s cubic-bezier(.25,.8,.25,1);-webkit-transition-property:font-size,color;transition-property:font-size,color}.md-field .md-textarea{min-height:32px;max-height:230px;padding:5px 0;resize:none;line-height:1.3em}.md-field .md-count,.md-field .md-error,.md-field .md-helper-text{height:20px;position:absolute;bottom:-22px;font-size:12px;transition:.3s cubic-bezier(.4,0,.2,1)}.md-field .md-error{display:block!important;left:0;opacity:0;transform:translate3d(0,-8px,0)}.md-field .md-count{right:0}.md-field .md-input-action{width:32px;min-width:32px;height:32px;margin:0;position:absolute;top:16px;right:0;transition:.4s cubic-bezier(.4,0,.2,1)}.md-field .md-input-action.md-input-action-enter-active,.md-field .md-input-action.md-input-action-leave-active{opacity:0}.md-field .md-input-action.md-input-action-enter-to{opacity:1}.md-field>.md-icon{margin:4px auto;position:relative;z-index:3;transition:.4s cubic-bezier(.25,.8,.25,1)}.md-field>.md-icon:last-of-type:not(:first-child):after{display:none}.md-field>.md-icon:after{width:37px;height:4px;position:absolute;left:-1px;bottom:-5px;transition:.3s cubic-bezier(.4,0,.2,1);content:\"\"}.md-field>.md-icon~label{left:36px}.md-field>.md-icon~.md-file,.md-field>.md-icon~.md-input,.md-field>.md-icon~.md-textarea{margin-left:12px}.md-field+.md-has-textarea:not(.md-autogrow){margin-top:36px}.md-field.md-has-placeholder label{pointer-events:auto;top:10px;opacity:0;font-size:12px}.md-field.md-has-placeholder .md-input,.md-field.md-has-placeholder .md-textarea{font-size:16px}.md-field.md-has-textarea:not(.md-autogrow):after,.md-field.md-has-textarea:not(.md-autogrow):before{height:auto;pointer-events:none;top:0;bottom:0;transform:none;background:none!important;border:1px solid transparent;border-radius:3px}.md-field.md-has-textarea:not(.md-autogrow):before{border-width:2px}.md-field.md-has-textarea:not(.md-autogrow) label{top:16px;left:16px}.md-field.md-has-textarea:not(.md-autogrow) .md-textarea{min-height:100px;padding:0 16px;resize:vertical}.md-field.md-has-textarea:not(.md-autogrow)>.md-icon{position:absolute;top:6px;right:6px;z-index:3}.md-field.md-has-textarea:not(.md-autogrow) .md-count{right:6px;bottom:2px}.md-field.md-has-textarea:not(.md-autogrow) .md-clear{top:6px;right:6px}.md-field.md-has-textarea:not(.md-autogrow).md-focused label,.md-field.md-has-textarea:not(.md-autogrow).md-has-value label{top:6px}.md-field.md-has-textarea:not(.md-autogrow).md-focused .md-textarea,.md-field.md-has-textarea:not(.md-autogrow).md-has-value .md-textarea{padding-top:10px}.md-field.md-has-file:after,.md-field.md-has-file:before,.md-field.md-has-file label{left:36px}.md-field.md-has-file .md-input{margin-left:12px}.md-field.md-focused:before,.md-field.md-highlight:before{opacity:1;transform:scaleX(1);transition:.3s cubic-bezier(.4,0,.2,1);transition-property:border,opacity,transform}.md-field.md-focused label,.md-field.md-has-value label{pointer-events:auto;top:0;opacity:1;font-size:12px}.md-field.md-focused .md-input,.md-field.md-focused .md-textarea,.md-field.md-has-value .md-input,.md-field.md-has-value .md-textarea{font-size:16px}.md-field.md-inline label{pointer-events:none}.md-field.md-inline.md-focused label{top:23px;font-size:16px}.md-field.md-inline.md-has-value label{opacity:0}.md-field.md-disabled:after{background:0 100% repeat-x;background-size:4px 1px}.md-field.md-has-password .md-toggle-password{margin:0;position:absolute;right:0;bottom:-2px}.md-field.md-has-password .md-toggle-password svg{width:22px;height:22px}.md-field.md-clearable .md-input{padding-right:30px}@keyframes a{10%,90%{transform:translate3d(-1px,0,0)}30%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}.md-field.md-invalid.md-has-value label:not(:focus){animation:a .4s cubic-bezier(.4,0,.2,1) both;-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}.md-field.md-invalid.md-has-textarea:not(.md-autogrow):before{border-width:2px}.md-field.md-invalid .md-error{opacity:1;transform:translateZ(0)}.md-field.md-invalid .md-helper-text{opacity:0;transform:translate3d(0,-8px,0)}.md-field.md-required label:after{position:absolute;top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";line-height:1em;vertical-align:top}.md-icon{width:24px;min-width:24px;height:24px;font-size:24px!important;margin:auto;display:inline-flex;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;vertical-align:middle}.md-icon.md-size-2x{width:48px;min-width:48px;height:48px;font-size:48px!important}.md-icon.md-size-3x{width:72px;min-width:72px;height:72px;font-size:72px!important}.md-icon.md-size-4x{width:96px;min-width:96px;height:96px;font-size:96px!important}.md-icon.md-size-5x{width:120px;min-width:120px;height:120px;font-size:120px!important}.md-icon-image svg{height:100%;flex:1;transition:fill .4s cubic-bezier(.4,0,.2,1)}.md-icon{transition:color .4s cubic-bezier(.4,0,.2,1);direction:ltr;font-family:Material Icons;font-feature-settings:\"liga\";font-style:normal;letter-spacing:normal;line-height:1;text-rendering:optimizeLegibility;text-transform:none;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.md-svg-loader{display:block}.md-svg-loader svg{width:100%}.md-chip{height:32px;padding:0 12px;display:inline-block;cursor:default;border-radius:32px;transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:background-color,color,opacity,transform,box-shadow;will-change:background-color,color,opacity,transform,box-shadow;font-size:13px;line-height:32px;vertical-align:middle;white-space:nowrap}.md-chip:focus{outline:none}.md-chip.md-chip-enter-active,.md-chip.md-chip-leave-active{opacity:0;transform:transformZ(0) scale(.8)}.md-chip.md-chip-enter-to{opacity:1;transform:transformZ(0) scale(1)}.md-chip.md-clickable:not(.md-disabled):active,.md-chip.md-deletable:not(.md-disabled):active,.md-chip.md-focused{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.md-chip.md-clickable{padding:0;cursor:pointer}.md-chip.md-clickable>.md-ripple{padding:0 12px}.md-chip.md-deletable{padding-right:32px;position:relative}.md-chip.md-deletable.md-clickable{padding-right:0}.md-chip.md-deletable.md-clickable>.md-ripple{padding-right:32px}.md-chip.md-disabled{cursor:default}.md-chip+.md-chip{margin-left:4px}.md-chip .md-button.md-input-action{width:18px;min-width:18px;height:18px;margin:0;position:absolute;top:50%;right:7px;z-index:6;transform:translate3D(0,-50%,0);transition-duration:.3s;transition-timing-function:cubic-bezier(.25,.8,.25,1);font-size:18px}.md-chip .md-button.md-input-action .md-ripple{padding:0}.md-chip .md-button.md-input-action .md-button-content{height:14px}.md-chip .md-button.md-input-action .md-icon{width:14px;min-width:14px;height:14px;font-size:14px!important;vertical-align:top}.md-chip .md-button.md-input-action .md-icon svg{transition-duration:.3s;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.md-datepicker-overlay{opacity:0}.md-datepicker.md-native label{top:0!important}.md-datepicker .md-date-icon{cursor:pointer}.md-datepicker input[type=date]::-webkit-calendar-picker-indicator,.md-datepicker input[type=date]::-webkit-clear-button,.md-datepicker input[type=date]::-webkit-inner-spin-button{display:none}@media (max-width:600px){.md-datepicker-overlay{opacity:1}}.md-overlay{position:absolute;top:0;right:0;bottom:0;left:0;z-index:5;overflow:hidden;background:rgba(0,0,0,.6);transition:.35s cubic-bezier(.4,0,.2,1);transition-property:opacity;will-change:opacity}.md-overlay.md-fixed,body>.md-overlay{position:fixed}.md-overlay-enter,.md-overlay-leave-active{opacity:0}.md-datepicker-dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:flex;overflow:hidden;z-index:11;border-radius:2px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto;transform-origin:top left;flex-shrink:0;transition:opacity .2s cubic-bezier(.25,.8,.25,1),transform .35s cubic-bezier(.25,.8,.25,1);will-change:opacity,transform,left,top}.md-datepicker-dialog-leave-active{opacity:0}.md-datepicker-dialog-enter{opacity:0;transform:scale(.9)}.md-datepicker-dialog-enter .md-datepicker-body .md-datepicker-calendar{opacity:0;transform:translate3D(0,10%,0)}.md-datepicker-header{min-width:150px;padding:16px}.md-datepicker-header .md-datepicker-year-select{cursor:pointer;opacity:.54;transition:opacity .3s cubic-bezier(.4,0,.2,1);font-size:16px;font-weight:700;letter-spacing:.01em;line-height:24px}.md-datepicker-header .md-datepicker-date-select{cursor:pointer;opacity:.54;transition:opacity .3s cubic-bezier(.4,0,.2,1);font-size:32px;font-weight:900;letter-spacing:0;line-height:1.2em}.md-datepicker-header .md-datepicker-dayname{display:block}.md-datepicker-header .md-selected{opacity:1}.md-datepicker-body{width:320px;position:relative;overflow:hidden;transition:width .3s cubic-bezier(.25,.8,.25,1);will-change:width}.md-datepicker-body .md-button{margin:0}.md-datepicker-body-header{padding:8px;display:flex;align-items:center;justify-content:space-between;position:absolute;top:0;right:0;left:0;pointer-events:none}.md-datepicker-body-header:after,.md-datepicker-body-header:before{width:48px;height:48px;position:absolute;top:0;z-index:2;pointer-events:none;content:\" \"}.md-datepicker-body-header:after{left:0}.md-datepicker-body-header:before{right:0}.md-datepicker-body-header .md-button{pointer-events:auto;z-index:3}.md-datepicker-body-header-enter .md-button:first-child,.md-datepicker-body-header-leave-active .md-button:first-child{transform:translate3d(-150%,0,0)}.md-datepicker-body-header-enter .md-button:last-child,.md-datepicker-body-header-leave-active .md-button:last-child{transform:translate3d(150%,0,0)}.md-datepicker-body-content{overflow:hidden;transition:height .35s cubic-bezier(.4,0,.2,1);will-change:height}.md-datepicker-panel{display:flex;position:absolute;top:0;right:0;bottom:0;left:0;transition:.35s cubic-bezier(.4,0,.2,1);transition-property:transform,opacity;will-change:transform,opacity}.md-datepicker-calendar.md-datepicker-view-enter,.md-datepicker-calendar.md-datepicker-view-leave-active{transform:translate3d(0,100%,0)}.md-datepicker-calendar.md-previous .md-datepicker-month-enter{transform:translate3D(-100%,0,0)}.md-datepicker-calendar.md-previous .md-datepicker-month-enter .md-datepicker-month-trigger{transform:translate3D(-30%,0,0)}.md-datepicker-calendar.md-next .md-datepicker-month-enter,.md-datepicker-calendar.md-previous .md-datepicker-month-leave-active{transform:translate3D(100%,0,0)}.md-datepicker-calendar.md-next .md-datepicker-month-enter .md-datepicker-month-trigger{transform:translate3D(30%,0,0)}.md-datepicker-calendar.md-next .md-datepicker-month-leave-active{transform:translate3D(-100%,0,0)}.md-datepicker-month{top:8px;bottom:auto;flex-direction:column;transition:.35s cubic-bezier(.4,0,.2,1);transition-property:transform,opacity;will-change:transform,opacity}.md-datepicker-month .md-datepicker-month-trigger{min-height:32px;margin:0 46px 10px;flex:1;border-radius:0;transition:transform .45s cubic-bezier(.4,0,.2,1);will-change:transform}.md-datepicker-week{display:flex;align-items:center}.md-datepicker-week span{flex:1;font-size:12px;text-align:center}.md-datepicker-days{display:flex;flex-wrap:wrap}.md-datepicker-days .md-datepicker-day,.md-datepicker-days .md-datepicker-empty{margin:1px 0;display:flex;align-items:center;justify-content:center;flex:0 1 14.28571%}.md-datepicker-days .md-datepicker-day-button{width:30px;min-width:30px;height:30px;cursor:pointer;border-radius:30px;transition:.3s cubic-bezier(.4,0,.2,1);line-height:30px;text-align:center}.md-datepicker-days .md-datepicker-selected,.md-datepicker-days .md-datepicker-today{font-weight:700}.md-datepicker-days .md-datepicker-disabled{pointer-events:none}.md-datepicker-month-selector{padding:6px 8px 10px;flex-wrap:wrap;bottom:auto;transition:.35s cubic-bezier(.4,0,.2,1);transition-property:transform,opacity;will-change:transform,opacity}.md-datepicker-month-selector.md-datepicker-view-enter,.md-datepicker-month-selector.md-datepicker-view-leave-active{transform:translate3d(0,-100%,0)}.md-datepicker-month-selector .md-datepicker-year-trigger{width:100%;margin:0 0 8px;flex:1 1 100%}.md-datepicker-month-button,.md-datepicker-year-button{height:36px;margin:3px 0;cursor:pointer;transition:.3s cubic-bezier(.4,0,.2,1);line-height:36px;font-weight:500;text-align:center;text-transform:uppercase}.md-datepicker-month-button{flex:1 1 33.3333%;border-radius:2px;font-size:13px}.md-datepicker-year-selector{flex-direction:column;overflow:auto;bottom:52px;border-bottom:1px solid}.md-datepicker-year-selector.md-datepicker-view-enter,.md-datepicker-year-selector.md-datepicker-view-leave-active{transform:translate3d(0,-100%,0)}.md-datepicker-year-selector .md-button{min-height:36px}.md-datepicker-year-button{font-size:16px}.md-datepicker-year-button.md-datepicker-selected{font-size:24px}@media (max-width:600px){.md-datepicker-dialog{flex-direction:column;top:50%!important;left:50%!important;transform:translate3D(-50%,-50%,0);transform-origin:center center;position:fixed!important}.md-datepicker-dialog-enter{transform:translate3D(-50%,-50%,0) scale(.9)}.md-datepicker-header{min-width:auto;padding:16px 20px}.md-datepicker-header .md-datepicker-dayname{display:inline-block}.md-datepicker-body{width:296px}.md-datepicker-month{padding:0 6px}}.md-popover.md-rendering{opacity:0;transition:none!important}.md-dialog{position:fixed;top:0;left:0;right:0;bottom:0;align-items:center;justify-content:center;pointer-events:none;display:flex;transition-duration:.2s;z-index:11}.md-dialog.md-dialog-enter-to .md-dialog-container,.md-dialog.md-dialog-leave .md-dialog-container{opacity:1;transform:scale(1)}.md-dialog.md-dialog-enter .md-dialog-container,.md-dialog.md-dialog-leave-to .md-dialog-container{opacity:0;transform:scale(.9)}.md-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);min-width:280px;max-width:80%;max-height:80%;margin:auto;display:flex;flex-flow:column;overflow:hidden;border-radius:2px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto;opacity:1;transform-origin:center center;transition:opacity .15s cubic-bezier(.25,.8,.25,1),transform .2s cubic-bezier(.25,.8,.25,1);will-change:opacity,transform}.md-dialog-container.md-dialog-enter-to,.md-dialog-container.md-dialog-leave{opacity:1;transform:translate(-50%,-50%) scale(1)}.md-dialog-container.md-dialog-enter,.md-dialog-container.md-dialog-leave-to{opacity:0;transform:translate(-50%,-50%) scale(.9)}.md-dialog-container .md-tabs{flex:1;max-width:100%}.md-dialog-container .md-tabs-navigation{padding:0 12px}@media (max-width:600px){.md-dialog.md-dialog-enter-to .md-dialog-fullscreen,.md-dialog.md-dialog-leave .md-dialog-fullscreen{opacity:0;transform:translateY(30%)}.md-dialog.md-dialog-enter .md-dialog-fullscreen,.md-dialog.md-dialog-leave-to .md-dialog-fullscreen{opacity:1;transform:translate(0)}.md-dialog-container .md-tab{padding:12px}.md-dialog-fullscreen{width:100%;height:100%;max-width:100%;max-height:100%;border-radius:0;transform:none}.md-dialog-fullscreen.md-dialog-enter,.md-dialog-fullscreen.md-dialog-leave-to{opacity:0;transform:translate3D(0,30%,0)}.md-dialog-fullscreen.md-dialog-enter-to,.md-dialog-fullscreen.md-dialog-leave{opacity:1;transform:translateZ(0)}}.md-dialog-title{margin-bottom:20px;padding:24px 24px 0}.md-dialog-content{padding:0 24px 24px;flex:1;flex-basis:auto;overflow:auto;position:relative}.md-dialog-content:first-child{padding-top:24px}.md-dialog-content p:first-child:not(:only-child){margin-top:0}.md-dialog-content p:last-child:not(:only-child){margin-bottom:0}.md-dialog-actions{min-height:52px;padding:8px 8px 8px 24px;display:flex;align-items:center;justify-content:flex-end;position:relative}.md-dialog-actions:before{height:1px;position:absolute;top:-1px;right:0;left:0;content:\" \"}.md-dialog-actions .md-button{min-width:64px;margin:0}.md-dialog-actions .md-button+.md-button{margin-left:8px}.md-divider{height:1px;margin:0;padding:0;display:block;border:0;transition:margin-left .3s cubic-bezier(.4,0,.2,1);will-change:margin-left}.md-divider.md-inset{margin-left:72px}.md-drawer{position:absolute;top:0;bottom:0;left:0;z-index:8;transform:translate3D(-100%,0,0);transition:transform .4s cubic-bezier(.25,.8,.25,1);will-change:transform,box-shadow;width:400px;max-width:calc(100vw - 56px);overflow-x:hidden;overflow-y:auto}.md-drawer.md-right{right:0;left:auto;transform:translate3D(100%,0,0)}.md-drawer.md-fixed{position:fixed}.md-drawer.md-active{transform:translateZ(0);transition-timing-function:cubic-bezier(.4,0,.2,1)}.md-drawer.md-temporary.md-left+.md-app-container .md-content{border-left:none}.md-drawer.md-temporary.md-right-previous+.md-app-container .md-content{border-right:none}.md-drawer.md-temporary.md-active{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-drawer.md-persistent:not(.md-active).md-left+.md-app-container .md-content{border-left:none}.md-drawer.md-persistent:not(.md-active).md-right-previous+.md-app-container .md-content{border-right:none}.md-drawer.md-persistent-mini{transform:translate3D(0,64px,0);transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:transform,width;will-change:transform,box-shadow}.md-drawer.md-persistent-mini.md-left{border-right:1px solid}.md-drawer.md-persistent-mini.md-right{border-left:1px solid}.md-drawer.md-persistent-mini.md-active.md-left+.md-app-container .md-content{border-left:none}.md-drawer.md-persistent-mini.md-active.md-right-previous+.md-app-container .md-content{border-right:none}.md-drawer.md-persistent-mini:not(.md-active){width:70px!important;z-index:1;white-space:nowrap}.md-drawer.md-persistent-mini:not(.md-active) .md-toolbar{display:none}.md-drawer.md-persistent-mini:not(.md-active) .md-list-item-content{padding:0 23px}.md-drawer.md-persistent-mini.md-active{position:relative;transform:translateZ(0);white-space:normal}.md-drawer .md-list-item-container{font-size:14px;text-transform:none}@media (max-width:600px){.md-drawer{width:320px}.md-drawer.md-active{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}}@media (min-width:600px){.md-drawer:not(.md-temporary)~.md-overlay{background:none;pointer-events:none}.md-drawer.md-permanent{position:relative;transform:translateZ(0)}.md-drawer.md-permanent-full{z-index:3}.md-drawer.md-permanent-full .md-list{padding-top:0}.md-drawer.md-permanent-card,.md-drawer.md-permanent-clipped{z-index:1}.md-drawer.md-permanent-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;border-radius:2px;transition:.3s cubic-bezier(.4,0,.2,1);transition-property:color,background-color;will-change:color,background-color;margin:8px;z-index:1}}@media (min-width:960px){.md-drawer.md-permanent-card{margin:16px}}@media (min-width:1280px){.md-drawer.md-permanent-card{margin:24px}}.md-elevation-0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.md-elevation-1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.md-elevation-2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.md-elevation-3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.md-elevation-4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.md-elevation-5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.md-elevation-6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.md-elevation-7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-elevation-8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-elevation-9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-elevation-10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-elevation-11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-elevation-12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-elevation-13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-elevation-14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-elevation-15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-elevation-16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-elevation-17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-elevation-18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-elevation-19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-elevation-20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-elevation-21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-elevation-22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-elevation-23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-elevation-24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.md-empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;max-width:420px;padding:36px;margin:0 auto;position:relative;transition:opacity .15s cubic-bezier(0,0,.2,1),transform .3s cubic-bezier(0,0,.2,1);will-change:transform,opacity}.md-empty-state.md-rounded{max-width:auto;border-radius:50%}.md-empty-state.md-rounded .md-empty-state-container{padding:40px;position:absolute;top:0;right:0;bottom:0;left:0}.md-empty-state .md-button{margin:.5em 0 0}.md-empty-state-enter{opacity:0;transform:scale(.87)}.md-empty-state-enter .md-empty-state-container{opacity:0}.md-empty-state-container{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;transition:opacity .4s cubic-bezier(.4,0,.2,1);will-change:opacity}.md-empty-state-icon{width:160px;min-width:160px;height:160px;font-size:160px!important;margin:0}.md-empty-state-label{font-size:26px;font-weight:500;line-height:40px}.md-empty-state-description{margin:1em 0;font-size:16px;line-height:24px}.md-menu.md-select{display:flex;flex:1;overflow:auto}.md-menu.md-select:not(.md-disabled) .md-icon,.md-menu.md-select:not(.md-disabled) .md-input{cursor:pointer;outline:none}.md-menu.md-select .md-input{flex:1;min-width:0}.md-menu.md-select .md-input-fake,.md-menu.md-select select{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;position:absolute;clip:rect(0 0 0 0);border:0}.md-menu-content.md-select-menu{z-index:12;width:100%}.md-menu-content.md-select-menu.md-menu-content-enter{transform:translate3d(0,-8px,0) scaleY(.3)}.md-menu-content.md-select-menu .md-list{transition:opacity .3s cubic-bezier(.55,0,.55,.2)}.md-menu{display:inline-block}.md-menu>.md-button{margin:0}.md-menu-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);min-width:112px;max-width:280px;max-height:35vh;display:flex;flex-direction:row;position:absolute;z-index:9;border-radius:2px;transition:transform .2s cubic-bezier(.25,.8,.25,1),opacity .3s cubic-bezier(.25,.8,.25,1);will-change:opacity,transform,top,left!important}.md-menu-content.md-shallow{position:fixed!important;top:-9999em!important;left:-9999em!important;pointer-events:none}.md-menu-content.md-menu-content-enter-active{opacity:1;transform:translateZ(0)}.md-menu-content.md-menu-content-leave-active{transition:opacity .4s cubic-bezier(.4,0,.2,1);opacity:0}.md-menu-content.md-menu-content-enter.md-menu-content-top-start{transform-origin:bottom left;transform:translate3d(0,8px,0) scaleY(.95)}.md-menu-content.md-menu-content-enter.md-menu-content-top-end{transform-origin:bottom right;transform:translate3d(0,8px,0) scaleY(.95)}.md-menu-content.md-menu-content-enter.md-menu-content-right-start{transform-origin:left top;transform:translate3d(0,-8px,0) scaleY(.95)}.md-menu-content.md-menu-content-enter.md-menu-content-right-end{transform-origin:left bottom;transform:translate3d(0,8px,0) scaleY(.95)}.md-menu-content.md-menu-content-enter.md-menu-content-bottom-start{transform-origin:top left;transform:translate3d(0,-8px,0) scaleY(.95)}.md-menu-content.md-menu-content-enter.md-menu-content-bottom-end{transform-origin:top right;transform:translate3d(0,-8px,0) scaleY(.95)}.md-menu-content.md-menu-content-enter.md-menu-content-left-start{transform-origin:right top;transform:translate3d(0,-8px,0) scaleY(.95)}.md-menu-content.md-menu-content-enter.md-menu-content-left-end{transform-origin:right bottom;transform:translate3d(0,8px,0) scaleY(.95)}.md-menu-content.md-menu-content-enter .md-list{opacity:0}.md-menu-content.md-menu-content-medium{min-width:168px}.md-menu-content.md-menu-content-big{min-width:224px}.md-menu-content.md-menu-content-huge{min-width:280px}.md-menu-content-container{flex:1;overflow:auto}.md-menu-content-container .md-list{transition:opacity .3s cubic-bezier(.25,.8,.25,1);will-change:opacity;font-family:Roboto,sans-serif;text-transform:none;white-space:nowrap}.md-menu-content-container .md-list .md-list-item-container{height:100%}@media (max-width:960px){.md-menu-content-container .md-list{font-size:14px}}.md-list{margin:0;padding:8px 0;display:flex;flex-flow:column nowrap;position:relative;list-style:none}.md-list.md-dense{padding:4px 0}.md-list .md-divider{margin-top:-1px}.md-list .md-subheader.md-inset{padding-left:72px}.md-list>.md-subheader:first-of-type{margin-top:-8px}.md-optgroup .md-subheader{text-transform:uppercase}.md-optgroup .md-ripple.md-list-item-content{padding-left:24px}.md-file{display:flex;flex:1}.md-file input[type=file]{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;position:absolute;clip:rect(0 0 0 0);border:0}.md-file .md-file-icon:not(.md-disabled){cursor:pointer}.md-file .md-file-icon.md-disabled{pointer-events:none}.md-highlight-text{flex:1}.md-highlight-text-match{font-weight:500}.md-image{display:flex;justify-content:center;align-items:center}.md-layout{display:flex;flex-wrap:wrap}.md-layout .md-layout{flex:1}.md-layout .md-layout-nowrap{flex-wrap:nowrap}.md-layout.md-centered{width:100%;max-width:1200px;margin:0 auto}.md-layout.md-gutter{margin-right:-20px;margin-left:-20px}.md-layout.md-gutter>.md-layout-item{padding-right:20px;padding-left:20px}@media (max-width:1903px){.md-layout.md-gutter{margin-right:-20px;margin-left:-20px}.md-layout.md-gutter>.md-layout-item{padding-right:20px;padding-left:20px}}@media (max-width:1280px){.md-layout.md-gutter{margin-right:-12px;margin-left:-12px}.md-layout.md-gutter>.md-layout-item{padding-right:12px;padding-left:12px}}@media (max-width:960px){.md-layout.md-gutter{margin-right:-8px;margin-left:-8px}.md-layout.md-gutter>.md-layout-item{padding-right:8px;padding-left:8px}}@media (max-width:600px){.md-layout.md-gutter{margin-right:-4px;margin-left:-4px}.md-layout.md-gutter>.md-layout-item{padding-right:4px;padding-left:4px}}.md-layout.md-alignment-top-left{justify-content:flex-start;align-items:flex-start}.md-layout.md-alignment-top-center{justify-content:center;align-items:flex-start}.md-layout.md-alignment-top-right{justify-content:flex-end;align-items:flex-start}.md-layout.md-alignment-top-space-around{justify-content:space-around;align-items:flex-start}.md-layout.md-alignment-top-space-between{justify-content:space-between;align-items:flex-start}.md-layout.md-alignment-center-left{justify-content:flex-start;align-items:center}.md-layout.md-alignment-center,.md-layout.md-alignment-center-center{justify-content:center;align-items:center}.md-layout.md-alignment-center-right{justify-content:flex-end;align-items:center}.md-layout.md-alignment-center-space-around{justify-content:space-around;align-items:center}.md-layout.md-alignment-center-space-between{justify-content:space-between;align-items:center}.md-layout.md-alignment-bottom-left{justify-content:flex-start;align-items:flex-end}.md-layout.md-alignment-bottom-center{justify-content:center;align-items:flex-end}.md-layout.md-alignment-bottom-right{justify-content:flex-end;align-items:flex-end}.md-layout.md-alignment-bottom-space-around{justify-content:space-around;align-items:flex-end}.md-layout.md-alignment-bottom-space-between{justify-content:space-between;align-items:flex-end}.md-layout.md-alignment-space-around-left{justify-content:flex-start;align-items:space-around}.md-layout.md-alignment-space-around-center{justify-content:center;align-items:space-around}.md-layout.md-alignment-space-around-right{justify-content:flex-end;align-items:space-around}.md-layout.md-alignment-space-around-space-around{justify-content:space-around;align-items:space-around}.md-layout.md-alignment-space-around-space-between{justify-content:space-between;align-items:space-around}.md-layout.md-alignment-space-between-left{justify-content:flex-start;align-items:space-between}.md-layout.md-alignment-space-between-center{justify-content:center;align-items:space-between}.md-layout.md-alignment-space-between-right{justify-content:flex-end;align-items:space-between}.md-layout.md-alignment-space-between-space-around{justify-content:space-around;align-items:space-between}.md-layout.md-alignment-space-between-space-between{justify-content:space-between;align-items:space-between}.md-layout-item{flex:1 1}.md-layout-item.md-layout{margin:0}.md-layout-item.md-size{flex:1 1}.md-layout-item.md-size-5{min-width:5%;max-width:5%;flex:0 1 5%}.md-layout-item.md-size-10{min-width:10%;max-width:10%;flex:0 1 10%}.md-layout-item.md-size-15{min-width:15%;max-width:15%;flex:0 1 15%}.md-layout-item.md-size-20{min-width:20%;max-width:20%;flex:0 1 20%}.md-layout-item.md-size-25{min-width:25%;max-width:25%;flex:0 1 25%}.md-layout-item.md-size-30{min-width:30%;max-width:30%;flex:0 1 30%}.md-layout-item.md-size-35{min-width:35%;max-width:35%;flex:0 1 35%}.md-layout-item.md-size-40{min-width:40%;max-width:40%;flex:0 1 40%}.md-layout-item.md-size-45{min-width:45%;max-width:45%;flex:0 1 45%}.md-layout-item.md-size-50{min-width:50%;max-width:50%;flex:0 1 50%}.md-layout-item.md-size-55{min-width:55%;max-width:55%;flex:0 1 55%}.md-layout-item.md-size-60{min-width:60%;max-width:60%;flex:0 1 60%}.md-layout-item.md-size-65{min-width:65%;max-width:65%;flex:0 1 65%}.md-layout-item.md-size-70{min-width:70%;max-width:70%;flex:0 1 70%}.md-layout-item.md-size-75{min-width:75%;max-width:75%;flex:0 1 75%}.md-layout-item.md-size-80{min-width:80%;max-width:80%;flex:0 1 80%}.md-layout-item.md-size-85{min-width:85%;max-width:85%;flex:0 1 85%}.md-layout-item.md-size-90{min-width:90%;max-width:90%;flex:0 1 90%}.md-layout-item.md-size-95{min-width:95%;max-width:95%;flex:0 1 95%}.md-layout-item.md-size-33{min-width:33.3333%;max-width:33.3333%;flex:0 1 33.3333%}.md-layout-item.md-size-66{min-width:66.6666%;max-width:66.6666%;flex:0 1 66.6666%}.md-layout-item.md-size-100{min-width:100%;max-width:100%;margin-left:0!important;flex:1 1 100%}@media (min-width:1904px){.md-layout-item.md-xlarge-size{flex:1 1}.md-layout-item.md-xlarge-size-5{min-width:5%;max-width:5%;flex:0 1 5%}.md-layout-item.md-xlarge-size-10{min-width:10%;max-width:10%;flex:0 1 10%}.md-layout-item.md-xlarge-size-15{min-width:15%;max-width:15%;flex:0 1 15%}.md-layout-item.md-xlarge-size-20{min-width:20%;max-width:20%;flex:0 1 20%}.md-layout-item.md-xlarge-size-25{min-width:25%;max-width:25%;flex:0 1 25%}.md-layout-item.md-xlarge-size-30{min-width:30%;max-width:30%;flex:0 1 30%}.md-layout-item.md-xlarge-size-35{min-width:35%;max-width:35%;flex:0 1 35%}.md-layout-item.md-xlarge-size-40{min-width:40%;max-width:40%;flex:0 1 40%}.md-layout-item.md-xlarge-size-45{min-width:45%;max-width:45%;flex:0 1 45%}.md-layout-item.md-xlarge-size-50{min-width:50%;max-width:50%;flex:0 1 50%}.md-layout-item.md-xlarge-size-55{min-width:55%;max-width:55%;flex:0 1 55%}.md-layout-item.md-xlarge-size-60{min-width:60%;max-width:60%;flex:0 1 60%}.md-layout-item.md-xlarge-size-65{min-width:65%;max-width:65%;flex:0 1 65%}.md-layout-item.md-xlarge-size-70{min-width:70%;max-width:70%;flex:0 1 70%}.md-layout-item.md-xlarge-size-75{min-width:75%;max-width:75%;flex:0 1 75%}.md-layout-item.md-xlarge-size-80{min-width:80%;max-width:80%;flex:0 1 80%}.md-layout-item.md-xlarge-size-85{min-width:85%;max-width:85%;flex:0 1 85%}.md-layout-item.md-xlarge-size-90{min-width:90%;max-width:90%;flex:0 1 90%}.md-layout-item.md-xlarge-size-95{min-width:95%;max-width:95%;flex:0 1 95%}.md-layout-item.md-xlarge-size-33{min-width:33.3333%;max-width:33.3333%;flex:0 1 33.3333%}.md-layout-item.md-xlarge-size-66{min-width:66.6666%;max-width:66.6666%;flex:0 1 66.6666%}.md-layout-item.md-xlarge-size-100{min-width:100%;max-width:100%;margin-left:0!important;flex:1 1 100%}}@media (max-width:1903px){.md-layout-item.md-large-size{flex:1 1}.md-layout-item.md-large-size-5{min-width:5%;max-width:5%;flex:0 1 5%}.md-layout-item.md-large-size-10{min-width:10%;max-width:10%;flex:0 1 10%}.md-layout-item.md-large-size-15{min-width:15%;max-width:15%;flex:0 1 15%}.md-layout-item.md-large-size-20{min-width:20%;max-width:20%;flex:0 1 20%}.md-layout-item.md-large-size-25{min-width:25%;max-width:25%;flex:0 1 25%}.md-layout-item.md-large-size-30{min-width:30%;max-width:30%;flex:0 1 30%}.md-layout-item.md-large-size-35{min-width:35%;max-width:35%;flex:0 1 35%}.md-layout-item.md-large-size-40{min-width:40%;max-width:40%;flex:0 1 40%}.md-layout-item.md-large-size-45{min-width:45%;max-width:45%;flex:0 1 45%}.md-layout-item.md-large-size-50{min-width:50%;max-width:50%;flex:0 1 50%}.md-layout-item.md-large-size-55{min-width:55%;max-width:55%;flex:0 1 55%}.md-layout-item.md-large-size-60{min-width:60%;max-width:60%;flex:0 1 60%}.md-layout-item.md-large-size-65{min-width:65%;max-width:65%;flex:0 1 65%}.md-layout-item.md-large-size-70{min-width:70%;max-width:70%;flex:0 1 70%}.md-layout-item.md-large-size-75{min-width:75%;max-width:75%;flex:0 1 75%}.md-layout-item.md-large-size-80{min-width:80%;max-width:80%;flex:0 1 80%}.md-layout-item.md-large-size-85{min-width:85%;max-width:85%;flex:0 1 85%}.md-layout-item.md-large-size-90{min-width:90%;max-width:90%;flex:0 1 90%}.md-layout-item.md-large-size-95{min-width:95%;max-width:95%;flex:0 1 95%}.md-layout-item.md-large-size-33{min-width:33.3333%;max-width:33.3333%;flex:0 1 33.3333%}.md-layout-item.md-large-size-66{min-width:66.6666%;max-width:66.6666%;flex:0 1 66.6666%}.md-layout-item.md-large-size-100{min-width:100%;max-width:100%;margin-left:0!important;flex:1 1 100%}}@media (max-width:1280px){.md-layout-item.md-medium-size{flex:1 1}.md-layout-item.md-medium-size-5{min-width:5%;max-width:5%;flex:0 1 5%}.md-layout-item.md-medium-size-10{min-width:10%;max-width:10%;flex:0 1 10%}.md-layout-item.md-medium-size-15{min-width:15%;max-width:15%;flex:0 1 15%}.md-layout-item.md-medium-size-20{min-width:20%;max-width:20%;flex:0 1 20%}.md-layout-item.md-medium-size-25{min-width:25%;max-width:25%;flex:0 1 25%}.md-layout-item.md-medium-size-30{min-width:30%;max-width:30%;flex:0 1 30%}.md-layout-item.md-medium-size-35{min-width:35%;max-width:35%;flex:0 1 35%}.md-layout-item.md-medium-size-40{min-width:40%;max-width:40%;flex:0 1 40%}.md-layout-item.md-medium-size-45{min-width:45%;max-width:45%;flex:0 1 45%}.md-layout-item.md-medium-size-50{min-width:50%;max-width:50%;flex:0 1 50%}.md-layout-item.md-medium-size-55{min-width:55%;max-width:55%;flex:0 1 55%}.md-layout-item.md-medium-size-60{min-width:60%;max-width:60%;flex:0 1 60%}.md-layout-item.md-medium-size-65{min-width:65%;max-width:65%;flex:0 1 65%}.md-layout-item.md-medium-size-70{min-width:70%;max-width:70%;flex:0 1 70%}.md-layout-item.md-medium-size-75{min-width:75%;max-width:75%;flex:0 1 75%}.md-layout-item.md-medium-size-80{min-width:80%;max-width:80%;flex:0 1 80%}.md-layout-item.md-medium-size-85{min-width:85%;max-width:85%;flex:0 1 85%}.md-layout-item.md-medium-size-90{min-width:90%;max-width:90%;flex:0 1 90%}.md-layout-item.md-medium-size-95{min-width:95%;max-width:95%;flex:0 1 95%}.md-layout-item.md-medium-size-33{min-width:33.3333%;max-width:33.3333%;flex:0 1 33.3333%}.md-layout-item.md-medium-size-66{min-width:66.6666%;max-width:66.6666%;flex:0 1 66.6666%}.md-layout-item.md-medium-size-100{min-width:100%;max-width:100%;margin-left:0!important;flex:1 1 100%}}@media (max-width:960px){.md-layout-item.md-small-size{flex:1 1}.md-layout-item.md-small-size-5{min-width:5%;max-width:5%;flex:0 1 5%}.md-layout-item.md-small-size-10{min-width:10%;max-width:10%;flex:0 1 10%}.md-layout-item.md-small-size-15{min-width:15%;max-width:15%;flex:0 1 15%}.md-layout-item.md-small-size-20{min-width:20%;max-width:20%;flex:0 1 20%}.md-layout-item.md-small-size-25{min-width:25%;max-width:25%;flex:0 1 25%}.md-layout-item.md-small-size-30{min-width:30%;max-width:30%;flex:0 1 30%}.md-layout-item.md-small-size-35{min-width:35%;max-width:35%;flex:0 1 35%}.md-layout-item.md-small-size-40{min-width:40%;max-width:40%;flex:0 1 40%}.md-layout-item.md-small-size-45{min-width:45%;max-width:45%;flex:0 1 45%}.md-layout-item.md-small-size-50{min-width:50%;max-width:50%;flex:0 1 50%}.md-layout-item.md-small-size-55{min-width:55%;max-width:55%;flex:0 1 55%}.md-layout-item.md-small-size-60{min-width:60%;max-width:60%;flex:0 1 60%}.md-layout-item.md-small-size-65{min-width:65%;max-width:65%;flex:0 1 65%}.md-layout-item.md-small-size-70{min-width:70%;max-width:70%;flex:0 1 70%}.md-layout-item.md-small-size-75{min-width:75%;max-width:75%;flex:0 1 75%}.md-layout-item.md-small-size-80{min-width:80%;max-width:80%;flex:0 1 80%}.md-layout-item.md-small-size-85{min-width:85%;max-width:85%;flex:0 1 85%}.md-layout-item.md-small-size-90{min-width:90%;max-width:90%;flex:0 1 90%}.md-layout-item.md-small-size-95{min-width:95%;max-width:95%;flex:0 1 95%}.md-layout-item.md-small-size-33{min-width:33.3333%;max-width:33.3333%;flex:0 1 33.3333%}.md-layout-item.md-small-size-66{min-width:66.6666%;max-width:66.6666%;flex:0 1 66.6666%}.md-layout-item.md-small-size-100{min-width:100%;max-width:100%;margin-left:0!important;flex:1 1 100%}}@media (max-width:600px){.md-layout-item.md-xsmall-size{flex:1 1}.md-layout-item.md-xsmall-size-5{min-width:5%;max-width:5%;flex:0 1 5%}.md-layout-item.md-xsmall-size-10{min-width:10%;max-width:10%;flex:0 1 10%}.md-layout-item.md-xsmall-size-15{min-width:15%;max-width:15%;flex:0 1 15%}.md-layout-item.md-xsmall-size-20{min-width:20%;max-width:20%;flex:0 1 20%}.md-layout-item.md-xsmall-size-25{min-width:25%;max-width:25%;flex:0 1 25%}.md-layout-item.md-xsmall-size-30{min-width:30%;max-width:30%;flex:0 1 30%}.md-layout-item.md-xsmall-size-35{min-width:35%;max-width:35%;flex:0 1 35%}.md-layout-item.md-xsmall-size-40{min-width:40%;max-width:40%;flex:0 1 40%}.md-layout-item.md-xsmall-size-45{min-width:45%;max-width:45%;flex:0 1 45%}.md-layout-item.md-xsmall-size-50{min-width:50%;max-width:50%;flex:0 1 50%}.md-layout-item.md-xsmall-size-55{min-width:55%;max-width:55%;flex:0 1 55%}.md-layout-item.md-xsmall-size-60{min-width:60%;max-width:60%;flex:0 1 60%}.md-layout-item.md-xsmall-size-65{min-width:65%;max-width:65%;flex:0 1 65%}.md-layout-item.md-xsmall-size-70{min-width:70%;max-width:70%;flex:0 1 70%}.md-layout-item.md-xsmall-size-75{min-width:75%;max-width:75%;flex:0 1 75%}.md-layout-item.md-xsmall-size-80{min-width:80%;max-width:80%;flex:0 1 80%}.md-layout-item.md-xsmall-size-85{min-width:85%;max-width:85%;flex:0 1 85%}.md-layout-item.md-xsmall-size-90{min-width:90%;max-width:90%;flex:0 1 90%}.md-layout-item.md-xsmall-size-95{min-width:95%;max-width:95%;flex:0 1 95%}.md-layout-item.md-xsmall-size-33{min-width:33.3333%;max-width:33.3333%;flex:0 1 33.3333%}.md-layout-item.md-xsmall-size-66{min-width:66.6666%;max-width:66.6666%;flex:0 1 66.6666%}.md-layout-item.md-xsmall-size-100{min-width:100%;max-width:100%;margin-left:0!important;flex:1 1 100%}}.md-hide{display:none}@media (min-width:1904px){.md-xlarge-hide{display:none}}@media (max-width:1903px){.md-large-hide{display:none}}@media (max-width:1280px){.md-medium-hide{display:none}}@media (max-width:960px){.md-small-hide{display:none}}@media (max-width:600px){.md-xsmall-hide{display:none}}.md-list-item{height:auto;position:relative;z-index:2}.md-list-item.md-inset .md-list-item-content{padding-left:72px}.md-list-item .md-icon{margin:0;transition-property:color,margin-right}.md-list-item-container{width:100%;font-size:16px;font-weight:400;text-align:left;text-transform:none}.md-list-item-container:not(.md-list-item-default):not([disabled])>.md-list-item-content{-webkit-user-select:none;user-select:none;cursor:pointer}.md-list-item-container.md-button-clean:hover{opacity:1;text-decoration:none}.md-list-item-content{min-height:48px;padding:4px 16px;display:flex;align-items:center;justify-content:space-between;transition:padding .4s cubic-bezier(.25,.8,.25,1);will-change:padding}.md-list.md-dense .md-list-item-content{min-height:40px;font-size:13px}.md-list.md-dense .md-list-item-content>.md-avatar{margin-top:0;margin-bottom:0}.md-list.md-dense .md-list-item-content>.md-avatar:not(.md-small){width:36px;min-width:36px;height:36px}.md-list.md-dense .md-list-item-content>.md-avatar:first-child{margin-right:20px}.md-list.md-double-line .md-list-item-content{min-height:72px}.md-list.md-double-line.md-dense .md-list-item-content{min-height:60px}.md-list.md-triple-line .md-list-item-content{min-height:88px}.md-list.md-triple-line.md-dense .md-list-item-content{min-height:76px}.md-list-item-content .md-list-action{margin:0 -10px 0 0}.md-list-item-content .md-list-action:last-of-type{margin:0 -10px 0 16px}.md-list.md-triple-line .md-list-item-content .md-list-action:last-of-type{align-self:flex-start}.md-list-item-content>.md-icon:first-child{margin-right:32px}.md-list-item-content>.md-icon:last-child{margin-left:16px}.md-list-item-content>.md-checkbox,.md-list-item-content>.md-radio{margin:0}.md-list-item-content>.md-checkbox:first-child,.md-list-item-content>.md-radio:first-child{margin-right:36px}.md-list-item-content>.md-switch{margin:0}.md-list-item-content>.md-switch:first-child{margin-right:22px}.md-list-item-content>.md-avatar{margin:4px 0}.md-list-item-content>.md-avatar:first-child{margin-right:16px}.md-list-item-text{flex:1;display:flex;flex-direction:column;align-items:flex-start;overflow:hidden;line-height:1.25em;white-space:nowrap}.md-list.md-dense .md-list-item-text{font-size:13px}.md-list-item-text *{width:100%;margin:0;overflow:hidden;line-height:1.25em;text-overflow:ellipsis}.md-list-item-text :nth-child(2),.md-list-item-text :nth-child(3){font-size:14px}.md-list.md-dense .md-list-item-text *{font-size:13px}.md-list-item-expand{border-top:1px solid transparent;border-bottom:1px solid transparent;transition:border .4s cubic-bezier(.25,.8,.25,1);will-change:border}.md-list-item-expand.md-active>.md-list-item-content>.md-list-expand-icon{perspective:1000px;perspective-origin:50% 50%;transform:rotateX(180deg)}.md-list-item-expand.md-active .md-list-expand{opacity:1;transform:translateZ(0)}.md-list-item-expand .md-list-expand{height:0;opacity:0;overflow:hidden;transform:translate3D(0,-24px,0);transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:transform,opacity;will-change:transform,opacity}.md-list-item-expand .md-list-expand-icon{transition:transform .4s cubic-bezier(.25,.8,.25,1);will-change:transform}@keyframes b{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.7,.5);transform:translateX(0)}60%{animation-timing-function:cubic-bezier(.3,.38,.55,.96);transform:translateX(83.67%)}to{transform:translateX(200.61%)}}@keyframes c{0%{transform:scaleX(.08)}35%{animation-timing-function:cubic-bezier(.33,.12,.79,1);transform:scaleX(.08)}70%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66)}to{transform:scaleX(.08)}}@keyframes d{0%{animation-timing-function:cubic-bezier(.15,0,.52,.41);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31,.28,.8,.73);transform:translateX(37.65%)}50%{animation-timing-function:cubic-bezier(.4,.63,.6,.9);transform:translateX(84.39%)}to{transform:translateX(160.28%)}}@keyframes e{0%{animation-timing-function:cubic-bezier(.15,0,.52,.41);transform:scaleX(.08)}20%{animation-timing-function:cubic-bezier(.31,.28,.8,.73);transform:scaleX(.46)}45%{animation-timing-function:cubic-bezier(.4,.63,.6,.9);transform:scaleX(.73)}to{transform:scaleX(.08)}}@keyframes f{to{transform:translate3D(-8px,0,0)}}.md-progress-bar{height:5px;overflow:hidden;position:relative;transform:translateZ(0) scaleY(1);transform-origin:center center;transition:opacity .3s cubic-bezier(.4,0,.2,1),transform .4s cubic-bezier(.4,0,.2,1);will-change:opacity,transform}.md-progress-bar.md-indeterminate .md-progress-bar-track,.md-progress-bar.md-query .md-progress-bar-track{left:-150%;animation:b 2s linear infinite}.md-progress-bar.md-indeterminate .md-progress-bar-track:after,.md-progress-bar.md-query .md-progress-bar-track:after{animation:c 2s linear infinite}.md-progress-bar.md-indeterminate .md-progress-bar-fill,.md-progress-bar.md-query .md-progress-bar-fill{left:-55%;animation:d 2s linear infinite}.md-progress-bar.md-indeterminate .md-progress-bar-fill:after,.md-progress-bar.md-query .md-progress-bar-fill:after{animation:e 2s linear infinite}.md-progress-bar.md-buffer .md-progress-bar-buffer,.md-progress-bar.md-buffer .md-progress-bar-fill,.md-progress-bar.md-buffer .md-progress-bar-track,.md-progress-bar.md-determinate .md-progress-bar-buffer,.md-progress-bar.md-determinate .md-progress-bar-fill,.md-progress-bar.md-determinate .md-progress-bar-track{transition:.25s cubic-bezier(.25,.8,.25,1)}.md-progress-bar.md-determinate .md-progress-bar-track{display:none}.md-progress-bar.md-buffer .md-progress-bar-buffer{border-top:4px dotted;animation:f .25s linear infinite}.md-progress-bar.md-query{transform:rotate(180deg)}.md-progress-bar-enter,.md-progress-bar-leave-active{opacity:.5;transform:translateZ(0) scaleY(0)}.md-progress-bar-buffer,.md-progress-bar-fill,.md-progress-bar-track{transform-origin:top left}.md-progress-bar-buffer,.md-progress-bar-buffer:after,.md-progress-bar-fill,.md-progress-bar-fill:after,.md-progress-bar-track,.md-progress-bar-track:after{width:100%;height:100%;position:absolute;will-change:transform}.md-progress-bar-buffer:after,.md-progress-bar-fill:after,.md-progress-bar-track:after{display:inline-block;left:0;content:\" \"}@keyframes g{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes h{0%{opacity:0;transform:rotate(-90deg) translateZ(0)}20%{opacity:1}to{transform:rotate(270deg) translateZ(0)}}@keyframes i{0%{stroke-dashoffset:var(--md-progress-spinner-start-value);transform:rotate(0)}12.5%{stroke-dashoffset:var(--md-progress-spinner-end-value);transform:rotate(0)}12.51%{stroke-dashoffset:var(--md-progress-spinner-end-value);transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:var(--md-progress-spinner-start-value);transform:rotateX(180deg) rotate(72.5deg)}25.1%{stroke-dashoffset:var(--md-progress-spinner-start-value);transform:rotate(270deg)}37.5%{stroke-dashoffset:var(--md-progress-spinner-end-value);transform:rotate(270deg)}37.51%{stroke-dashoffset:var(--md-progress-spinner-end-value);transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:var(--md-progress-spinner-start-value);transform:rotateX(180deg) rotate(161.5deg)}50.01%{stroke-dashoffset:var(--md-progress-spinner-start-value);transform:rotate(180deg)}62.5%{stroke-dashoffset:var(--md-progress-spinner-end-value);transform:rotate(180deg)}62.51%{stroke-dashoffset:var(--md-progress-spinner-end-value);transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:var(--md-progress-spinner-start-value);transform:rotateX(180deg) rotate(251.5deg)}75.01%{stroke-dashoffset:var(--md-progress-spinner-start-value);transform:rotate(90deg)}87.5%{stroke-dashoffset:var(--md-progress-spinner-end-value);transform:rotate(90deg)}87.51%{stroke-dashoffset:var(--md-progress-spinner-end-value);transform:rotateX(180deg) rotate(341.5deg)}to{stroke-dashoffset:var(--md-progress-spinner-start-value);transform:rotateX(180deg) rotate(341.5deg)}}.md-progress-spinner{display:inline-flex;position:relative}.md-progress-spinner.md-indeterminate{animation:g 2s linear infinite}.md-progress-spinner.md-indeterminate.md-progress-spinner-enter .md-progress-spinner-draw,.md-progress-spinner.md-indeterminate.md-progress-spinner-leave-to .md-progress-spinner-draw{opacity:0;transform:scale(.1)}.md-progress-spinner.md-indeterminate.md-progress-spinner-enter-active,.md-progress-spinner.md-indeterminate.md-progress-spinner-leave-active{transition-duration:.4s;animation:none}.md-progress-spinner.md-indeterminate .md-progress-spinner-circle{animation:4s cubic-bezier(.25,.8,.25,1) infinite;animation-name:i}.md-progress-spinner.md-determinate.md-progress-spinner-enter-active{transition-duration:2s}.md-progress-spinner.md-determinate.md-progress-spinner-enter-active .md-progress-spinner-draw{animation:h 1.98s cubic-bezier(.25,.8,.25,1) forwards}.md-progress-spinner.md-determinate.md-progress-spinner-leave-active{transition-duration:2s}.md-progress-spinner.md-determinate.md-progress-spinner-leave-active .md-progress-spinner-draw{animation:h 1.98s cubic-bezier(.25,.8,.25,1) reverse forwards}.md-progress-spinner.md-determinate .md-progress-spinner-draw{transition:none}.md-progress-spinner-draw{overflow:visible;transform:scale(1) rotate(-90deg);transform-origin:center;transition:.4s cubic-bezier(.25,.8,.25,1);will-change:opacity,transform}.md-progress-spinner-circle{fill:none;transform-origin:center;transition:stroke-dashoffset .25s cubic-bezier(.25,.8,.25,1);will-change:stroke-dashoffset,stroke-dasharray,stroke-width,animation-name,r}.md-radio{width:auto;margin:16px 16px 16px 0;display:inline-flex;position:relative}.md-radio:not(.md-disabled),.md-radio:not(.md-disabled) .md-radio-label{cursor:pointer}.md-radio .md-radio-container{width:20px;min-width:20px;height:20px;position:relative;border:2px solid transparent;border-radius:50%;transition:.4s cubic-bezier(.25,.8,.25,1)}.md-radio .md-radio-container:focus{outline:none}.md-radio .md-radio-container:after,.md-radio .md-radio-container:before{position:absolute;transition:.4s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-radio .md-radio-container:before{width:48px;height:48px;top:50%;left:50%;z-index:6;border-radius:50%;transform:translate(-50%,-50%)}.md-radio .md-radio-container:after{position:absolute;top:3px;right:3px;bottom:3px;left:3px;border-radius:50%;opacity:0;transform:scale3D(.38,.38,1);content:\" \"}.md-radio .md-radio-container .md-ripple{width:48px!important;height:48px!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%);border-radius:50%}.md-radio .md-radio-container input{position:absolute;left:-999em}.md-radio .md-radio-label{height:20px;padding-left:16px;position:relative;line-height:20px}.md-radio.md-checked .md-radio-container:after{opacity:1;transform:scaleX(1);transition:.4s cubic-bezier(.25,.8,.25,1)}.md-radio.md-required label:after{position:absolute;top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";line-height:1em;vertical-align:top}.md-snackbar{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:288px;max-width:568px;min-height:48px;max-height:80px;padding:14px 24px;display:flex;align-items:center;position:fixed;z-index:14;border-radius:2px;transition:.4s cubic-bezier(.4,0,.2,1);will-change:background-color,color,opacity,transform}.md-snackbar.md-position-center{margin:0 auto;right:0;bottom:0;left:0}.md-snackbar.md-position-center.md-snackbar-enter,.md-snackbar.md-position-center.md-snackbar-leave-active{transform:translate3D(0,calc(100% + 8px),0)}.md-snackbar.md-position-left{bottom:24px;left:24px}.md-snackbar.md-position-left.md-snackbar-enter,.md-snackbar.md-position-left.md-snackbar-leave-active{transform:translate3D(0,calc(100% + 32px),0)}.md-snackbar-enter,.md-snackbar-enter .md-snackbar-content,.md-snackbar-leave-active,.md-snackbar-leave-active .md-snackbar-content{opacity:0}.md-snackbar-content{flex:1;display:flex;align-items:center;justify-content:space-between;transition:opacity .38s cubic-bezier(.55,0,.55,.2)}.md-snackbar-content .md-button{min-width:0;margin:-8px -8px -8px 36px}.md-snackbar-content .md-button+.md-button{margin-left:16px}@media (max-width:600px){.md-snackbar{left:0;transform:none;border-radius:0}.md-snackbar-content .md-button{margin-left:12px}}.md-speed-dial{display:inline-flex;flex-direction:column}.md-speed-dial.md-top-left,.md-speed-dial.md-top-right{position:absolute;top:24px}.md-speed-dial.md-bottom-left,.md-speed-dial.md-bottom-right{position:absolute;bottom:24px}.md-speed-dial.md-bottom-center,.md-speed-dial.md-top-center{position:absolute;left:50%;transform:translateX(-50%)}.md-speed-dial.md-top-center{top:24px}.md-speed-dial.md-bottom-center{bottom:24px}.md-speed-dial.md-bottom-right,.md-speed-dial.md-top-right{right:24px}.md-speed-dial.md-bottom-left,.md-speed-dial.md-top-left{left:24px}.md-speed-dial.md-fixed{position:fixed}.md-speed-dial.md-direction-top.md-effect-fling .md-speed-dial-content .md-button{transform:translate3d(0,50%,0) scale(.8)}.md-speed-dial.md-direction-top .md-speed-dial-target{order:2;margin-bottom:0!important}.md-speed-dial.md-direction-top .md-speed-dial-content{order:1}.md-speed-dial.md-direction-top .md-speed-dial-content .md-button:first-child{margin-top:0}.md-speed-dial.md-direction-bottom.md-effect-fling .md-speed-dial-content .md-button{transform:translate3d(0,-50%,0) scale(.8)}.md-speed-dial.md-direction-bottom .md-speed-dial-target{order:1;margin-top:0!important}.md-speed-dial.md-direction-bottom .md-speed-dial-content{order:2}.md-speed-dial.md-direction-bottom .md-speed-dial-content .md-button:last-child{margin-bottom:0}.md-speed-dial.md-effect-scale .md-speed-dial-content .md-button{transform:scale(.3)}.md-speed-dial.md-active .md-morph-initial,.md-speed-dial.md-with-hover:hover .md-morph-initial{opacity:0;transform:translate3D(-50%,-50%,0) rotate(90deg) scale(.7)}.md-speed-dial.md-active .md-morph-final,.md-speed-dial.md-with-hover:hover .md-morph-final{opacity:1;transform:translate3D(-50%,-50%,0) rotate(0deg) scale(1)}.md-speed-dial.md-active .md-speed-dial-content .md-button,.md-speed-dial.md-with-hover:hover .md-speed-dial-content .md-button{pointer-events:auto;opacity:1;transform:translateZ(0) scale(1)!important;transition:opacity .2s cubic-bezier(.4,0,.2,1),transform .3s cubic-bezier(.25,.8,.25,1)}.md-speed-dial.md-active .md-speed-dial-content .md-button[md-button-index=\"0\"],.md-speed-dial.md-with-hover:hover .md-speed-dial-content .md-button[md-button-index=\"0\"]{transition-delay:0s}.md-speed-dial.md-active .md-speed-dial-content .md-button[md-button-index=\"1\"],.md-speed-dial.md-with-hover:hover .md-speed-dial-content .md-button[md-button-index=\"1\"]{transition-delay:.1s}.md-speed-dial.md-active .md-speed-dial-content .md-button[md-button-index=\"2\"],.md-speed-dial.md-with-hover:hover .md-speed-dial-content .md-button[md-button-index=\"2\"]{transition-delay:.2s}.md-speed-dial.md-active .md-speed-dial-content .md-button[md-button-index=\"3\"],.md-speed-dial.md-with-hover:hover .md-speed-dial-content .md-button[md-button-index=\"3\"]{transition-delay:.3s}.md-speed-dial.md-active .md-speed-dial-content .md-button[md-button-index=\"4\"],.md-speed-dial.md-with-hover:hover .md-speed-dial-content .md-button[md-button-index=\"4\"]{transition-delay:.4s}.md-speed-dial.md-active .md-speed-dial-content .md-button[md-button-index=\"5\"],.md-speed-dial.md-with-hover:hover .md-speed-dial-content .md-button[md-button-index=\"5\"]{transition-delay:.5s}.md-speed-dial .md-button{margin:6px 0}.md-speed-dial .md-speed-dial-content .md-button{pointer-events:none;opacity:0;transition:opacity .3s cubic-bezier(.4,0,.2,1),transform 0s cubic-bezier(.4,0,.2,1) .3s;will-change:opacity,transform}.md-speed-dial .md-morph-final,.md-speed-dial .md-morph-initial{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform;will-change:opacity,transform}.md-speed-dial .md-morph-final{opacity:0;transform:translate3D(-50%,-50%,0) scale(.7) rotate(-90deg)}.md-speed-dial-target{z-index:1}.md-speed-dial-content{display:flex;flex-direction:column;align-items:center;position:relative;z-index:2}.md-speed-dial-content,.md-steppers{transition:.3s cubic-bezier(.4,0,.2,1)}.md-steppers{transition-property:color,background-color;will-change:color,background-color}.md-steppers.md-no-transition *{transition:none!important}.md-steppers.md-dynamic-height .md-steppers-wrapper{transition:height .3s cubic-bezier(.4,0,.2,1);will-change:height}.md-steppers.md-horizontal.md-alternative .md-stepper-header{height:104px}.md-steppers.md-horizontal.md-alternative .md-stepper-header:first-of-type .md-stepper-icon:before,.md-steppers.md-horizontal.md-alternative .md-stepper-header:first-of-type .md-stepper-number:before,.md-steppers.md-horizontal.md-alternative .md-stepper-header:last-of-type .md-stepper-icon:after,.md-steppers.md-horizontal.md-alternative .md-stepper-header:last-of-type .md-stepper-number:after{content:none}.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-ripple{justify-content:center}.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-button-content{padding-top:16px;flex-direction:column}.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-button-content:after,.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-button-content:before{content:none}.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-text{height:32px;justify-content:flex-start;text-align:center}.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-icon,.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-number{margin:0 8px 8px;position:relative}.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-icon:after,.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-icon:before,.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-number:after,.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-number:before{width:9999%;height:1px;position:absolute;top:50%;z-index:2;transition:background-color .3s cubic-bezier(.4,0,.2,1);will-change:background-color;content:\" \"}.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-icon:after,.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-number:after{left:calc(100% + 8px)}.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-icon:before,.md-steppers.md-horizontal.md-alternative .md-stepper-header .md-stepper-number:before{right:32px}.md-steppers.md-vertical .md-stepper-header{height:56px}.md-steppers.md-vertical .md-stepper-header .md-ripple{padding:0 24px 0 16px}.md-steppers.md-vertical .md-steppers-container{display:block}.md-steppers.md-vertical .md-button-content:after,.md-steppers.md-vertical .md-button-content:before{content:none}.md-steppers.md-vertical .md-stepper-icon,.md-steppers.md-vertical .md-stepper-number{margin-right:12px}.md-steppers.md-vertical .md-stepper{flex:none;padding:0;position:relative}.md-steppers.md-vertical .md-stepper:last-of-type:after{content:none}.md-steppers.md-vertical .md-stepper:after{width:1px;position:absolute;top:48px;bottom:-8px;left:36px;z-index:2;transition:background-color .3s cubic-bezier(.4,0,.2,1);will-change:background-color;content:\" \"}.md-steppers-navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:flex}.md-steppers-navigation .md-stepper-header{width:auto}.md-stepper-header{width:100%;height:72px;margin:0;flex:1;border-radius:0;font-weight:400;text-align:left;text-transform:none}.md-stepper-header:first-of-type .md-button-content:before,.md-stepper-header:last-of-type .md-button-content:after{content:none}.md-stepper-header.md-active,.md-stepper-header.md-error{font-weight:500}.md-stepper-header .md-ripple{padding:0 16px;justify-content:flex-start}.md-stepper-header .md-button-content{padding:0 8px;display:flex;align-items:center;transition:color .3s cubic-bezier(.4,0,.2,1);will-change:color}.md-stepper-header .md-button-content:after,.md-stepper-header .md-button-content:before{height:1px;position:absolute;top:50%;transition:background-color .3s cubic-bezier(.4,0,.2,1);will-change:background-color;content:\" \"}.md-stepper-header .md-button-content:after{width:9999%;left:100%}.md-stepper-header .md-button-content:before{width:16px;left:-16px}.md-stepper-header .md-button-content svg{transition:.3s cubic-bezier(.4,0,.2,1);transition-property:color,fill;will-change:color,fill}.md-stepper-text{display:flex;flex-direction:column;justify-content:center;line-height:16px;white-space:nowrap}.md-stepper-icon,.md-stepper-number{margin-right:8px;transition:color .3s cubic-bezier(.4,0,.2,1);will-change:color}.md-stepper-number{width:24px;height:24px;border-radius:24px;transition:.3s cubic-bezier(.4,0,.2,1);transition-property:color,background-color;will-change:color,background-color;font-size:12px;line-height:24px;text-align:center}.md-stepper-done{width:20px;height:20px;transform:translateY(-1px)}.md-stepper-editable{width:14px;height:14px;transform:translateY(-1px)}.md-stepper-description,.md-stepper-error{font-size:12px;font-weight:400;line-height:16px}.md-stepper-description{opacity:.54}.md-steppers-wrapper{overflow:hidden;transition:none;will-change:height}.md-steppers-container{display:flex;align-items:flex-start;flex-wrap:nowrap;transform:translateZ(0);transition:transform .35s cubic-bezier(.4,0,.2,1);will-change:transform}.md-stepper{width:100%;flex:1 0 100%;padding:16px 24px}@media (max-width:960px){.md-stepper{padding:8px 16px}}.md-steppers.md-vertical .md-stepper-content{padding:0 24px 0 60px;height:0;overflow:hidden;opacity:0;transform:translate3D(0,-20px,0);transition:.35s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform,height,padding-bottom;will-change:opacity,transform,height,padding-bottom}.md-steppers.md-vertical .md-stepper-content.md-active{height:auto;padding-bottom:40px;opacity:1;transform:translateZ(0)}.md-subheader{min-height:48px;padding:0 16px;display:flex;align-items:center;flex-flow:row wrap;font-size:14px;font-weight:500}.md-switch{width:auto;margin:16px 16px 16px 0;display:inline-flex;position:relative}.md-switch:not(.md-disabled),.md-switch:not(.md-disabled) .md-switch-label{cursor:pointer}.md-switch .md-switch-container{width:34px;min-width:34px;height:14px;margin:3px 0;display:flex;align-items:center;position:relative;border-radius:14px;transition:.4s cubic-bezier(.25,.8,.25,1)}.md-switch .md-switch-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);width:20px;height:20px;position:relative;border-radius:50%;transition:.4s cubic-bezier(.25,.8,.25,1)}.md-switch .md-switch-thumb:before{width:48px;height:48px;position:absolute;top:50%;left:50%;z-index:6;transform:translate(-50%,-50%);content:\" \"}.md-switch .md-switch-thumb .md-ripple{width:48px!important;height:48px!important;top:50%!important;left:50%!important;position:absolute;transform:translate(-50%,-50%);border-radius:50%}.md-switch .md-switch-thumb input{position:absolute;left:-999em}.md-switch .md-switch-label{height:20px;padding-left:16px;position:relative;line-height:20px}.md-switch.md-checked .md-switch-thumb{transform:translate3d(15px,0,0)}.md-switch.md-required label:after{position:absolute;top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";line-height:1em;vertical-align:top}.md-table{display:flex;flex-flow:column wrap;overflow-x:auto}.md-table .md-table-fixed-header{position:relative}.md-table .md-table-fixed-header .md-table-fixed-header-container{flex:1;overflow-x:auto}.md-table .md-table-fixed-header .md-table-fixed-header-container::-webkit-scrollbar,.md-table .md-table-fixed-header .md-table-fixed-header-container::-webkit-scrollbar-button,.md-table .md-table-fixed-header .md-table-fixed-header-container::-webkit-scrollbar-thumb{display:none}.md-table .md-table-fixed-header-active{border-bottom:1px solid}.md-table .md-table-content{flex:1;overflow-x:auto;transition:height .3s cubic-bezier(.4,0,.2,1)}.md-table .md-table-empty{display:flex;align-items:center;justify-content:center}.md-table table{width:100%;border-spacing:0;border-collapse:collapse;overflow:hidden}.md-table-head{padding:0;position:relative;font-size:12px;line-height:16px;text-align:left}.md-table-head:last-child:not(:first-child) .md-table-head-label{padding-right:24px}.md-table-head.md-numeric{text-align:right}.md-table-head.md-sortable:first-of-type .md-table-sortable-icon,.md-table-head.md-table-cell-selection+.md-sortable .md-table-sortable-icon{right:8px;left:auto}.md-table-head .md-icon{width:16px;height:16px;font-size:16px}.md-table-head .md-icon:not(.md-sortable-icon){margin:0 4px}.md-table-head .md-icon:first-child{margin-left:0}.md-table-head .md-icon:last-child{margin-right:0}.md-sortable{cursor:pointer}.md-sortable.md-sorted .md-table-sortable-icon,.md-sortable:hover .md-table-sortable-icon{opacity:1}.md-sortable.md-sorted-desc .md-table-sortable-icon{transform:translateY(-50%) rotate(180deg)}.md-table-head-container{height:56px;padding:14px 0}.md-table-head-container,.md-table-head-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.md-table-head-label{height:28px;padding-right:32px;padding-left:24px;display:inline-block;position:relative;line-height:28px}.md-table-sortable-icon{position:absolute;top:50%;left:0;transition:.3s cubic-bezier(.4,0,.2,1);transform:translateY(-50%);opacity:0;color:rgba(0,0,0,.38)}.md-table-alternate-header{position:absolute;top:0;right:0;left:0;z-index:2;will-change:opacity,transform}.md-table-alternate-header-enter,.md-table-alternate-header-leave-active{opacity:0;transform:translate3d(0,-100%,0)}.md-table-alternate-header-enter-active{transition:.3s cubic-bezier(.4,0,.2,1)}.md-table-alternate-header-leave-active{transition:.2s cubic-bezier(.4,0,1,1)}.md-table-row{transition:.3s cubic-bezier(.4,0,.2,1);transition-property:background-color,font-weight;will-change:background-color,font-weight}.md-table-row.md-has-selection{cursor:pointer}.md-table-row.md-selected-single{font-weight:500}tbody .md-table-row td{border-top:1px solid}.md-table-cell-selection{width:66px}.md-table-cell-selection+td .md-table-cell-container,.md-table-cell-selection+th .md-table-head-label{padding-left:0}.md-table-cell-selection .md-table-cell-container,.md-table-cell-selection .md-table-cell-label,.md-table-cell-selection .md-table-head-container,.md-table-cell-selection .md-table-head-label{padding:0;display:flex;align-items:center;justify-content:center;overflow:visible}.md-table-cell-selection .md-checkbox{margin:0}.md-table-cell-selection .md-checkbox .md-checkbox-container{width:18px;min-width:18px;height:18px}.md-table-cell-selection .md-checkbox .md-checkbox-container:after{top:-1px;left:4px}.md-table-toolbar{padding-left:24px}.md-table-toolbar .md-title{flex:1;font-size:20px}.md-toolbar,.md-toolbar-row{width:100%;min-height:64px;display:flex;align-items:center;align-content:center;transition:.3s cubic-bezier(.4,0,.2,1);transition-property:opacity,background-color,box-shadow,transform,color,min-height;will-change:opacity,background-color,box-shadow,transform,color,min-height}.md-toolbar{padding:0 16px;flex-flow:row wrap;position:relative;z-index:2}.md-toolbar.md-dense{min-height:48px}.md-toolbar.md-large .md-toolbar-row,.md-toolbar.md-medium .md-toolbar-row{min-height:64px}.md-toolbar.md-medium{min-height:88px}.md-toolbar.md-large{min-height:128px;align-content:inherit}.md-toolbar.md-large.md-dense{min-height:96px}.md-toolbar.md-large.md-dense .md-toolbar-row+.md-toolbar-row{min-height:32px}.md-toolbar .md-toolbar-offset{margin-left:56px}.md-toolbar .md-button,.md-toolbar .md-icon{z-index:1}.md-toolbar .md-button~.md-title,.md-toolbar .md-icon~.md-title{margin-left:24px}.md-toolbar .md-button:last-child{margin-right:0}.md-toolbar .md-button:first-child{margin-left:0}.md-toolbar .md-display-1,.md-toolbar .md-display-2,.md-toolbar .md-title{margin:0 0 0 8px;overflow:hidden;font-weight:400;letter-spacing:.02em;text-overflow:ellipsis;white-space:nowrap;vertical-align:top}.md-toolbar .md-display-1{padding:12px 0}.md-toolbar .md-field{margin-top:2px;margin-bottom:14px;padding-top:16px}.md-toolbar-row{align-self:flex-start}.md-toolbar-section-end,.md-toolbar-section-start{display:flex;align-items:center;flex:1}.md-toolbar-section-start{justify-content:flex-start;order:0}.md-toolbar-section-end{justify-content:flex-end;order:10}@media (max-width:960px){.md-toolbar,.md-toolbar-row{min-height:48px}.md-toolbar{padding:0 8px}.md-toolbar .md-toolbar-offset{margin-left:48px}.md-toolbar .md-button~.md-title,.md-toolbar .md-icon~.md-title{margin-left:16px}}@media (max-width:600px){.md-toolbar,.md-toolbar-row{min-height:56px}}.md-table-empty-state{padding-left:24px}.md-table-cell{height:48px;position:relative;transition:.3s cubic-bezier(.4,0,.2,1);font-size:13px;line-height:18px}.md-table-cell.md-numeric{text-align:right}.md-table-cell:last-child .md-table-cell-container{padding-right:24px}.md-table-cell-container{padding:6px 32px 6px 24px}.md-table-pagination{height:56px;display:flex;flex:1;align-items:center;justify-content:flex-end;border-top:1px solid;font-size:12px}.md-table-pagination .md-table-pagination-previous{margin-right:2px;margin-left:18px}.md-table-pagination .md-field{width:48px;min-width:36px;margin:-16px 24px 0 32px}.md-table-pagination .md-field:after,.md-table-pagination .md-field:before{display:none}.md-table-pagination .md-field .md-select-value{font-size:13px}.md-menu-content.md-pagination-select{max-width:82px;min-width:56px;margin-top:5px}.md-tabs{display:flex;flex-direction:column}.md-tabs.md-no-transition *{transition:none!important}.md-tabs.md-dynamic-height .md-tabs-content{transition:height .3s cubic-bezier(.4,0,.2,1);will-change:height}.md-tabs.md-transparent .md-tabs-content,.md-tabs.md-transparent .md-tabs-navigation{background-color:transparent!important}.md-tabs.md-dynamic-height .md-tabs-content{transition:height .35s cubic-bezier(.25,.8,.25,1)}.md-tabs.md-alignment-left .md-tabs-navigation{justify-content:flex-start}.md-tabs.md-alignment-right .md-tabs-navigation{justify-content:flex-end}.md-tabs.md-alignment-centered .md-tabs-navigation,.md-tabs.md-alignment-fixed .md-tabs-navigation{justify-content:center}.md-tabs.md-alignment-fixed .md-tabs-navigation .md-button{max-width:264px;min-width:160px;flex:1}.md-toolbar .md-tabs{padding-left:48px}.md-tabs-navigation{display:flex;position:relative}.md-tabs-navigation .md-button{max-width:264px;min-width:72px;height:48px;margin:0;cursor:pointer;border-radius:0;font-size:13px}.md-tabs-navigation .md-button-content{position:static}.md-tabs-navigation .md-icon-label{height:72px}.md-tabs-navigation .md-icon-label .md-button-content{display:flex;flex-direction:column;justify-content:center}.md-tabs-navigation .md-icon-label .md-tab-icon+.md-tab-label{margin-top:10px}.md-tabs-navigation .md-ripple{padding:0 24px}.md-tabs-indicator{height:2px;position:absolute;bottom:0;left:0;transform:translateZ(0);will-change:left,right}.md-tabs-indicator.md-tabs-indicator-left{transition:left .3s cubic-bezier(.4,0,.2,1),right .35s cubic-bezier(.4,0,.2,1)}.md-tabs-indicator.md-tabs-indicator-right{transition:right .3s cubic-bezier(.4,0,.2,1),left .35s cubic-bezier(.4,0,.2,1)}.md-tabs-content{overflow:hidden;transition:none;will-change:height}.md-tabs-container{display:flex;align-items:flex-start;flex-wrap:nowrap;transform:translateZ(0);transition:transform .35s cubic-bezier(.4,0,.2,1);will-change:transform}.md-tab{width:100%;flex:1 0 100%;padding:16px}@media (max-width:960px){.md-tabs.md-alignment-fixed .md-tabs-navigation .md-button{min-width:72px}.md-toolbar .md-tabs{margin:0 -8px;padding-left:0}.md-tabs-navigation .md-ripple{padding:0 12px}.md-tab{padding:8px}}.md-tooltip{height:22px;padding:0 8px;position:fixed;z-index:12;pointer-events:none;border-radius:2px;transition:.15s cubic-bezier(0,0,.2,1);transition-property:opacity,transform;will-change:opacity,transform,top,left!important;font-size:10px;line-height:22px;text-transform:none;white-space:nowrap}.md-tooltip.md-tooltip-leave-active{transition-timing-function:cubic-bezier(.4,0,1,1)}.md-tooltip.md-tooltip-enter,.md-tooltip.md-tooltip-leave-active{opacity:0}.md-tooltip.md-tooltip-enter.md-tooltip-top,.md-tooltip.md-tooltip-leave-active.md-tooltip-top{transform:translate3d(0,4px,0) scale(.95)}.md-tooltip.md-tooltip-enter.md-tooltip-right,.md-tooltip.md-tooltip-leave-active.md-tooltip-right{transform:translate3d(-4px,0,0) scale(.95)}.md-tooltip.md-tooltip-enter.md-tooltip-bottom,.md-tooltip.md-tooltip-leave-active.md-tooltip-bottom{transform:translate3d(0,-4px,0) scale(.95)}.md-tooltip.md-tooltip-enter.md-tooltip-left,.md-tooltip.md-tooltip-leave-active.md-tooltip-left{transform:translate3d(4px,0,0) scale(.95)}@media (max-width:960px){.md-tooltip{height:32px;font-size:14px;line-height:32px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("705cc8bb", content, true)

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--md-theme-default-primary:#448aff;--md-theme-default-accent:#ff5252;--md-theme-default-theme:dark}.md-theme-default :not(input):not(textarea)::selection{background-color:#ff5252;background-color:var(--md-theme-default-accent-on-background,#ff5252);color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-theme-default a:not(.md-button){color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-theme-default a:not(.md-button):hover{color:rgba(68,138,255,.8);color:var(--md-theme-default-primary-on-background,rgba(68,138,255,.8))}.md-theme-default a:not(.md-button).md-accent{color:#ff5252;color:var(--md-theme-default-accent-on-background,#ff5252)}.md-theme-default a:not(.md-button).md-accent:hover{color:rgba(255,82,82,.8);color:var(--md-theme-default-accent-on-background,rgba(255,82,82,.8))}html.md-theme-default{background-color:#303030;background-color:var(--md-theme-default-background-variant,#303030);color:#fff;color:var(--md-theme-default-text-primary-on-background-variant,#fff)}.md-theme-default .md-caption,.md-theme-default .md-display-1,.md-theme-default .md-display-2,.md-theme-default .md-display-3,.md-theme-default .md-display-4{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-accent-on-background-variant,hsla(0,0%,100%,.7))}.md-scrollbar.md-theme-default::-webkit-scrollbar-corner,.md-scrollbar.md-theme-default::-webkit-scrollbar-track{background:#212121;background:var(--md-theme-default-scrollbar-background-on-background-variant,#212121)}.md-scrollbar.md-theme-default::-webkit-scrollbar-thumb{background:#9e9e9e;background:var(--md-theme-default-scrollbar-on-background-variant,#9e9e9e)}.md-app:not(.md-overlap).md-theme-default{background-color:#424242;background-color:var(--md-theme-default-background,#424242)}.md-list.md-theme-default .md-autocomplete-items .md-highlight-text-match{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-list.md-theme-default .md-autocomplete-loading{background-color:rgba(66,66,66,.54);background-color:var(--md-theme-default-background,rgba(66,66,66,.54))}.md-autocomplete.md-theme-default.md-autocomplete-box{background-color:#424242;background-color:var(--md-theme-default-background,#424242)}.md-autocomplete.md-theme-default.md-autocomplete-box.md-focused label{color:hsla(0,0%,100%,.5);color:var(--md-theme-default-text-hint-on-background,hsla(0,0%,100%,.5))}.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box{background-color:rgba(66,66,66,.12);background-color:var(--md-theme-default-background,rgba(66,66,66,.12))}.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box input,.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box label{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff);-webkit-text-fill-color:#fff;-webkit-text-fill-color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box svg{fill:#fff;fill:var(--md-theme-default-text-primary-on-primary,#fff)}.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box.md-focused{background-color:#424242;background-color:var(--md-theme-default-background,#424242)}.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box.md-focused input,.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box.md-focused label{color:hsla(0,0%,100%,.5);color:var(--md-theme-default-text-hint-on-background,hsla(0,0%,100%,.5));-webkit-text-fill-color:hsla(0,0%,100%,.5);-webkit-text-fill-color:var(--md-theme-default-text-hint-on-background,hsla(0,0%,100%,.5))}.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box.md-focused svg{fill:hsla(0,0%,100%,.5);fill:var(--md-theme-default-text-hint-on-background,hsla(0,0%,100%,.5))}.md-autocomplete-box-content.md-theme-default:after{background-color:#424242;background-color:var(--md-theme-default-background,#424242);border-bottom-color:hsla(0,0%,100%,.12);border-bottom-color:var(--md-theme-default-divider,hsla(0,0%,100%,.12))}.md-avatar.md-theme-default.md-avatar-icon{background-color:hsla(0,0%,100%,.5);background-color:var(--md-theme-default-icon-disabled,hsla(0,0%,100%,.5))}.md-avatar.md-theme-default.md-avatar-icon,.md-avatar.md-theme-default.md-avatar-icon .md-icon{color:rgba(0,0,0,.87);color:var(--md-theme-default-text-primary-on-icon-disabled,rgba(0,0,0,.87))}.md-avatar.md-theme-default.md-avatar-icon .md-icon{fill:rgba(0,0,0,.87);fill:var(--md-theme-default-text-primary-on-icon-disabled,rgba(0,0,0,.87))}.md-avatar.md-theme-default.md-primary,.md-avatar.md-theme-default.md-primary.md-avatar-icon{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-avatar.md-theme-default.md-primary.md-avatar-icon,.md-avatar.md-theme-default.md-primary.md-avatar-icon .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-avatar.md-theme-default.md-primary.md-avatar-icon .md-icon{fill:#fff;fill:var(--md-theme-default-text-primary-on-primary,#fff)}.md-avatar.md-theme-default.md-accent,.md-avatar.md-theme-default.md-accent.md-avatar-icon{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-avatar.md-theme-default.md-accent.md-avatar-icon,.md-avatar.md-theme-default.md-accent.md-avatar-icon .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-avatar.md-theme-default.md-accent.md-avatar-icon .md-icon{fill:#fff;fill:var(--md-theme-default-text-primary-on-accent,#fff)}.md-bottom-bar.md-theme-default.md-type-fixed{background-color:#424242;background-color:var(--md-theme-default-background,#424242)}.md-bottom-bar.md-theme-default.md-type-fixed .md-bottom-bar-item.md-active,.md-bottom-bar.md-theme-default.md-type-fixed .md-bottom-bar-item.md-active .md-icon{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-bottom-bar.md-theme-default.md-type-fixed .md-bottom-bar-item.md-active .md-icon svg{fill:#448aff;fill:var(--md-theme-default-primary-on-background,#448aff)}.md-bottom-bar.md-theme-default.md-type-shift{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff);color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-primary-on-primary,hsla(0,0%,100%,.7))}.md-bottom-bar.md-theme-default.md-type-shift>.md-ripple .md-ripple-wave{background-color:#116aff;background-color:var(--md-theme-default-primary-on-primary,#116aff)}.md-bottom-bar.md-theme-default.md-type-shift .md-icon{color:#fff;color:var(--md-theme-default-icon-on-primary,#fff)}.md-bottom-bar.md-theme-default.md-type-shift .md-icon svg{fill:#fff;fill:var(--md-theme-default-icon-on-primary,#fff)}.md-bottom-bar.md-theme-default.md-type-shift .md-bottom-bar-item,.md-bottom-bar.md-theme-default.md-type-shift .md-bottom-bar-item .md-active .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-bottom-bar.md-theme-default.md-type-shift .md-bottom-bar-item .md-active .md-icon svg{fill:#fff;fill:var(--md-theme-default-text-primary-on-primary,#fff)}.md-bottom-bar.md-theme-default.md-accent.md-type-fixed{background-color:#424242;background-color:var(--md-theme-default-background,#424242)}.md-bottom-bar.md-theme-default.md-accent.md-type-fixed .md-bottom-bar-item.md-active,.md-bottom-bar.md-theme-default.md-accent.md-type-fixed .md-bottom-bar-item.md-active .md-icon{color:#ff5252;color:var(--md-theme-default-accent-on-background,#ff5252)}.md-bottom-bar.md-theme-default.md-accent.md-type-fixed .md-bottom-bar-item.md-active .md-icon svg{fill:#ff5252;fill:var(--md-theme-default-accent-on-background,#ff5252)}.md-bottom-bar.md-theme-default.md-accent.md-type-shift{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252);color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-primary-on-accent,hsla(0,0%,100%,.7))}.md-bottom-bar.md-theme-default.md-accent.md-type-shift>.md-ripple .md-ripple-wave{background-color:#ff1f1f;background-color:var(--md-theme-default-accent-on-accent,#ff1f1f)}.md-bottom-bar.md-theme-default.md-accent.md-type-shift .md-icon{color:#fff;color:var(--md-theme-default-icon-on-accent,#fff)}.md-bottom-bar.md-theme-default.md-accent.md-type-shift .md-icon svg{fill:#fff;fill:var(--md-theme-default-icon-on-accent,#fff)}.md-bottom-bar.md-theme-default.md-accent.md-type-shift .md-bottom-bar-item,.md-bottom-bar.md-theme-default.md-accent.md-type-shift .md-bottom-bar-item .md-active .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-bottom-bar.md-theme-default.md-accent.md-type-shift .md-bottom-bar-item .md-active .md-icon svg{fill:#fff;fill:var(--md-theme-default-text-primary-on-accent,#fff)}.md-button.md-theme-default{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-button.md-theme-default.md-primary,.md-button.md-theme-default.md-primary .md-icon-font{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-button.md-theme-default.md-primary .md-icon-image{fill:#448aff;fill:var(--md-theme-default-primary-on-background,#448aff)}.md-button.md-theme-default.md-accent,.md-button.md-theme-default.md-accent .md-icon-font{color:#ff5252;color:var(--md-theme-default-accent-on-background,#ff5252)}.md-button.md-theme-default.md-accent .md-icon-image{fill:#ff5252;fill:var(--md-theme-default-accent-on-background,#ff5252)}.md-button.md-theme-default.md-raised[disabled]{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-disabled-background-on-background,hsla(0,0%,100%,.12));color:hsla(0,0%,100%,.3);color:var(--md-theme-default-disabled,hsla(0,0%,100%,.3))}.md-button.md-theme-default.md-raised:not([disabled]){background-color:#424242;background-color:var(--md-theme-default-background,#424242);color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-button.md-theme-default.md-raised:not([disabled]).md-primary{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-button.md-theme-default.md-raised:not([disabled]).md-primary,.md-button.md-theme-default.md-raised:not([disabled]).md-primary .md-icon-font{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-button.md-theme-default.md-raised:not([disabled]).md-primary .md-icon-image{fill:#fff;fill:var(--md-theme-default-text-primary-on-primary,#fff)}.md-button.md-theme-default.md-raised:not([disabled]).md-accent{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-button.md-theme-default.md-raised:not([disabled]).md-accent,.md-button.md-theme-default.md-raised:not([disabled]).md-accent .md-icon-font{color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-button.md-theme-default.md-raised:not([disabled]).md-accent .md-icon-image{fill:#fff;fill:var(--md-theme-default-text-primary-on-accent,#fff)}.md-button.md-theme-default.md-fab[disabled]{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-disabled-background-on-background,hsla(0,0%,100%,.12))}.md-button.md-theme-default.md-fab:not([disabled]){background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-button.md-theme-default.md-fab:not([disabled]) .md-icon-font{color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-button.md-theme-default.md-fab:not([disabled]) .md-icon-image{fill:#fff;fill:var(--md-theme-default-text-primary-on-accent,#fff)}.md-button.md-theme-default.md-fab:not([disabled]).md-primary{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-button.md-theme-default.md-fab:not([disabled]).md-primary .md-icon-font{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-button.md-theme-default.md-fab:not([disabled]).md-primary .md-icon-image{fill:#fff;fill:var(--md-theme-default-text-primary-on-primary,#fff)}.md-button.md-theme-default[disabled]{color:hsla(0,0%,100%,.3);color:var(--md-theme-default-disabled-on-background,hsla(0,0%,100%,.3))}.md-button.md-theme-default[disabled] .md-icon-font{color:hsla(0,0%,100%,.5);color:var(--md-theme-default-icon-disabled-on-background,hsla(0,0%,100%,.5))}.md-button.md-theme-default[disabled] .md-icon-image{fill:hsla(0,0%,100%,.5);fill:var(--md-theme-default-icon-disabled-on-background,hsla(0,0%,100%,.5))}.md-card.md-theme-default{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-card.md-theme-default,.md-card.md-theme-default .md-card-expand .md-card-actions{background-color:#424242;background-color:var(--md-theme-default-background,#424242)}.md-card.md-theme-default .md-card-actions .md-button:not(.md-primary):not(.md-accent),.md-card.md-theme-default .md-card-header .md-button:not(.md-primary):not(.md-accent){color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-card.md-theme-default .md-card-actions .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon,.md-card.md-theme-default .md-card-header .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon{color:hsla(0,0%,100%,.54);color:var(--md-theme-default-text-primary-on-background,hsla(0,0%,100%,.54));fill:hsla(0,0%,100%,.54);fill:var(--md-theme-default-text-primary-on-background,hsla(0,0%,100%,.54))}.md-card.md-theme-default>.md-card-area:after{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-card.md-theme-default.md-primary{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-card.md-theme-default.md-primary,.md-card.md-theme-default.md-primary .md-card-expand .md-card-actions{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-card.md-theme-default.md-primary .md-card-actions .md-button:not(.md-primary):not(.md-accent),.md-card.md-theme-default.md-primary .md-card-header .md-button:not(.md-primary):not(.md-accent){color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-card.md-theme-default.md-primary .md-card-actions .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon,.md-card.md-theme-default.md-primary .md-card-header .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon{color:hsla(0,0%,100%,.54);color:var(--md-theme-default-text-primary-on-primary,hsla(0,0%,100%,.54));fill:hsla(0,0%,100%,.54);fill:var(--md-theme-default-text-primary-on-primary,hsla(0,0%,100%,.54))}.md-card.md-theme-default.md-primary>.md-card-area:after{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider-on-primary,hsla(0,0%,100%,.12))}.md-card.md-theme-default.md-accent{color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-card.md-theme-default.md-accent,.md-card.md-theme-default.md-accent .md-card-expand .md-card-actions{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-card.md-theme-default.md-accent .md-card-actions .md-button:not(.md-primary):not(.md-accent),.md-card.md-theme-default.md-accent .md-card-header .md-button:not(.md-primary):not(.md-accent){color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-card.md-theme-default.md-accent .md-card-actions .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon,.md-card.md-theme-default.md-accent .md-card-header .md-button:not(.md-primary):not(.md-accent).md-icon-button .md-icon{color:hsla(0,0%,100%,.54);color:var(--md-theme-default-text-primary-on-accent,hsla(0,0%,100%,.54));fill:hsla(0,0%,100%,.54);fill:var(--md-theme-default-text-primary-on-accent,hsla(0,0%,100%,.54))}.md-card.md-theme-default.md-accent>.md-card-area:after{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider-on-accent,hsla(0,0%,100%,.12))}.md-checkbox.md-theme-default.md-checked .md-checkbox-container{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252);border-color:#ff5252;border-color:var(--md-theme-default-accent,#ff5252)}.md-checkbox.md-theme-default.md-checked .md-checkbox-container:after{border-color:#424242;border-color:var(--md-theme-default-background,#424242)}.md-checkbox.md-theme-default.md-checked .md-ripple{color:#ff5252;color:var(--md-theme-default-accent,#ff5252)}.md-checkbox.md-theme-default.md-indeterminate .md-checkbox-container{border-color:rgba(0,0,0,.54);background-color:hsla(0,0%,100%,.3)}.md-checkbox.md-theme-default.md-indeterminate .md-checkbox-container:after{border-color:rgba(0,0,0,.54)}.md-checkbox.md-theme-default.md-indeterminate .md-ripple{color:rgba(0,0,0,.54)}.md-checkbox.md-theme-default.md-checked.md-primary .md-checkbox-container{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff);border-color:#448aff;border-color:var(--md-theme-default-primary,#448aff)}.md-checkbox.md-theme-default.md-checked.md-primary .md-ripple{color:#448aff;color:var(--md-theme-default-primary,#448aff)}.md-checkbox.md-theme-default.md-indeterminate .md-checkbox-container{border-color:hsla(0,0%,100%,.7);background-color:transparent}.md-checkbox.md-theme-default.md-indeterminate .md-checkbox-container:after{border-color:hsla(0,0%,100%,.7)}.md-checkbox.md-theme-default.md-indeterminate .md-ripple{color:hsla(0,0%,100%,.7)}.md-checkbox.md-theme-default .md-checkbox-container{border-color:hsla(0,0%,100%,.7)}.md-checkbox.md-theme-default.md-disabled .md-checkbox-container{border-color:hsla(0,0%,100%,.3)}.md-checkbox.md-theme-default.md-disabled.md-checked .md-checkbox-container{border-color:hsla(0,0%,100%,.3);background-color:hsla(0,0%,100%,.3)}.md-chip.md-theme-default{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-highlight,hsla(0,0%,100%,.12));color:#fff;color:var(--md-theme-default-text-primary,#fff)}.md-chip.md-theme-default .md-icon.md-icon-image svg{color:#fff;color:var(--md-theme-default-text-primary,#fff);fill:#fff;fill:var(--md-theme-default-text-primary,#fff)}.md-chip.md-theme-default.md-clickable:not(.md-disabled):hover,.md-chip.md-theme-default.md-deletable:not(.md-disabled):hover{background-color:#fff;background-color:var(--md-theme-default-icon,#fff);color:rgba(0,0,0,.87);color:var(--md-theme-default-text-primary-on-icon,rgba(0,0,0,.87))}.md-chip.md-theme-default.md-clickable:not(.md-disabled):hover .md-icon,.md-chip.md-theme-default.md-deletable:not(.md-disabled):hover .md-icon{fill:rgba(0,0,0,.87);fill:var(--md-theme-default-text-primary-on-icon,rgba(0,0,0,.87))}.md-chip.md-theme-default.md-clickable:not(.md-disabled):hover .md-input-action,.md-chip.md-theme-default.md-deletable:not(.md-disabled):hover .md-input-action{background-color:rgba(66,66,66,.87);background-color:var(--md-theme-default-background,rgba(66,66,66,.87));color:#fff;color:var(--md-theme-default-icon-on-background,#fff)}.md-chip.md-theme-default.md-clickable:not(.md-disabled):hover .md-input-action .md-icon svg,.md-chip.md-theme-default.md-deletable:not(.md-disabled):hover .md-input-action .md-icon svg{fill:#fff;fill:var(--md-theme-default-icon-on-background,#fff);color:#fff;color:var(--md-theme-default-icon-on-background,#fff)}.md-chip.md-theme-default.md-primary{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff);color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-chip.md-theme-default.md-primary .md-input-action{color:rgba(0,0,0,.54);color:var(--md-theme-default-icon-on-disabled,rgba(0,0,0,.54));background-color:rgba(0,0,0,.26);background-color:var(--md-theme-default-disabled-on-disabled,rgba(0,0,0,.26))}.md-chip.md-theme-default.md-primary.md-clickable:not(.md-disabled):hover,.md-chip.md-theme-default.md-primary.md-deletable:not(.md-disabled):hover{color:rgba(0,0,0,.87);color:var(--md-theme-default-text-primary-on-icon,rgba(0,0,0,.87));background-color:#fff;background-color:var(--md-theme-default-icon,#fff)}.md-chip.md-theme-default.md-primary.md-clickable:not(.md-disabled):hover .md-input-action,.md-chip.md-theme-default.md-primary.md-deletable:not(.md-disabled):hover .md-input-action{background-color:rgba(66,66,66,.87);background-color:var(--md-theme-default-background,rgba(66,66,66,.87))}.md-chip.md-theme-default.md-accent,.md-chip.md-theme-default.md-duplicated{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252);color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-chip.md-theme-default.md-accent .md-input-action,.md-chip.md-theme-default.md-duplicated .md-input-action{color:rgba(0,0,0,.54);color:var(--md-theme-default-icon-on-disabled,rgba(0,0,0,.54));background-color:rgba(0,0,0,.26);background-color:var(--md-theme-default-disabled-on-disabled,rgba(0,0,0,.26))}.md-chip.md-theme-default.md-accent.md-clickable:not(.md-disabled):hover,.md-chip.md-theme-default.md-accent.md-deletable:not(.md-disabled):hover,.md-chip.md-theme-default.md-duplicated.md-clickable:not(.md-disabled):hover,.md-chip.md-theme-default.md-duplicated.md-deletable:not(.md-disabled):hover{background-color:#fff;background-color:var(--md-theme-default-icon,#fff);color:rgba(0,0,0,.87);color:var(--md-theme-default-text-primary-on-icon,rgba(0,0,0,.87))}.md-chip.md-theme-default.md-accent.md-clickable:not(.md-disabled):hover .md-input-action,.md-chip.md-theme-default.md-accent.md-deletable:not(.md-disabled):hover .md-input-action,.md-chip.md-theme-default.md-duplicated.md-clickable:not(.md-disabled):hover .md-input-action,.md-chip.md-theme-default.md-duplicated.md-deletable:not(.md-disabled):hover .md-input-action{background-color:rgba(66,66,66,.87);background-color:var(--md-theme-default-background,rgba(66,66,66,.87))}.md-chip.md-theme-default.md-disabled{background-color:hsla(0,0%,100%,.1);background-color:var(--md-theme-default-highlight,hsla(0,0%,100%,.1));color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-accent,hsla(0,0%,100%,.7))}.md-chips.md-theme-default .md-clear{background-color:hsla(0,0%,100%,.2)}.md-content.md-theme-default{background-color:#424242;background-color:var(--md-theme-default-background,#424242);color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-content.md-theme-default.md-primary{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff);color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-content.md-theme-default.md-accent{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252);color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-app .md-content.md-theme-default{border-left-color:hsla(0,0%,100%,.12);border-left-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12));border-right-color:hsla(0,0%,100%,.12);border-right-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-datepicker-dialog.md-theme-default{background-color:#424242;background-color:var(--md-theme-default-background,#424242);color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-datepicker-dialog.md-theme-default .md-datepicker-header{background-color:hsla(0,0%,100%,.06);background-color:var(--md-theme-default-text-primary,hsla(0,0%,100%,.06));color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-datepicker-dialog.md-theme-default .md-datepicker-body-footer,.md-datepicker-dialog.md-theme-default .md-datepicker-body-header:after,.md-datepicker-dialog.md-theme-default .md-datepicker-body-header:before{background-color:#424242;background-color:var(--md-theme-default-background,#424242)}.md-datepicker-dialog.md-theme-default .md-datepicker-body-footer{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-datepicker-dialog.md-theme-default .md-datepicker-week{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-accent-on-background,hsla(0,0%,100%,.7))}.md-datepicker-dialog.md-theme-default .md-datepicker-disabled{color:hsla(0,0%,100%,.3);color:var(--md-theme-default-disabled-on-background,hsla(0,0%,100%,.3))}.md-datepicker-dialog.md-theme-default .md-datepicker-today{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-datepicker-dialog.md-theme-default .md-datepicker-day-button:hover,.md-datepicker-dialog.md-theme-default .md-datepicker-month-button:hover,.md-datepicker-dialog.md-theme-default .md-datepicker-year-button:hover{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider,hsla(0,0%,100%,.12))}.md-datepicker-dialog.md-theme-default .md-datepicker-day-button.md-datepicker-selected{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff);color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-datepicker-dialog.md-theme-default .md-datepicker-month-button.md-datepicker-selected,.md-datepicker-dialog.md-theme-default .md-datepicker-year-button.md-datepicker-selected{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-datepicker-dialog.md-theme-default .md-datepicker-year-selector{border-bottom-color:hsla(0,0%,100%,.12);border-bottom-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-dialog-container.md-theme-default{background-color:#424242;background-color:var(--md-theme-default-background,#424242);color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-divider.md-theme-default{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider,hsla(0,0%,100%,.12))}.md-drawer.md-theme-default{background-color:#424242;background-color:var(--md-theme-default-background,#424242);color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-drawer.md-theme-default.md-persistent-mini.md-left{border-right-color:hsla(0,0%,100%,.12);border-right-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-drawer.md-theme-default.md-persistent-mini.md-right{border-left-color:hsla(0,0%,100%,.12);border-left-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-empty-state.md-theme-default .md-empty-state-icon.md-icon-image svg{fill:hsla(0,0%,100%,.3);fill:var(--md-theme-default-disabled-on-background,hsla(0,0%,100%,.3))}.md-empty-state.md-theme-default .md-empty-state-icon.md-icon-font{color:hsla(0,0%,100%,.3);color:var(--md-theme-default-disabled-on-background,hsla(0,0%,100%,.3))}.md-empty-state.md-theme-default.md-rounded{background-color:hsla(0,0%,100%,.06);background-color:var(--md-theme-default-disabled,hsla(0,0%,100%,.06))}.md-empty-state.md-theme-default.md-primary .md-empty-state-icon.md-icon-image svg{fill:#448aff;fill:var(--md-theme-default-primary-on-background,#448aff)}.md-empty-state.md-theme-default.md-primary .md-empty-state-icon.md-icon-font{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-empty-state.md-theme-default.md-accent .md-empty-state-icon.md-icon-image svg{fill:#ff5252;fill:var(--md-theme-default-accent-on-background,#ff5252)}.md-empty-state.md-theme-default.md-accent .md-empty-state-icon.md-icon-font{color:#ff5252;color:var(--md-theme-default-accent-on-background,#ff5252)}.md-field.md-theme-default:after{background-color:hsla(0,0%,100%,.7)}.md-field.md-theme-default:before{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-field.md-theme-default .md-count,.md-field.md-theme-default .md-helper-text,.md-field.md-theme-default .md-prefix,.md-field.md-theme-default .md-suffix,.md-field.md-theme-default label{color:hsla(0,0%,100%,.7)}.md-field.md-theme-default .md-input::-webkit-input-placeholder,.md-field.md-theme-default .md-textarea::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.md-field.md-theme-default.md-focused .md-input,.md-field.md-theme-default.md-focused .md-textarea,.md-field.md-theme-default.md-has-value .md-input,.md-field.md-theme-default.md-has-value .md-textarea{-webkit-text-fill-color:#fff}.md-field.md-theme-default.md-has-textarea:not(.md-autogrow):after{border-color:#fff}.md-field.md-theme-default.md-has-textarea:not(.md-autogrow):before{border-color:#448aff;border-color:var(--md-theme-default-primary,#448aff)}.md-field.md-theme-default.md-disabled:after{background-image:linear-gradient(90deg,hsla(0,0%,100%,.7) 0,hsla(0,0%,100%,.7) 33%,transparent 0)}.md-field.md-theme-default.md-disabled .md-input,.md-field.md-theme-default.md-disabled .md-textarea,.md-field.md-theme-default.md-disabled label{color:hsla(0,0%,100%,.5)}.md-field.md-theme-default>.md-icon:after{background-color:#303030;background-color:var(--md-theme-default-background-variant,#303030)}.md-field.md-theme-default.md-invalid:after{background-color:#ff1744;background-color:var(--md-theme-default-fieldvariant,#ff1744)}.md-field.md-theme-default.md-invalid.md-has-textarea:not(.md-autogrow):before{border-color:#ff1744;border-color:var(--md-theme-default-fieldvariant,#ff1744)}.md-field.md-theme-default.md-invalid .md-error,.md-field.md-theme-default.md-invalid label{color:#ff1744;color:var(--md-theme-default-fieldvariant,#ff1744)}.md-field.md-theme-default.md-invalid .md-date-icon,.md-field.md-theme-default.md-invalid .md-date-icon svg{color:#ff1744;color:var(--md-theme-default-fieldvariant,#ff1744);fill:#ff1744;fill:var(--md-theme-default-fieldvariant,#ff1744)}.md-field.md-theme-default.md-focused .md-input,.md-field.md-theme-default.md-focused .md-textarea,.md-field.md-theme-default.md-highlight .md-input,.md-field.md-theme-default.md-highlight .md-textarea{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-field.md-theme-default.md-focused>.md-icon,.md-field.md-theme-default.md-highlight>.md-icon{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff);fill:#448aff;fill:var(--md-theme-default-primary-on-background,#448aff)}.md-field.md-theme-default.md-focused label{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-field.md-theme-default.md-disabled .md-icon svg{fill:hsla(0,0%,100%,.3);fill:var(--md-theme-default-disabled-on-background,hsla(0,0%,100%,.3))}.md-icon.md-theme-default.md-icon-image svg{fill:#fff;fill:var(--md-theme-default-icon-on-background,#fff)}.md-icon.md-theme-default.md-icon-image svg.md-primary{fill:#448aff;fill:var(--md-theme-default-primary-on-background,#448aff)}.md-icon.md-theme-default.md-icon-image svg.md-accent{fill:#ff5252;fill:var(--md-theme-default-accent-on-background,#ff5252)}.md-icon.md-theme-default.md-icon-font{color:#fff;color:var(--md-theme-default-icon-on-background,#fff)}.md-icon.md-theme-default.md-icon-font.md-primary{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-icon.md-theme-default.md-icon-font.md-accent{color:#ff5252;color:var(--md-theme-default-accent-on-background,#ff5252)}.md-list.md-theme-default{background-color:#424242;background-color:var(--md-theme-default-background,#424242);color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-list.md-theme-default.md-double-line .md-list-item-text :nth-child(2),.md-list.md-theme-default.md-triple-line .md-list-item-text :nth-child(3){color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-accent-on-background,hsla(0,0%,100%,.7))}.md-list.md-theme-default .md-highlight .md-list-item-container{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-list.md-theme-default .md-list-item-container{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-list.md-theme-default .md-list-item-container:not(.md-list-item-default):not(.md-list-item-expand):not([disabled]):hover{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12));color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-list.md-theme-default [disabled]{color:hsla(0,0%,100%,.3);color:var(--md-theme-default-disabled-on-background,hsla(0,0%,100%,.3))}.md-list.md-theme-default .md-selected .md-list-item-content,.md-list.md-theme-default .router-link-active .md-list-item-content{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-list.md-theme-default .md-list-item-expand.md-active{border-color:hsla(0,0%,100%,.12);border-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-list.md-theme-default .md-list-item-expand:not(.md-list-item-default):not([disabled])>.md-list-item-content:hover{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12));color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-menu-item.md-theme-default.md-primary .md-list-item-button,.md-menu-item.md-theme-default.md-primary .md-list-item-link,.md-menu-item.md-theme-default.md-primary .md-list-item-router{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-menu-item.md-theme-default.md-accent .md-list-item-button,.md-menu-item.md-theme-default.md-accent .md-list-item-link,.md-menu-item.md-theme-default.md-accent .md-list-item-router{color:#ff5252;color:var(--md-theme-default-accent-on-background,#ff5252)}.md-progress-bar.md-theme-default.md-indeterminate,.md-progress-bar.md-theme-default.md-query{background-color:rgba(68,138,255,.38);background-color:var(--md-theme-default-primary-on-,rgba(68,138,255,.38))}.md-progress-bar.md-theme-default.md-indeterminate .md-progress-bar-fill:after,.md-progress-bar.md-theme-default.md-indeterminate .md-progress-bar-track:after,.md-progress-bar.md-theme-default.md-query .md-progress-bar-fill:after,.md-progress-bar.md-theme-default.md-query .md-progress-bar-track:after{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-progress-bar.md-theme-default.md-indeterminate.md-accent,.md-progress-bar.md-theme-default.md-query.md-accent{background-color:rgba(255,82,82,.38);background-color:var(--md-theme-default-accent-on-,rgba(255,82,82,.38))}.md-progress-bar.md-theme-default.md-indeterminate.md-accent .md-progress-bar-fill:after,.md-progress-bar.md-theme-default.md-indeterminate.md-accent .md-progress-bar-track:after,.md-progress-bar.md-theme-default.md-query.md-accent .md-progress-bar-fill:after,.md-progress-bar.md-theme-default.md-query.md-accent .md-progress-bar-track:after{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-progress-bar.md-theme-default.md-determinate{background-color:rgba(68,138,255,.38);background-color:var(--md-theme-default-primary-on-,rgba(68,138,255,.38))}.md-progress-bar.md-theme-default.md-determinate .md-progress-bar-fill{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-progress-bar.md-theme-default.md-determinate.md-accent{background-color:rgba(255,82,82,.38);background-color:var(--md-theme-default-accent-on-,rgba(255,82,82,.38))}.md-progress-bar.md-theme-default.md-determinate.md-accent .md-progress-bar-fill{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-progress-bar.md-theme-default.md-buffer .md-progress-bar-fill{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-progress-bar.md-theme-default.md-buffer .md-progress-bar-track{background-color:rgba(68,138,255,.38);background-color:var(--md-theme-default-primary-on-,rgba(68,138,255,.38))}.md-progress-bar.md-theme-default.md-buffer .md-progress-bar-buffer{border-color:rgba(68,138,255,.38);border-color:var(--md-theme-default-primary-on-,rgba(68,138,255,.38))}.md-progress-bar.md-theme-default.md-buffer.md-accent .md-progress-bar-fill{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-progress-bar.md-theme-default.md-buffer.md-accent .md-progress-bar-track{background-color:rgba(255,82,82,.38);background-color:var(--md-theme-default-accent-on-,rgba(255,82,82,.38))}.md-progress-bar.md-theme-default.md-buffer.md-accent .md-progress-bar-buffer{border-color:rgba(255,82,82,.38);border-color:var(--md-theme-default-accent-on-,rgba(255,82,82,.38))}.md-progress-spinner.md-theme-default .md-progress-spinner-circle{stroke:#448aff;stroke:var(--md-theme-default-primary,#448aff)}.md-progress-spinner.md-theme-default.md-accent .md-progress-spinner-circle{stroke:#ff5252;stroke:var(--md-theme-default-accent,#ff5252)}.md-radio.md-theme-default.md-checked .md-radio-container{border-color:#ff5252;border-color:var(--md-theme-default-accent,#ff5252)}.md-radio.md-theme-default.md-checked .md-radio-container:after{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-radio.md-theme-default.md-checked .md-ripple{color:#ff5252;color:var(--md-theme-default-accent,#ff5252)}.md-radio.md-theme-default.md-checked.md-primary .md-radio-container{border-color:#448aff;border-color:var(--md-theme-default-primary,#448aff)}.md-radio.md-theme-default.md-checked.md-primary .md-radio-container:after{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-radio.md-theme-default.md-checked.md-primary .md-ripple{color:#448aff;color:var(--md-theme-default-primary,#448aff)}.md-radio.md-theme-default .md-radio-container{border-color:hsla(0,0%,100%,.7)}.md-radio.md-theme-default.md-disabled.md-checked .md-radio-container,.md-radio.md-theme-default.md-disabled .md-radio-container{border-color:hsla(0,0%,100%,.3)}.md-radio.md-theme-default.md-disabled.md-checked .md-radio-container:after{background-color:hsla(0,0%,100%,.3)}.md-snackbar.md-theme-default{color:rgba(0,0,0,.87);color:var(--md-theme-default-text-primary-on-text-primary,rgba(0,0,0,.87));background-color:#fff}.md-steppers.md-theme-default{background-color:#424242;background-color:var(--md-theme-default-background,#424242);color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-steppers.md-theme-default .md-stepper-icon:after,.md-steppers.md-theme-default .md-stepper-icon:before,.md-steppers.md-theme-default .md-stepper-number:after,.md-steppers.md-theme-default .md-stepper-number:before,.md-steppers.md-theme-default .md-stepper:after,.md-steppers.md-theme-default .md-stepper:before{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-steppers.md-theme-default .md-stepper-number{background-color:hsla(0,0%,100%,.5);background-color:var(--md-theme-default-text-hint-on-background,hsla(0,0%,100%,.5));color:rgba(0,0,0,.87);color:var(--md-theme-default-text-primary-on-text-hint,rgba(0,0,0,.87))}.md-steppers.md-theme-default .md-stepper-number svg{color:rgba(0,0,0,.87);color:var(--md-theme-default-text-primary-on-text-hint,rgba(0,0,0,.87));fill:rgba(0,0,0,.87);fill:var(--md-theme-default-text-primary-on-text-hint,rgba(0,0,0,.87))}.md-steppers.md-theme-default .md-stepper-header .md-button-content{color:hsla(0,0%,100%,.5);color:var(--md-theme-default-text-hint-on-background,hsla(0,0%,100%,.5))}.md-steppers.md-theme-default .md-stepper-header .md-button-content:after,.md-steppers.md-theme-default .md-stepper-header .md-button-content:before{background-color:hsla(0,0%,100%,.12);background-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-steppers.md-theme-default .md-stepper-header.md-active .md-button-content,.md-steppers.md-theme-default .md-stepper-header.md-done .md-button-content{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-steppers.md-theme-default .md-stepper-header.md-active .md-stepper-number,.md-steppers.md-theme-default .md-stepper-header.md-done .md-stepper-number{background-color:#448aff;background-color:var(--md-theme-default-primary-on-background,#448aff);color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-steppers.md-theme-default .md-stepper-header.md-active .md-stepper-number svg,.md-steppers.md-theme-default .md-stepper-header.md-done .md-stepper-number svg{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff);fill:#fff;fill:var(--md-theme-default-text-primary-on-primary,#fff)}.md-steppers.md-theme-default .md-stepper-header.md-error .md-button-content{color:#ff1744;color:var(--md-theme-default-steppervariant,#ff1744)}.md-steppers.md-theme-default .md-stepper-header.md-error .md-icon svg{color:#ff1744;color:var(--md-theme-default-steppervariant,#ff1744);fill:#ff1744;fill:var(--md-theme-default-steppervariant,#ff1744)}.md-subheader.md-theme-default{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-accent-on-background,hsla(0,0%,100%,.7))}.md-subheader.md-theme-default.md-primary{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-switch.md-theme-default.md-checked .md-switch-container{background-color:rgba(255,82,82,.38);background-color:var(--md-theme-default-accent-on-,rgba(255,82,82,.38))}.md-switch.md-theme-default.md-checked .md-switch-thumb{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-switch.md-theme-default.md-checked .md-ripple{color:#ff5252;color:var(--md-theme-default-accent,#ff5252)}.md-switch.md-theme-default.md-checked.md-primary .md-switch-container{background-color:rgba(68,138,255,.38);background-color:var(--md-theme-default-primary-on-,rgba(68,138,255,.38))}.md-switch.md-theme-default.md-checked.md-primary .md-switch-thumb{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-switch.md-theme-default.md-checked.md-primary .md-ripple{color:#448aff;color:var(--md-theme-default-primary,#448aff)}.md-switch.md-theme-default .md-switch-container{background-color:hsla(0,0%,100%,.3)}.md-switch.md-theme-default .md-switch-thumb{background-color:#bdbdbd;background-color:var(--md-theme-default-switchvariant,#bdbdbd)}.md-switch.md-theme-default.md-disabled .md-switch-container{background-color:hsla(0,0%,100%,.1)}.md-switch.md-theme-default.md-disabled .md-switch-thumb{background-color:#424242;background-color:var(--md-theme-default-switchvariant,#424242)}.md-table.md-theme-default .md-table-alternate-header,.md-table.md-theme-default .md-table-content{background-color:#424242;background-color:var(--md-theme-default-background,#424242)}.md-table.md-theme-default .md-table-alternate-header .md-table-toolbar{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff);background-color:rgba(255,82,82,.2);background-color:var(--md-theme-default-accent-on-,rgba(255,82,82,.2))}.md-table.md-theme-default .md-table-row:hover:not(.md-header-row) .md-table-cell{background-color:hsla(0,0%,100%,.08);background-color:var(--md-theme-default-highlight-on-background,hsla(0,0%,100%,.08))}.md-table.md-theme-default .md-table-row.md-selected,.md-table.md-theme-default .md-table-row.md-selected-single{background-color:#616161;background-color:var(--md-theme-default-rowvariant,#616161)}.md-table.md-theme-default .md-table-row.md-selected-single.md-primary,.md-table.md-theme-default .md-table-row.md-selected.md-primary{background-color:#448aff;background-color:var(--md-theme-default-primary-on-background,#448aff);color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-table.md-theme-default .md-table-row.md-selected-single.md-primary .md-ripple,.md-table.md-theme-default .md-table-row.md-selected.md-primary .md-ripple{color:#fff}.md-table.md-theme-default .md-table-row.md-selected-single.md-primary .md-checkbox-container,.md-table.md-theme-default .md-table-row.md-selected.md-primary .md-checkbox-container{background-color:#fff;border-color:#fff}.md-table.md-theme-default .md-table-row.md-selected-single.md-primary .md-checkbox-container:after,.md-table.md-theme-default .md-table-row.md-selected.md-primary .md-checkbox-container:after{border-color:#448aff;border-color:var(--md-theme-default-primary,#448aff)}.md-table.md-theme-default .md-table-row.md-selected-single.md-accent,.md-table.md-theme-default .md-table-row.md-selected.md-accent{background-color:#ff5252;background-color:var(--md-theme-default-accent-on-background,#ff5252);color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-table.md-theme-default .md-table-row.md-selected-single.md-accent .md-ripple,.md-table.md-theme-default .md-table-row.md-selected.md-accent .md-ripple{color:#fff}.md-table.md-theme-default .md-table-row.md-selected-single.md-accent .md-checkbox-container,.md-table.md-theme-default .md-table-row.md-selected.md-accent .md-checkbox-container{background-color:#fff;border-color:#fff}.md-table.md-theme-default .md-table-row.md-selected-single.md-accent .md-checkbox-container:after,.md-table.md-theme-default .md-table-row.md-selected.md-accent .md-checkbox-container:after{border-color:#ff5252;border-color:var(--md-theme-default-accent,#ff5252)}.md-table.md-theme-default .md-table-row td{border-top-color:hsla(0,0%,100%,.12);border-top-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-table.md-theme-default .md-table-head{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-accent-on-background,hsla(0,0%,100%,.7))}.md-table.md-theme-default .md-table-fixed-header-active{border-bottom-color:hsla(0,0%,100%,.12);border-bottom-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-table.md-theme-default .md-sortable.md-sorted,.md-table.md-theme-default .md-sortable:hover{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-table.md-theme-default .md-sortable.md-sorted svg,.md-table.md-theme-default .md-sortable:hover svg{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff);fill:#fff;fill:var(--md-theme-default-text-primary-on-background,#fff)}.md-table.md-theme-default .md-table-pagination{border-top-color:hsla(0,0%,100%,.12);border-top-color:var(--md-theme-default-divider-on-background,hsla(0,0%,100%,.12))}.md-tabs.md-theme-default .md-tabs-navigation{background-color:#424242;background-color:var(--md-theme-default-background-on-background,#424242)}.md-tabs.md-theme-default .md-tabs-navigation .md-button{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-primary-on-background,hsla(0,0%,100%,.7))}.md-tabs.md-theme-default .md-tabs-navigation .md-button[disabled]{color:hsla(0,0%,100%,.38);color:var(--md-theme-default-text-primary-on-background,hsla(0,0%,100%,.38))}.md-tabs.md-theme-default .md-tabs-navigation .md-button .md-icon{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-primary-on-background,hsla(0,0%,100%,.7))}.md-tabs.md-theme-default .md-tabs-navigation .md-button .md-icon svg{fill:hsla(0,0%,100%,.7);fill:var(--md-theme-default-text-primary-on-background,hsla(0,0%,100%,.7))}.md-tabs.md-theme-default .md-tabs-navigation .md-button.md-active,.md-tabs.md-theme-default .md-tabs-navigation .md-button.md-active .md-icon{color:#448aff;color:var(--md-theme-default-primary-on-background,#448aff)}.md-tabs.md-theme-default .md-tabs-navigation .md-button.md-active .md-icon svg{fill:#448aff;fill:var(--md-theme-default-primary-on-background,#448aff)}.md-tabs.md-theme-default.md-primary .md-tabs-navigation,.md-tabs.md-theme-default .md-tabs-indicator{background-color:#448aff;background-color:var(--md-theme-default-primary-on-background,#448aff)}.md-tabs.md-theme-default.md-primary .md-tabs-navigation .md-button{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-primary-on-primary,hsla(0,0%,100%,.7))}.md-tabs.md-theme-default.md-primary .md-tabs-navigation .md-button[disabled]{color:hsla(0,0%,100%,.38);color:var(--md-theme-default-text-primary-on-primary,hsla(0,0%,100%,.38))}.md-tabs.md-theme-default.md-primary .md-tabs-navigation .md-button .md-icon{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-primary-on-primary,hsla(0,0%,100%,.7))}.md-tabs.md-theme-default.md-primary .md-tabs-navigation .md-button .md-icon svg{fill:hsla(0,0%,100%,.7);fill:var(--md-theme-default-text-primary-on-primary,hsla(0,0%,100%,.7))}.md-tabs.md-theme-default.md-primary .md-tabs-navigation .md-button.md-active,.md-tabs.md-theme-default.md-primary .md-tabs-navigation .md-button.md-active .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-tabs.md-theme-default.md-primary .md-tabs-navigation .md-button.md-active .md-icon svg{fill:#fff;fill:var(--md-theme-default-text-primary-on-primary,#fff)}.md-tabs.md-theme-default.md-primary .md-tabs-indicator{background-color:#fff;background-color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-tabs.md-theme-default.md-accent .md-tabs-navigation{background-color:#ff5252;background-color:var(--md-theme-default-accent-on-background,#ff5252)}.md-tabs.md-theme-default.md-accent .md-tabs-navigation .md-button{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-primary-on-accent,hsla(0,0%,100%,.7))}.md-tabs.md-theme-default.md-accent .md-tabs-navigation .md-button[disabled]{color:hsla(0,0%,100%,.38);color:var(--md-theme-default-text-primary-on-accent,hsla(0,0%,100%,.38))}.md-tabs.md-theme-default.md-accent .md-tabs-navigation .md-button .md-icon{color:hsla(0,0%,100%,.7);color:var(--md-theme-default-text-primary-on-accent,hsla(0,0%,100%,.7))}.md-tabs.md-theme-default.md-accent .md-tabs-navigation .md-button .md-icon svg{fill:hsla(0,0%,100%,.7);fill:var(--md-theme-default-text-primary-on-accent,hsla(0,0%,100%,.7))}.md-tabs.md-theme-default.md-accent .md-tabs-navigation .md-button.md-active,.md-tabs.md-theme-default.md-accent .md-tabs-navigation .md-button.md-active .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-tabs.md-theme-default.md-accent .md-tabs-navigation .md-button.md-active .md-icon svg{fill:#fff;fill:var(--md-theme-default-text-primary-on-accent,#fff)}.md-tabs.md-theme-default.md-accent .md-tabs-indicator{background-color:#fff;background-color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-toolbar.md-theme-default{background-color:#212121;background-color:var(--md-theme-default-toolbarvariant,#212121)}.md-toolbar.md-theme-default,.md-toolbar.md-theme-default .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-background-variant,#fff)}.md-toolbar.md-theme-default .md-icon svg{fill:#fff;fill:var(--md-theme-default-text-primary-on-background-variant,#fff)}.md-toolbar.md-theme-default .md-display-1,.md-toolbar.md-theme-default .md-display-2,.md-toolbar.md-theme-default .md-title{color:#fff;color:var(--md-theme-default-text-primary-on-background-variant,#fff)}.md-toolbar.md-theme-default.md-primary{background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}.md-toolbar.md-theme-default.md-primary,.md-toolbar.md-theme-default.md-primary .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-toolbar.md-theme-default.md-primary .md-icon svg{fill:#fff;fill:var(--md-theme-default-text-primary-on-primary,#fff)}.md-toolbar.md-theme-default.md-primary .md-button:not([disabled]):not(.md-raised),.md-toolbar.md-theme-default.md-primary .md-display-1,.md-toolbar.md-theme-default.md-primary .md-display-2,.md-toolbar.md-theme-default.md-primary .md-title{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff)}.md-toolbar.md-theme-default.md-accent{background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-toolbar.md-theme-default.md-accent,.md-toolbar.md-theme-default.md-accent .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-toolbar.md-theme-default.md-accent .md-icon svg{fill:#fff;fill:var(--md-theme-default-text-primary-on-accent,#fff)}.md-toolbar.md-theme-default.md-accent .md-button:not([disabled]):not(.md-raised),.md-toolbar.md-theme-default.md-accent .md-display-1,.md-toolbar.md-theme-default.md-accent .md-display-2,.md-toolbar.md-theme-default.md-accent .md-title{color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff)}.md-toolbar.md-theme-default.md-transparent{background-color:transparent}.md-toolbar.md-theme-default.md-transparent,.md-toolbar.md-theme-default.md-transparent .md-icon{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-toolbar.md-theme-default.md-transparent .md-icon svg{fill:#fff;fill:var(--md-theme-default-text-primary-on-background,#fff)}.md-toolbar.md-theme-default.md-transparent .md-display-1,.md-toolbar.md-theme-default.md-transparent .md-display-2,.md-toolbar.md-theme-default.md-transparent .md-title{color:#fff;color:var(--md-theme-default-text-primary-on-background,#fff)}.md-tooltip.md-theme-default{color:rgba(0,0,0,.87);color:var(--md-theme-default-text-primary-on-tooltip,rgba(0,0,0,.87));background-color:hsla(0,0%,100%,.9);background-color:var(--md-theme-default-tooltip-on-background,hsla(0,0%,100%,.9))}.md-badge.md-theme-default{color:#fff;color:var(--md-theme-default-text-primary-on-accent,#fff);background-color:#ff5252;background-color:var(--md-theme-default-accent,#ff5252)}.md-badge.md-theme-default.md-primary{color:#fff;color:var(--md-theme-default-text-primary-on-primary,#fff);background-color:#448aff;background-color:var(--md-theme-default-primary,#448aff)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "HelloWorld", function() { return HelloWorld; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(12);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(13);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _be61b48a = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 2).then(__webpack_require__.bind(null, 47)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _be61b48a,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: /home/sahandm96/.nvm/versions/node/v14.17.5/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/sahandm96/.nvm/versions/node/v14.17.5/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/home/sahandm96/.nvm/versions/node/v14.17.5/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
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
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(20)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7aaf8268"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/home/sahandm96/.nvm/versions/node/v14.17.5/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(22)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "2feab900"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(26);

// EXTERNAL MODULE: ./assets/style.css
var style = __webpack_require__(28);

// CONCATENATED MODULE: /home/sahandm96/.nvm/versions/node/v14.17.5/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/sahandm96/.nvm/versions/node/v14.17.5/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=6f53cae7&
var defaultvue_type_template_id_6f53cae7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-container"},[_c('md-app',{attrs:{"md-waterfall":"","md-mode":"fixed"}},[_c('md-app-toolbar',{staticClass:"md-dark"},[_c('span',{staticClass:"md-title text-center"},[_vm._v("کلمه بازی")])]),_vm._v(" "),_c('md-app-content',[_c('Nuxt')],1)],1)],1)}
var defaultvue_type_template_id_6f53cae7_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=6f53cae7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/home/sahandm96/.nvm/versions/node/v14.17.5/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
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
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  head: {
    htmlAttrs: {
      lang: ["en", "fa"] // it sets the language English

    },
    title: "کلمه بازی",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: "کلمه بازی"
    }]
  },
  data: () => ({
    menuVisible: false
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }

  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_6f53cae7_render,
  defaultvue_type_template_id_6f53cae7_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "fab8d1e4"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const HelloWorld = () => __webpack_require__.e(/* import() | components/hello-world */ 1).then(__webpack_require__.bind(null, 48)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(14);

// CONCATENATED MODULE: ./.nuxt/bootstrap-vue.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"], {});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(34);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(15);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icon.plugin.js
/* harmony default export */ var icon_plugin = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.5f6a36.png",
    "120x120": "/_nuxt/icons/icon_120x120.5f6a36.png",
    "144x144": "/_nuxt/icons/icon_144x144.5f6a36.png",
    "152x152": "/_nuxt/icons/icon_152x152.5f6a36.png",
    "192x192": "/_nuxt/icons/icon_192x192.5f6a36.png",
    "384x384": "/_nuxt/icons/icon_384x384.5f6a36.png",
    "512x512": "/_nuxt/icons/icon_512x512.5f6a36.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.5f6a36.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.5f6a36.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.5f6a36.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.5f6a36.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.5f6a36.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.5f6a36.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.5f6a36.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.5f6a36.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.5f6a36.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.5f6a36.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(16);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "vue-material"
var external_vue_material_ = __webpack_require__(17);
var external_vue_material_default = /*#__PURE__*/__webpack_require__.n(external_vue_material_);

// EXTERNAL MODULE: ./node_modules/vue-material/dist/vue-material.min.css
var vue_material_min = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vue-material/dist/theme/default-dark.css
var default_dark = __webpack_require__(37);

// CONCATENATED MODULE: ./plugins/vue-material.js



 // This line here

external_vue_default.a.use(external_vue_material_default.a);
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./bootstrap-vue.js (mode: 'all')

 // Source: ./workbox.js (mode: 'client')

 // Source: ./pwa/meta.plugin.js (mode: 'all')

 // Source: ./pwa/icon.plugin.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/vue-material (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "word-game",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "script": [],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }

  if (typeof icon_plugin === 'function') {
    await icon_plugin(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-material.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-material.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map