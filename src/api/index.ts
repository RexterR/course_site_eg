import { makeExecutableSchema } from 'graphql-tools';
import adminSchema from './schemas/Admin';
import userSchema from './schemas/User';
import courseSchema from './schemas/Course';
import publisherSchema from './schemas/Publisher';
import learnerSchema from './schemas/Learner';
import topicSchema from './schemas/Topic';
import contentSchema from './schemas/Content';
import reactionSchema from './schemas/Reaction';
import querySchema from './schemas/Query';
import mutationSchema from './schemas/Mutation';

const typeDefs = [
    adminSchema,
    userSchema,
    publisherSchema,
    learnerSchema,
    courseSchema,
    topicSchema,
    contentSchema,
    reactionSchema,
    querySchema,
    mutationSchema
];
const schema = makeExecutableSchema({
    typeDefs
});
export { schema as default };
