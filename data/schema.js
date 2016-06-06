var graphql = require('graphql');

var cFindAll = require('../commands/findAll.js');
var cFindOne = require('../commands/findOne.js');
var cSortBy = require('../commands/sortBy.js');
var cGroupBy = require('../commands/groupBy.js');

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

module.exports = new graphql.GraphQLSchema({ query: queryType });
