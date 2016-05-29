var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var dataJSON = require('./data.json');
var dataTypes = require('./data.types');

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

var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      findAll: {
        type: new graphql.GraphQLList(dataTypes),
        resolve: function () { return dataJSON; }
      },
      findOne: {
        type: dataTypes,
        args: {
          id: { type: graphql.GraphQLInt }
        },
        resolve: function (_,args) {
          return dataJSON[args.id];
        }
      },
      groupBy: {
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
      },
      sortBy: {
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
    }
  }
});

var Schema = new graphql.GraphQLSchema({ query: queryType });

express()
  .use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }))
  .listen(3000);

console.log('GraphQL server running on http://localhost:3000/graphql');
