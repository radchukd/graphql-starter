const resolvers = {
  Query: {
    HelloWorld: (parent, args, context, info) => 'Hello world!',
  },
};

export default resolvers;
