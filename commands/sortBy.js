var graphql = require('graphql');

var dataJSON = require('../data.json');
var dataTypes = require('../data.types');

function dataSort(a, b, field, order) {
  if (order === 'ASC') {
    if (a[field] > b[field]) { return 1; }
    if (a[field] < b[field]) { return -1; }
  } else {
    if (a[field] > b[field]) { return -1; }
    if (a[field] < b[field]) { return 1; }
  }
  return 0;
}

module.exports = {
  type: new graphql.GraphQLList(dataTypes),
  args: {
    field: { type: graphql.GraphQLString },
    order: { type: graphql.GraphQLString }
  },
  resolve: function (_,args) {
    var rtn = dataJSON.slice();
    if (args.field !== undefined) {
      rtn.sort(function (a,b) {
        return dataSort(a, b, args.field, args.order || 'ASC');
      });
    }
    return rtn;
  }
}
