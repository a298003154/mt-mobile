module.exports = {
  setupFiles: ['<rootDir>/test/jest.init.js'],
  moduleFileExtensions: ['js', 'vue', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/test/jest.transform.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,vue}',
    '!**/style/**',
    '!**/demo/**',
    '!**/locale/lang/**',
    '!**/sku/**'
  ],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './test/coverage'
};
