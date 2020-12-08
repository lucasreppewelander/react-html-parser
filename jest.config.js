module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*"],
  coverageDirectory: "coverage",
  clearMocks: true,
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/test/enzyme.config.js"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
