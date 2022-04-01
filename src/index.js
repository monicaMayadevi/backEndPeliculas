const { ApolloServer } = require('apollo-server')

const resolvers = require( './resolvers' )
const typeDefs = require('./schema')

const SERVER_PORT = 4000

const server = new ApolloServer(
    {
        cors: true,
        context: () => ({}),
        dataSources: () => ({}),
        resolvers,
        typeDefs
    })

server.listen(SERVER_PORT).then(({ url }) =>
{
    console.log( `Servidor ejecutando en ${url}` )
})

//Para pruebas de integracion en E2E
module.exports = { server }
