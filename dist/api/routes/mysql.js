"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _clients = _interopRequireDefault(require("../../validator/clients"));

var _mysql = _interopRequireDefault(require("../../services/mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var clients = function clients(app) {
  app.get("/clients/all", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _mysql["default"])("GETALL", req);

            case 2:
              result = _context.sent;
              res.status(result.status).json({
                data: result.results
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  app.get("/clients/:id", _clients["default"].getId, /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if ((0, _expressValidator.validationResult)(req).isEmpty()) {
                _context2.next = 4;
                break;
              }

              res.status(200).json({
                data: (0, _expressValidator.validationResult)(req)
              });
              _context2.next = 8;
              break;

            case 4:
              _context2.next = 6;
              return (0, _mysql["default"])("GETID", req);

            case 6:
              result = _context2.sent;
              res.status(result.status).json({
                result: _mysql["default"].results
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  app.post("/clients/new", _clients["default"].post, /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if ((0, _expressValidator.validationResult)(req).isEmpty()) {
                _context3.next = 4;
                break;
              }

              res.status(200).json({
                result: (0, _expressValidator.validationResult)(req)
              });
              _context3.next = 8;
              break;

            case 4:
              _context3.next = 6;
              return (0, _mysql["default"])("POSTNEW", req);

            case 6:
              result = _context3.sent;
              res.status(result.status).json({
                result: _mysql["default"].results
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  app.put("/clients/update/:id", _clients["default"].put, /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
      var result;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if ((0, _expressValidator.validationResult)(req).isEmpty()) {
                _context4.next = 4;
                break;
              }

              res.status(200).json({
                result: (0, _expressValidator.validationResult)(req)
              });
              _context4.next = 8;
              break;

            case 4:
              _context4.next = 6;
              return (0, _mysql["default"])("PUTID", req);

            case 6:
              result = _context4.sent;
              res.status(result.status).json({
                result: _mysql["default"].results
              });

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
  app["delete"]("/clients/delete/:id", _clients["default"].getId, /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
      var result;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if ((0, _expressValidator.validationResult)(req).isEmpty()) {
                _context5.next = 4;
                break;
              }

              res.status(200).json({
                result: (0, _expressValidator.validationResult)(req)
              });
              _context5.next = 8;
              break;

            case 4:
              _context5.next = 6;
              return (0, _mysql["default"])("DELETEID", req);

            case 6:
              result = _context5.sent;
              res.status(result.status).json({
                result: _mysql["default"].results
              });

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }()); //connection.end();
};

var _default = clients;
exports["default"] = _default;