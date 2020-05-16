import { gql } from 'apollo-server-express';

const adminSchema = gql`
    type Admin implements User {
        id: ID!
        firstName: String!
        middleName: String
        lastName: String!
        userId: String!
        email: String!
        password: String!
        phoneNo: String!
    }
`;
export { adminSchema as default };
