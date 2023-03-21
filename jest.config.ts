/** @type {import('ts-jest').JestConfigWithTsJest} */
import * as path from 'path';
import type { Config } from '@jest/types';

export default {
  rootDir: '.',
  verbose: true,
  // preset: "ts-jest",
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  //   },
  testEnvironment: 'jsdom',
  transform: {
    '\\.ts$': ['rollup-jest', { configFile: path.resolve(__dirname, "rollup.config.mjs") }],
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testPathIgnorePatterns: ['dist'],
  snapshotSerializers: ['jest-serializer-html'],
  // testMatch: ['tests/jest/**/*.test.ts'],
} as Config.InitialOptions;
