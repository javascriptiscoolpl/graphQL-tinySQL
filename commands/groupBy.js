var graphql = require('graphql');

var dataJSON = require('../data/data.json');
var dataTypes = require('../data/types.js');

module.exports = {
  type: new graphql.GraphQLList(dataTypes),
  args: {
    name: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
    job: { type: graphql.GraphQLString }
  },
  resolve: function (_,args) {
    var rtn = [];
    if (args.name !== undefined) {
      for (var i=0; i<dataJSON.length; i++) {
        if (dataJSON[i].name === args.name) { rtn.push(dataJSON[i]); }
      }
    }
    else if (args.age !== undefined) {
      for (var i=0; i<dataJSON.length; i++) {
        if (dataJSON[i].age === args.age) { rtn.push(dataJSON[i]); }
      }
    }
    else if (args.job !== undefined) {
      for (var i=0; i<dataJSON.length; i++) {
        if (dataJSON[i].job === args.job) { rtn.push(dataJSON[i]); }
      }
    }
    return rtn;
  }
}
