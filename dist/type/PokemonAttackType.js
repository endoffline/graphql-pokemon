'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var AttackType = new _graphql.GraphQLObjectType({
  name: 'Attack',
  description: 'Represents a Pokémon\'s attack types',
  fields: {
    name: {
      type: _graphql.GraphQLString,
      description: 'The name of this Pokémon attack',
      resolve: function resolve(obj) {
        return obj.name;
      }
    },
    type: {
      type: _graphql.GraphQLString,
      description: 'The type of this Pokémon attack',
      resolve: function resolve(obj) {
        return obj.type;
      }
    },
    damage: {
      type: _graphql.GraphQLInt,
      description: 'The damage of this Pokémon attack',
      resolve: function resolve(obj) {
        return obj.damage;
      }
    }
  }
});

exports.default = new _graphql.GraphQLObjectType({
  name: 'PokemonAttack',
  description: 'Represents a Pokémon\'s attack types',
  fields: function fields() {
    return {
      fast: {
        type: new _graphql.GraphQLList(AttackType),
        description: 'The fast attacks of this Pokémon',
        resolve: function resolve(obj) {
          return obj.fast;
        }
      },
      special: {
        type: new _graphql.GraphQLList(AttackType),
        description: 'The special attacks of this Pokémon',
        resolve: function resolve(obj) {
          return obj.special;
        }
      }
    };
  }
});