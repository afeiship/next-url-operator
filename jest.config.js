// https://jestjs.io/docs/en/configuration
module.exports = {
  verbose: true,
  // use jsdom
  testEnvironment: 'jsdom',
  testRegex: [/\.spec.js/],
  //preset: "jest-puppeteer",
  automock: false,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['./jest-setup.js']
};
