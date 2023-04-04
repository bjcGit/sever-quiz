const { ApolloServer } = require('apollo-server')
require('dotenv').config()
const typeDefs = require('./config/schema')
const resolvers = require('./config/resolvers');
const { dbMysql } = require('./db/configDB');



dbMysql()


const server = new ApolloServer({
    typeDefs,
    resolvers  
});

server.listen().then( ( {url} ) => {
    console.log(`Start URL, ${url}`)
})