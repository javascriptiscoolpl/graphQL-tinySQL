var graphql = require('graphql');

var dataJSON = require('../data.json');
var dataTypes = require('../data.types');

module.exports = {
  type: new graphql.GraphQLList(dataTypes),
  resolve: function () {
    return dataJSON;
  }
}
