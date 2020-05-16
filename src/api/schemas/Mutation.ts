import { gql } from 'apollo-server-express';
const mutationSchema = gql`
    type Mutation {
        #Publisher Operation
        createPublisher(data: CreatePublisherInput!): AuthPayLoad!
        updatePublisher(data: UpdatePublisherInput!): Publisher!
        deletePublisher(id: ID): Publisher!
        #Learner Operation
        createLearner(data: CreateLearnerInput!): AuthPayLoad!
        updateLearner(data: updateLearnerInput!): Learner!
        deleteLearner(id: ID): Learner!
        #Course Operation
        createCourse(data: CreateCourseInput!): Course!
        updateCourse(data: UpdateCourseinput!): Course!
        deleteCourse(id: ID): Course!
        #Topic Operation
        createTopic(data: CreateTopicInput!): Topic!
        updateTopic(data: UpdateTopicInput!): Topic!
        deleteTopic(id: ID): Topic!
        #Content Operation
        createContent(data: CreateContentInput!): Content!
        updateContent(data: UpdateContentInput!): Content!
        deleteContent(id: ID): Content!
    }
    input CreatePublisherInput {
        id: ID!
        firstName: String!
        middleName: String
        lastName: String!
        userId: String!
        email: String!
        password: String!
        joined: String!
    }
    input UpdatePublisherInput {
        id: ID
        firstName: String
        middleName: String
        lastName: String
        email: String
        password: String
        phoneNo: String
    }
    input CreateLearnerInput {
        id: ID!
        firstName: String!
        middleName: String
        lastName: String!
        userId: String!
        email: String!
        password: String!
        joined: String!
    }
    input updateLearnerInput {
        firstName: String
        middleName: String
        lastName: String
        email: String
        password: String
        phoneNo: String
    }
    input CreateCourseInput {
        id: ID!
        name: String!
        author: ID!
        description: String!
    }
    input UpdateCourseinput {
        name: String
        author: ID
        description: String
    }
    input CreateTopicInput {
        id: ID!
        name: String!
        author: ID!
    }
    input UpdateTopicInput {
        name: String
        author: ID
    }
    input CreateContentInput {
        id: ID!
        heading: String!
        author: ID!
        video: String
        contentText: String!
    }
    input UpdateContentInput {
        heading: String
        author: ID
        video: String
        contentText: String
    }
    type AuthPayLoad {
        # Usertype is Admin|Publisher|Learner
        user: UserType!
        token: String!
    }
`;
export { mutationSchema as default };
