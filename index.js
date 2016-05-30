var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var cFindAll = require('./commands/findAll.js');
var cFindOne = require('./commands/findOne.js');
var cSortBy = require('./commands/sortBy.js');
var cGroupBy = require('./commands/groupBy.js');

var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      findAll: cFindAll,
      findOne: cFindOne,
      groupBy: cGroupBy,
      sortBy: cSortBy
    }
  }
});

var Schema = new graphql.GraphQLSchema({ query: queryType });

express()
  .use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }))
  .listen(3000);

console.log('GraphQL server running on http://localhost:3000/graphql');
