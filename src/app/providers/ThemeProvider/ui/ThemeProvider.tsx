import React, { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../consts/localStorageTheme';
import { Theme, ThemeContext } from '../lib/ThemeContext';

type Props = {
  children: React.ReactNode;
};

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultContextProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    return (
        <ThemeContext.Provider value={defaultContextProps}>
            {children}
        </ThemeContext.Provider>
    );
};
