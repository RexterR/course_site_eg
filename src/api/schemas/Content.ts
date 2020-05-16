import { gql } from 'apollo-server-express';
const contentSchema = gql`
    type Content {
        id: ID!
        heading: String!
        author: [Publisher!]!
        video: String
        contentText: String!
        reaction: [Reaction]
    }
`;
export { contentSchema as default };
