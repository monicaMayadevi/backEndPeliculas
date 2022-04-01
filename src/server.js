const { ApolloServer } = require('apollo-server')

const resolvers = require( './resolvers' )
const typeDefs = require('./schema')



const server = new ApolloServer(
    {
        cors: true,
        context: () => ({}),
        dataSources: () => ({}),
        resolvers,
        typeDefs
    })



//Para pruebas de integracion en E2E
module.exports = { server }
