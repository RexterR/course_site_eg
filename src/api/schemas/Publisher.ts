import { gql } from 'apollo-server-express';
const publisherSchema = gql`
    type Publisher implements User {
        id: ID!
        firstName: String!
        middleName: String
        lastName: String!
        userId: String!
        email: String!
        password: String!
        phoneNo: String!
        courses: [Course]
        topic: [Topic]
        contents: [Content]
        joined: String!
    }
`;
export { publisherSchema as default };
