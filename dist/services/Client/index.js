"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var _mysqlAsyncSimple = require("mysql-async-simple");

require("regenerator-runtime/runtime");

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var db = (0, _mysqlAsyncSimple.makeDb)();

var query = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, req) {
    var sql, result, customerObj, connection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = "";
            result = {
              status: 200,
              results: []
            };
            customerObj = {
              nombre: "",
              apellido: "",
              edad: 0
            };
            connection = _mysql["default"].createConnection({
              host: _config["default"].mysql.host,
              user: _config["default"].mysql.user,
              password: _config["default"].mysql.password,
              database: _config["default"].mysql.database
            });
            _context.prev = 4;
            _context.next = 7;
            return db.connect(connection);

          case 7:
            _context.next = 14;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](4);
            result.results = _context.t0;
            result.status = 500;
            return _context.abrupt("return", result);

          case 14:
            _context.t1 = method;
            _context.next = _context.t1 === "GETALL" ? 17 : _context.t1 === "GETID" ? 19 : _context.t1 === "POSTNEW" ? 21 : _context.t1 === "PUTID" ? 26 : _context.t1 === "DELETEID" ? 28 : 30;
            break;

          case 17:
            sql = "SELECT nombre, apellido, edad FROM clientes";
            return _context.abrupt("break", 30);

          case 19:
            sql = "SELECT nombre, apellido, edad FROM clientes WHERE id = ".concat(req.params.id);
            return _context.abrupt("break", 30);

          case 21:
            sql = "INSERT INTO clientes SET ?";
            customerObj.nombre = req.body.name;
            customerObj.apellido = req.body.lastName;
            customerObj.edad = req.body.year;
            return _context.abrupt("break", 30);

          case 26:
            sql = "UPDATE clientes SET nombre = '".concat(req.body.name, "', apellido = '").concat(req.body.lastName, "', edad = ").concat(req.body.year, " WHERE id = ").concat(req.params.id);
            return _context.abrupt("break", 30);

          case 28:
            sql = "DELETE FROM clientes WHERE id = ".concat(req.params.id);
            return _context.abrupt("break", 30);

          case 30:
            _context.prev = 30;
            _context.next = 33;
            return db.query(connection, sql, [customerObj]);

          case 33:
            result.results = _context.sent;
            _context.next = 40;
            break;

          case 36:
            _context.prev = 36;
            _context.t2 = _context["catch"](30);
            result.status = 500;
            result.results = _context.t2;

          case 40:
            _context.prev = 40;
            _context.next = 43;
            return db.close(connection);

          case 43:
            return _context.finish(40);

          case 44:
            return _context.abrupt("return", result);

          case 45:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 9], [30, 36, 40, 44]]);
  }));

  return function query(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = query;
exports["default"] = _default;