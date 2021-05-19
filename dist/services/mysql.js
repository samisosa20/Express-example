"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var _mysqlAsyncSimple = require("mysql-async-simple");

require("regenerator-runtime/runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var db = (0, _mysqlAsyncSimple.makeDb)();

var connection = _mysql["default"].createConnection({
  host: "localhost",
  user: "root",
  password: "*p-=jpNN",
  database: "test"
});

var result = {
  status: 200,
  results: []
}; //connection.connect();

var query = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, req) {
    var sql, fields;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.connect(connection);

          case 2:
            sql = "", fields = [];
            _context.t0 = method;
            _context.next = _context.t0 === "GETALL" ? 6 : _context.t0 === "GETID" ? 8 : 10;
            break;

          case 6:
            sql = "SELECT nombre, apellido, edad FROM clientes";
            return _context.abrupt("break", 10);

          case 8:
            sql = "SELECT nombre, apellido, edad FROM clientes WHERE id = ".concat(req.params.id);
            return _context.abrupt("break", 10);

          case 10:
            _context.prev = 10;
            _context.next = 13;
            return db.query(connection, sql);

          case 13:
            result.results = _context.sent;
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t1 = _context["catch"](10);
            // handle exception
            result.results = _context.t1;

          case 19:
            _context.prev = 19;
            _context.next = 22;
            return db.close(connection);

          case 22:
            return _context.finish(19);

          case 23:
            return _context.abrupt("return", result);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 16, 19, 23]]);
  }));

  return function query(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = query;
exports["default"] = _default;