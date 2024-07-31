import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitch } from 'shared/ui/ThemeSwitch';
import { LanguageSwitch } from 'shared/ui/LanguageSwitch/LanguageSwitch';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onTogle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button onClick={onTogle}>Toggle</Button>

            <div className={cls.switchers}>
                <ThemeSwitch />
                <LanguageSwitch className={cls.lng} />
            </div>
        </div>
    );
};
