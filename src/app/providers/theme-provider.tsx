import type {ReactNode} from "react";
import {useThemeEffect} from "../../features/theme/lib/use-theme-effect.ts";

interface ThemeProviderProps {
    children?: ReactNode
}

export const ThemeProvider =({children}: ThemeProviderProps) => {
    useThemeEffect()
    return (
            <>
                {children}
            </>
        )


}