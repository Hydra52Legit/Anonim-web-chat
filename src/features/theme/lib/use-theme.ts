// features/theme/lib/use-theme.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeStore {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export const useTheme = create<ThemeStore>()(
    persist(
        (set) => ({
            theme: 'light',
            toggleTheme: () => set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light'
            })),
            setTheme: (theme: Theme) => set({theme}),
        }),
        {
            name: 'theme-storage',
        }
    )
);

export const useThemeValue = () => useTheme(state => state.theme);
export const useThemeActions = () => useTheme(state => ({
    toggleTheme: state.toggleTheme,
    setTheme: state.setTheme
}));
