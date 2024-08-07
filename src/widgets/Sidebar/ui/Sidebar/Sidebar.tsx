import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitch } from 'shared/ui/ThemeSwitch';
import { LanguageSwitch } from 'shared/ui/LanguageSwitch/LanguageSwitch';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onTogle = async () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                theme={ThemeButton.OUTLINE}
                data-testid="sidebar-toggle"
                onClick={onTogle}
            >
                {t('Toggle')}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitch />
                <LanguageSwitch className={cls.lng} />
            </div>
        </div>
    );
};
