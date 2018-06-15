'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _PokemonDimensionType = require('./PokemonDimensionType');

var _PokemonDimensionType2 = _interopRequireDefault(_PokemonDimensionType);

var _PokemonAttackType = require('./PokemonAttackType');

var _PokemonAttackType2 = _interopRequireDefault(_PokemonAttackType);

var _EvolutionRequirementType = require('./EvolutionRequirementType');

var _EvolutionRequirementType2 = _interopRequireDefault(_EvolutionRequirementType);

var _Pokemon = require('../service/Pokemon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var PokemonType = new _graphql.GraphQLObjectType({
  name: 'Pokemon',
  description: 'Represents a Pokémon',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('Pokemon'),
      number: {
        type: _graphql.GraphQLString,
        description: 'The identifier of this Pokémon',
        resolve: function resolve(obj) {
          return ('00' + obj.id).slice(-3);
        }
      },
      name: {
        type: _graphql.GraphQLString,
        description: 'The name of this Pokémon',
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      weight: {
        type: _PokemonDimensionType2.default,
        description: 'The minimum and maximum weight of this Pokémon',
        resolve: function resolve(obj) {
          return obj.weight;
        }
      },
      height: {
        type: _PokemonDimensionType2.default,
        description: 'The minimum and maximum weight of this Pokémon',
        resolve: function resolve(obj) {
          return obj.height;
        }
      },
      classification: {
        type: _graphql.GraphQLString,
        description: 'The classification of this Pokémon',
        resolve: function resolve(obj) {
          return obj.classification;
        }
      },
      types: {
        type: new _graphql.GraphQLList(_graphql.GraphQLString),
        description: 'The type(s) of this Pokémon',
        resolve: function resolve(obj) {
          return obj.types;
        }
      },
      resistant: {
        type: new _graphql.GraphQLList(_graphql.GraphQLString),
        description: 'The type(s) of Pokémons that this Pokémon is resistant to',
        resolve: function resolve(obj) {
          return obj.resistant;
        }
      },
      attacks: {
        type: _PokemonAttackType2.default,
        description: 'The attacks of this Pokémon',
        resolve: function resolve(obj) {
          return obj.attacks;
        }
      },
      weaknesses: {
        type: new _graphql.GraphQLList(_graphql.GraphQLString),
        description: 'The type(s) of Pokémons that this Pokémon weak to',
        resolve: function resolve(obj) {
          return obj.weaknesses;
        }
      },
      fleeRate: {
        type: _graphql.GraphQLFloat,
        resolve: function resolve(obj) {
          return obj.fleeRate;
        }
      },
      maxCP: {
        type: _graphql.GraphQLInt,
        description: 'The maximum CP of this Pokémon',
        resolve: function resolve(obj) {
          return obj.maxCP;
        }
      },
      evolutions: {
        type: new _graphql.GraphQLList(PokemonType),
        description: 'The evolutions of this Pokémon',
        resolve: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return (0, _Pokemon.getPokemonByEvolutions)(obj.evolutions);

                  case 2:
                    return _context.abrupt('return', _context.sent);

                  case 3:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, undefined);
          }));

          return function resolve(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      },
      evolutionRequirements: {
        type: _EvolutionRequirementType2.default,
        description: 'The evolution requirements of this Pokémon',
        resolve: function resolve(obj) {
          return obj.evolutionRequirements;
        }
      },
      maxHP: {
        type: _graphql.GraphQLInt,
        description: 'The maximum HP of this Pokémon',
        resolve: function resolve(obj) {
          return obj.maxHP;
        }
      },
      image: {
        type: _graphql.GraphQLString,
        resolve: function resolve(obj) {
          return 'https://img.pokemondb.net/artwork/' + obj.name.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(' ', '-') + '.jpg';
        }
      }
    };
  }
});

exports.default = PokemonType;