import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { Request, Response } from 'express';

import schema from '../graphql';

import { NODE_ENV } from './secrets';

type IntegrationContext = { req: Request; res: Response };
type ContextFn = (ctx: IntegrationContext) => Promise<Record<string, unknown>>;

const context: ContextFn = async ({ req }) => {
  return { req };
};

const apolloServer: ApolloServer = new ApolloServer({
  introspection: NODE_ENV === 'development',
  validationRules: [depthLimit(7)],
  schema,
  context,
});

export default apolloServer;
