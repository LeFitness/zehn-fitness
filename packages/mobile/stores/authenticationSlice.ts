import { StateCreator } from 'zustand';

export interface AuthenticationSlice {
  email: string;
  authToken: string | undefined;
  setEmail: (email: string) => void;
  setAuthToken: (authToken: string) => void;
}

export const createAuthenticationSlice: StateCreator<
  AuthenticationSlice,
  [],
  [],
  AuthenticationSlice
> = set => ({
  email: 'admin@fitness.dev',
  // Temporarily setting this to have a default auth token
  authToken: '123456789',
  setEmail: (email: string) => set({ email }),
  setAuthToken: (authToken: string) => set({ authToken }),
});
