import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, type InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
  className?: string;
  value?:string;
  onChange?:(value:string) => void;
  autoFocus?:boolean
}

export const Input = memo((props: InputProps) => {
    const {
        value, className, onChange, type = 'text', autoFocus = false, placeholder, ...otherProps
    } = props;
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value);
    };
    return (
        <div className={classNames(cls.inputСontainer)}>
            <input
                className={classNames(cls.Input, {}, [className])}
                type={type}
                value={value}
                autoFocus={autoFocus}
                onChange={onChangeHandler}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    );
});
