import { gql } from 'apollo-server-express';
const querySchema = gql`
    type Query {
        #Admin Query
        admins: [Admin]
        admin(id: ID): Admin!
        #Learner Query
        learners: [Learner!]!
        Learner(id: ID): Learner!
        #Publisher Query
        publishers: [Publisher]
        publisher(id: ID): Publisher!
        #Course Query
        courses: [Course]
        course(id: ID): Course!
        #Topic Query
        topics: [Topic]
        topic(id: ID): Topic!
        #Content Query
        contents: [Content]
        content(id: ID): Content!
        #Current user Query
        me: UserType!
    }
`;
export { querySchema as default };
