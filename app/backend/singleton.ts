import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import prisma from './client';

// eslint-disable-next-line import/prefer-default-export
export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

jest.mock('./client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prismaMock);
});
