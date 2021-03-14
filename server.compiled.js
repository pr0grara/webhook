"use strict";

var _sequelize = require("sequelize");

var _express = _interopRequireDefault(require("express"));

var _typeform = _interopRequireDefault(require("./client/routes/typeform.js"));

var _typeform2 = require("./client/routes/util/typeform");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv/config');

var app = (0, _express["default"])();
var port = process.env.PORT || 9000;
var db = new _sequelize.Sequelize(process.env.PG_CONN_STRING);

try {
  db.authenticate().then(console.log("succesfully connected to db"));
} catch (_unused) {
  console.log("db connection failed");
}

app.use(_express["default"].json());
(0, _typeform["default"])(app);
app.get('/hook', function (req, res) {
  (0, _typeform2.createHook)("AhCdegfT", req.body).then(function (res) {
    console.log(res);
  });
  console.log("AhCdegfT", req.body);
  res.status(200).end();
});
app.get('/', function (req, res) {
  console.log(':)');
  console.log(req);
  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  console.log(req.body);
  res.status(200).end();
});
app.use('/', function (req, res, next) {
  res.status(404);

  if (req.accepts('json')) {
    res.send({
      error: true,
      message: 'Route Not Found'
    });
    return;
  }
});
app.listen(port, function () {
  return console.log("App running on port ".concat(port));
});
