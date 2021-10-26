const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const { MONGO_URI } = require('./config');
const mongoose = require('mongoose');

const typeDefs = gql``;

const resolvers = {
  query: {
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(()=> {
  console.log("Mongo Connected");
  return server.listen({ port: 5000 });
})
  .then(res => {
    console.log(`Server running at ${res.url}`)
})

