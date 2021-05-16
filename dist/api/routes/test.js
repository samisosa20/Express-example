"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var test = function test(app) {
  // Home page route
  app.get('', function (req, res) {
    res.send('Hello World!, this is my first API');
  }); // About page route

  app.get('/about', function (req, res) {
    res.send('Auth Sammy Guttman L.');
  });
  return app;
};

var _default = test;
exports["default"] = _default;