var graphql = require('graphql');

var dataJSON = require('../data/data.json');
var dataTypes = require('../data/types.js');

module.exports = {
  type: new graphql.GraphQLList(dataTypes),
  resolve: function () {
    return dataJSON;
  }
}
