import { StateCreator } from 'zustand';

export interface AuthenticationSlice {
  email: string;
  password: string;
  authToken: string | undefined;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setAuthToken: (authToken: string) => void;
}

export const createAuthenticationSlice: StateCreator<
  AuthenticationSlice,
  [],
  [],
  AuthenticationSlice
> = set => ({
  email: 'admin',
  password: 'test1234',
  // Temporarily setting this to have a default auth token
  authToken: '123456789',
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
  setAuthToken: (authToken: string) => set({ authToken }),
});
