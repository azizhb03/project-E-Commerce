import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStore = create(
  persist(
    (set) => ({
      email: "",
      id: "",
      setEmail: (value) => set((state) => ({ email: value })),
      setId: (value) => set((state) => ({ id: value })),
    }),
    {
      name: "user-states", // name of the item in the storage (must be unique)
    }
  )
);

export default authStore;
