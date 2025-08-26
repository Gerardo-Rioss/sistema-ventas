import { create } from "zustand";
import {Light, Dark} from "../styles/themes"
export const useThemeStore = create((set, get) => ({
    theme: "ligth",
    themeStyle: Light,
    setTheme: () => {
        const {theme} = get();
        set({theme: theme === "ligth" ? "dark" : "ligth"})
        set({themeStyle: theme === "ligth" ? Dark : Light})
    }
}))
