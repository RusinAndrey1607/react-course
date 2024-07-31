import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LanguageSwitch.module.scss';

interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch = ({ className }: LanguageSwitchProps) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={changeLanguage}
            className={classNames(cls.LanguageSwitch, {}, [className])}
        >
            {t('Translate')}
        </Button>
    );
};
