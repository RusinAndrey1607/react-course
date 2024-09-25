import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE='outline',
  BACKGROUND_INVERTED = 'backgroundInverted',
  BACKGROUND = 'background'
}
export enum ButtonSize{
    M='size_m',
    L='size_l',
    XL='size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?:boolean,
  size?:ButtonSize,
  disabled?:boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        disabled = false,
        size = ButtonSize.M,
        square = false,
        ...otherProps
    } = props;
    const mods:Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls[size]]: true,
        [cls[theme]]: true,
    };
    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
