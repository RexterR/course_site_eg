import { gql } from 'apollo-server-express';
const topicSchema = gql`
    type Topic {
        id: ID!
        name: String!
        author: [Publisher!]!
        contents: [Content!]
    }
`;
export { topicSchema as default };
