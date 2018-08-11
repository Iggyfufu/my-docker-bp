'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'public')));

app.get('/api', (req, res, next) => {
  res.json({ 'cool': 123 });
});

app.listen('3001');

exports.default = app;