import { create } from "zustand";
import {Light, Dark} from "../styles/themes"
export const useThemeStore = create((set, get) => ({
    theme: "ligth",
    themeStyle: Light,
    setTheme: (theme) => set({ theme }),
    setThemeStyle: (themeStyle) => set({ themeStyle }),
}))
