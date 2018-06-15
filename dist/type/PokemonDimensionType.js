'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLObjectType({
  name: 'PokemonDimension',
  description: 'Represents a Pokémon\'s dimensions',
  fields: {
    minimum: {
      type: _graphql.GraphQLString,
      description: 'The minimum value of this dimension',
      resolve: function resolve(obj) {
        return obj.minimum;
      }
    },
    maximum: {
      type: _graphql.GraphQLString,
      description: 'The maximum value of this dimension',
      resolve: function resolve(obj) {
        return obj.maximum;
      }
    }
  }
});