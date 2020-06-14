module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './test/coverage',
  transform: { '^.+\\.ts$': 'ts-jest' },
  testMatch: ['**/test/**/*.test.ts'],
};
