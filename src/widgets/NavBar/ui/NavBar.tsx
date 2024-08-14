import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const { t } = useTranslation();
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    onClick={onToggleModal}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                >
                    {t('Login')}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal} />
        </div>
    );
}
