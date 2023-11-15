/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_sidebar_js"],{

/***/ "./src/pagesJS/sidebar.js":
/*!********************************!*\
  !*** ./src/pagesJS/sidebar.js ***!
  \********************************/
/***/ (() => {

eval("let sidebar = document.querySelector('.sidebar');\r\nlet closeBtn = document.querySelector('#btn');\r\nlet menu = document.querySelector('#menu');\r\nlet myContain = document.querySelector('.myContain');\r\nmenu.style.color = '#ffffff7e';\r\n\r\ncloseBtn.addEventListener('click', () => {\r\n  sidebar.classList.toggle('open');\r\n  myContain.classList.toggle('col-md-11');\r\n  myContain.classList.toggle('offset-md-1');\r\n  myContain.classList.toggle('marginLeft');\r\n});\r\nmenu.addEventListener('click', () => {\r\n  if (sidebar.classList.contains('displayBlock')) {\r\n    sidebar.classList.remove('displayBlock');\r\n    sidebar.style.display = 'none';\r\n    menu.style.marginLeft = '0px';\r\n  } else {\r\n    sidebar.classList.add('displayBlock');\r\n    sidebar.style.display = 'block';\r\n    closeBtn.style.display = 'none';\r\n    menu.style.marginLeft = '150px';\r\n  }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9zaWRlYmFyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb25hdGVsaWVyanMvLi9zcmMvcGFnZXNKUy9zaWRlYmFyLmpzP2E3YjQiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5sZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuJyk7XHJcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcclxubGV0IG15Q29udGFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teUNvbnRhaW4nKTtcclxubWVudS5zdHlsZS5jb2xvciA9ICcjZmZmZmZmN2UnO1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgbXlDb250YWluLmNsYXNzTGlzdC50b2dnbGUoJ2NvbC1tZC0xMScpO1xyXG4gIG15Q29udGFpbi5jbGFzc0xpc3QudG9nZ2xlKCdvZmZzZXQtbWQtMScpO1xyXG4gIG15Q29udGFpbi5jbGFzc0xpc3QudG9nZ2xlKCdtYXJnaW5MZWZ0Jyk7XHJcbn0pO1xyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheUJsb2NrJykpIHtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheUJsb2NrJyk7XHJcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtZW51LnN0eWxlLm1hcmdpbkxlZnQgPSAnMHB4JztcclxuICB9IGVsc2Uge1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5QmxvY2snKTtcclxuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbWVudS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzE1MHB4JztcclxuICB9XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/sidebar.js\n");

/***/ })

}]);