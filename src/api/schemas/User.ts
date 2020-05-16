import { gql } from 'apollo-server-express';
const userSchema = gql`
    interface User {
        id: ID!
        firstName: String!
        middleName: String
        lastName: String!
        userId: String!
        email: String!
        password: String!
    }
    union UserType = Learner | Admin | Publisher
`;
export { userSchema as default };
