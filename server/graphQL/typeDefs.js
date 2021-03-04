
const { gql } = require('apollo-server-express');


const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  type Mutation {
    addTest(name: String): Test
    updateTest(id: String, name: String): Test
    deleteTest(id: String): Test
  }
  type Test {
    description: String
    id: ID
  }
  type Query {
    readTest(id: String): Test
    readAllTests: [Test]
  }
`;

module.exports = {
  typeDefs,
};
