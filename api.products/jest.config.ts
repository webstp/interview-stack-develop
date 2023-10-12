import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform all TS files
  },
  setupFilesAfterEnv: ['./tests/jest.setup.ts'],
};

export default config;
