import { gql } from 'apollo-server-express';
const courseSchema = gql`
    type Course {
        id: ID!
        name: String!
        author: [Publisher!]!
        description: String!
        topics: [Topic!]!
        rating: Int!
        createdAt: String!
    }
`;
export { courseSchema as default };
