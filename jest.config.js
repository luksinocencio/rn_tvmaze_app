module.exports = {
  preset: 'react-native',
  coverageDirectory: 'coverage',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest.setup.ts',
  ],
  modulePathIgnorePatterns: ['mocks'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
