import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../consts/localStorageTheme';

interface IUseTheme {
  toggleTheme: () => void;
  theme: Theme;
}
export function useTheme(): IUseTheme {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme, toggleTheme,
    };
}
