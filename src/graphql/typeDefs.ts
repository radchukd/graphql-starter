import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

const queryTypeDefs: DocumentNode = gql`
  type Query {
    HelloWorld: String!
  }
`;

const typeDefs: DocumentNode[] = [
  queryTypeDefs,
];

export default typeDefs;
