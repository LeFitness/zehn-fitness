import { StateCreator } from 'zustand';

export interface AuthenticationSlice {
  email: string | undefined;
  authToken: string | undefined;
  setEmail: (email: string) => void;
  setAuthToken: (authToken: string) => void;
  resetAuth: () => void;
}

export const createAuthenticationSlice: StateCreator<
  AuthenticationSlice,
  [],
  [],
  AuthenticationSlice
> = set => ({
  email: 'admin@fitness.dev',
  authToken: undefined,
  setEmail: (email: string) => set({ email }),
  setAuthToken: (authToken: string) => set({ authToken }),
  resetAuth: () => set({ email: undefined, authToken: undefined }),
});
