import { gql } from 'apollo-server-express';
const learnerSchema = gql`
    type Learner implements User {
        id: ID!
        firstName: String!
        middleName: String
        lastName: String!
        userId: String!
        email: String!
        password: String!
        phoneNo: String
        profilePicture: String
        type: LearnerType!
        courses: [Course]
        joined: String!
    }
    enum LearnerType {
        BASIC
        STUDENT
        TEACHER
        PROFESSIONAL
    }
`;
export { learnerSchema as default };
