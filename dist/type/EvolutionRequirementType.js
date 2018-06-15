'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLObjectType({
  name: 'PokemonEvolutionRequirement',
  description: 'Represents a Pokémon\'s requirement to evolve',
  fields: {
    amount: {
      type: _graphql.GraphQLInt,
      description: 'The amount of candy to evolve',
      resolve: function resolve(obj) {
        return obj.amount;
      }
    },
    name: {
      type: _graphql.GraphQLString,
      description: 'The name of the candy to evolve',
      resolve: function resolve(obj) {
        return obj.name;
      }
    }
  }
});