module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "\\.test\\.ts$",
  moduleFileExtensions: ["ts", "js"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: ["src/**/*.ts"],
};
