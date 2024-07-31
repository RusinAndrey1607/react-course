import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

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
            className={classNames('', {}, [className])}
        >
            {t('Translate')}
        </Button>
    );
};
