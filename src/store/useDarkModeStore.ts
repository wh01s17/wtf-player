import { create } from 'zustand'

type DarkModeProps = {
    dark: boolean
    setDarkMode: (mode: boolean) => void
}

export const useDarkModeStore = create<DarkModeProps>((set) => ({
    dark: true,

    setDarkMode: (mode) => set({ dark: mode })
}))