const resolvers = {
  Query: {
    HelloWorld: (
      _parent: unknown,
      _args: unknown,
      _context: unknown,
      _info: unknown,
    ): string => 'Hello world!',
  },
};

export default resolvers;
