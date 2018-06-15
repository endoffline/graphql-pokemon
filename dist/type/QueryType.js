'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _PokemonType = require('./PokemonType');

var _PokemonType2 = _interopRequireDefault(_PokemonType);

var _Pokemon = require('../service/Pokemon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var QueryType = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'Query any Pokémon by number or name',
  fields: function fields() {
    return {
      query: {
        type: QueryType,
        resolve: function resolve() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return args;
        }
      },
      pokemons: {
        type: new _graphql.GraphQLList(_PokemonType2.default),
        args: {
          first: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
          },
          type: {
            type: _graphql.GraphQLString
          }
        },
        resolve: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj, args) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return (0, _Pokemon.getPokemons)(args);

                  case 2:
                    return _context.abrupt('return', _context.sent);

                  case 3:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, undefined);
          }));

          return function resolve(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }()
      },
      pokemon: {
        type: _PokemonType2.default,
        args: {
          id: {
            type: _graphql.GraphQLString
          },
          name: {
            type: _graphql.GraphQLString
          }
        },
        resolve: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(obj, _ref3) {
            var id = _ref3.id,
                name = _ref3.name;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!id) {
                      _context2.next = 4;
                      break;
                    }

                    _context2.next = 3;
                    return (0, _Pokemon.getPokemonById)((0, _graphqlRelay.fromGlobalId)(id).id);

                  case 3:
                    return _context2.abrupt('return', _context2.sent);

                  case 4:
                    if (!name) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 7;
                    return (0, _Pokemon.getPokemonByName)(name);

                  case 7:
                    return _context2.abrupt('return', _context2.sent);

                  case 8:
                    throw new Error('You need to specify either the ID or name of the Pokémon');

                  case 9:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, undefined);
          }));

          return function resolve(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }()
      }
    };
  }
});

exports.default = QueryType;