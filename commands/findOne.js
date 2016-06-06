var graphql = require('graphql');

var dataJSON = require('../data/data.json');
var dataTypes = require('../data/types.js');

module.exports = {
  type: dataTypes,
  args: {
    id: { type: graphql.GraphQLInt }
  },
  resolve: function (_,args) {
    return dataJSON[args.id];
  }
}
