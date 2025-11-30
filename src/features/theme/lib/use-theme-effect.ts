import { useEffect } from "react";
import {useThemeValue} from "../../../app/hooks/use-theme.ts"


export const useThemeEffect = () => {
    const theme = useThemeValue();

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

    }, [theme]);
};