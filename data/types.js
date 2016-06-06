var graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
  name: 'dataTypes',
  fields: function () {
    return {
      id: { type: graphql.GraphQLInt },
      name: { type: graphql.GraphQLString },
      age: { type: graphql.GraphQLInt },
      job: { type: graphql.GraphQLString }
    }
  }
});
