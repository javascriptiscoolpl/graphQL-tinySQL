var graphql = require('graphql');

var dataJSON = require('../data.json');
var dataTypes = require('../data.types');

module.exports = {
  type: dataTypes,
  args: {
    id: { type: graphql.GraphQLInt }
  },
  resolve: function (_,args) {
    return dataJSON[args.id];
  }
}
