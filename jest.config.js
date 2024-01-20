module.exports = {
  preset: 'react-native',
  coverageDirectory: 'coverage',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  modulePathIgnorePatterns: ['mocks'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
