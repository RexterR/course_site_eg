import { gql } from 'apollo-server-express';
const reactionSchema = gql`
    type Reaction {
        id: ID!
        like: Boolean
        dislike: Boolean
        actionTaker: Learner
    }
`;
export { reactionSchema as default };
