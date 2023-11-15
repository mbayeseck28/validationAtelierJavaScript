/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import { onAuthStateChanged } from 'firebase/auth';\n// import { getAuth } from 'firebase/auth';\n\n// function deconnexion() {\n//   const btnGreen = document.querySelector('.btnGreen');\n//   btnGreen.addEventListener('click', function () {\n//     const auth = getAuth();\n//     signOut(auth)\n//       .then(() => {\n//         console.log('Utilisateur déconnecté');\n//       })\n//       .catch((error) => {\n//         window.location.href = '../../pages/auth/login/login.html';\n//         console.error('Erreur lors de la déconnexion :', error);\n//       });\n//   });\n// }\n\n// onAuthStateChanged(auth, (user) => {\n//     if (!user) {\n//         window.location.href = \"../auth/login/login.html\";\n//     }\n// });\n\n\nvar pageName = window.location.pathname.split('/').pop();\n\nif (pageName === 'inscription.html') {\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\"), __webpack_require__.e(\"src_pagesJS_inscription_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pagesJS/inscription */ \"./src/pagesJS/inscription.js\"));\n} else if (pageName === 'login.html') {\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\"), __webpack_require__.e(\"src_pagesJS_login_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pagesJS/login */ \"./src/pagesJS/login.js\"));\n} else if (pageName === 'acceuil.html') {\n  __webpack_require__.e(/*! import() */ \"src_pagesJS_sidebar_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pagesJS/sidebar */ \"./src/pagesJS/sidebar.js\", 23));\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_storage_dist_esm_index_esm_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_database_dist_esm_index_esm_js\"), __webpack_require__.e(\"src_pagesJS_accueil_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pagesJS/accueil */ \"./src/pagesJS/accueil.js\"));\n} else if (pageName === 'profil.html') {\n  __webpack_require__.e(/*! import() */ \"src_pagesJS_sidebar_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pagesJS/sidebar */ \"./src/pagesJS/sidebar.js\", 23));\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_storage_dist_esm_index_esm_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_database_dist_esm_index_esm_js\"), __webpack_require__.e(\"src_pagesJS_profil_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pagesJS/profil */ \"./src/pagesJS/profil.js\"));\n} else if (pageName === 'comptabilite.html') {\n  __webpack_require__.e(/*! import() */ \"src_pagesJS_sidebar_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pagesJS/sidebar */ \"./src/pagesJS/sidebar.js\", 23));\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\"), __webpack_require__.e(\"src_pagesJS_compta_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pagesJS/compta */ \"./src/pagesJS/compta.js\"));\n} else if (pageName === 'personnel.html') {\n  __webpack_require__.e(/*! import() */ \"src_pagesJS_sidebar_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pagesJS/sidebar */ \"./src/pagesJS/sidebar.js\", 23));\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_storage_dist_esm_index_esm_js\"), __webpack_require__.e(\"src_pagesJS_personnel_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pagesJS/personnel.js */ \"./src/pagesJS/personnel.js\"));\n} else if (pageName === 'professeur.html') {\n  __webpack_require__.e(/*! import() */ \"src_pagesJS_sidebar_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pagesJS/sidebar */ \"./src/pagesJS/sidebar.js\", 23));\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\"), __webpack_require__.e(\"src_pagesJS_proff_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pagesJS/proff.js */ \"./src/pagesJS/proff.js\"));\n}else if (pageName === 'droit.html') {\n  __webpack_require__.e(/*! import() */ \"src_pagesJS_sidebar_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pagesJS/sidebar */ \"./src/pagesJS/sidebar.js\", 23));\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"dist_pages_droit_droit_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dist/pages/droit/droit.js */ \"./dist/pages/droit/droit.js\"));\n} else if (pageName === 'eleve.html') {\n  __webpack_require__.e(/*! import() */ \"src_pagesJS_sidebar_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pagesJS/sidebar */ \"./src/pagesJS/sidebar.js\", 23));\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\"), __webpack_require__.e(\"src_pagesJS_eleve_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pagesJS/eleve.js */ \"./src/pagesJS/eleve.js\"));\n}else if (pageName === 'authentification.html') {\n  __webpack_require__.e(/*! import() */ \"src_pagesJS_sidebar_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pagesJS/sidebar */ \"./src/pagesJS/sidebar.js\", 23));\n  Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_firestore_dist_-2b1f60\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\"), __webpack_require__.e(\"src_pagesJS_authentification_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pagesJS/authentification.js */ \"./src/pagesJS/authentification.js\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb25hdGVsaWVyanMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbi8vIGltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcblxuLy8gZnVuY3Rpb24gZGVjb25uZXhpb24oKSB7XG4vLyAgIGNvbnN0IGJ0bkdyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bkdyZWVuJyk7XG4vLyAgIGJ0bkdyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuLy8gICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4vLyAgICAgc2lnbk91dChhdXRoKVxuLy8gICAgICAgLnRoZW4oKCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnVXRpbGlzYXRldXIgZMOpY29ubmVjdMOpJyk7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi8uLi9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLmh0bWwnO1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBkw6ljb25uZXhpb24gOicsIGVycm9yKTtcbi8vICAgICAgIH0pO1xuLy8gICB9KTtcbi8vIH1cblxuLy8gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4vLyAgICAgaWYgKCF1c2VyKSB7XG4vLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIuLi9hdXRoL2xvZ2luL2xvZ2luLmh0bWxcIjtcbi8vICAgICB9XG4vLyB9KTtcblxuXG52YXIgcGFnZU5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcblxuaWYgKHBhZ2VOYW1lID09PSAnaW5zY3JpcHRpb24uaHRtbCcpIHtcbiAgaW1wb3J0KCcuL3BhZ2VzSlMvaW5zY3JpcHRpb24nKTtcbn0gZWxzZSBpZiAocGFnZU5hbWUgPT09ICdsb2dpbi5odG1sJykge1xuICBpbXBvcnQoJy4vcGFnZXNKUy9sb2dpbicpO1xufSBlbHNlIGlmIChwYWdlTmFtZSA9PT0gJ2FjY2V1aWwuaHRtbCcpIHtcbiAgaW1wb3J0KCcuL3BhZ2VzSlMvc2lkZWJhcicpO1xuICBpbXBvcnQoJy4vcGFnZXNKUy9hY2N1ZWlsJyk7XG59IGVsc2UgaWYgKHBhZ2VOYW1lID09PSAncHJvZmlsLmh0bWwnKSB7XG4gIGltcG9ydCgnLi9wYWdlc0pTL3NpZGViYXInKTtcbiAgaW1wb3J0KCcuL3BhZ2VzSlMvcHJvZmlsJyk7XG59IGVsc2UgaWYgKHBhZ2VOYW1lID09PSAnY29tcHRhYmlsaXRlLmh0bWwnKSB7XG4gIGltcG9ydCgnLi9wYWdlc0pTL3NpZGViYXInKTtcbiAgaW1wb3J0KCcuL3BhZ2VzSlMvY29tcHRhJyk7XG59IGVsc2UgaWYgKHBhZ2VOYW1lID09PSAncGVyc29ubmVsLmh0bWwnKSB7XG4gIGltcG9ydCgnLi9wYWdlc0pTL3NpZGViYXInKTtcbiAgaW1wb3J0KCcuL3BhZ2VzSlMvcGVyc29ubmVsLmpzJyk7XG59IGVsc2UgaWYgKHBhZ2VOYW1lID09PSAncHJvZmVzc2V1ci5odG1sJykge1xuICBpbXBvcnQoJy4vcGFnZXNKUy9zaWRlYmFyJyk7XG4gIGltcG9ydCgnLi9wYWdlc0pTL3Byb2ZmLmpzJyk7XG59ZWxzZSBpZiAocGFnZU5hbWUgPT09ICdkcm9pdC5odG1sJykge1xuICBpbXBvcnQoJy4vcGFnZXNKUy9zaWRlYmFyJyk7XG4gIGltcG9ydCgnLi4vZGlzdC9wYWdlcy9kcm9pdC9kcm9pdC5qcycpO1xufSBlbHNlIGlmIChwYWdlTmFtZSA9PT0gJ2VsZXZlLmh0bWwnKSB7XG4gIGltcG9ydCgnLi9wYWdlc0pTL3NpZGViYXInKTtcbiAgaW1wb3J0KCcuL3BhZ2VzSlMvZWxldmUuanMnKTtcbn1lbHNlIGlmIChwYWdlTmFtZSA9PT0gJ2F1dGhlbnRpZmljYXRpb24uaHRtbCcpIHtcbiAgaW1wb3J0KCcuL3BhZ2VzSlMvc2lkZWJhcicpO1xuICBpbXBvcnQoJy4vcGFnZXNKUy9hdXRoZW50aWZpY2F0aW9uLmpzJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "validationatelierjs:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;