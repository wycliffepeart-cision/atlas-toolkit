/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from '@jest/types';

export default {
  // rootDir: '.',
  verbose: true,
  // preset: "ts-jest",
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  //   },
  testEnvironment: 'jsdom',
  // transform: {
  //   '\\.ts$': ['rollup-jest', { configFile: path.resolve(__dirname, 'rollup.config.mjs') }],
  // },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: ['dist', 'src'],
  snapshotSerializers: ['jest-serializer-html'],
  // testMatch: ['tests/jest/**/*.test.ts'],
} as Config.InitialOptions;
