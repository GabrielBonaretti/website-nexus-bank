// Importing create and persist functions from Zustand library
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Creating Zustand store for managing authentication state with persistent storage
export const useAuthStore = create(
  // Using the persist middleware to store state in localStorage
  persist(
    // State and updater functions
    (set) => ({
      accessToken: undefined,

      // Function to set the access token
      setAccessToken: (accessToken) => {
        set((state) => ({ ...state, accessToken: accessToken }));
      },

      // Function to clear tokens
      clearTokens: () =>
        set((state) => ({
          accessToken: undefined,
        })),
    }),
    // Configuring persistence with a name for the storage
    {
      name: "auth-storage",
    }
  )
);
