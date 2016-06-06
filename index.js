var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var Schema = require('./data/schema.js');

var SERVER_HOST = "127.0.0.1";
var SERVER_PORT = "3000";

var SERVER_MSG  = "";
    SERVER_MSG += "GraphQL server started at: http://";
    SERVER_MSG += SERVER_HOST;
    SERVER_MSG += ":";
    SERVER_MSG += SERVER_PORT;
    SERVER_MSG += "/";

var server = express();

server.use('/', graphqlHTTP({
    schema: Schema,
    graphiql: true
  }));

server.listen(SERVER_PORT, SERVER_HOST, function () {
    console.log(SERVER_MSG);
  });
