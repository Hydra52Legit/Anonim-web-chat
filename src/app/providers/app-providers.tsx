import {AuthProvider} from './auth-provider';
import {ThemeProvider} from './theme-provider';
import type {ReactNode} from "react";

export const AppProviders=({ children }: {children: ReactNode}) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ThemeProvider>
    )
}