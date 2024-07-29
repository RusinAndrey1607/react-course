import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitch.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitch, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {theme == Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
