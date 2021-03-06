'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _QueryType = require('./type/QueryType');

var _QueryType2 = _interopRequireDefault(_QueryType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _graphql.GraphQLSchema({
  query: _QueryType2.default
});

exports.default = schema;