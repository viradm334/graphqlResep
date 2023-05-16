const { ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const MONGODB = "mongodb+srv://viradamayanti56:crudgraphql@cluster0.hkfauhe.mongodb.net/?retryWrites=true&w=majority";

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB connected successfully");
        return server.listen({port : 3000})
    })
    .then((res) => {
        console.log('Server running at ${res.url}');
    });