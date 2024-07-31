import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ThemeButton.CLEAR,
        children,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.ComponentName, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
