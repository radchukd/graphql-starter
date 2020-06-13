import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';

import schema from '../src/graphql';

it('gets "Hello World"', async () => {
  const server = new ApolloServer({
    schema,
    context: () => ({}),
  });

  const { query } = createTestClient(server);

  const res = await query({ query: 'query{HelloWorld}' });
  expect(res.errors).toBeUndefined();
  expect(res.data).not.toBeUndefined();
  expect(res.data?.HelloWorld).not.toBeUndefined();
  expect(res.data?.HelloWorld).toEqual('Hello world!');
});
