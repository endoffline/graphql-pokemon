"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPokemonByEvolutions = exports.getPokemonByName = exports.getPokemonById = exports.getPokemons = undefined;

var getPokemons = exports.getPokemons = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var first, type, searchedPokemons;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            first = args.first, type = args.type;
            searchedPokemons = null;

            if (type) {
              searchedPokemons = getPokemonsByType(type);
            } else {
              searchedPokemons = _pokemons2.default;
            }
            console.log("salsa");
            searchedPokemons = searchedPokemons.slice(0, first);
            // const edges = searchedPokemons.map(pokemon => ({ node: pokemon }));

            return _context.abrupt("return", searchedPokemons || null);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getPokemons(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getPokemonById = exports.getPokemonById = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pokemonId) {
    var pokemon;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pokemon = _pokemons2.default.filter(function (_ref4) {
              var id = _ref4.id;
              return parseInt(id, 10) === parseInt(pokemonId, 10);
            });
            return _context2.abrupt("return", pokemon[0] || null);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getPokemonById(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var getPokemonByName = exports.getPokemonByName = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(pokemonNameSearch) {
    var pokemonName, pokemon;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            pokemonName = pokemonNameSearch.toLowerCase().trim();
            pokemon = _pokemons2.default.filter(function (_ref6) {
              var name = _ref6.name;
              return name.toLowerCase() === pokemonName;
            });

            if (!pokemon) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", pokemon[0]);

          case 4:
            return _context3.abrupt("return", pokemon[0] || null);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getPokemonByName(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var getPokemonByEvolutions = exports.getPokemonByEvolutions = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(evolutions) {
    var pokemonNames, searchedPokemons;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (evolutions) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", null);

          case 2:
            pokemonNames = evolutions.map(function (evolution) {
              return evolution.name.toLowerCase().trim();
            });
            searchedPokemons = _pokemons2.default.filter(function (_ref8) {
              var name = _ref8.name;
              return pokemonNames.indexOf(name.toLowerCase()) !== -1;
            });
            return _context4.abrupt("return", searchedPokemons || null);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getPokemonByEvolutions(_x4) {
    return _ref7.apply(this, arguments);
  };
}();

var _pokemons = require("../pokemons/pokemons.json");

var _pokemons2 = _interopRequireDefault(_pokemons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getPokemonsByType(pokemonTypeSearch) {
  var pokemonType = pokemonTypeSearch.toLowerCase().trim();

  var searchedPokemons = _pokemons2.default.filter(function (_ref2) {
    var types = _ref2.types;
    return types.map(function (type) {
      return type.toLowerCase();
    }).indexOf(pokemonType) > -1;
  });

  return searchedPokemons || null;
}