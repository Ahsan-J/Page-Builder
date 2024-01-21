// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  preset: 'ts-jest',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  clearMocks: true, // Automatically clear mock calls and instances between every test
  automock: false, // All imported modules in your tests should be mocked automatically
  collectCoverage: true, // Indicates whether the coverage information should be collected while executing the test
  coverageDirectory: "coverage", // The directory where Jest should output its coverage files
  coveragePathIgnorePatterns: ["node_modules"], // An array of regexp pattern strings used to skip coverage collection
  rootDir: './',
  globals: {},
  verbose: true,
  notify: true, // Activates notifications for test results
  notifyMode: "failure-change", // An enum that specifies notification mode. Requires { notify: true }
  errorOnDeprecated: false, // Make calling deprecated APIs throw helpful error messages
  moduleDirectories: ['node_modules', '<rootDir>/', '<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>src/$1',
  },
  coverageReporters: ["html"],
  testMatch:[ // The glob patterns Jest uses to detect test files
    "<rootDir>src/**/*.spec.[jt]s?(x)",
    "<rootDir>spec/**/*.spec.[jt]s?(x)",
  ]
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)