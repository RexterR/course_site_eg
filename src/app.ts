import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './api';

const app = express();
const path = '/graphql';
const server = new ApolloServer({ schema });

server.applyMiddleware({ app, path: path });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
