import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: undefined,

      setAccessToken: (accessToken) => {
        set((state) => ({ ...state, accessToken: accessToken }));
      },

      clearTokens: () =>
        set((state) => ({
          accessToken: undefined,
        })),
    }),
    {
      name: "auth-storage",
    }
  )
);
