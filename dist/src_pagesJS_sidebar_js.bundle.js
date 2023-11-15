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

eval("let sidebar = document.querySelector('.sidebar');\nlet closeBtn = document.querySelector('#btn');\nlet menu = document.querySelector('#menu');\nlet myContain = document.querySelector('.myContain');\nmenu.style.color = '#ffffff7e';\n\ncloseBtn.addEventListener('click', () => {\n  sidebar.classList.toggle('open');\n  myContain.classList.toggle('col-md-11');\n  myContain.classList.toggle('offset-md-1');\n  myContain.classList.toggle('marginLeft');\n});\nmenu.addEventListener('click', () => {\n  if (sidebar.classList.contains('displayBlock')) {\n    sidebar.classList.remove('displayBlock');\n    sidebar.style.display = 'none';\n    menu.style.marginLeft = '0px';\n  } else {\n    sidebar.classList.add('displayBlock');\n    sidebar.style.display = 'block';\n    closeBtn.style.display = 'none';\n    menu.style.marginLeft = '150px';\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9zaWRlYmFyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb25hdGVsaWVyanMvLi9zcmMvcGFnZXNKUy9zaWRlYmFyLmpzP2E3YjQiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xubGV0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bicpO1xubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xubGV0IG15Q29udGFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teUNvbnRhaW4nKTtcbm1lbnUuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZjdlJztcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICBteUNvbnRhaW4uY2xhc3NMaXN0LnRvZ2dsZSgnY29sLW1kLTExJyk7XG4gIG15Q29udGFpbi5jbGFzc0xpc3QudG9nZ2xlKCdvZmZzZXQtbWQtMScpO1xuICBteUNvbnRhaW4uY2xhc3NMaXN0LnRvZ2dsZSgnbWFyZ2luTGVmdCcpO1xufSk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXlCbG9jaycpKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5QmxvY2snKTtcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWVudS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzBweCc7XG4gIH0gZWxzZSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5QmxvY2snKTtcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWVudS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzE1MHB4JztcbiAgfVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pagesJS/sidebar.js\n");

/***/ })

}]);