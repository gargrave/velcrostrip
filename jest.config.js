module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  resetMocks: true,
  restoreMocks: true,
  resolver: 'jest-pnp-resolver',
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/?(*.)spec.{ts,tsx}'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
}
