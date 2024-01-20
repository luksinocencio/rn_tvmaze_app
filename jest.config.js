module.exports = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest.setup.ts',
  ],
  setupFilesAfterEnv: [
    // '@testing-library/jest-native/extend-expect',
    './test/setup-env.ts',
  ],
  moduleDirectories: ['node_modules', './test'],
  modulePathIgnorePatterns: ['mocks'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
